import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button'

const StyledWel = styled.div`
  height: 50rem;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.9)
    ),
    url('../../../image1.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
`
const HeadingBox = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ShapeBox = styled.div`
  flex: 1;
  background-color: rgba(16, 75, 83, 0.7);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
`
const StyledSpan = styled.span`
  color: var(--color-white-100);
  margin-top: 4rem;
`
function Welcome() {
  return (
    <StyledWel>
      <HeadingBox>
        <Heading as="h1">
          nene beauty <br />
          salon
        </Heading>
        <StyledSpan>
          Style and color for your hair.
          <br /> Refuge and rest – a sanctuary – for you. <br />
          We care about YOU – your hair and your well being!
        </StyledSpan>
        <Button size="large" variation="secoundary">
          make an Appointment
        </Button>
      </HeadingBox>
      <ShapeBox>shape</ShapeBox>
    </StyledWel>
  )
}

export default Welcome
