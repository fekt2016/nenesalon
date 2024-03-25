import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/breakpoint'

const Container = styled.div`
  display: flex;
  gap: 40px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const LeftContainer = styled.div`
  flex: 1;
`

const RightContainer = styled.div`
  flex: 1;

  @media ${devicesMax.md} {
    display: flex;
    flex-direction: column;
  }
`

const HeadingBox = styled.div`
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`
const P = styled.p`
  font-size: 1.8rem;
  text-align: center;
  color: var(--color-textiary-900);
`
const Ps = styled.p`
  font-size: 1.8rem;
  text-align: start;
  color: var(--color-textiary-900);
`
const ImgBox = styled.div`
  margin-top: 2rem;
  height: 70rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${devicesMax.md} {
    order: 2;
  }
`

function Experts() {
  return (
    <Section type="exp">
      <HeadingBox>
        <Heading as="h3">Hair and Beauty Experts You Can Trust</Heading>
        <P>
          Our Haven Salon team of professionals love what we do. We’re
          continually learning the best and newest techniques, perfecting our
          art through higher education.
        </P>
      </HeadingBox>
      <Container>
        <LeftContainer>
          <div>
            <Heading as="h4">Organic product</Heading>
            <Ps>
              Kindness and generosity are two values we hold dear in the service
              we provide for you and your hair. And so, we use only the best
              organic products.
            </Ps>
          </div>
          <ImgBox background={'../../../image3.jpeg'} />
        </LeftContainer>
        <RightContainer>
          <ImgBox background={'../../../image6.jpeg'} />
          <div>
            <Heading as="h4">A multi-sensory treat</Heading>
            <Ps>
              From aromatherapy and music, to epic crown massages, your time at
              Haven Salon will be a multi-sensory experience, designed to
              provide layers of relaxation. You’re sure to feel pampered and
              taken care of.
            </Ps>
          </div>
        </RightContainer>
      </Container>
    </Section>
  )
}

export default Experts
