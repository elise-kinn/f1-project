import { CgDarkMode } from "react-icons/cg"; //dark mode icon
import { IoSettingsSharp } from "react-icons/io5"; //settings icon
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import AccBtns from "../buttons/accBtns"; // Account buttons
import TranslateBtn from "../buttons/translateBtn"; // translate btn

const Header = () => {
    const { t } = useTranslation();

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
                        <ul>
                            <li><Link to=''>{t('prediction')}</Link></li>
                            <li><Link to=''>{t('results')}</Link></li>
                            <li><Link to=''>{t('schedule')}</Link></li>
                            <li><Link to=''>{t('grid')}</Link></li>
                            <li><Link to=''>{t('home')}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header 