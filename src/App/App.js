import React from "react";
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Homepage from '../pages/Homepage/Homepage.js';
import Results from '../pages/Results/Results.js';
import HouseView from '../pages/HouseView/HouseView.js';
import ArticleView from '../pages/ArticleView/ArticleView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      featuredHouses: [],
      cities: [],
      filteredHouses: null,
      city: null, 
      houses: null,
      articles: null,
      latestArticles: null
    }
  }

  componentDidMount() {
    this.fetchHouses();
    this.fetchArticles();
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(response => response.json())
    .then(houses => {
      this.houses = houses;
      this.determineFeaturedHouses();
      this.determineUniqueCities();
      this.setState({ houses });
    });
  }

  fetchArticles = () => {
    fetch('/articles.json')
    .then(response => response.json())
    .then(articles => {
      let latestArticles = [];
      
      for (let i = 0; i < 3; i++) {
        latestArticles.push(articles[i]);
      }

      this.setState({ articles });
      this.setState({ latestArticles });
    });
  }

  determineFeaturedHouses = () => {
    const usedIndexes = [];
    const numberOfFeaturedHouses = 9;
    const featuredHouses = [];
    let okIndex = false;
    let randomIndex = null;

    if (this.houses) {
      for (let i = 0; i < numberOfFeaturedHouses; i++) {
        do {
          okIndex = true;
          randomIndex = Math.floor(Math.random() * this.houses.length);
          for (let j = 0; j < usedIndexes.length; j++) {
            if (usedIndexes[j] === randomIndex) {
              okIndex = false;
            }
          }
        } while (!okIndex);

        usedIndexes.push(randomIndex);
        featuredHouses.push(this.houses[randomIndex]);
      }

      this.setState({ featuredHouses });
    }
  }

  determineUniqueCities = () => {
    const cities = this.houses 
      ? Array.from(new Set(this.houses.map(h => h.city))).sort()
      : [];
    this.setState({ cities });
    const city = cities[0];
    this.setState({ city });
  }

  setCityFilter = (city) => {
    this.setState({ city });
  }

  filterHouses = () => {
    const filteredHouses = this.houses.filter((h) => h.city === this.state.city);
    this.setState({ filteredHouses });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage cities={this.state.cities} 
                filterHouses={this.filterHouses}
                setCityFilter={this.setCityFilter}
                houses={this.state.featuredHouses}
                articles={this.state.latestArticles} />
            </Route>
            <Route path="/rezultate">
              <Results city={this.state.city} 
                filteredHouses={this.state.filteredHouses} />
            </Route>
            <Route path="/proprietate/:id">
              <HouseView />
            </Route>
            <Route path="/articol/:id">
              <ArticleView />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

