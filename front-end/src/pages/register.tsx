import Title from "../components/repeat/titles"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Register =  () => {
    const { t } = useTranslation()
    return(
        <main id="register">
            <img src="/src/assets/logos/png/logo_red.png" alt="" />
            <Title title={t('register')}/>

            <form action="/">
                <div>
                    <select name="" id="">
                        <option value="0">{t('titleSelection')}</option>
                        <option value="1">{t('titleM')}</option>
                        <option value="2">{t('titleF')}</option>
                        <option value="3">{t('titleA')}</option>
                    </select>
                    <input type="text" placeholder={t('username')}/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder={t('password')}/>
                    <input type="password" placeholder={t('pwconfirm')}/>
                </div>
                <input type="submit" value={t('register').toUpperCase()} />
            </form>

            <div id="other-options">
                <Link to='/'>{t('noSignin')}</Link>
                <p>{t('alreadyAcc')} <Link to=''>{t('signinHere')}</Link></p>
            </div>

        </main>
    )
}

export default Register