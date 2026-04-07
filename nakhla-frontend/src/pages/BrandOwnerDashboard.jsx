import { Link } from 'react-router-dom'

export default function BrandOwnerDashboard() {
  return (
    <div className="page dashboard-layout">
      <aside className="sidebar">
        <h3>Brand Owner</h3>
        <Link to="/brand-owner/create-profile">Create Profile</Link>
        <Link to="/brand-owner/submit-verification">
          Submit Verification
        </Link>
      </aside>

      <section className="dashboard-content">
        <h2>Brand Owner Dashboard</h2>

        <div className="status-card">
          <p>
            <strong>Brand Status:</strong> Pending Approval
          </p>
          <p>
            You can create your profile, add products later, and submit
            documents for verification.
          </p>
        </div>
      </section>
    </div>
  )
}