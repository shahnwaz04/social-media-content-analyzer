import { createWorker } from 'tesseract.js'

export async function extractImageText(file, onProgress) {
  const worker = await createWorker('eng', 1, { logger: (message) => { if (message.status === 'recognizing text' && message.progress) onProgress(`Reading image... ${Math.round(message.progress * 100)}%`) } })
  try {
    const { data: { text } } = await worker.recognize(file)
    return text.trim()
  } finally {
    await worker.terminate()
  }
}