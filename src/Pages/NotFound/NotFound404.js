import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='mt-5 container'>
            <article className='mt-5 d-flex align-items-center align-content-center justify-content-evenly'>
                <img src="assets/images/404error.png" alt="404 page introuvable" />
                <div className="w-50">
                    <h2 className="display-1 mb-5">Désolé !</h2>
                    <p>
                        La page que vous demandée a été volé par Chuck Norris . Nous n'osons pas lui demander de nous la restituer...
                    </p>
                    <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
                </div>
            </article>
        </section>
    )
}

export default NotFound