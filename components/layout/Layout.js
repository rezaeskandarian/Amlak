import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    const style = {minHeight:"700px"}
  return (
    <>
    <Header />
    <div style={style}>{children}</div>
    <Footer />
    </>
  )
}

export default Layout
