/**
 * Lead-form submission. Every form on the site (sign-up, spend review, security pack, template download,
 * talk to sales) goes through here. Set VITE_FORMS_ENDPOINT to POST them as JSON to your backend or
 * form service; leave it empty and the forms validate and confirm without sending anything (matching
 * the original static preview).
 */
const endpoint = import.meta.env.VITE_FORMS_ENDPOINT

export type FormAction =
  | '/sign-up'
  | '/spend-review'
  | '/security/pack'
  | '/resources/business-travel-policy-template'
  | '/talk-to-sales'

export async function submitLead(action: FormAction, data: Record<string, FormDataEntryValue>) {
  if (!endpoint) return

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form: action, ...data }),
  })
  if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`)
}
