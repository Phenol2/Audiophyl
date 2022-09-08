import {
  StyledOther,
  EachProduct,
  Image,
  StyledLink
} from "./OtherProject.styled"

const OtherProduct = ({ singleProduct }) => {
  return (
    <StyledOther>
      <h1>YOU MAY ALSO LIKE</h1>
      <div>
      {
        singleProduct.others.map((item, ind) => {
          return(
            <EachProduct key = {item.id || ind}>
              <Image 
                src = {item.image.mobile} 
                alt = {item.name}/>
              <p>{item.name}</p>
              <StyledLink to = {`/product/${item.slug}`}>
                SEE PRODUCT
              </StyledLink>
            </EachProduct>
          )
        })
      }
      </div>
    </StyledOther>
    )
}

export default OtherProduct;