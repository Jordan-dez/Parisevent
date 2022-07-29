import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SeachBar = ({ placeholder, handleSubmit, handleInput }) => {
    /**
     * composant servant de barre de recherche
     */

    return (
        <Form
            className="d-flex justify-content-center align-items-center m-2 w-75 m-auto"
             onSubmit={handleSubmit}
        >
            <Form.Control
                type="search"
                placeholder={placeholder}
                className="w-60 m-lg-2"
                aria-label="Search"
                onChange={(e)=>{handleInput(e.target.value)}}
            />
            <Button type='submit'>Rechercher</Button>
        </Form>
    )
}

export default SeachBar