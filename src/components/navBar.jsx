import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="navBar_container">
            <h3>Rise a Plant</h3>
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar;