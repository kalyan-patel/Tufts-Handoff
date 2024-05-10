import { useEffect, useState } from 'react'
import Card from '../components/Card'

import '../styles.css'


function Main() {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch("/api/listings")
        .then(res => res.json())
        .then(data => setListings(data));
    }, []);
    
    function renderListings() {
        return listings.map((listing, i) => {
            return (
                <Card key={i} title={listing.title} description={listing.description}
                    price={listing.price} id={listing._id}/>
            );
        });
    }

    return(
        <div className="main">
            <h2>Listings: </h2>
            <span style={{backgroundColor: "lightgreen"}}>
                    <a href="/newlisting">Create New Listing</a>
            </span>
            <br></br>
            <div className="cards">
                {renderListings()}
            </div>
        </div>
    );
}


export default Main;