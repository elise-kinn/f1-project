import Title from "../components/repeat/titles"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

// Définitions des structures : data (provient de l'utilisateur) et feedback (provient du back)
interface FormData {  
  username: string;
  email: string;
  password: string;
  password2: string;
}

interface Feedback {
  type: "success-fb" | "error-fb"; // type d'erreur (pour scss)
  message: string;
}

const Register =  () => {
    const { t } = useTranslation() // système de traduction

    // useState() formData et feedback avec les structures créées
    const [ formData, setFormData ] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const [ feedback, setFeedback ] = useState<Feedback | null>(null)

    // fonction d'enregistrement des données de l'utilisateur dans formData à chaque changement dans l'input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // fonction appelée lors d'un e : changement dans l'input
        setFormData({ // modification de formData pour intégrer les information tapées par l'utilisateur sans perdre les inforamtions précédentes (...)
            ...formData, 
            [e.target.name]: e.target.value // propriété dynamique
        })
    }

    // fonction d'envoi des informations de l'utilisateur au back au clic submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/users/register", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await res.json() // récupération de la réponse du back

            if (res.ok) { // fonction de récupéation du feedback dans feedback
                // A FAIRE : Envoi à la page d'acceuil + message à l'accueil
                setFeedback({ type: "success-fb", message: data.message });
            } else { // message d'erreur 
                setFeedback({ type: "error-fb", message: data.message }); 
            }

        } catch (error) {
            console.error(error)
            alert("Erreur serveur")
        }
    }

    return(
        <main id="register">
            <img src="/src/assets/logos/png/logo_red.png" alt="logo" />
            <Title title={t('register')}/>

            {feedback && ( // affichage du feedback si existe, sinon null
                <p className={feedback.type === "success-fb" ? "success-fb" : "error-fb"}>
                    {t(feedback.message)}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    {/* <select name="" id="">
                        <option value="0">{t('titleSelection')}</option>
                        <option value="1">{t('titleM')}</option>
                        <option value="2">{t('titleF')}</option>
                        <option value="3">{t('titleA')}</option>
                    </select> */}
                    <label className='visually-hidden' htmlFor="username-input">{t('username')}</label>
                    <input id="username-input" type="text" placeholder={t('username')} name="username" value={formData.username} onChange={handleChange} />

                    <label className='visually-hidden' htmlFor="email-input">Email</label>
                    <input id="email-input" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />

                    <label className='visually-hidden' htmlFor="pw-input">{t('password')}</label>
                    <input id="pw-input" type="password" placeholder={t('password')} name="password" value={formData.password} onChange={handleChange} />

                    <label className='visually-hidden' htmlFor="pw2-input">{t('pwconfirm')}</label>
                    <input id="pw2-input" type="password" placeholder={t('pwconfirm')} name="password2" value={formData.password2} onChange={handleChange} />

                    <div id="rgpd-div">
                        <input id="rgpd-input" type="checkbox" onChange={handleChange} name="rgpd"/>
                        <label htmlFor="rgpd-input">{t('rgpd1')} <Link to=''>{t('rgpd2')}</Link></label>                        
                    </div>

                </div>
                <input type="submit" value={t('register').toUpperCase()} />
            </form>

            <div id="other-options">
                <Link to='/' className="left">{t('noSignin')}</Link>
                <p className="right">{t('alreadyAcc')} <Link to='/signin'>{t('signinHere')}</Link></p>
            </div>

        </main>
    )
}

export default Register