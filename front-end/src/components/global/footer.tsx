import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation()

    return(
        <footer>
            <div>
                <Link to='/'><img src="/src/assets/logos/png/logo_white.png" alt="logo" /></Link>
                <div>
                    <nav>
                        <div>
                            <ul>
                                <li><Link to="">{t('legalNotice')}</Link></li>
                                <li><Link to="">{t('termUse')}</Link></li>
                                <li><Link to="">{t('privaciyPol')}</Link></li>
                                <li><Link to="">{t('cookie')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><Link to="">Contact</Link></li>
                                <li><Link to="">FAQ</Link></li>
                                <li><Link to="">{t('home')}</Link></li>
                                <li><Link to="">{t('login')}</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <p>{t('footer1')}</p>
                    <p>{t('footer2')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 