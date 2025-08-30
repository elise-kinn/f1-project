// icons
import { CgDarkMode } from "react-icons/cg"; 
import { IoSettingsSharp } from "react-icons/io5"; 
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


import { Link } from 'react-router-dom'
import { useState } from "react";

import AccBtns from "../buttons/accBtns"; // Account buttons
import TranslateBtn from "../buttons/translateBtn"; // translate btn
import Nav from "../repeat/nav";

const Header = () => {
    const [ open, setOpen ] = useState(false)
    
    return(
        <header>
            <div id="header-up">
                <div>
                    <div>
                        <CgDarkMode /> 
                        <TranslateBtn /> 
                    </div>

                    <div>
                        <Link to='/settings'><IoSettingsSharp /></Link>
                        <AccBtns />
                    </div>
                </div>
            </div>
            <div id="header-down">
                <div>
                    <Link to='/'><img src="/src/assets/logos/png/logo_white.png" alt="logo" /></Link>
                    <nav>
                        <Nav id="desktop"/>
                        {open && <Nav id="mobile"/>}
                        <button onClick={ () => setOpen(!open)}>{open ? <RxCross2 /> : <FaBars />}</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header 