import { StarIcon } from '@/components/icons/StarIcon';
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Heading,
  IconButton,
  Section,
  Stack,
  Text,
} from '@/components/ui';

export default function DesignSystemPage() {
  return (
    <main className="bg-background-muted min-h-screen">
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
              <Heading level={3}>Heading level three</Heading>
              <Heading level={4}>Heading level four</Heading>
              <Heading level={5}>Heading level five</Heading>
              <Heading level={6}>Heading level six</Heading>
              <Text>Default body text uses Inter.</Text>
              <Text variant="muted">Muted supporting copy.</Text>
              <Text
                className="bg-background-inverse p-inset-md"
                variant="inverse"
              >
                Inverse text on an inverse surface.
              </Text>
            </Stack>

            <Divider />

            <Stack gap="lg">
              <Heading level={2}>Actions</Heading>
              <div className="gap-stack-sm flex flex-wrap">
                <Button size="sm">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost" size="lg">
                  Ghost
                </Button>
                <Button href="/design-system" size="lg">
                  <StarIcon className="size-icon-lg" />
                  Link button
                </Button>
                <Button disabled>Disabled</Button>
                <IconButton
                  aria-label="Favorite"
                  icon={<StarIcon className="size-icon-md" />}
                />
              </div>
              <div className="gap-stack-sm flex flex-wrap">
                <Badge>Primary badge</Badge>
                <Badge variant="neutral">Neutral badge</Badge>
                <Badge variant="inverse">Inverse badge</Badge>
              </div>
            </Stack>

            <Divider emphasis="strong" />

            <Stack gap="lg">
              <Heading level={2}>Layout</Heading>
              <Grid columns={1} tabletColumns={2} desktopColumns={3}>
                <Card>
                  <Stack gap="sm">
                    <Heading level={5}>Card title</Heading>
                    <Text variant="muted">
                      A token-backed surface with the extracted radius, border,
                      padding, and primary shadow.
                    </Text>
                  </Stack>
                </Card>
                <Card padding="md" elevated={false}>
                  <Stack gap="sm">
                    <Heading level={5}>Flat card</Heading>
                    <Text variant="muted">
                      Elevation and padding are configurable.
                    </Text>
                  </Stack>
                </Card>
                <Card padding="sm">
                  <Stack gap="sm">
                    <Heading level={5}>Compact card</Heading>
                    <Text variant="muted">
                      The same primitive at small inset.
                    </Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
