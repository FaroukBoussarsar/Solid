import Head from "next/head"
import Navbar from "./Navbar"


const Layout = (props) => {
    return (<div>
        <Head>
            <title>BitzPrice</title>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
    )
}
export default Layout