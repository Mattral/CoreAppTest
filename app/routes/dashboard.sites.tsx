import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node';
import { Link, useLoaderData, useOutletContext } from '@remix-run/react';
import defaultLogo from '~/assets/images/logo.png';
import { generateRandomString } from '~/utils/generateRandomString.utils';
import { createNginxConfig } from '~/services/nginx/createNginxConfig.server';
import { deleteNginxConfig } from '~/services/nginx/deleteNginxConfig.server';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import {
  createHostedZoneRecord,
  deleteHostedZoneRecord,
} from '~/services/aws/hostedZoneRecord.server';
import { AppConfig } from '../config';
import { getSession } from '../services/auth/session.server';
import { CreateNewSite } from '../services/api/createNewSite.server';
import { pageData } from '../constants/defaultPageData';
import { GetPartnerSiteList } from '../services/api/getPartnerSiteList.server';
import DashboardHeader from '../components/pages/dashboard/DashboardHeader/DashboardHeader';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  const response = await GetPartnerSiteList(session.data.user.authToken);

  if (response.status !== ApiResponseStatusEnum.SUCCESS) {
    return json({ whiteLabelledSites: [] });
  }

  return json({ whiteLabelledSites: response.whiteLabelledSites });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const companyName = formData.get('companyName') as string;
  const companyLogo = formData.get('companyLogo') as FormDataEntryValue;

  // Generate random sub-domain
  const siteCode = generateRandomString();
  const assignedSubDomain = `${siteCode}.${AppConfig.FRONTEND_DOMAIN_NAME}`;

  console.log({ siteCode, assignedSubDomain });

  // Create record on AWS Route 53
  const hostedZoneRecord = await createHostedZoneRecord(assignedSubDomain);
  console.log({ hostedZoneRecord: JSON.stringify(hostedZoneRecord, null, 2) });

  // Route53Error
  if (hostedZoneRecord.status !== ApiResponseStatusEnum.SUCCESS) {
    // exit;
    // Show error message in toast
    return null;
  }

  // Create Nginx Conf for sub-domain
  // const siteCode = generateRandomString();
  // const createAssignedDomain = await createNginxConfig(
  //   assignedSubDomain,
  //   siteCode
  // );
  // console.log({
  //   createAssignedDomain: JSON.stringify(createAssignedDomain, null, 2),
  // });

  // // OnNginxError: Roll back Route 53 updates
  // if (createAssignedDomain?.status === ApiResponseStatusEnum.FAILED) {
  //   // Delete nginx conf
  //   await deleteNginxConfig(assignedSubDomain);

  //   // Delete hosted zone record
  //   await deleteHostedZoneRecord(assignedSubDomain);

  //   // show error message in toast
  //   return null;
  // }

  const session = await getSession(request.headers.get('Cookie'));

  // Save data to DB
  const saveData = await CreateNewSite({
    companyName,
    companyLogo,
    assignedSubDomain,
    siteCode,
    defaultLandingPageData: JSON.stringify(pageData),
    authCode: session.data.user.authToken,
  });

  console.log({ saveData: JSON.stringify(saveData, null, 2) });

  // OnDBError: Rollback Ngninx & Route 53
  if (saveData.status !== ApiResponseStatusEnum.SUCCESS) {
    // Delete nginx conf
    // await deleteNginxConfig(assignedSubDomain);

    // Delete hosted zone record
    await deleteHostedZoneRecord(assignedSubDomain);

    // show error message in toast
    return null;
  }

  // Reload page
  return null;
}

export default function DashboardSites() {
  const data = useLoaderData<typeof loader>();

  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Sites'} setOpenDrawer={setOpenDrawer} />

      <section className="row d-flex align-items-start">
        <div className="col-sm-12 col-md-6">
          <p className="text-secondary">Manage all your sites in one place</p>
        </div>

        <div className="col-sm-12 col-md-6 text-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
          >
            Create New Site
          </button>
        </div>
      </section>

      <section className="row my-4 g-4">
        {data.whiteLabelledSites && data.whiteLabelledSites.length > 0 ? (
          data.whiteLabelledSites.map((site, index) => (
            <SiteCard key={index} {...site} />
          ))
        ) : (
          <p>You currently have no sites created! Start by creating one.</p>
        )}
      </section>

      <section
        className="modal fade"
        id="formModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabel">
                Create New Site
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form id="modalForm" method="POST" encType="multipart/form-data">
              <div className="modal-body">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-control mb-3"
                />

                <label htmlFor="companyLogo" className="form-label">
                  Company Logo
                </label>
                <input
                  type="file"
                  id="companyLogo"
                  name="companyLogo"
                  className="form-control"
                />
              </div>

              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  form="modalForm"
                  className="btn btn-primary"
                  // data-bs-dismiss="modal"
                  // onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const SiteCard = ({
  siteName,
  siteCode,
  siteLogo,
}: {
  siteName: string;
  siteCode: string;
  siteLogo: string;
}) => {
  const siteLink = `/dashboard/site/${siteCode}`;

  return (
    <aside className="col-sm-12 col-md-3">
      <div className="card overflow-hidden">
        <p
          className="bg-primary p-4 d-flex align-items-center justify-content-center overflow-hidden"
          style={{ height: '200px', width: '100%' }}
        >
          <img src={siteLogo || defaultLogo} className="img-fluid d-block" />
        </p>
        <div className="card-body">
          <Link to={siteLink} className="text-reset">
            <h5 className="card-title">{siteName}</h5>
          </Link>
        </div>
      </div>
    </aside>
  );
};
