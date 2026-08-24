const ctaPhrases = ['comment', 'share', 'follow', 'like', 'click', 'learn more', 'sign up', 'buy now', 'visit', 'tell us']

export function analyzeContent(content) {
  const normalized = content.trim()
  const words = normalized ? normalized.split(/\s+/) : []
  const lower = normalized.toLowerCase()
  const hashtagCount = (normalized.match(/#[\p{L}\p{N}_]+/gu) || []).length
  const emojiCount = (normalized.match(/[\p{Extended_Pictographic}]/gu) || []).length
  const questionCount = (normalized.match(/\?/g) || []).length
  const ctaCount = ctaPhrases.filter((phrase) => lower.includes(phrase)).length
  const metrics = { characters: normalized.length, words: words.length, hashtags: hashtagCount, emojis: emojiCount, questions: questionCount, ctas: ctaCount }
  let score = 35
  if (words.length >= 20 && words.length <= 180) score += 20
  if (hashtagCount > 0) score += 15
  if (ctaCount > 0) score += 15
  if (questionCount > 0) score += 10
  if (emojiCount > 0) score += 5
  if (words.length < 10) score -= 15
  if (words.length > 250) score -= 15

  const suggestions = []
  if (!hashtagCount) suggestions.push({ type: 'tip', text: 'Add 3–5 relevant hashtags to improve discoverability.' })
  if (!ctaCount) suggestions.push({ type: 'tip', text: 'End with a clear call-to-action that tells readers what to do next.' })
  if (!questionCount) suggestions.push({ type: 'tip', text: 'Ask your audience a question to invite conversation.' })
  if (words.length > 250) suggestions.push({ type: 'tip', text: 'Shorten the copy and use scannable formatting to keep attention.' })
  if (normalized && words.length < 10) suggestions.push({ type: 'tip', text: 'Add useful context so your audience understands the full story.' })
  if (!suggestions.length) suggestions.push({ type: 'positive', text: 'Strong foundations: your post has a clear engagement structure.' })

  return { metrics, score: Math.max(0, Math.min(100, score)), suggestions }
}