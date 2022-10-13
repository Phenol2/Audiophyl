import {
  FooterWrapper,
  Container,
  Menus,
  SocialIcon,
  StyledLink
} from "./Footer.styled"


import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"



const Footer = () => {
  return (
    <FooterWrapper>
    <Container>
      <h2>audiophile</h2>
      <Menus>
        <StyledLink 
          to = "/"
          activeclassname= "active"
          >
          HOME
        </StyledLink>
        <StyledLink
        to = "/category/headphones"
        activeclassname = "active"
        >
          HEADPHONES
        </StyledLink>
        <StyledLink
        to = "/category/speakers"
        activeclassname = "active"
        >
          SPEAKER
        </StyledLink>
        <StyledLink
        to = "/category/earphones"
        activeclassname = "active"
        >
          EARPHONES
        </StyledLink>
      </Menus>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <p>
        Copyright 2022.All Rights Reserved
      </p>
      
      <SocialIcon>
        <BsFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </SocialIcon>
    </Container>
    </FooterWrapper>
    )
}

export default Footer