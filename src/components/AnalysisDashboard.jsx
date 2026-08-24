import { BarChart3, CheckCircle2, Hash, Lightbulb, MessageCircleQuestion, MousePointerClick, Smile, Type } from 'lucide-react'

const metrics = [
  ['characters', 'Characters', Type], ['words', 'Words', BarChart3], ['hashtags', 'Hashtags', Hash], ['emojis', 'Emojis', Smile], ['questions', 'Questions', MessageCircleQuestion], ['ctas', 'CTAs', MousePointerClick],
]

function AnalysisDashboard({ analysis }) {
  const working = analysis.suggestions.filter((suggestion) => suggestion.type === 'positive')
  const improvements = analysis.suggestions.filter((suggestion) => suggestion.type !== 'positive')
  return <section className="dashboard"><div className="dashboard-title"><div><p className="section-kicker">Your content report</p><h2>Engagement Snapshot</h2><p className="dashboard-subtitle">Based on engagement signals and content best practices.</p></div><div className="score"><div className="score-ring" style={{ '--score': `${analysis.score * 3.6}deg` }}><div><strong>{analysis.score}</strong><small>/100</small></div></div><span>CONTENT SCORE</span></div></div><div className="metrics-grid">{metrics.map(([key, label, Icon]) => <div className="metric-card" key={key}><div className="metric-icon"><Icon size={17} /></div><strong>{analysis.metrics[key]}</strong><span>{label}</span></div>)}</div><div className="suggestions"><div className="suggestion-heading"><span className="recommendation-icon"><CheckCircle2 size={17} /></span><div><h3>What's working</h3><p>Positive signals in your content.</p></div></div>{working.length ? working.map((suggestion) => <div className="suggestion positive" key={suggestion.text}><span className="suggestion-dot" /><p>{suggestion.text}</p></div>) : <p className="empty-suggestion">Your content report will highlight strengths here.</p>}<div className="suggestion-heading improve-heading"><span className="recommendation-icon improve-icon"><Lightbulb size={17} /></span><div><h3>Ways to improve</h3><p>Small changes, clearer engagement.</p></div></div>{improvements.map((suggestion) => <div className="suggestion improvement" key={suggestion.text}><span className="suggestion-dot" /><p>{suggestion.text}</p></div>)}</div></section>
}

export default AnalysisDashboard