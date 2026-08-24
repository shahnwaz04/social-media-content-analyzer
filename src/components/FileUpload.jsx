import { useRef, useState } from 'react'
import { AlertCircle, FileImage, FileText, UploadCloud } from 'lucide-react'

const acceptedTypes = ['application/pdf', 'image/png', 'image/jpeg']

function FileUpload({ onFileSelected, error }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  function validateAndSelect(file) {
    if (!file) return
    if (!acceptedTypes.includes(file.type)) {
      onFileSelected({ type: 'invalid', name: file.name })
      return
    }
    onFileSelected(file)
  }

  function handleDrop(event) {
    event.preventDefault()
    setDragging(false)
    validateAndSelect(event.dataTransfer.files[0])
  }

  return <>
    <div className={`upload-card ${dragging ? 'is-dragging' : ''}`} onDragOver={(event) => { event.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={handleDrop}>
      <div className="upload-icon"><UploadCloud size={28} /></div>
      <h2>Drop your content here</h2>
      <p>Upload a PDF or image to extract and analyze your social media content.</p>
      <button className="primary-button" type="button" onClick={() => inputRef.current?.click()}>Choose file</button>
      <input ref={inputRef} type="file" accept=".pdf,.png,.jpg,.jpeg" hidden onChange={(event) => validateAndSelect(event.target.files[0])} />
      <div className="upload-types"><span><FileText size={15} /> PDF</span><span><FileImage size={15} /> PNG, JPG, JPEG</span><span>Max 10 MB</span></div>
    </div>
    {error && <p className="error-message" role="alert"><AlertCircle size={15} /> {error}</p>}
  </>
}

export default FileUpload