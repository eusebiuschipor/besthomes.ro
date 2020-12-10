import React from "react";
import { useParams } from "react-router-dom";

const ArticleView = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState([]);
  const articleId = parseInt(useParams().id);

  React.useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_SERVER_URL + 'post/articles.php')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        data.forEach((article) => {
          if (parseInt(article.id) === articleId) {
            setData(article);
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
                  <img src={`../articles/${data.image}`} alt="" />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-12 col-lg-12 section-md-t3">
                  <div className="property-description">
                    <p className="description color-text-a">
                      {data.content}
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

export default ArticleView;
