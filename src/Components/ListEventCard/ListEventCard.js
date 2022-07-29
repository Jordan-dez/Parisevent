import EventCard from "../EventCard/EventCard"
const ListEventCard = ({ allEvent }) => {
  console.log("allEvent", allEvent);
  return (
    <>
      {console.log("all event", allEvent)}
      <h2 className="text-center">Résultat de la recherche {allEvent.length}</h2>
      <section className="d-flex justify-content-center flex-wrap">
        {allEvent && allEvent.map(eachEvent =>
          <EventCard
            key={eachEvent.record.id}
            data={eachEvent.record} />
        )}
        {/* {console.log("eachEvent",eachEvent)} */}
      </section>
    </>
  )
}

export default ListEventCard