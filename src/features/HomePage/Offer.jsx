import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/breakpoint'
import Button from '../../ui/Button'

const RightContainer = styled.div`
  flex: 1;
  margin-bottom: 6rem;
`
const HeadingBox = styled.div`
  padding: 0 6rem;
  padding-top: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledBody = styled.div`
  padding: 6rem;
  margin-bottom: 4rem;

  @media ${devicesMax.sm} {
    padding: 2rem;
  }
`
const StyledSec = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const StyledCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LeftContainer = styled.div`
  flex: 1;

  /* background-image: url('../../../image8.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;*/
  position: relative;

  @media ${devicesMax.md} {
    align-self: stretch;
  }
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`
const StyledImg = styled.img`
  height: 80%;
  position: absolute;
  top: 100px;
  left: -50px;
`

const P = styled.p`
  text-align: center;
  color: var(--color-black-900);
`
const Ps = styled.p`
  width: 80%;
`
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`

function Offer() {
  return (
    <Section type="off">
      <RightContainer>
        <HeadingBox>
          <Heading as="h3" color={`var(--color-primary-900)`}>
            What we offer
          </Heading>
          <P>
            Kindness and generosity are two values we hold dear in the service
            we provide for you and your hair. And so, we use only the best
            organic products.
          </P>
        </HeadingBox>
        <StyledBody>
          <StyledSec>
            <StyledCol>
              <Heading as="h4" color={`var(--color-primary-900)`}>
                01
              </Heading>
              <Heading as="h5" color={`var(--color-primary-900)`}>
                Bridal service
              </Heading>
              <Ps>
                Join us at Haven Salon on your big day for luxurious pampering
                in a tranquil setting.
              </Ps>
            </StyledCol>
            <StyledCol>
              <Heading as="h4" color={`var(--color-primary-900)`}>
                02
              </Heading>
              <Heading as="h5" color={`var(--color-primary-900)`}>
                Hair Color
              </Heading>
              <Ps>
                So many style options to choose from: Balayage Shine Glaze,
                Partial Foil, Full Foil, Root Touch Up, Single Process Color,
                and Color Correction.
              </Ps>
            </StyledCol>
          </StyledSec>
          <StyledSec>
            <StyledCol>
              <Heading as="h4" color={`var(--color-primary-900)`}>
                03
              </Heading>
              <Heading as="h5" color={`var(--color-primary-900)`}>
                Hair Cuts
              </Heading>
              <Ps>
                We offer stylish haircuts for women on wet or dry hair, complete
                with a blowout or hot tool styling.
              </Ps>
            </StyledCol>
            <StyledCol>
              <Heading as="h4" color={`var(--color-primary-900)`}>
                04
              </Heading>
              <Heading as="h5" color={`var(--color-primary-900)`}>
                Hair Consultation
              </Heading>
              <Ps>
                In your personalized consultation with your stylist, share your
                wishes and hair challenges. What do you envision for your new
                hairstyle and color? Together we can make it happen.
              </Ps>
            </StyledCol>
          </StyledSec>
        </StyledBody>
        <BtnBox>
          <Button>view services</Button>
        </BtnBox>
      </RightContainer>
      <LeftContainer>
        <Img src="../../../image1.jpeg" alt="images" />
        <StyledImg src="../../../image2.jpeg" alt="images" />
      </LeftContainer>
    </Section>
  )
}

export default Offer
