import { useState } from 'react'

export default function CreateBrandProfilePage() {
  const [form, setForm] = useState({
    brandName: '',
    description: '',
    category: '',
    logo: '',
    cover: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Brand profile saved successfully!')
  }

  return (
    <div className="page form-page">
      <div className="form-card wide">
        <h2>Create Brand Profile</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Brand Name"
            value={form.brandName}
            onChange={(e) =>
              setForm({ ...form, brandName: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Logo URL"
            value={form.logo}
            onChange={(e) =>
              setForm({ ...form, logo: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Cover Image URL"
            value={form.cover}
            onChange={(e) =>
              setForm({ ...form, cover: e.target.value })
            }
          />

          <button className="btn" type="submit">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  )
}