import imgHeader from '../images/header.png'

const Header = () => {
    return(
        <div className="header-container">
            <img src={imgHeader} alt="" className='img-header'/>
        </div>
    )
}

export default Header;