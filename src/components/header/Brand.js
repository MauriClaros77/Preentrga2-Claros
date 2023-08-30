import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Gaming Hard" title="Gaming Hard"></img>
        </Link>
    )
}

export default Brand;