import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import styled from 'styled-components'
import { devicesMax } from '../../styles/breakpoint'

const ImgBox = styled.div`
  flex: 1;
  height: 70rem;

  div {
    height: 100%;
    background-image: url('../../../image9.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media ${devicesMax.md} {
    display: none;
  }
`

const TextBox = styled.div`
  flex: 1;
  height: 70rem;
`
const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
`
const HeadingBox = styled.div`
  position: absolute;
  top: 150px;
  left: -100px;

  @media ${devicesMax.md} {
    top: 0;
    left: 0;
    padding: 4rem;
  }
`
const TextBody = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media ${devicesMax.md} {
    margin-top: 20rem;
  }
`
const P = styled.p`
  font-size: 2rem;
  &:not(:last-child) {
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
  span {
    font-size: 3rem;
  }
`
function WelSection() {
  return (
    <Section type="wel">
      <ImgBox>
        <div></div>
      </ImgBox>
      <TextBox>
        <Box>
          <HeadingBox>
            <Heading as="h2">
              Welcome to <br />
              Nae nae beauty Salon
            </Heading>
          </HeadingBox>
          <TextBody>
            <P>Best Salon work in St. Louis MO</P>
            <P>
              <span>&#x201F;</span>
              <br />
              When you enter the doors of our hair salon,
              <br />
              we invite you to leave the stressors of daily life outside. <br />
              Take in the peace and tranquility of our living plant wall.
            </P>
            <P>
              Nae Nae <br />
              Owner
            </P>
          </TextBody>
        </Box>
      </TextBox>
    </Section>
  )
}

export default WelSection
