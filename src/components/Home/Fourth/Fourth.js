import {
  FourthWrapper,
  Container,
  Image,
  ProductName,
  StyledLink
} from "./Fourth.styled"
import Speaker from "../../../assets/home/image-speaker-zx7.jpg"



const Fourth = () => {
  return (
    <FourthWrapper>
      <Container>
        <Image src = {Speaker} alt = "speaker" />
        <ProductName>
          <div>ZX7 SPEAKER</div>
          <StyledLink to = {`/product/zx7-speaker`}>
            SEE PRODUCT
          </StyledLink>
        </ProductName>
      </Container>
    </FourthWrapper>
    )
}

export default Fourth;