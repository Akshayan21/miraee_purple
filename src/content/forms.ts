import type { FormAction } from '@/lib/forms'

/** Confirmation copy shown after each form is submitted. */
export const FORM_DONE: Record<FormAction, { title: string; body: string }> = {
  '/sign-up': {
    title: 'Thanks, your request is in.',
    body: "We'll email you to set up your company, policy and people.",
  },
  '/spend-review': {
    title: 'Thanks, your request is in.',
    body: "We'll email you to sign an NDA and agree timing. Please hold your file until then.",
  },
  '/security/pack': {
    title: 'Your request is in.',
    body: "We'll email the security pack to you and answer any questions your team has.",
  },
  '/resources/business-travel-policy-template': {
    title: 'Your template is ready.',
    body: 'Download the files below. A copy is on its way to your inbox.',
  },
  '/talk-to-sales': {
    title: 'Your question is in.',
    body: "We'll email you to find a time to talk.",
  },
}
