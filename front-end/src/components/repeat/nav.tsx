import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import AccBtns from "../buttons/accBtns"

type NavProp = {
    id: string
}

const Nav = ({ id }: NavProp) => {
    const { t } = useTranslation()
    return(
        <ul id={id}>
            <AccBtns />
            <li><Link to=''>{t('prediction')}</Link></li>
            <li><Link to=''>{t('results')}</Link></li>
            <li><Link to=''>{t('schedule')}</Link></li>
            <li><Link to=''>{t('grid')}</Link></li>
            <li><Link to=''>{t('home')}</Link></li>
        </ul>
    )
}

export default Nav