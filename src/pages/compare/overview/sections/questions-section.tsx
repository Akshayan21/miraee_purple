import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QUESTION_GROUPS } from '../data'

export function QuestionsSection() {
  return (
    <section
      className="mr-paper py-20 md:py-24"
      aria-labelledby="twelve-questions-to-ask-every-vendor-including-us"
    >
      <div className="mr-container">
        <h2 className="mr-h2 scroll-mt-32" id="twelve-questions-to-ask-every-vendor-including-us">
          Twelve questions to ask every vendor, including us
        </h2>

        <Tabs defaultValue={QUESTION_GROUPS[0].id} className="mt-10">
          <TabsList aria-label="Question topics">
            {QUESTION_GROUPS.map((group) => (
              <TabsTrigger key={group.id} value={group.id}>
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {QUESTION_GROUPS.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
                {group.questions.map((item) => (
                  <li
                    key={item.n}
                    className="flex flex-col rounded-lg border border-rule bg-white p-6 md:p-7"
                  >
                    <span className="text-[length:var(--mr-fs-small)] font-semibold text-content-2 tabular-nums">
                      Question {item.n}
                    </span>
                    <p className="m-0 mt-3 text-[19px] leading-snug font-semibold">
                      {item.question}
                    </p>
                    <p className="m-0 mt-auto border-t border-rule pt-4 text-[15px] text-content-2">
                      <strong className="font-semibold text-content">Why it matters: </strong>
                      {item.why}
                    </p>
                  </li>
                ))}
              </ol>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mr-plum mt-12 grid gap-6 rounded-xl p-8 md:grid-cols-12 md:p-10">
          <h3 className="mr-h3 m-0 md:col-span-4">Our answers</h3>
          <p className="m-0 text-mist md:col-span-8">
            Sign-up and onboarding are free at any company size, and we set up your company, your
            travel policy and your people with you. Options are marked in or out of policy, and
            approvals only come in when something is out of policy. Every trip carries its budget
            and GL code. You keep your cards. When plans change, the traveler gets an alert and new
            options to confirm. The spend review measures last year's travel on your own data, with
            any savings as a dollar range and the method shown. Ask us for the security pack at any
            stage.
          </p>
        </div>
      </div>
    </section>
  )
}
