import type { HTMLAttributes, ReactElement } from 'react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type Application = {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly industries: string;
};

const ROOT_CLASS =
  'w-full bg-background-muted py-applications-mobile-vertical-inset md:py-applications-desktop-vertical-inset';
const CONTAINER_CLASS =
  'flex max-w-applications-content-width flex-col items-center gap-section-md md:gap-section-lg';
const HEADER_CLASS =
  'flex w-full max-w-applications-header-width flex-col items-center gap-stack-lg text-center';
const HEADING_CLASS = 'text-heading-h4 text-neutral-1000 md:text-heading-h3';
const DESCRIPTION_CLASS = 'text-neutral-700';
const GRID_CLASS =
  'grid w-full grid-cols-layout-1 gap-inset-3xl md:grid-cols-layout-2 lg:grid-cols-layout-3';
const CARD_CLASS =
  'flex min-h-applications-card-min-height flex-col gap-inset-xl overflow-hidden border-neutral-300';
const VISUAL_CLASS =
  'flex h-applications-visual-height items-end justify-center gap-inset-md rounded-lg bg-primary-alpha-05 px-inset-3xl pt-inset-3xl';
const BAR_BASE_CLASS =
  'w-applications-chart-bar-width rounded-t-md bg-interactive-primary';
const BAR_SHORT_CLASS = 'h-section-sm opacity-40';
const BAR_MEDIUM_CLASS = 'h-section-md opacity-60';
const BAR_TALL_CLASS = 'h-section-lg';
const CARD_BODY_CLASS = 'gap-stack-lg';
const CARD_INDEX_CLASS = 'text-interactive-primary';
const CARD_HEADING_CLASS = 'text-heading-h5 text-neutral-1000';
const CARD_DESCRIPTION_CLASS = 'text-neutral-700';
const INDUSTRIES_CLASS = 'text-interactive-primary';
const ACTION_CLASS = 'w-full md:w-hero-trial-width';
const APPLICATIONS: readonly Application[] = [
  {
    index: '01',
    title: 'Predictive Power',
    description:
      'Anticipate market shifts, forecast trends, and make data-driven decisions that propel your business forward.',
    industries: 'Finance, Retail, E-commerce',
  },
  {
    index: '02',
    title: 'Connect with Ease',
    description:
      'Integrate Neuros with your existing tools and platforms for one unified analytics experience.',
    industries: 'Tech, Healthcare, Manufacturing',
  },
  {
    index: '03',
    title: 'Visualize Your Success',
    description:
      'Craft bespoke dashboards that resonate with your goals through simple drag-and-drop workflows.',
    industries: 'Marketing, Sales, Operations',
  },
  {
    index: '04',
    title: 'Stay Updated, Always',
    description:
      'Make confident decisions using the latest information with real-time data processing.',
    industries: 'E-commerce, Logistics, Supply Chain',
  },
  {
    index: '05',
    title: "Your Data's Safe Haven",
    description:
      'Protect every insight with enterprise-grade encryption, permissions, and access controls.',
    industries: 'Finance, Healthcare, Legal',
  },
  {
    index: '06',
    title: 'Collaborate and Conquer',
    description:
      'Share insights, annotate charts, and align every team around a single source of truth.',
    industries: 'Design, Development, Project Management',
  },
  {
    index: '07',
    title: 'Simplicity Meets Power',
    description:
      'Navigate an intuitive interface that keeps your team focused on analysis instead of setup.',
    industries: 'All Industries',
  },
  {
    index: '08',
    title: 'Let AI Do the Heavy Lifting',
    description:
      'Receive automated insights and recommendations tailored to your evolving business needs.',
    industries: 'Retail, Marketing, Sales',
  },
  {
    index: '09',
    title: 'Scale Without Limits',
    description:
      'From startup to enterprise, Neuros adapts its analytics capabilities as your organization grows.',
    industries: 'Startups, SMEs, Enterprises',
  },
];

export interface ApplicationsProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Applications = ({
  className,
  ...props
}: ApplicationsProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section
      className={rootClass}
      aria-labelledby="applications-title"
      {...props}
    >
      <Container className={CONTAINER_CLASS}>
        <div className={HEADER_CLASS}>
          <Badge>Applications</Badge>
          <Heading id="applications-title" className={HEADING_CLASS} level={2}>
            Insights and predictions made easy
          </Heading>
          <Text className={DESCRIPTION_CLASS} variant="muted">
            Advanced business intelligence tools enhance efficiency across your
            entire operation and reveal the insights behind better decisions.
          </Text>
        </div>
        <div className={GRID_CLASS}>
          {APPLICATIONS.map((application) => (
            <Card key={application.index} className={CARD_CLASS} padding="md">
              <div className={VISUAL_CLASS} aria-hidden="true">
                <span className={cn(BAR_BASE_CLASS, BAR_SHORT_CLASS)} />
                <span className={cn(BAR_BASE_CLASS, BAR_TALL_CLASS)} />
                <span className={cn(BAR_BASE_CLASS, BAR_MEDIUM_CLASS)} />
                <span className={cn(BAR_BASE_CLASS, BAR_TALL_CLASS)} />
              </div>
              <Card.Body className={CARD_BODY_CLASS}>
                <Text className={CARD_INDEX_CLASS} size="sm" weight="semibold">
                  {application.index}
                </Text>
                <Heading className={CARD_HEADING_CLASS} level={3}>
                  {application.title}
                </Heading>
                <Text className={CARD_DESCRIPTION_CLASS} size="sm">
                  {application.description}
                </Text>
                <Text className={INDUSTRIES_CLASS} size="sm" weight="semibold">
                  {application.industries}
                </Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Button
          className={ACTION_CLASS}
          href="#applications"
          size="lg"
          variant="outline"
        >
          Explore more applications
        </Button>
      </Container>
    </section>
  );
};
