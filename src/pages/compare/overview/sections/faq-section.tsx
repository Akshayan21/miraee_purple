import { Section, Container } from '@/components/layout/content-layout'
import { FaqAnswer } from '@/components/sections/faq'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '../faq'

export function FaqSection() {
  return (
    <Section className="mr-paper py-20 md:py-24" aria-labelledby="faq">
      <Container className="mr-container grid gap-10 lg:grid-cols-12">
        <h2 className="mr-h2 scroll-mt-32 lg:col-span-4" id="faq">
          Questions
        </h2>
        <Accordion type="single" collapsible className="lg:col-span-8">
          {faq.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="[&_a]:text-link [&_p]:m-0 [&_p]:max-w-2xl">
                <FaqAnswer answer={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
