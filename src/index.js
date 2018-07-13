import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var WhichPage = true;

class Flush extends React.Component {
  render() {
    if (this.props.work) {
      return (
        <iframe
          src="https://www.youtube.com/embed/hwxNVnPKaPE?autoplay=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      );
    } else {
      return <div />;
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doWork: false,
      page: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.doWork) {
      this.setState({ doWork: false });
    } else {
      this.setState({ doWork: true });
    }
  }

  

  render() {
    return (
      <div className="body">
        <h1> The World&#39;s Smartest Toilet </h1>
        <div>
          <button
            className="Faqdiv"
            onClick={this.props.changeState}
          >
            FAQS
          </button>
        </div>

        <img
          src="https://i.pinimg.com/236x/05/a9/de/05a9dec69dc515f257581cd865d6cdfd--toilet.jpg"
          alt="A Modern Toilet"
          width="250"
        />
        <div>
          <button onClick={this.handleClick}>The sound of your DREAMS!</button>
          <Flush work={this.state.doWork} />
        </div>
        <div>
          <h2>
            {" "}
            This state of the art toilet has seat heaters and can stay clean by
            itself without using any chemicals.
          </h2>
        </div>
        <div>
          <a
            href="https://www.faucetdirect.com/toto-ms992cumfg-neorest-700h-one-piece-elongated-1-0-gpf-toilet-bidet-with-cyclone-flush-system/p3026370?CAWELAID=120135430002243445&source=gg-gba-pla_3026370!c945255824!a52594401252!dc!ng&gclid=Cj0KCQjw-JvaBRDGARIsAFjqkkrHI3B08XrJihXRZvg_L5jhGiOko5rpq5IWt5wWIBdfMZgDO5tLrWMaAnRcEALw_wcB"
            target="_blank"
          >
            <button>Click here to order now for $4760!</button>
          </a>
        </div>
        <img
          src="https://vignette.wikia.nocookie.net/villains/images/1/19/0ab6facb0d8f622366a7bc939b134149.png/revision/latest?cb=20170608204042"
          alt="Captain Underpants's Greatest Enemy..."
          width="100"
        />
      </div>
    );
    }
  }

class FAQ extends React.Component {
  render() {
    return (
      <div className="body">
        <h3>Q: How much does the toilet cost?</h3>
        <h3>A:The World's Smartest Toilet is $4760</h3>
        <h3>Q:Should I buy the World's Smartest Toilet? </h3>
        <h3>A:Yes</h3>
        <button
          onClick={this.props.changeState}
        >
          Go Back
        </button>
      </div>
    );
  }
}


class App extends React.Component {
  state = {
    page: 0
  }

  goToFAQ = () => {
    this.setState({
      page: 1
    })
  }

  goToHome = () => {
    this.setState({
      page: 0
    })
  }

  getCurrentPage() {
    if (this.state.page === 0) {
      return <Home changeState={this.goToFAQ} />
    }
    else {
      return <FAQ changeState={this.goToHome} />
    }
  }

  render() {
    return(
      <div>
        {this.getCurrentPage()}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
