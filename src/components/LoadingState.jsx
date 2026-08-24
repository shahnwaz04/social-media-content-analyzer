import { LoaderCircle } from 'lucide-react'

function LoadingState({ message, fileName }) {
  return <div className="loading-card"><LoaderCircle className="loader" size={30} /><p className="section-kicker">Processing content</p><h2>{message}</h2><p className="muted">{fileName}</p></div>
}

export default LoadingState