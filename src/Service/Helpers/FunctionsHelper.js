import moment from 'moment';
import 'moment/locale/fr'


export const RemoveTag = (str, length) => {
    let result = "";
    if (str === null || str === "") {
        return;
    } else {
        str = str.toString()
        result = str.replace(/(<([^>]+)>)/ig, '')
        return result.split(' ').slice(0, length).join(' ') + "..."
    }
}


/*cette fonction return la date en français dans différents format en fonction du composant dans lequel il a été

    appelé par exemple dans le composant EventCard 02 sept. 20 pour le 02 septembre 2020
*/
export const formatDate = (eventDate, placecalled) => {

    if (placecalled === "CARD_EVENT") {
        if(eventDate===null || eventDate === undefined)return;
        const [month, day, year] = moment(eventDate.split('T')[0]).format("MMM Do YY").split(' ');
        return [day, month, year]

    }
}
