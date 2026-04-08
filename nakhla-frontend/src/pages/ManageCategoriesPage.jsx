import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function ManageCategoriesPage() {
    const { categories, addCategory, deleteCategory } = useAppContext()
    const [newCategory, setNewCategory] = useState('')

    const handleAdd = () => {
        addCategory(newCategory)
        setNewCategory('')
    }

    return (
        <div className="page">
            <h2>Manage Categories</h2>

            <div className="category-manager">
                <input
                    type="text"
                    placeholder="New category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />

                <button className="btn" onClick={handleAdd}>
                    Add Category
                </button>
            </div>

            <ul className="category-list">
                {categories.map((category) => (
                    <li key={category}>
                        <span>{category}</span>

                        <button
                            className="btn btn-danger small"
                            onClick={() => deleteCategory(category)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}