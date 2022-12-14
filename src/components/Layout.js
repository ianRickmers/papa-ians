import Navbar from './Navbar'
import Footer from './Footer'
import Carro from './Carro'
const Layout = ({ children, cart, showCart, openCart, closeCart, cleanCart, deleteItem  }) => {
    return (
        <>
            {/*navBar*/}
            <Navbar openCart={openCart} cart={cart}/>
            <main>{children}</main>
            {/*footer*/}
            <Footer />
            {/*cart*/}
            <Carro cart={cart} show={showCart} closeCart={closeCart} clean={cleanCart} deleteI={deleteItem}/>
        </>
    )
}
export default Layout