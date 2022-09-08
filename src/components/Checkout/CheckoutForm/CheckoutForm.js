import BillingInfo from "./BillingInfo/BillingInfo"
import AddressForm from "./AddressForm/AddressForm"

const CheckoutForm = ({ register, errors }) => {
  return (
    <>
      <BillingInfo
      register={register} 
      errors={errors}
      />
      <AddressForm  
      register={register} 
      errors={errors}
      />
    </>
    )
}

export default CheckoutForm;