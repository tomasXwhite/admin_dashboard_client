import "../../App.scss"
import { NavLink, Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"




export default function Sidebar() {

    return (

        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to='/home' exact className="text-dark rounded py-2 2-100 d-inline-block px-3" activeClassName='active'><FaIcons.FaHome className="me-3" />Home</NavLink>
                </li>
                <li>
                    <NavLink to='/option1' exact className="text-dark rounded py-2 2-100 d-inline-block px-3" activeClassName='active'><FaIcons.FaRegChartBar className="me-3" />option 1</NavLink>
                </li>
                <li>
                    <NavLink to='/option2' exact className="text-dark rounded py-2 2-100 d-inline-block px-3" activeClassName='active'>option 2</NavLink>
                </li>
            </ul>
        </div>

    )


}