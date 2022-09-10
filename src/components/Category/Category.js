import { useParams } from "react-router-dom"

import CategoryItem from "./CategoryItem"
import CategoryLink from "./CategoryLink/CategoryLink"

import {CategoryWrapper, 
      CategoryHeader, 
      CategorySection
} from "./Category.styled"

import { products } from "../../data/data"



const Category = () => {
  let { category } = useParams()
  
  let service = products
  let filteredProducts = service.filter(product => {
    return category === product.category
  })
  
  return(
      <CategoryWrapper>
         <CategoryHeader>
        <h2>
          { category.toUpperCase()}
        </h2>
     </CategoryHeader>
      <CategorySection>
        {
          filteredProducts.map(item => {
            return <CategoryItem key = {item.id} 
              item = {item} />
          })
        }
     </CategorySection>
     <CategoryLink />
      </CategoryWrapper>
    );
};

export default Category;