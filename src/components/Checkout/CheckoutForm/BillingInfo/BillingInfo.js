import {
  Wrapper,
  FieldContainer
} from "./BillingInfo.styled"


const BillingInfo = ({ register, errors }) => {
  
  return (
    <Wrapper>
      <h4>BILLING DETAILS</h4>
      <FieldContainer>
      <label>Name</label>
        <input {...register("fullName", { required: true })} 
        placeholder = "Ojoge Moses"
        />
        {errors.fullName?.type === 'required' && <p>Fullname is required</p>}
      </FieldContainer>
      
      <FieldContainer>
        <label>Email Address</label>
        <input  {...register("mail", { required: <p>Email Address is required</p> })}
          placeholder = "user@gmail.com"
        />
        <p>{errors.mail?.message}</p>
      </FieldContainer>
      
      <FieldContainer>
        <label>Phone Number</label>
        <input type = "number"{...register("phoneNumber", { required: true })}
           placeholder = "09013583426"
        />
        {errors.phoneNumber && <p>Phone Number is required</p>}
      </FieldContainer>

    </Wrapper>
    )
}

export default BillingInfo;