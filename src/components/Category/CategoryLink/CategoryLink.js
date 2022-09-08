import {
  Wrapper,
  Container,
  StyledLink,
  Image
} from "./CategoryList.styled"
import Bottom from "./Bottom"

import { BiCaretRightCircle } from "react-icons/bi"

import Headphone from "../../../assets/home/Headphone.png"
import Speaker from "../../../assets/home/Speaker.png"
import Earphone from "../../../assets/home/Earphone.png"


const Category = () => {
  return (
    <Wrapper>
        <Container>
        <StyledLink to = "/category/headphones">
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
        
        <Bottom />
      </Container>
    </Wrapper>
    )
}

export default Category;