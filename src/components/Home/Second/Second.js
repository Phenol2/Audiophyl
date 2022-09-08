import {
          SecondWrapper,
          Container,
          Image,
          StyledLink
      } from "./Second.styled";
import Headphone from "../../../assets/home/Headphone.png"
import Speaker from "../../../assets/home/Speaker.png"
import Earphone from "../../../assets/home/Earphone.png"

import { BiCaretRightCircle } from "react-icons/bi"

const Second = () => {
  return (
    <SecondWrapper>
      <Container>
        <StyledLink  to = "/category/headphones">
          <Image src = {
            Headphone
          } alt = "headphone"/>
          <h3>HEADPHONES</h3>
          <p>
          <span>SHOP</span>
          <BiCaretRightCircle />
          </p>
        </StyledLink>
        <StyledLink to = "/category/speakers">
          <Image src = {Speaker} alt = "speaker"/>
          <h3>SPEAKER</h3>
          <p>
          <span>SHOP</span>
          <BiCaretRightCircle />
          </p>
        </StyledLink>
        <StyledLink to = "/category/earphones">
          <Image src = {Earphone} alt = "earphone"/>
          <h3>EARPHONES</h3>
          <p>
          <span>SHOP</span>
          <BiCaretRightCircle />
          </p>
        </StyledLink>
      </Container>
    </SecondWrapper>
    )
}

export default Second;