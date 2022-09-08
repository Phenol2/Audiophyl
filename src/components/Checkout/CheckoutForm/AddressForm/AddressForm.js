import {
  Wrapper,
  FieldContainer
} from "./AddressForm.styled"


const AddressForm = ({ register, errors }) => {
  
  return (
    <Wrapper>
      <h4>SHIPPING INFO</h4>
      <FieldContainer>
      <label>Address</label>
        <input {...register("address", { required: true })} 
        placeholder = "1137 Williams Avenue"
        />
        {errors.address?.type === 'required' && <p>address is required</p>}
      </FieldContainer>
      
      <FieldContainer>
        <label>ZIP code</label>
        <input  {...register("zipCode", { required: <p>ZIP code  is required</p> })}
          placeholder = "10001"
        />
        <p>{errors.zipCode?.message}</p>
      </FieldContainer>
      
      <FieldContainer>
        <label>City</label>
        <input type = "text"{...register("city", { required: true })}
           placeholder = "Lagos"
        />
        {errors.city && <p>City is required</p>}
      </FieldContainer>

      <FieldContainer>
        <label>Country</label>
        <input type = "text"{...register("country", { required: true })}
           placeholder = "Nigeria"
        />
        {errors.city && <p>Country is required</p>}
      </FieldContainer>
    </Wrapper>
    )
}

export default AddressForm;