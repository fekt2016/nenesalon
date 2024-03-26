import styled, { css } from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/breakpoint'
const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 8rem 20rem;

  @media ${devicesMax.md} {
    padding: 4rem 10rem;
  }
  @media ${devicesMax.sm} {
    padding: 4rem 6rem;
  }
`
const P = styled.p``

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 45rem);
  gap: 40px;

  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 45rem);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 45rem;
  }
`
const Img = styled.img`
  width: 100%;
   height: 100%;
   border: 10px solid var(--color-textiary-900);
   box-shadow:  0 2.4px 2rem rgba(251,226,200, 0.5);
   transition: all 1s ease;

   &:hover{
    transform: scale(1.2);
    box-shadow: 0 2.4rem 3.2rem rgba(251,226,200, 0.5);
    z-index: 5;

    @media ${devicesMax.sm} {
      transform: scale(1.1);
    }
   }

  /* ${(props) => props.type === 'one' && css``}
  ${(props) => props.type === 'two' && css``}
  ${(props) => props.type === 'three' && css``}
  ${(props) => props.type === 'four' && css``}
  ${(props) => props.type === 'five' && css``}
  ${(props) => props.type === 'six' && css``}
  ${(props) => props.type === 'seven' && css``}
  ${(props) => props.type === 'eight' && css``} */
`

function Work() {
  return (
    <Section type="work">
      <HeadingBox>
        <Heading as="h3">Our Work</Heading>
        <P>
          Kindness and generosity are two values we hold dear in the service we
          provide for you and your hair. And so, we use only the best organic
          products.
        </P>
      </HeadingBox>
      <ImgBox>
        <Img type="one" src="../../../public/image1.jpeg" alt="images" />
        <Img type="two" src="../../../public/image2.jpeg" alt="images" />
        <Img type="three" src="../../../public/image3.jpeg" alt="images" />
        <Img type="four" src="../../../public/image4.jpeg" alt="images" />
        <Img type="five" src="../../../public/image5.jpeg" alt="images" />
        <Img type="six" src="../../../public/image6.jpeg" alt="images" />
        <Img type="seven" src="../../../public/image7.jpeg" alt="images" />
        <Img type="eight" src="../../../public/image8.jpeg" alt="images" />
      </ImgBox>
    </Section>
  )
}

export default Work
