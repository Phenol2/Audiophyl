import {
  EmoneyWrapper,
  FieldContainer,
} from "./Emoney.styled"

const Emoney = ({ register, errors, payment }) => {
  return (
    <EmoneyWrapper payment = {payment}>
      <FieldContainer>
      <label>e-Money Number</label>
        <input type = "number" {...register("emoneyNum", { required: true })} 
        placeholder = "23456789"
        />
        {errors.emoneyNum?.type === 'required' && <p>e-Money Number is required</p>}
      </FieldContainer>
      
      <FieldContainer>
      <label>e-Money Pin</label>
        <input type ="number" {...register("emoneyPin", { required: true })} 
        placeholder = "1885"
        />
        {errors.emoneyPin?.type === 'required' && <p>e-Money Pin is required</p>}
      </FieldContainer>
      
    </EmoneyWrapper>
    )
}

export default Emoney;