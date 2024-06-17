import { useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import DashboardHeader from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

interface NotificationDataInterface {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

export default function DashboardNotifications() {
  const NotificationData: NotificationDataInterface[] = [
    {
      id: '',
      timestamp: '2mins ago',
      title: 'New Partner Admin',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.",
    },
    {
      id: '',
      timestamp: '2mins ago',
      title: 'New Video Session',
      content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.`,
    },
    {
      id: '',
      timestamp: '2days ago',
      title: 'Pending Invoice Reminder',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.",
    },
    {
      id: '',
      timestamp: '5days ago',
      title: 'New Feature added',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.",
    },
    {
      id: '',
      timestamp: '2weeks ago',
      title: 'Remider: Add MFA to Account',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
    {
      id: '',
      timestamp: '1month ago',
      title: 'New UI/UX Design',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    },
    {
      id: '',
      timestamp: '2months ago',
      title: 'Pending Invoice Reminder',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.",
    },
    {
      id: '',
      timestamp: '2months ago',
      title: 'New Video Session',
      content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n\nAliquam pulvinar, justo eget aliquam interdum, ex sapien iaculis quam, imperdiet tristique libero urna non magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus congue semper magna, ac luctus quam mollis in. Fusce nec nisi ipsum. Fusce tristique leo a ligula rutrum fermentum. Sed facilisis justo dolor, nec ornare felis auctor vel. Proin vehicula quam eget imperdiet viverra. Quisque pulvinar odio vitae varius accumsan. Duis sed diam risus.`,
    },
  ];

  const [modalData, setModalData] = useState({
    id: '',
    title: '',
    content: '',
    timestamp: '',
  });

  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Notifications'} setOpenDrawer={setOpenDrawer} />
      <section className="row d-flex align-items-start">
        {/* <div className="col-sm-12 col-md-6 text-end">
          <button type="button" className="btn btn-link">
            Mark All as read
          </button>
        </div> */}
      </section>

      <section className="row my-4 mx-4">
        {NotificationData.map((item, index) => (
          <NotificationItem key={index} {...item} setModalData={setModalData} />
        ))}
      </section>

      {/* Notification Modal */}

      <div
        className="modal fade"
        id="notificationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {modalData.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ whiteSpace: 'pre-line' }}>
              {modalData.content}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NotificationItem = (props: any) => {
  const { timestamp, title, id, content, setModalData } = props;

  return (
    <aside className="row">
      <section
        className="col-md-5 row align-items-center my-3 p-3"
        style={{ borderRadius: '5px', background: 'var(--bs-gray-400)' }}
      >
        <div className="col-md-9">
          <h6>{title}</h6>
          <span>{timestamp}</span>
        </div>
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#notificationModal"
            onClick={() => setModalData({ id, title, content, timestamp })}
          >
            Read
          </button>
        </div>
      </section>
    </aside>
  );
};
