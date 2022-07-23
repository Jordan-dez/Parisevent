import React, { useState } from 'react'
import ListEventCard from '../../Components/ListEventCard/ListEventCard';
import NavBar from '../../Components/NavBar/NavBar'
import SeachBar from '../../Components/SearchBar/SeachBar'



const Search = () => {

  /*
    Déclaration et initialisation des states
*/
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  /***
   * fonction permettant passée en propos de au composant SearchBar afin de manipuler  le imput
   */
  const handleInput = (e) => {
    setSearchValue(e.target.value);

  };
  // const { loading, error, lastEvent } = FetchLastEvent(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=${searchValue}`)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ok");
    console.log("search", searchValue);
    setLoading(true);
    return await fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        setEvents(data.records)
        console.log("retourned data", data.records);
        setSearchValue("")
        setLoading(false)
        console.log(searchValue);
      })
      .catch(err => setError(err));


  };
  return (
    <>
      <NavBar />
      <main>
        <SeachBar
          placeholder="rechercher un évènement sur Paris ..."
          handleSubmit={handleSubmit}
          handleInput={setSearchValue}
        />
        {error ? error : null}
        {loading ? <div>loading...</div> : null}
        {events && <> {events.length === 0 ? <div className="text-danger">pas de résultat</div>:<ListEventCard allEvent={events} /> }</>}
        {console.log(events.length===0)}
      </main>
    </>
  )
}
export default Search