import { IconContext } from 'react-icons'
import { HiShoppingCart } from 'react-icons/hi'

const CartWidget = () => {
    return (
        <IconContext.Provider value={{ color: "withe", className: "global-class-name" }}>
            <div className='widget-container'>
                <HiShoppingCart />
                <span>3</span>
            </div>
        </IconContext.Provider>
    )
}

export default CartWidget;