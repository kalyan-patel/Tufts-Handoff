import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// const router = require('../../server/routes/listings.js')


function ListingForm() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }
    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

    const navigate = useNavigate();

    function submit() {

        console.log("Submit pushed");
        fetch("/api/listings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price
            })
        });
        navigate("/")
        return;
    }

    return (
        <form className="main">
            <h2>New Listing:</h2>
            <div> 
                <label>Title: </label>
                <br></br>
                <input value={title} onChange={handleTitleChange}/>
            </div>
            <div> 
                <label>Description: </label>
                <br></br> 
                <input value={description} onChange={handleDescriptionChange}/>
            </div>
            <div> 
                <label>Price: </label>
                <br></br> 
                <label>$ </label>
                <input value={price} onChange={handlePriceChange}/>
            </div>
            <br></br>
            <form method="POST" action="/upload" enctype="multipart/form-data">
                <input type="file" name="image" />
                <input type="submit" />
            </form>
            <br></br>
            <button type="button" onClick={submit}>Submit</button>

        </form>
    )
}


export default ListingForm