import type { HTMLAttributes, ReactElement } from 'react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/cn';

type Strategy = {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly metric: string;
  readonly trend: string;
};

const ROOT_CLASS =
  'w-full bg-background-muted py-strategies-mobile-vertical-inset md:py-strategies-desktop-vertical-inset';
const CONTAINER_CLASS =
  'flex max-w-strategies-content-width flex-col items-center gap-section-md md:gap-section-lg';
const HEADER_CLASS =
  'flex w-full max-w-strategies-header-width flex-col items-center gap-stack-lg text-center';
const EYEBROW_CLASS = 'bg-background-primary';
const HEADING_CLASS = 'text-heading-h4 text-neutral-1000 md:text-heading-h3';
const DESCRIPTION_CLASS = 'text-neutral-700';
const ACTIONS_CLASS =
  'flex w-full flex-col items-center gap-stack-sm pt-inset-sm md:w-auto md:flex-row';
const DEMO_BUTTON_CLASS = 'w-full md:w-navbar-demo-width';
const RESEARCH_BUTTON_CLASS =
  'w-full border-transparent bg-transparent text-interactive-primary shadow-none md:w-navbar-demo-width';
const CARD_GRID_CLASS =
  'grid w-full grid-cols-layout-1 gap-inset-3xl md:grid-cols-layout-3';
const CARD_CLASS =
  'flex min-h-strategies-card-min-height flex-col justify-between gap-inset-3xl rounded-2xl border-token border-neutral-300 bg-background-primary p-inset-3xl shadow-primary-1';
const CARD_TOP_CLASS = 'flex items-start justify-between gap-inset-lg';
const CARD_INDEX_CLASS =
  'flex size-control-sm shrink-0 items-center justify-center rounded-full bg-primary-alpha-05 font-heading text-body-sm font-bold text-interactive-primary';
const CARD_METRIC_CLASS =
  'rounded-md bg-background-muted px-inset-md py-inset-sm text-interactive-primary';
const CARD_COPY_CLASS = 'flex flex-col gap-stack-sm';
const CARD_HEADING_CLASS = 'text-heading-h5 text-neutral-1000';
const CARD_DESCRIPTION_CLASS = 'text-neutral-700';
const VISUAL_CLASS =
  'relative h-strategies-visual-mobile-height w-full overflow-hidden rounded-3xl bg-interactive-primary shadow-primary-4 md:h-strategies-visual-tablet-height lg:h-strategies-visual-desktop-height';
const VISUAL_GRID_CLASS = 'strategies-grid absolute inset-0 opacity-20';
const VISUAL_GLOW_CLASS =
  'absolute -end-section-lg -top-section-lg size-strategies-visual-tablet-height rounded-full bg-neutral-alpha-60 opacity-20 blur-3xl';
const VISUAL_COPY_CLASS =
  'absolute start-inset-3xl top-inset-4xl z-10 flex max-w-strategies-visual-copy-width flex-col gap-stack-lg md:start-section-md md:top-section-md';
const VISUAL_EYEBROW_CLASS = 'w-fit bg-neutral-alpha-60 text-interactive-focus';
const VISUAL_HEADING_CLASS =
  'text-heading-h4 text-foreground-inverse md:text-heading-h3';
const VISUAL_TEXT_CLASS = 'text-foreground-inverse opacity-80';
const METRIC_STACK_CLASS =
  'absolute bottom-inset-3xl end-inset-3xl z-10 hidden flex-col gap-stack-sm md:flex lg:bottom-section-md lg:end-section-md';
const METRIC_CARD_CLASS =
  'flex h-strategies-metric-card-height w-strategies-metric-card-width flex-col justify-between rounded-lg border-token border-neutral-alpha-60 bg-neutral-alpha-60 p-inset-lg backdrop-blur-button';
const METRIC_LABEL_CLASS = 'text-neutral-800';
const METRIC_VALUE_CLASS =
  'font-heading text-heading-h5 text-interactive-focus';
const CHART_CLASS =
  'absolute -bottom-section-md start-inset-xl h-strategies-chart-line-width w-strategies-chart-line-width md:bottom-section-md md:start-section-md lg:start-1/2 lg:-translate-x-1/2';
const CHART_LINE_BASE_CLASS =
  'absolute start-0 top-1/2 h-strategies-chart-line-height origin-left rounded-full bg-neutral-alpha-60';
const CHART_LINE_ONE_CLASS =
  'w-strategies-chart-line-width -translate-y-section-sm -rotate-12';
const CHART_LINE_TWO_CLASS =
  'w-strategies-chart-line-width translate-x-section-md translate-y-inset-xl rotate-6';
const CHART_LINE_THREE_CLASS =
  'w-strategies-chart-line-width translate-x-section-lg -translate-y-inset-3xl -rotate-6';
const CHART_POINT_CLASS =
  'absolute size-strategies-chart-point-size rounded-full border-token border-neutral-0 bg-interactive-primary shadow-primary-1';
