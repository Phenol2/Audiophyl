import { HomeWrapper } from "./Home.styled"

import First from "./First/First"
import Second from "./Second/Second"
import Third from "./Third/Third"
import Fourth from "./Fourth/Fourth"
import Fifth from "./Fifth/Fifth"
import Sixth from "./Sixth/Sixth"

const Home = () => {
  return (
    <HomeWrapper>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
    </HomeWrapper>
    )
}

export default Home