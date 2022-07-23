import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { formatDate, RemoveTag } from '../../Service/Helpers/FunctionsHelper';
import StyleEventCard from './EventCard.module.css';
import { Link } from "react-router-dom";

function EventCard({ data }) {
    // const [day, month, year] =formatDate(data.date_start,"CARD_EVENT");
    return (
        <Card className={`${StyleEventCard.card} position-relative`}>
            <Card.Img variant="top"
                src={data.fields.cover_url}
                className={`${StyleEventCard.cardImg}`}
                alt={data.fields.cover_alt}
                title={data.fields.cover_alt}
            />
            {/* <div className={`${StyleEventCard.cardDate}`}>
                <span className='d-block m-auto fs-1'>{day}</span>
                <span>{month},{year}</span>
            </div> */}
            <Card.Body className='text-white'>
                <Card.Title className='fs-4'>{RemoveTag(data.fields.title, 2)}</Card.Title>
                <Card.Text>
                    {RemoveTag(data.fields.description, 30)}
                </Card.Text>
                <Link className={` btn text-white ${StyleEventCard.btnCard}`} to={`/event/${data.id}`}>En savoir plus</Link>
            </Card.Body>
        </Card>
    );
}

export default EventCard;