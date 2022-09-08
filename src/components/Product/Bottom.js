import {
  Wrapper,
  Container,
  Image,
  Details
} from "./Bottom.styled"
import Man from "../../assets/home/mobilegear.jpg"


const Bottom = () => {
  return (
    <Wrapper>
      <Container>
        <Image src = {Man} alt = "speaker" />
        <Details>
          <h2>
            BRINGING YOU THE 
          </h2>  
          <h2>
            <span> BEST </span>
            AUDIO GEAR
          </h2>
          
          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </Details>
      </Container>
    </Wrapper>
    )
}

export default Bottom;