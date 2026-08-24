import { ArrowRight, PencilLine } from 'lucide-react'

function ExtractedText({ text, onChange, onAnalyze }) {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  return <section className="editor-section"><div className="section-heading"><div><p className="section-kicker">Review & refine</p><h2>Extracted Content</h2><p className="section-subtitle">Review and edit the extracted text before analyzing.</p></div><span className="edit-label"><PencilLine size={15} /> Editable</span></div><textarea value={text} onChange={(event) => onChange(event.target.value)} aria-label="Extracted content" placeholder="Your extracted text will appear here..." /><div className="editor-actions"><div className="text-counts"><span>{text.length.toLocaleString()} <small>characters</small></span><span>{wordCount.toLocaleString()} <small>words</small></span></div><button className="primary-button" type="button" onClick={onAnalyze}>Re-analyze Content <ArrowRight size={16} /></button></div></section>
}

export default ExtractedText