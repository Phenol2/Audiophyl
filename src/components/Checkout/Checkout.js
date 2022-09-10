import { useState, useContext } from "react"
import ctx from "../../store/Storectx"

import {
  CheckoutWrapper,
  PaymentOption,
  OptionWrapper,
  OptionCards,
  OptionCardOne,
  OptionCardTwo,
} from "./Checkout.styled"

import { IoMdCheckmark } from "react-icons/io"
import { FaMoneyCheck, FaMoneyBillAlt } from "react-icons/fa"

import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";



import {
  CheckoutForm,
  Emoney,
  ConfirmationModal,
  ProductSummary
} from "./"


const Checkout = ({ cartItem }) => {
  let [payment, setPayment] = useState("cash")
  let {  details, setDetails } = useContext(ctx)
  
  
  let { cartItems, total } = useSelector((store) => store.cart)
  let shipping = 50
  let VAT = +((0.2 * total).toFixed(2))
  let grandTotal = total + shipping + VAT
  
  
  const methods = useForm();
  const onFormSubmit = (data) => {
    setDetails({...data, shipping, VAT, grandTotal})
  }
  
  let nestedArray = Object.entries(details)

  return (
    <FormProvider {...methods}>
    <CheckoutWrapper 
    onSubmit = {methods.handleSubmit(onFormSubmit)}
    >
      <ProductSummary 
      payment = {payment}
      cartItem = {cartItem}
      cartItems = {cartItems}
      shipping = {shipping}
      VAT = {VAT}
      total = {total}
      grandTotal = {grandTotal}
      />
      <CheckoutForm 
        register = {methods.register} 
        errors = {methods.formState.errors}
        />
      <PaymentOption>
       <h3>PAYMENT METHOD</h3>
        <OptionWrapper>
          <OptionCards>
            <OptionCardOne 
            onClick = {() => setPayment("emoney")}
            isActive = {payment}
            >
              <FaMoneyCheck />
              <h4>e - money</h4>
            </OptionCardOne>
            <OptionCardTwo
            onClick = {() => setPayment("cash")}
            isActive = {payment}
            >
              <FaMoneyBillAlt />
              <h4>Cash On Delivery</h4>
            </OptionCardTwo>
          </OptionCards>
          {
          (payment === "emoney") && <Emoney 
            register = {methods.register} 
            errors = {methods.formState.errors}
            payment = {payment}
          />
          }
        </OptionWrapper>
      <button 
         type = "submit"
         disabled =  {Object.keys(methods.formState.errors).length === 0
                  ? false
                  : true
              }
          >
      <IoMdCheckmark />
      <span>
      CONTINUE AND PAY
      </span>
      </button>
      </PaymentOption>
    </CheckoutWrapper>
  {(methods.formState.isSubmitSuccessful && <ConfirmationModal 
   info= {nestedArray} 
   /> )
   }
    </FormProvider>
    )
}

export default Checkout;