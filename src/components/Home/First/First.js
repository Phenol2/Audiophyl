import { 
    ImageWrapper, 
    Image,
    OverlayText,
    StyledLink
} from "./First.styled"
import ImageHeader from "../../../assets/home/image-header.jpg"

const First = () => {
  return (
       <ImageWrapper>
          <Image src = {ImageHeader} alt = "xx99" />
          <OverlayText>
            <p>NEW PRODUCT</p>
            <p>XX99 Mark II </p>
            <p>HeadphoneS</p>
            <p>
              Experience natural, lifelike audio and exceptional build quality made for passionate music enthusiast.
            </p>
            <StyledLink to = {`/product/xx99-mark-two-headphones`}>
              SEE PRODUCT
            </StyledLink>
          </OverlayText>
        </ImageWrapper>
    )
}

export default First;