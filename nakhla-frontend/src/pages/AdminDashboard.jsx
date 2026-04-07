import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function AdminDashboard() {
  const { brands, verificationRequests } = useAppContext()

  const approvedBrands = brands.length
  const pendingBrands = verificationRequests.filter(
    (r) => r.status === 'Pending'
  ).length

  return (
    <div className="page dashboard-layout">
      <aside className="sidebar">
        <h3>Admin</h3>
        <Link to="/admin/requests">Verification Requests</Link>
        <Link to="/admin/categories">Manage Categories</Link>
      </aside>

      <section className="dashboard-content">
        <h2>Admin Dashboard</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Total Users</h3>
            <p>120</p>
          </div>

          <div className="stat-box">
            <h3>Pending Brands</h3>
            <p>{pendingBrands}</p>
          </div>

          <div className="stat-box">
            <h3>Approved Brands</h3>
            <p>{approvedBrands}</p>
          </div>
        </div>
      </section>
    </div>
  )
}