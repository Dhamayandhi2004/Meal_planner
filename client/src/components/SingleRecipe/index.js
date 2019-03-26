import React, { Component } from "react";
import "./style.css";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.meal.label ? (
          <>
            <h1>
              Meal:<span>{this.props.meal.label}</span>
            </h1>
            <img src={this.props.meal.image} alt={this.props.meal.label} />
            <a href={this.props.meal.url} target="_blank">
              Link to the recipe website
            </a>
            <h5>
              Prep time:<span>{this.props.meal.time} min</span>
            </h5>
            <h5>
              Calories:<span>{this.props.meal.calories} cal</span>
            </h5>
            <h5>Nutrition information:</h5>
            <ul>
              <li>
                Fat:<span>{this.props.meal.fat} g</span>
              </li>
              <li>
                Carbohydrate:<span>{this.props.meal.carb} g</span>
              </li>
              <li>
                Protein:<span>{this.props.meal.protein} g</span>
              </li>
            </ul>
            <h5>Ingredients:</h5>
            <ul>
              {this.props.meal.ingredients.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default SingleRecipe;