import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const AccBtns = () => {
    const { t } = useTranslation()
    return(
        <div id="acc-div">
            <Link to="/register">{t('register')}</Link>
            <p>|</p>
            <Link to="/signin">{t('signin')}</Link>
        </div>
    )
}

export default AccBtns