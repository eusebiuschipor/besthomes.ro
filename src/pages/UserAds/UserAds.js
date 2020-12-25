import React from 'react';
import HouseRow from '../../components/HouseRow/HouseRow.js';

function Results() {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_SERVER_URL + 'post/user_ads.php', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({
                userId: localStorage.getItem('userId')
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>loading..</p>;
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

