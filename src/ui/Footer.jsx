import styled, { css } from 'styled-components'
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaWhatsappSquare,
  FaYoutube,
} from 'react-icons/fa'

const StyledFooter = styled.footer`
  background-color: var(--color-textiary-900);
  padding: 8rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Social = styled.div`
  margin-bottom: 4rem;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Icon = css`
  font-size: 3rem;
  transition: all 0.4s;
  cursor: pointer;
`
const FacebookIcon = styled(FaFacebook)`
  ${Icon}
  color:var(--color-facebook-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(64, 96, 164, 0.7);
  }
`
const TwitterIcon = styled(FaTwitter)`
  ${Icon}
  color:var(--color-twitter-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(109, 194, 247, 0.7);
  }
`
const TikTokIcon = styled(FaTiktok)`
  ${Icon}
  color:var(--color-tiktok-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(123, 255, 251, 0.7);
  }
`
const InstagramIcon = styled(FaInstagram)`
  ${Icon}
  color:var(--color-instragram-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(228, 112, 164, 0.7);
  }
`
const WhatsappIcon = styled(FaWhatsappSquare)`
  ${Icon}
  color:var(--color-whatsapp-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(104, 229, 151, 0.7);
  }
`
const YouTubeIcon = styled(FaYoutube)`
  ${Icon}
  color: var(--color-youtube-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(235, 121, 120, 0.7);
  }
`

const P = styled.p`
  margin-bottom: 4rem;
  text-align: center;
`
function Footer() {
  return (
    <StyledFooter>
      <P>
        4070 Enright rd St. Louis MO <br />
        Salon Hours: Tue – Sat 9 am – 8 pm
      </P>
      <Social>
        <FacebookIcon />
        <TwitterIcon />
        <TikTokIcon />
        <InstagramIcon />
        <WhatsappIcon />
        <YouTubeIcon />
      </Social>
      <P>
        Copyright © 2023 Nae Nae Salon All rights reserved | Privacy Policy |
        Terms of Use
      </P>
    </StyledFooter>
  )
}

export default Footer
