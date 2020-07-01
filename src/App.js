import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  // state- global object,contains most imp thngs abt the sapecific comp
  state = {
    advice: " ",
  };

  //componentdidmount is a lifecycle method
  //Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI.

  componentDidMount() {
    console.log("componet did mount");
    //API calls done in componentdidmount
    this.fetchAdvice(); // why this????
  }

  //funcn for getting advices,axios used to make http reqsts,see notes
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="advice"> {advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME SOME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
