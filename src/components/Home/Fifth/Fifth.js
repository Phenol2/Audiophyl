import {
  FifthWrapper,
  Container,
  Image,
  ProductName,
  StyledLink
} from "./Fifth.styled"
import Earphone from "../../../assets/home/image-earphones-yx1.jpg"



const Fifth = () => {
  return (
    <FifthWrapper>
      <Container>
        <Image src = {Earphone} alt = "speaker" />
        <ProductName>
          <div>YX1 EARPHONES</div>
          <StyledLink to = {`/product/yx1-earphones`}>
            SEE PRODUCT
          </StyledLink>
        </ProductName>
      </Container>
    </FifthWrapper>
    )
}

export default Fifth;