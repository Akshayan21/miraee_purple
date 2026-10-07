export type FaqItem = {
  question: string
  /** Plain text. Internal links are written `[link text](/path)`; they render as links on the page and as plain text in JSON-LD. */
  answer: string
}

export const FAQ_LINK = /\[([^\]]+)\]\(([^)]+)\)/g

/** The answer as plain text, for structured data. */
export function faqAnswerText(answer: string) {
  return answer.replace(FAQ_LINK, '$1')
}
