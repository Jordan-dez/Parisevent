import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Hearder from '../../Components/Header/Hearder';
import NavBar from '../../Components/NavBar/NavBar';

const EventDetail = () => {
    /**
     * Déclaration des states
     */
    const [error, setError] = useState(null);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);


    /**
     *
     * Récupération de l'id de l'event sur lequel on a cliqué sur le button "en savoir plus"
    */
    const params = useParams();
    const { id } = params

    useEffect(() => {
        /**
         * requete au niveau l'api en lui envoyant l'ID de l'event afin d'avoir les données
         * concernant l'event courant
         */
        setLoading(true);
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data.record);
                setEvent(data.record)
            })
    }, [id])
    return (
        <>
            <NavBar />
            <main>

                {event &&
                    <div className='row'>

                        <section className='col-lg-7'>
                            {console.log(event)}
                            <article>
                                <h1>{event.fields.title}</h1>
                                <img src={event.fields.cover_url} alt={event.fields.cover_alt} />
                                <p dangerouslySetInnerHTML={{
                                    __html: event.fields.description,
                                }} />
                            </article>
                        </section>
                    </div>
                }
            </main>
        </>

    )
}

export default EventDetail