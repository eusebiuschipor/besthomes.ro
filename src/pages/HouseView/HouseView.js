import React from "react";
import { useParams } from "react-router-dom";

const HouseView = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState([]);
  const houseId = parseInt(useParams().id);

  React.useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    setLoading(true);
    fetch(process.env.REACT_APP_SERVER_URL + 'post/houses.php')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        data.forEach((house) => {
          if (parseInt(house.id) === houseId) {
            setData(house);
          }
        });
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

  return (
    <React.Fragment>
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">{data.title}</h1>
                <span className="color-text-a">{data.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="property-single nav-arrow-b">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                id="property-single-carousel"
                className="owl-carousel owl-arrow gallery-property">
                <div className="carousel-item-b image-house-view">
                  <img src={`${process.env.REACT_APP_SERVER_URL}/uploads/${data.id}/1.png`} alt="" />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-5 col-lg-4">
                  <div className="property-price d-flex justify-content-center foo">
                    <div className="card-header-c d-flex">
                      <div className="card-title-c align-self-center">
                        <h5 className="title-c">{data.price}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="property-summary">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="title-box-d section-t4">
                          <h3 className="title-d">Sumar:</h3>
                        </div>
                      </div>
                    </div>
                    <div className="summary-list">
                      <ul className="list">
                        <li className="d-flex justify-content-between">
                          <strong>ID proprietate:</strong>
                          <span>{data.id}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Oraş:</strong>
                          <span>{data.city}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 section-md-t3">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Descriere:</h3>
                      </div>
                    </div>
                  </div>
                  <div className="property-description">
                    <p className="description color-text-a">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HouseView;
