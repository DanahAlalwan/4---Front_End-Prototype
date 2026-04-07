import { useState } from 'react'

export default function SubmitVerificationPage() {
  const [documentName, setDocumentName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted for verification. Status changed to Pending Approval.')
  }

  return (
    <div className="page form-page">
      <div className="form-card">
        <h2>Submit for Verification</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Document name or file reference"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          />

          <button type="submit" className="btn full-width">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}