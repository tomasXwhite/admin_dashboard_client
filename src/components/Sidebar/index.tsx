import "../../App.scss"
import { Link } from "react-router-dom"




export default function Sidebar() {

    return (

        <div className="sidebar">
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="option1">option 1</Link>
                </li>
                <li>
                    <Link to="option2">option 2</Link>
                </li>


            </ul>
        </div>

    )


}