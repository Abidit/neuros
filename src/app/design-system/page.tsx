import type { ReactElement } from 'react';

import { StarIcon } from '@/components/icons/StarIcon';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { SocialProof } from '@/components/sections/SocialProof';
import { Strategies } from '@/components/sections/Strategies';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import { Grid } from '@/components/ui/Grid';
import { Heading } from '@/components/ui/Heading';
import { IconButton } from '@/components/ui/IconButton';
import { Section } from '@/components/ui/Section';
import { Stack } from '@/components/ui/Stack';
import { Text } from '@/components/ui/Text';

const PAGE_CLASS = 'min-h-screen bg-background-muted';
const ACTIONS_CLASS = 'flex flex-wrap gap-stack-sm';
const INVERSE_TEXT_CLASS = 'bg-background-inverse p-inset-md';
const CARD_COPY = 'text-foreground-muted';
const STAR_SIZE_CLASS = 'size-icon-lg';
const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost'] as const;
const BADGE_VARIANTS = ['primary', 'neutral', 'inverse'] as const;
const HEADING_LEVELS = [3, 4, 5, 6] as const;

const DesignSystemPage = (): ReactElement => (
  <>
    <Navbar />
    <Hero />
    <SocialProof />
    <Strategies />
    <main className={PAGE_CLASS}>
      <Section spacing="md">
        <Container>
          <Stack gap="xl">
            <Stack gap="sm">
              <Badge>Neuros foundations</Badge>
              <Heading level={1}>Design system</Heading>
              <Text variant="muted" size="md">
                Token-backed primitives extracted from the Figma component
                foundation.
              </Text>
            </Stack>

            <Divider />

            <Stack gap="lg">
              <Heading level={2}>Typography</Heading>
              {HEADING_LEVELS.map((level) => (
                <Heading key={level} level={level}>
                  Heading level {level}
                </Heading>
              ))}
              <Text>Default body text uses Inter.</Text>
              <Text variant="muted">Muted supporting copy.</Text>
              <Text className={INVERSE_TEXT_CLASS} variant="inverse">
                Inverse text on an inverse surface.
              </Text>
            </Stack>

            <Divider />

            <Stack gap="lg">
              <Heading level={2}>Actions</Heading>
              <div className={ACTIONS_CLASS}>
                {BUTTON_VARIANTS.map((variant) => (
                  <Button key={variant} variant={variant}>
                    {variant}
                  </Button>
                ))}
                <Button href="/design-system" size="lg">
                  <StarIcon className={STAR_SIZE_CLASS} />
                  Link button
                </Button>
                <Button disabled>Disabled</Button>
                <IconButton aria-label="Favorite" icon={<StarIcon />} />
              </div>
              <div className={ACTIONS_CLASS}>
                {BADGE_VARIANTS.map((variant) => (
                  <Badge key={variant} variant={variant}>
                    {variant} badge
                  </Badge>
                ))}
              </div>
            </Stack>

            <Divider emphasis="strong" />

            <Stack gap="lg">
              <Heading level={2}>Layout</Heading>
              <Grid columns={1} tabletColumns={2} desktopColumns={3}>
                <Card>
                  <Card.Header>
                    <Heading level={5}>Card title</Heading>
                  </Card.Header>
                  <Card.Body>
                    <Text className={CARD_COPY}>
                      A token-backed surface with the extracted radius, border,
                      padding, and primary shadow.
                    </Text>
                  </Card.Body>
                </Card>
                <Card padding="md" isElevated={false}>
                  <Card.Body>
                    <Heading level={5}>Flat card</Heading>
                    <Text className={CARD_COPY}>
                      Elevation and padding are configurable.
                    </Text>
                  </Card.Body>
                </Card>
                <Card padding="sm">
                  <Card.Body>
                    <Heading level={5}>Compact card</Heading>
                    <Text className={CARD_COPY}>
                      The same primitive at small inset.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </main>
  </>
);

export default DesignSystemPage;
