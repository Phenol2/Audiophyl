import { HamburgerWrapper, HamburgerLine } from "./Nav.styled"
 import { useContext } from "react"
 import ctx from "../../store/Storectx"




const Nav = () => {
  let { setIsNavOpen, isNavOpen } = useContext(ctx)
  return (
    <>
      <HamburgerWrapper  onClick = {() => setIsNavOpen(!isNavOpen)}>
        <HamburgerLine open = {isNavOpen}/>
        <HamburgerLine open = {isNavOpen} />
        <HamburgerLine open = {isNavOpen}/>
      </HamburgerWrapper>
    </>
    )
}

export default Nav