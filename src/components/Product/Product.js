import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeItem } from "../../features/CartReducer"

import {
  ProductWrapper,
  Container,
  Image,
  ProductDesc,
  ProductQuantity,
  ProductFeatures,
  ProductBox,
  ProductGallery,
  Gallery
} from "./Product.styled"

import OtherProduct from "./OtherProduct/OtherProduct"
import CategoryLink from "./CategoryLink"

import { useParams } from "react-router-dom"
import { products } from "../../data/data"

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"





const Product = () => {
  let { product } = useParams();
  let dispatch = useDispatch();
  
  let { cartItems } = useSelector((store) => store.cart)
  
  let singleProduct = products.find(item => {
    return product === item.slug;
  });
  let id = singleProduct.id
  
  let mainItem = cartItems.find(item => {
          return item.id === id
        }) 
  //console.log(cartItems)
  
  return (
    <ProductWrapper >
      <Container>
        <Image 
            src= {singleProduct.image.mobile} 
            alt = {singleProduct.name}
            />
            {
              singleProduct.new &&
              <p>NEW PRODUCT</p>
            }
            <h1>
            {singleProduct.name}
            </h1>
      <ProductDesc>
          <p>
        {singleProduct.description}
          </p>
      </ProductDesc>
      <ProductQuantity>
      <button   onClick = {() => dispatch(removeItem(singleProduct))
      }
      disabled = {!mainItem }
      >
        <AiFillMinusCircle />
        </button>
        <span>
        {
        mainItem 
        ? mainItem.amount 
        : singleProduct.amount
        }
        </span>
        <button   onClick = {() => dispatch(addToCart(singleProduct))
      }>
        <AiFillPlusCircle />
        </button>
      </ProductQuantity>
      <button onClick = {() => dispatch(addToCart(singleProduct))
      }>
        ADD TO CART
      </button>
      <ProductFeatures>
        <h2>FEATURES</h2>
        <p>{singleProduct.features}</p>
      </ProductFeatures>
       <ProductBox>
        <h1>IN THE BOX</h1>
        <div>
          {
            singleProduct.includes.map((box, ind) => {
              return (
              <p key = {box.id || ind}>
                <span>{box.quantity}x</span>
                <span>{box.item}</span>
              </p>
              )
            })
          }
        </div>
      </ProductBox>
      <ProductGallery>
        <Gallery 
            src = {singleProduct.gallery.first.mobile}
            alt = "gallery"
        />
        <Gallery 
            src = {singleProduct.gallery.second.mobile} 
            alt = "gallery"
        />
        <Gallery 
            src = {singleProduct.gallery.third.mobile} 
            alt = "gallery"
        />
      </ProductGallery>
      <OtherProduct singleProduct = {singleProduct} />
      </Container>
       <CategoryLink />
    </ProductWrapper>
    )
}

export default Product;