import React from "react";
import './AddHouse.css';
import { useHistory } from "react-router-dom";
import HouseType from '../../components/HouseType/HouseType.js';
import AdType from '../../components/AdType/AdType.js';

function AddHouse(props) {
    const [title, setTitle] = React.useState("");
    const [city, setCity] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [usableArea, setUsableArea] = React.useState("");
    const [houseType, setHouseType] = React.useState("");
    const [houseTypes, setHouseTypes] = React.useState("");
    const [adType, setAdType] = React.useState("");
    const [adTypes, setAdTypes] = React.useState("");
    const history = useHistory();

    React.useEffect(() => {
        if (props.cities.length) {
            setCity(parseInt(props.cities[0].id));
        }

        if (props.houseTypes.length) {
            setHouseType(parseInt(props.houseTypes[0].id));
        }

        if (props.adTypes.length) {
            setAdType(parseInt(props.adTypes[0].id));
        }
    }, [props.cities, props.houseTypes, props.adTypes]);

    React.useEffect(() => {
        let houseTypes = null;

        if (props.houseTypes.length) {
            houseTypes = props.houseTypes.map(house =>
                <HouseType key={house.id.toString()}
                    houseType={houseType}
                    handleHouseTypeChange={handleHouseTypeChange}
                    house={house} />);

            setHouseTypes(houseTypes);
        }
    }, [houseType, props.houseTypes]);

    React.useEffect(() => {
        let adTypes = null;

        if (props.adTypes.length) {
            adTypes = props.adTypes.map(currentAd =>
                <AdType key={currentAd.id.toString()}
                    adType={adType}
                    handleAdTypeChange={handleAdTypeChange}
                    currentAd={currentAd} />);

            setAdTypes(adTypes);
        }
    }, [adType, props.adTypes]);
    
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
                photo: '',
                houseType: houseType,
                adType: adType,
                usableArea: usableArea,
                userId: localStorage.getItem('userId')
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

    const handleAdTypeChange = (event) => {
        setAdType(parseInt(event.target.id));
    }

    const handleHouseTypeChange = (event) => {
        setHouseType(parseInt(event.target.id));
    }

    const handleDescriptionChange = (event) => {
        let description = event.target.value;
        setDescription(description);
    }

    const handlePriceChange = (event) => {
        let price = event.target.value;
        setPrice(price);
    }

    const handleUsableAreaChange = (event) => {
        let usableArea = event.target.value;
        setUsableArea(usableArea);
    }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 section-t8">
                    <div className="row">
                        <h1 className="title-single text-center title-form">
                            Pasul 1: Adaugă anunţ
                        </h1>
                    </div>
                    <div className="row input-group">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            {houseTypes}
                        </div>
                    </div>
                    <div className="row input-group">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            {adTypes}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={(e)=>_handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="title" 
                                                className="form-control form-control-lg form-control-a" 
                                                placeholder="Titlu" 
                                                data-rule="minlen:4" 
                                                data-msg="Te rugăm să introduci minim 4 caractere!"
                                                onChange={handleTitleChange} />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <select className="form-control form-control-lg form-control-a"
                                                onChange={handleCityChange}>
                                                {props.cities.map((c) => <option key={c.id} value={c.id}>{c.city}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="price" 
                                                className="form-control form-control-lg form-control-a" 
                                                placeholder="Preţ"
                                                onChange={handlePriceChange} />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="usableArea" 
                                                className="form-control form-control-lg form-control-a" 
                                                placeholder="Suprafaţă utilă"
                                                onChange={handleUsableAreaChange} />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="description" 
                                                className="form-control" 
                                                cols="45" 
                                                rows="8" 
                                                data-rule="required" 
                                                data-msg="Te rugăm sa adaugi o descriere" 
                                                placeholder="Descriere"
                                                onChange={handleDescriptionChange}>
                                            </textarea>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" 
                                            className="btn btn-a"
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