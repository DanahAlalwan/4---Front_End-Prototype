import { useAppContext } from '../context/AppContext'

export default function VerificationRequestsPage() {
  const { verificationRequests, approveRequest, rejectRequest } =
    useAppContext()

  return (
    <div className="page">
      <h2>Verification Requests</h2>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {verificationRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.brandName}</td>
                <td>{request.owner}</td>
                <td>{request.status}</td>
                <td>
                  <button
                    className="btn small"
                    onClick={() => approveRequest(request.id)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger small"
                    onClick={() => rejectRequest(request.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}