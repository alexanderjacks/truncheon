import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { coins: [] }
  }

  componentDidMount() {
    console.log("m 0 u n t   $ u c c e $ $")
  }

  render(){
    axios.get("https://api.nomics.com/v1/prices?key=643698f1108812b938fe8a2d81983059&interval=1d,3d&quote-currency=USD", {
      crossdomain: true
    })
      .then(res => {
        const coins = res.data
        this.setState({coins})
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <h1>
            Top 100 Crypto . info
          </h1>
          <a
            className="App-link"
            href="https://j4cks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built By Jacks Consulting
          </a>
          <p>For the moment, enjoy ALL {this.state.coins.length} cryptos we know about, in A-Z order of symbol!
          </p>
        </header>
        <section>
          <ul>
            {this.state.coins.map(
              coin => <li key={coin.name}>
              <p>
                <span>{coin.currency}&nbsp;</span>
                ${coin.price}
              </p>
              </li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}