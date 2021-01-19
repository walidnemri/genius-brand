import React from "react";
import "./styles.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cards">
        <img src={this.props.image} />
        <div className="description">
          <p className="title">{this.props.title}</p>
          <p className="categorie">{this.props.categorie}</p>
          <p className="price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
