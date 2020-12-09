import React from 'react';
import ArticleRow from '../ArticleRow/ArticleRow.js';

function LatestArticles(props) {
    let articleRows = null;

    if (props.articles) {
        articleRows = props.articles.map(article =>
            <ArticleRow key={article.id.toString()}
                article={article} />);
    }

    return (
        <React.Fragment>
            <div className="container home-section">
                <h2 className="title-a">Articole recente:</h2>
                <div className="row">
                    {articleRows}
                </div>
            </div>
        </React.Fragment>
    );
}

export default LatestArticles;