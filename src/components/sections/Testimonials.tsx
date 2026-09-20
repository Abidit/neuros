import type { HTMLAttributes, ReactElement } from 'react';

import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type Testimonial = {
  readonly initials: string;
  readonly quote: string;
  readonly name: string;
  readonly role: string;
};

const ROOT_CLASS =
  'w-full bg-background-primary py-testimonials-mobile-vertical-inset md:py-testimonials-desktop-vertical-inset';
const CONTAINER_CLASS =
  'flex max-w-testimonials-content-width flex-col items-center gap-section-md md:gap-section-lg';
const HEADER_CLASS =
  'flex w-full max-w-testimonials-header-width flex-col items-center gap-stack-lg text-center';
const HEADING_CLASS = 'text-heading-h4 text-neutral-1000 md:text-heading-h3';
const DESCRIPTION_CLASS = 'text-neutral-700';
const GRID_CLASS =
  'grid w-full grid-cols-layout-1 gap-inset-3xl md:grid-cols-layout-3';
const CARD_CLASS =
  'min-h-testimonials-card-min-height border-neutral-300 shadow-none';
const CARD_BODY_CLASS = 'h-full justify-between gap-inset-3xl';
const QUOTE_CLASS = 'text-neutral-900';
const PERSON_CLASS = 'flex items-center gap-inset-lg';
const AVATAR_CLASS =
  'flex size-testimonials-avatar-size shrink-0 items-center justify-center rounded-full bg-primary-alpha-05 font-heading text-body-base font-bold text-interactive-primary';
const PERSON_COPY_CLASS = 'flex flex-col gap-inline-xs';
const PERSON_NAME_CLASS = 'text-neutral-1000';
const PERSON_ROLE_CLASS = 'text-neutral-600';
const TESTIMONIALS: readonly Testimonial[] = [
  {
    initials: 'NH',
    quote:
      'Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.',
    name: 'Nathan D. Hall',
    role: 'Project Lead',
  },
  {
    initials: 'NJ',
    quote:
      "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    name: 'Naomi K. Johnson',
    role: 'Product Manager',
  },
  {
    initials: 'ML',
    quote:
      "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    name: 'Michael O. Lopez',
    role: 'Operations Director',
  },
];

export interface TestimonialsProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Testimonials = ({
  className,
  ...props
}: TestimonialsProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section
      className={rootClass}
      aria-labelledby="testimonials-title"
      {...props}
    >
      <Container className={CONTAINER_CLASS}>
        <div className={HEADER_CLASS}>
          <Heading id="testimonials-title" className={HEADING_CLASS} level={2}>
            The Neuros Experience
          </Heading>
          <Text className={DESCRIPTION_CLASS} variant="muted">
            At Neuros, we pride ourselves on delivering top-notch AI-driven
            business analytics. Hear what our satisfied users have to say.
          </Text>
        </div>
        <div className={GRID_CLASS}>
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name} className={CARD_CLASS} padding="lg">
              <Card.Body className={CARD_BODY_CLASS}>
                <Text className={QUOTE_CLASS} weight="medium">
                  “{testimonial.quote}”
                </Text>
                <div className={PERSON_CLASS}>
                  <span className={AVATAR_CLASS} aria-hidden="true">
                    {testimonial.initials}
                  </span>
                  <div className={PERSON_COPY_CLASS}>
                    <Text
                      className={PERSON_NAME_CLASS}
                      size="sm"
                      weight="semibold"
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      className={PERSON_ROLE_CLASS}
                      size="sm"
                      variant="muted"
                    >
                      {testimonial.role}
                    </Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
