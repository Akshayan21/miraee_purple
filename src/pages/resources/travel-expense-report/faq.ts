import type { FaqItem } from '@/components/sections/faq'

export const faq: FaqItem[] = [
  {
    question: 'What is a travel expense report?',
    answer:
      'A travel expense report lists the costs of a business trip, with a receipt, category and code for each line, so the company can check, post and reimburse them.',
  },
  {
    question: 'How long should a travel expense report take to approve?',
    answer:
      'A report with codes attached at booking, receipts matched to charges and a policy status on each line can be approved in one pass. Reports that need codes and receipts chased take the longest.',
  },
  {
    question: 'What should be on a travel month-end close checklist?',
    answer:
      'Coding every trip, matching card charges to receipts, chasing missing receipts, recording unused tickets, booking accruals, comparing spend with budget, releasing reimbursements and locking the period. The checklist above covers each step by close day.',
  },
  {
    question: 'Can travelers submit receipts from their phone?',
    answer:
      'Most modern tools let travelers upload a photo of the receipt during the trip. The sooner the receipt arrives, the sooner it can be matched to the card charge.',
  },
  {
    question: 'Do we need a separate expense tool for travel?',
    answer:
      'Many companies keep one tool for booking and another for expense. When booking and expense share one trip record, the codes and receipts stay together, and month-end has less to reconcile.',
  },
]
