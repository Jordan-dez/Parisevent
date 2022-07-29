import React, { useState, useEffect } from 'react'
import EventCard from '../../Components/EventCard/EventCard'
import ListEventCard from '../../Components/ListEventCard/ListEventCard'

const Favorite = () => {
    const [favEventList, setFavEventList] = useState([])
    /**
     * récupérer les events depuis le localStorage
     * 
     */
    useEffect(() => {
        if (localStorage.getItem('EventFavorite')) {
            const favorites = localStorage.getItem('EventFavorite')
            setFavEventList(JSON.parse(favorites))

        }
    }, [])
    return (
        <div>
            {
                favEventList && favEventList.length === 0 ?
                    <p>pas d'évènement mis en favoris </p> :
                    <>
                    {
                        favEventList.map(eachEvent =><EventCard data={eachEvent}/>)
                    }
                        {/* <ListEventCard  allEvent={favEventList}/> */}
                    </>
            }
        </div>
    )
}

export default Favorite