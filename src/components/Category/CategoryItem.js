import {
  CategoryItemWrapper,
  ImageWrapper,
  StyledLink
} from "./CategoryItem.styled"

import { motion } from "framer-motion"

const containerVariant = {
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
    transition:{
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 0.7,
    }
  }
}

const childVariant = {
  hidden:{
    filter: "blur(0.5rem)",
  },
  visible:{
    filter: "blur(0)",
  }
}

const CategoryItem = ({ item }) => {
  return (
    <CategoryItemWrapper
      as = {motion.div}
      variants = {containerVariant}
      initial = "hidden"
      animate = "visible"
    >
      <ImageWrapper
      as = {motion.img}
      variants = {childVariant}
      src = {item.categoryImage.mobile} 
      alt = {item.name}
      />
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