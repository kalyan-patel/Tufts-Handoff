import { useNavigate, generatePath } from 'react-router-dom'

import couch_pic from './couch.jpeg'
import './Card.css'

function Card(props){

    const navigate = useNavigate();

    const handleClick = () => {
        const path = generatePath("/listings/:id", { id: props.id })
        navigate(path);
    }

    return(
        <div className="card" onClick={handleClick}>
            <img src={couch_pic} alt="this is sample"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-desc">{props.description}</p>
            <p className="card-price">${props.price}</p>
        </div>
    );
}

export default Card