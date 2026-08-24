import { useState } from 'react'
import { BrainCircuit, Clock3, FileText, Gauge, LockKeyhole, MessageCircle, RotateCcw, Sparkles, Upload } from 'lucide-react'
import './App.css'
import FileUpload from './components/FileUpload'
import LoadingState from './components/LoadingState'
import ExtractedText from './components/ExtractedText'
import AnalysisDashboard from './components/AnalysisDashboard'
import { extractPdfText } from './utils/extractPdf'
import { extractImageText } from './utils/extractImage'
import { analyzeContent } from './utils/analyzeContent'

function App() {
  const [stage, setStage] = useState('upload')
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [analysis, setAnalysis] = useState(null)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  async function handleFile(fileToProcess) {
    if (fileToProcess.type === 'invalid') {
      setError('Please choose a PDF, PNG, JPG, or JPEG file.')
      return
    }
    setFile(fileToProcess)
    setError('')
    setStatus(fileToProcess.type === 'application/pdf' ? 'Reading every page of your PDF...' : 'Scanning your image for text...')
    setStage('loading')

    try {
      const extracted = fileToProcess.type === 'application/pdf'
        ? await extractPdfText(fileToProcess)
        : await extractImageText(fileToProcess, setStatus)

      if (!extracted.trim()) {
        throw new Error(fileToProcess.type === 'application/pdf'
          ? 'This PDF does not contain selectable text. It may be a scanned document; try an image export or paste the text below.'
          : 'We could not find readable English text in this image. Try a clearer, higher-resolution image.')
      }

      setText(extracted)
      setAnalysis(analyzeContent(extracted))
      setStage('editor')
    } catch (processingError) {
      setError(processingError.message || 'Something went wrong while processing that file.')
      setStage('upload')
    }
  }

  function handleAnalyze() {
    setAnalysis(analyzeContent(text))
    setStage('results')
  }

  function reset() {
    setStage('upload')
    setFile(null)
    setText('')
    setAnalysis(null)
    setError('')
    setStatus('')
  }

  return (
    <main className="app-shell">
      <header className="site-header">
        <div className="brand-mark"><Sparkles size={18} strokeWidth={2.5} /></div>
        <div>
          <h1>Social Media Content Analyzer</h1>
          <p className="brand-subtitle">Extract insights. Improve engagement.</p>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#analyzer">Analyzer</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        {stage !== 'upload' && stage !== 'loading' && <button className="ghost-button" type="button" onClick={reset}><RotateCcw size={16} /> Try another file</button>}
      </header>

      {stage === 'upload' && <>
        <section className="hero-layout" id="analyzer">
          <div className="intro"><div><p className="section-kicker">Make every post count</p><h2>Turn your draft into <em>better engagement.</em></h2></div><p className="intro-copy">Upload a PDF or image to extract and analyze your social media content.</p></div>
          <FileUpload onFileSelected={handleFile} error={error} />
        </section>
        <section className="benefits" aria-labelledby="benefits-title"><div className="section-title"><p className="section-kicker">Built for better posts</p><h2 id="benefits-title">Why analyze your content?</h2></div><div className="benefit-grid"><div className="benefit-card"><span><Gauge size={17} /></span><h3>Understand Engagement</h3><p>See the signals behind a stronger post.</p></div><div className="benefit-card"><span><BrainCircuit size={17} /></span><h3>Improve Performance</h3><p>Turn clear feedback into better copy.</p></div><div className="benefit-card"><span><MessageCircle size={17} /></span><h3>Connect Better</h3><p>Invite conversation with confidence.</p></div><div className="benefit-card"><span><Clock3 size={17} /></span><h3>Save Time</h3><p>Get useful direction in seconds.</p></div></div></section>
        <aside className="privacy-card"><span><LockKeyhole size={17} /></span><div><h3>Your data is private and secure</h3><p>We don't store your files or content. Everything is processed securely in your browser.</p></div></aside>
      </>}
      {stage === 'loading' && <LoadingState message={status} fileName={file?.name} />}
      {(stage === 'editor' || stage === 'results') && <>
        <div className="file-strip"><FileText size={18} /><span>{file?.name}</span><span className="file-type">{file?.type === 'application/pdf' ? 'PDF' : 'IMAGE'}</span></div>
        <ExtractedText text={text} onChange={setText} onAnalyze={handleAnalyze} />
        {stage === 'results' && <AnalysisDashboard analysis={analysis} />}
        {stage === 'results' && <button className="reset-link" type="button" onClick={reset}><Upload size={16} /> Analyze another file</button>}
      </>}
      <footer id="how-it-works"><span>Private by design</span><span>Files are processed in your browser and never uploaded.</span></footer>
    </main>
  )
}

export default App
