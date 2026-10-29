import { Button } from '@/components/ui/button'

/** Shown once the template form is sent: the files, as in the dialog version. */
export function TemplateDone() {
  return (
    <>
      <h2 className="mr-h2">Your template is ready.</h2>
      <p className="mr-body">Download the files below. A copy is on its way to your inbox.</p>
      <ul className="ed-dl">
        <li>
          <Button asChild>
            <a href="/downloads/Miraee_Business_Travel_Policy_Template.docx" download>
              Word file (.docx)
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="secondary">
            <a href="/downloads/Miraee_Business_Travel_Policy_Template.pdf" download>
              PDF
            </a>
          </Button>
        </li>
      </ul>
    </>
  )
}

export function FormShell({ children }: { children: React.ReactNode }) {
  return <div className="ed-form-shell">{children}</div>
}
