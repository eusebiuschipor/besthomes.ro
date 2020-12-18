import React from 'react';
import HouseRow from '../../components/HouseRow/HouseRow.js';
import { useParams } from "react-router-dom";

function Results() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [data, setData] = React.useState([]);
    const city = useParams().city;
    const houseType = useParams().type;

    React.useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_SERVER_URL + 'post/houses.php')
        .then((response) => response.json())
        .then((data) => {
            const houses = [];
            setLoading(false);
            data.forEach((house) => {
                if (house.city === city &&
                    house.house_type === houseType) {
                    houses.push(house);
                }
            });
            setData(houses);
        })
        .catch((e) => {
            setLoading(false);
            setError("fetch failed");
        });
    }, []);

    if (loading) {
        return <p>loading..</p>;
    }

    if (error !== "") {
        return <p>ERROR: {error}</p>;
    }

    let houseRows = null;

    if (data) {
        houseRows = data.map(house =>
                <HouseRow key={house.id.toString()} 
                    house={house} />);
    } else {
        houseRows = 'Va rugam selectati orasul pentru care doriti sa vedeti proprietati.'
    }

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row featured-houses-row">
                        {houseRows}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Results;

