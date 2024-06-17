import { Link, useOutletContext } from '@remix-run/react';
import DashboardHeader from '~/components/pages/dashboard/DashboardHeader/DashboardHeader';

enum PaymentStatusEnum {
  COMPLETED = 'completed',
  PENDING = 'pending',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

const paymentHistory = [
  {
    invoiceId: '1234',
    date: 'Wed Aug 07 2024',
    item: 'Pro package',
    amount: '400',
    status: 'completed',
  },
  {
    invoiceId: '5678',
    date: 'Wed Aug 07 2024',
    item: 'Pro package',
    amount: '300',
    status: 'pending',
  },
  {
    invoiceId: '9012',
    date: 'Wed Aug 07 2024',
    item: 'Pro package',
    amount: '200',
    status: 'failed',
  },
  {
    invoiceId: '3456',
    date: 'Wed Aug 07 2024',
    item: 'Pro package',
    amount: '100',
    status: 'cancelled',
  },
];

export default function DashboardBillings() {
  const {
    setOpenDrawer,
  }: {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  } = useOutletContext();

  return (
    <>
      <DashboardHeader title={'Subscription'} setOpenDrawer={setOpenDrawer} />

      <section className="mt-3 mb-5">
        <section className="d-flex align-items-center g-3">
          <p>
            You are currently subscribed to <strong>Starter</strong> package
          </p>

          <p className="ms-auto">
            <button className="btn btn-primary">Upgrade Subscription</button>
          </p>
        </section>

        <hr className="my-5" />

        <h2>Payment History</h2>

        <p className="my-5 text-secondary">
          You do not have any previous payment records.
        </p>

        <section className="row my-4">
          <table className="table table-hover table-striped">
            <caption>List of Previous Payments</caption>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Item</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="table-group-divider">
              {paymentHistory.map((item, index) => {
                return (
                  <tr key={index} className="overflow-hidden">
                    <td>{item.invoiceId}</td>
                    <td>{item.date}</td>
                    <td>{item.item}</td>
                    <td>${item.amount}</td>
                    <td>{PaymentStatusButton(item.status)}</td>
                    <td>
                      <Link to="#" className="">
                        <i className="fa-solid fa-download"></i>
                        <span className="ms-2">Download</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

const PaymentStatusButton = (status: string) => {
  switch (status) {
    case PaymentStatusEnum.COMPLETED:
      return <span className="text-capitalize badge bg-success">{status}</span>;
      break;

    case PaymentStatusEnum.CANCELLED:
      return <span className="text-capitalize badge bg-info">{status}</span>;
      break;

    case PaymentStatusEnum.FAILED:
      return <span className="text-capitalize badge bg-danger">{status}</span>;
      break;

    case PaymentStatusEnum.PENDING:
      return <span className="text-capitalize badge bg-warning">{status}</span>;
      break;
  }
};
