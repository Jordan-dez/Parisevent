import { useState, useEffect } from "react";


const FavoritesButton = ({data}) => {

    console.log("favoritesButton", data);

    const [save, setSave] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("EventFavorite")) {
            const saveEvent = JSON.parse(localStorage.getItem("EventFavorite"));
            if (saveEvent.length !== 0) {
                saveEvent.push((value) => {
                    if (value.id === data.id) {
                        setSave(true);
                    }
                });
            }
        }

    }, [data]);

    /**
     * 
     * ajouter l'évènement dans le localstorage
     */
    const handleAddFavoriteEvent = (data) => {
        console.log("data added",data);
        //pusher un event dans le local storage
        if (localStorage.getItem("EventFavorite")) {
          /**
           * si la cle EventFavorite existe dejà au niveau du localstorage onfait une copie dans la constante
           *  saveEvent puis on push la nouvelle data passée en props avant l'ajouter de nouveau au localstorage
           * pour evité de perdre les events existants dans le localstorage
           * SINON on crée EventFavorite  en lui passant la data dans un tableau stringuifier dans le 
           * localstorage
           */
            const saveEvent = JSON.parse(localStorage.getItem("EventFavorite"));
            saveEvent.push(data);
            localStorage.setItem("EventFavorite", JSON.stringify(saveEvent));
        } else {
            localStorage.setItem("EventFavorite", JSON.stringify([data]));
        }
        setSave(true);
    };

    /**
     * 
     * Supprimer l'évènement dans le local storage
     * 
     */
    const handleDeleteFavoriteEvent = (data) => {
      console.log("data deleteEvent",data);
        /**
         * on récupere dans saveEvent tous les events existant dans  EventFavorite 
         * sur saveEvent on applique la methode filter pour retourner les events dont les id ne correspondent
         * pas à l'id de l'event passé en parametre.ces derniers sont ensuite ajouter de nouveau au local storage
         */
        const saveEvent = JSON.parse(localStorage.getItem("EventFavorite"));
        const deleteEvent = saveEvent.filter((value) => value.id !== data.id);
        localStorage.setItem("EventFavorite", JSON.stringify(deleteEvent));
        setSave(false);

    };

    return (
        <div>
     {save ? (
        <span
          className="heart"
          onClick={() => handleDeleteFavoriteEvent(data)}
          style={{ color: 'red' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </span>
      ) : (
        <span
          className="heart"
           onClick={() => handleAddFavoriteEvent(data)}
          style={{ color: 'red' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </span>
      )}
    </div>
    )
}

export default FavoritesButton