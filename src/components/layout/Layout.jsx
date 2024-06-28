import { Footer } from "./Footer/Footer"
import { Navbar } from "./Navbar/Navbar"


// eslint-disable-next-line react/prop-types
export const Layout =({children})=>{

    return(
        <>
            <Navbar/>
            <main className="container-fluid">{children}</main>
            <Footer/>
        </>
    )
}