const CHART_POINT_ONE_CLASS = 'start-0 top-1/2';
const CHART_POINT_TWO_CLASS = 'start-1/3 top-1/3';
const CHART_POINT_THREE_CLASS = 'end-0 top-1/4';
const STRATEGIES: readonly Strategy[] = [
  {
    index: '01',
    title: 'AI-Driven Forecasts',
    description:
      'Anticipate market trends and stay steps ahead with predictive analytics backed by your business data.',
    metric: '94.8%',
    trend: '+12.4%',
  },
  {
    index: '02',
    title: 'Connect & Streamline',
    description:
      'Unify your favorite tools, CRMs, and platforms for a complete view of your entire operation.',
    metric: '120+',
    trend: 'integrations',
  },
  {
    index: '03',
    title: 'Instant Insights',
    description:
      'Process data in real time, react to changes as they happen, and pivot your strategies instantly.',
    metric: '2.4s',
    trend: 'response',
  },
];

export interface StrategiesProps extends HTMLAttributes<HTMLElement> {
  readonly children?: never;
}

export const Strategies = ({
  className,
  ...props
}: StrategiesProps): ReactElement => {
  const rootClass = cn(ROOT_CLASS, className);

  return (
    <section
      className={rootClass}
      aria-labelledby="strategies-title"
      {...props}
    >
      <Container className={CONTAINER_CLASS}>
        <div className={HEADER_CLASS}>
          <Badge className={EYEBROW_CLASS}>Our strategies</Badge>
          <Heading id="strategies-title" className={HEADING_CLASS} level={2}>
            Improve your Continuous Design Data workflow
          </Heading>
          <Text className={DESCRIPTION_CLASS} variant="muted">
            Neuros helps you gain control of your business data across teams,
            tools, and products.
          </Text>
          <div className={ACTIONS_CLASS}>
            <Button
              className={DEMO_BUTTON_CLASS}
              href="#demo"
              size="md"
              variant="primary"
            >
              Get a demo
            </Button>
            <Button
              className={RESEARCH_BUTTON_CLASS}
              href="#research"
              size="md"
              variant="ghost"
            >
              Research
            </Button>
          </div>
        </div>

        <div className={CARD_GRID_CLASS}>
          {STRATEGIES.map((strategy) => (
            <article key={strategy.index} className={CARD_CLASS}>
              <div className={CARD_TOP_CLASS}>
                <span className={CARD_INDEX_CLASS}>{strategy.index}</span>
                <Text
                  className={CARD_METRIC_CLASS}
                  as="span"
                  size="sm"
                  weight="semibold"
                >
                  {strategy.metric} · {strategy.trend}
                </Text>
              </div>
              <div className={CARD_COPY_CLASS}>
                <Heading className={CARD_HEADING_CLASS} level={3}>
                  {strategy.title}
                </Heading>
                <Text className={CARD_DESCRIPTION_CLASS} size="sm">
                  {strategy.description}
                </Text>
              </div>
            </article>
          ))}
        </div>

        <div className={VISUAL_CLASS}>
          <div className={VISUAL_GRID_CLASS} aria-hidden="true" />
          <div className={VISUAL_GLOW_CLASS} aria-hidden="true" />
          <div className={VISUAL_COPY_CLASS}>
            <Badge className={VISUAL_EYEBROW_CLASS}>Live intelligence</Badge>
            <Heading className={VISUAL_HEADING_CLASS} level={3}>
              Turn every signal into a confident decision
            </Heading>
            <Text className={VISUAL_TEXT_CLASS} variant="inverse">
              See forecasts, operational health, and emerging opportunities in
              one continuously updated view.
            </Text>
          </div>
          <div className={CHART_CLASS} aria-hidden="true">
            <span className={cn(CHART_LINE_BASE_CLASS, CHART_LINE_ONE_CLASS)} />
            <span className={cn(CHART_LINE_BASE_CLASS, CHART_LINE_TWO_CLASS)} />
            <span
              className={cn(CHART_LINE_BASE_CLASS, CHART_LINE_THREE_CLASS)}
            />
            <span className={cn(CHART_POINT_CLASS, CHART_POINT_ONE_CLASS)} />
            <span className={cn(CHART_POINT_CLASS, CHART_POINT_TWO_CLASS)} />
            <span className={cn(CHART_POINT_CLASS, CHART_POINT_THREE_CLASS)} />
          </div>
          <div className={METRIC_STACK_CLASS}>
            <div className={METRIC_CARD_CLASS}>
              <Text className={METRIC_LABEL_CLASS} size="sm">
                Forecast accuracy
              </Text>
              <Text className={METRIC_VALUE_CLASS} weight="semibold">
                94.8%
              </Text>
            </div>
            <div className={METRIC_CARD_CLASS}>
              <Text className={METRIC_LABEL_CLASS} size="sm">
                Decisions accelerated
              </Text>
              <Text className={METRIC_VALUE_CLASS} weight="semibold">
                3.6×
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
