import {
  CategoryItemWrapper,
  ImageWrapper,
  StyledLink
} from "./CategoryItem.styled"

const CategoryItem = ({ item }) => {
  return (
    <CategoryItemWrapper>
      <ImageWrapper src = {item.categoryImage.mobile} alt = {item.name}/>
        {
          item.new &&
              <h4>NEW PRODUCT</h4>
            }
      <h3>{ item.name }</h3>
      <p>
        { item.description }
      </p>
      <StyledLink to = {`/product/${item.slug}`}>
        SEE PRODUCT
      </StyledLink>
    </CategoryItemWrapper>
    )
}

export default CategoryItem;