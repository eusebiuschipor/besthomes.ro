import React from "react";
import './AddHouse.css';
import { useHistory } from "react-router-dom";

function AddHouse(props) {
    const [title, setTitle] = React.useState("");
    const [city, setCity] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const history = useHistory();
  
    const _handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_SERVER_URL + 'post/add-house.php', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({
                title: title,
                city: city,
                description: description,
                price: price,
                photo: ''
            }),
        })
        .then(response => response.json())
        .then(data => {
            history.push("/upload-images/" + data.response);
        });
    }

    const handleTitleChange = (event) => {
        let title = event.target.value;
        setTitle(title);
    }

    const handleCityChange = (event) => {
        let city = event.target.value;
        setCity(city);
    }

    const handleDescriptionChange = (event) => {
        let description = event.target.value;
        setDescription(description);
    }

    const handlePriceChange = (event) => {
        let price = event.target.value;
        setPrice(price);
    }
  
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-t8">
                    <div class="row">
                        <h1 class="title-single text-center title-form">
                            Pasul 1: Adaugă anunţ
                        </h1>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <form onSubmit={(e)=>_handleSubmit(e)}>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <input type="text" 
                                                name="title" 
                                                class="form-control form-control-lg form-control-a" 
                                                placeholder="Titlu" 
                                                data-rule="minlen:4" 
                                                data-msg="Te rugăm să introduci minim 4 caractere!"
                                                onChange={handleTitleChange} />
                                            <div class="validate"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <select className="form-control form-control-lg form-control-a"
                                            onChange={handleCityChange}>
                                            {props.cities.map((c) => <option key={c.id} value={c.id}>{c.city}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <div class="form-group">
                                        <input type="text" 
                                            name="price" 
                                            class="form-control form-control-lg form-control-a" 
                                            placeholder="Preţ"
                                            onChange={handlePriceChange} />
                                        <div class="validate"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea name="description" 
                                            class="form-control" 
                                            cols="45" 
                                            rows="8" 
                                            data-rule="required" 
                                            data-msg="Te rugăm sa adaugi o descriere" 
                                            placeholder="Descriere"
                                            onChange={handleDescriptionChange}>
                                        </textarea>
                                        <div class="validate"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" 
                                        class="btn btn-a"
                                        onClick={(e)=>_handleSubmit(e)}>Adaugă anunţul</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
    
export default AddHouse;