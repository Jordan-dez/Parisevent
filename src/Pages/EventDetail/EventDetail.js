import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineEuro } from "react-icons/ai";

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
                setLoading(false);
            }).catch(error => setError(error));
    }, [id])
    return (
        <>
            <>
                {
                    error ? <p>{error}</p> : null
                }
                {
                    loading ? <p>loading ...</p> : null
                }


                {event &&
                    <Container>
                        <h1 className='text-center text-uppercase'>{event.fields.title}</h1>
                        <Row className='m-3'>
                            <section className='col-lg-7'>
                                <article className='d-flex flex-column'>
                                    <img src={event.fields.cover_url} alt={event.fields.cover_alt} />
                                    <p dangerouslySetInnerHTML={{
                                        __html: event.fields.lead_text
                                    }} />
                                    <div dangerouslySetInnerHTML={{
                                        __html: event.fields.description
                                    }} />
                                </article>
                            </section>
                            <section className='col-lg-4 border'>
                                <h3 className="text-uppercase text-center">
                                    infos pratiques
                                </h3>
                                <div className='d-flex just align-items-center justify-content-center'>
                                    {
                                        event.fields.address_name && event.fields.address_street && event.fields.address_zipcode ? <>
                                            <FaMapMarkerAlt />
                                            <p>
                                                <strong>{event.fields.address_name}</strong>
                                                <br />
                                                {event.fields.address_street}&nbsp;{event.fields.address_zipcode}
                                            </p>
                                        </>
                                            :
                                            null
                                    }
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    {
                                        event.fields.date_description ?
                                            <>
                                                <FaRegCalendarAlt className='align-self-start' />
                                                <p>

                                                    <strong  // datetime={event.fields.date_description}
                                                        dangerouslySetInnerHTML={{
                                                            __html: event.fields.date_description
                                                        }}
                                                    />
                                                </p>
                                            </>
                                            :
                                            null
                                    }
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    {
                                        event.fields.price_type || event.fields.price_detail ?
                                            <>
                                                <AiOutlineEuro  className='align-self-start'/>
                                                <p>
                                                    <strong>
                                                        {
                                                            event.fields.price_type
                                                        }
                                                    </strong><br />
                                                    {
                                                        event.fields.price_detail
                                                    }

                                                </p>
                                            </>
                                            :
                                            null
                                    }
                                </div>
                            </section>
                        </Row>
                    </Container>
                }
                {console.log(event)}
            </>
        </>

    )
}

export default EventDetail