import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css'


export default function Navbar() {

    let logoURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    return (
        <div>

            <nav>
                <Link to={"/"}>
                    <img src={logoURL} width="120px" />
                </Link>
                <div>
                    <a href="">Men</a>

                    <a href="">Women</a>

                    <a href="">Electronics</a>

                    <a href="">Jewelry</a>

                </div>


            </nav>
            <Link to={'/products'}>
                <button>All Products</button>
            </Link>

        </div>
    )
}
