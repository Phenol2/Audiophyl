import {
  ThirdWrapper,
  Container,
  Image,
  StyledLink
} from "./Third.styled"
import Speaker from "../../../assets/home/image-speaker-zx9.png"



const Third = () => {
  return (
    <ThirdWrapper>
      <Container >
        <Image src = {Speaker} alt = "speaker" />
        <p>ZX9</p>
        <p>SPEAKER</p>
        <div>
          Upgrade to premium speakers that are phenomenally built to deliver trully remarkably sound.
        </div>
          <StyledLink to = {`/product/zx9-speaker`}>
              SEE PRODUCT
          </StyledLink>
      </Container>
    </ThirdWrapper>
    )
}

export default Third;