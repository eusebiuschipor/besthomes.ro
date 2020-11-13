import React from "react";
import Header from '../components/Header/Header.js';
import HouseFilter from '../components/HouseFilter/HouseFilter.js';
import Homepage from '../pages/Homepage/Homepage.js';
import Results from '../pages/Results/Results.js';
import HouseView from '../pages/HouseView/HouseView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      featuredHouse: {
        id: null,
        address: null,
        country: null,
        description: null,
        price: null,
        photo: null
      },
      cities: [],
      filteredHouses: null,
      city: null, 
      houses: null
    }
  }

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
    .then(response => response.json())
    .then(houses => {
      this.houses = houses;
      this.determineFeaturedHouse();
      this.determineUniqueCities();
      this.setState({ houses });
    });
  }

  determineFeaturedHouse = () => {
    if (this.houses) {
      const randomIndex = Math.floor(Math.random() * this.houses.length);
      const featuredHouse = this.houses[randomIndex];
      this.setState({ featuredHouse });
    }
  }

  determineUniqueCities = () => {
    const cities = this.houses 
      ? Array.from(new Set(this.houses.map(h => h.city)))
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
      <div className="container">
        <Router>
          <Header subtitle="Cele mai bune proprietăţi imobiliare din Romania" />
          <HouseFilter cities={this.state.cities} 
            filterHouses={this.filterHouses}
            setCityFilter={this.setCityFilter} />
          <Switch>
            <Route exact path="/">
              <Homepage house={this.state.featuredHouse} />
            </Route>
            <Route path="/rezultate">
              <Results city={this.state.city} 
                filteredHouses={this.state.filteredHouses} />
            </Route>
            <Route path="/proprietate/:id">
              <HouseView houses={this.state.houses} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

