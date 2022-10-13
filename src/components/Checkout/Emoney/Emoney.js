import {
  EmoneyWrapper,
  FieldContainer,
} from "./Emoney.styled"

import { motion, AnimatePresence } from "framer-motion"

const Emoney = ({ register, errors, payment }) => {
  return (
    <AnimatePresence>
    <EmoneyWrapper payment = {payment}
    as = {motion.div}
    initial = {{scale: 0}}
    animate = {{scale: 1}}
    transition = {{duration: 0.5}}
    exit = {{scale: 0}}
    >
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
    </AnimatePresence>
    )
}

export default Emoney;