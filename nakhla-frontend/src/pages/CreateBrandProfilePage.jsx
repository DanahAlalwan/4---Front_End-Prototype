import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function CreateBrandProfilePage() {
  const { categories } = useAppContext()

  const [form, setForm] = useState({
    brandName: '',
    description: '',
    category: 'Fashion',
    logo: null,
    cover: null,
  })

  const [preview, setPreview] = useState({
    logo: '',
    cover: '',
  })

  const handleFileChange = (e, field) => {
    const file = e.target.files[0]

    setForm({
      ...form,
      [field]: file,
    })

    if (file) {
      setPreview({
        ...preview,
        [field]: URL.createObjectURL(file),
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.brandName || !form.description || !form.category) {
      alert('Please fill all required fields.')
      return
    }

    if (!form.logo || !form.cover) {
      alert('Please upload logo and cover image.')
      return
    }

    alert('Brand profile saved successfully!')
  }

  return (
    <div className="page">
      <div className="form-card">
        <h2>Create Brand Profile</h2>
        <p className="form-note">
          Add your brand information, upload images, and select a category.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Brand Name</label>
          <input
            type="text"
            placeholder="Enter brand name"
            value={form.brandName}
            onChange={(e) =>
              setForm({ ...form, brandName: e.target.value })
            }
          />

          <label>Description</label>
          <textarea
            placeholder="Describe your brand"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows="4"
          />

          <label>Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label>Brand Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'logo')}
          />

          {preview.logo && (
            <img src={preview.logo} alt="Logo preview" className="image-preview" />
          )}

          <label>Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'cover')}
          />

          {preview.cover && (
            <img
              src={preview.cover}
              alt="Cover preview"
              className="cover-preview"
            />
          )}

          <button className="btn" type="submit">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  )
}