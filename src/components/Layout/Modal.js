import REACTDOM from "react-dom"
import ModalOverlay from "./ModalOverlay"


const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
    {REACTDOM.createPortal(<ModalOverlay>
      { children }
    </ModalOverlay>, portalElement)}
    </>
    )
}

export default Modal;