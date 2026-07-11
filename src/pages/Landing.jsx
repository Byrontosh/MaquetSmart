import About from "../components/about/About"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import Promotions from "../components/promotions/Promotions"
import Services from "../components/services/Services"

const Landing = ({ maquetas }) => {
    return (
        <>
            <Header />
            <Main />
            <About/>
            <Services maquetas={maquetas} />
            <Promotions />
        </>
    )
}

export default Landing