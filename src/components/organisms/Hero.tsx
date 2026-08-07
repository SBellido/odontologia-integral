import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { GradientText } from '../atoms/GradientText';
import { WhatsAppButton } from '../molecules/WhatsAppButton';
import './Hero.css';

export function Hero() {
  return (
    <section id="top" className="hero">
      <span className="hero__eyebrow">Odontología Integral</span>
      <Heading level={1}>
        Cuidado dental <GradientText>de confianza</GradientText>, para toda la familia
      </Heading>
      <Text tone="soft" size="lg" className="hero__lead">
        Endodoncia, implantes dentales, odontopediatría y ortodoncia, con atención cercana y
        tecnología actual.
      </Text>
      <WhatsAppButton source="hero" />
    </section>
  );
}
