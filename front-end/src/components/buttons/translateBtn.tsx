import { useTranslation } from 'react-i18next'


const TranslateBtn = () => {
    const { i18n } = useTranslation()

    const changeLanguage = () => {
        const newLng = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(newLng)
    }

    return(
        <button id="translate-btn" onClick={changeLanguage}>FR | EN</button>
    )
}

export default TranslateBtn