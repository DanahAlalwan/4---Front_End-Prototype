import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAppContext()

  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'customer',
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!form.email) newErrors.email = 'Email is required'
    if (!form.password) newErrors.password = 'Password is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      login(form.role)

      if (form.role === 'admin') {
        navigate('/admin')
      } else if (form.role === 'brand-owner') {
        navigate('/brand-owner')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className="page form-page">
      <div className="form-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label>Login As</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="customer">Customer</option>
            <option value="brand-owner">Brand Owner</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <button className="secondary-btn">Continue with Google</button>
        <button className="secondary-btn">Continue with Apple</button>
      </div>
    </div>
  )
}