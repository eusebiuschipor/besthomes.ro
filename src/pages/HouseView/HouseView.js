import React from 'react';
import { useParams } from "react-router-dom";

const HouseView = () => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    const [data, setData] = React.useState([]);
    const houseId = parseInt(useParams().id);

    React.useEffect(() => {
        setLoading(true);
        fetch('/houses.json')
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            data.forEach(house => {
                if (house.id === houseId) {
                    setData(house)
                }
            });
        })
        .catch((e) => {
            setLoading(false);
            setError('fetch failed');
        });
    }, []);

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== '') {
        return <p>ERROR: {error}</p>;
    }

    return (
        <React.Fragment>
            <div>
                <div className="row house">
                     <div className="col-md-7">
                         <img src={`../${data.photo}`} 
                            alt="" 
                            className="featuredHouseMainImage" />
                    </div>
                    <div className="col-md-5">
                        <p className="title"><strong>{data.title}</strong></p>
                        <p className="price">{data.price}</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HouseView;