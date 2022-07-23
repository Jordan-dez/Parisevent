import { useState, useEffect } from 'react'
import AboutUS from '../../Components/AboutUs/AboutUS'
import EventCard from '../../Components/EventCard/EventCard'
import Hearder from '../../Components/Header/Hearder'

const Home = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lastEvent, setLastEvent] = useState(null);

    /*
        Appel à l'API
    */
    useEffect(() => {
        setLoading(true);
        fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20desc&rows=1`)
        .then(result => result.json())
        .then((data) =>{
            setLastEvent(data.records[0].record)
            setLoading(false)
            console.log("data",data.records[0].record.fields);
        }).catch((err) =>setError(err));
    }, [])

    console.log("lastevent", lastEvent);
    return (
        <>
            <Hearder />
            <main className='container'>
                <AboutUS />
                <section>
                    <h2 className='text-uppercase'>Dernier évènement publié</h2>
                    <div className="d-flex">
                        {
                            error ? <div className="error">{error}</div> : null
                        }
                        {
                            loading ? <div className="loader">Loading...</div> : null
                        }
                        {
                             lastEvent && <EventCard data={lastEvent} />
                            
                        }
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home