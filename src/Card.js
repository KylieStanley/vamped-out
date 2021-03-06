import React, { Component } from 'react';
import './main.scss';

export default class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleState = () => {
    this.props.addToWatchList(this.props.episode)

    this.setState({
      clicked: true
    })
  }

  render() {
    if (this.props.episode.starring.includes('Willow')) {
      return (
        <li className="card">
          <div className="background" style={{ backgroundImage: `url(${this.props.episode.image})` }}></div>
          <div className="overlay"></div>
          <h3 className="episode-name">
            {
              this.props.episode.name
            }
          </h3>
          <h1 className="card-title">Buffy the Vampire Slayer</h1>
          <div className="caption">
            <h3>Season {this.props.episode.season}</h3>
            <h4 className="avg-rating">Average Rating: {this.props.episode.rating}</h4>
            <h4 className="death-count">Death Count: {this.props.episode.deathcount}</h4>
            <p>{this.props.episode.synopsis}</p>
            <div className="card-buttons">
              <a href={this.props.episode.url} target="_blank" className="imdb" data-tooltip="Watch Episode Here">
                <i className="fab fa-imdb"></i>
              </a>
              <a className="plus" data-tooltip="Add Episode to Watchlist">
                <i className="far fa-plus-square"onClick={this.handleState}></i>
              </a>
            </div>
          </div>
        </li>
      )
    } else {
      return (
        <li className="card">
          <div className="background" style={{ backgroundImage: `url(${this.props.episode.image})` }}></div>
          <div className="overlay"></div>
          <h3 className="episode-name">
            {
              this.props.episode.name
            }
          </h3>
          <h1 className="card-title">Angel</h1>
          <div className="caption">
            <h3>Season {this.props.episode.season}</h3>
            <h4 className="avg-rating">Average Rating: {this.props.episode.rating}</h4>
            <h4 className="death-count">Death Count: {this.props.episode.deathcount}</h4>
            <p>{this.props.episode.synopsis}</p>
            <div className="card-buttons">
              <a href={this.props.episode.url} target="_blank" className="imdb" data-tooltip="Watch Episode Here">
                <i className="fab fa-imdb"></i>
              </a>
              <a className="plus" data-tooltip="Add Episode to Watchlist">
                <i className="far fa-plus-square"onClick={this.handleState}></i>
              </a>
            </div>
          </div>
        </li>
      )
    }
  }
}