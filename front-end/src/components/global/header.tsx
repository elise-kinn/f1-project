import { CgDarkMode } from "react-icons/cg"; //dark mode icon
import { IoSettingsSharp } from "react-icons/io5"; //settings icon
import { Link } from 'react-router-dom'

import AccBtns from "../repeat/accBtns"; // Account buttons

const Header = () => {
    return(
        <header>
            <div id="header-up">
                <div>
                    <CgDarkMode />
                    <p>FR | EN</p>
                    <IoSettingsSharp />
                    <AccBtns />
                </div>
            </div>
            <div id="header-down">
                <div>
                    <img src="/src/assets/logos/png/logo_white.png" alt="logo" />
                    <nav>
                        <ul>
                            <li><Link to=''>Predictions</Link></li>
                            <li><Link to=''>Results</Link></li>
                            <li><Link to=''>Schedule</Link></li>
                            <li><Link to=''>Grid</Link></li>
                            <li><Link to=''>Home</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header 