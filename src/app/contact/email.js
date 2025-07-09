import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

const ContactFormEmail = ({ name, email, subject, message }) => {
  const previewText = `New message from ${name} via your website`;

  return (
    <Html>
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "brand-dark": "#292929",
                "brand-content": "#333333",
                "brand-text": "#fcffd6",
                "brand-muted": "#999999",
                "brand-primary": "#fcffd6",
              },
            },
          },
        }}
      >
        <Head />
        <Body className="bg-brand-dark font-sans text-brand-text">
          <Container className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <Section className="text-center mb-8">
              <Heading className="text-3xl font-bold text-brand-primary">
                New Contact Form Submission
              </Heading>
              <Text className="text-brand-muted">
                You've received a new message from your contact form.
              </Text>
            </Section>

            <Section className="bg-brand-content p-6 rounded-lg shadow-md mb-6">
              <Heading as="h2" className="text-xl font-semibold text-brand-text mb-4">
                Message Details
              </Heading>
              <Hr className="border-brand-muted/20" />
              <Section className="my-4">
                <Text>
                  <strong>From:</strong> {name}
                </Text>
                <Text>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${email}`} className="text-brand-primary">
                    {email}
                  </a>
                </Text>
                <Text>
                  <strong>Subject:</strong> {subject}
                </Text>
              </Section>
              <Hr className="border-brand-muted/20" />
              <Section className="my-4">
                <Heading as="h3" className="text-lg font-semibold text-brand-text mb-2">
                  Message
                </Heading>
                <Text className="text-brand-text/90 whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>

            <Section className="text-center">
              <Button
                href={`mailto:${email}`}
                className="bg-brand-content text-brand-primary font-bold py-3 px-6 rounded-md"
              >
                Reply to {name}
              </Button>
            </Section>

            <Section className="text-center mt-8 text-brand-muted text-xs">
              <Text>
                This email was generated from your portfolio contact form on{" "}
                {new Date().toLocaleString()}.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
