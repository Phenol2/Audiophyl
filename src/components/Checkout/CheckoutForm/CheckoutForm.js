import { BillingInfo, AddressForm} from "./"

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