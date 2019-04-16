import React, { Component } from 'react';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "1e2735fc9fdf7638b606cfad6e52068ab6d1922b6cdfd7950d768c5d372e04c9",
  secret: "cb6f12d85cb8aa9d500b8ba87e16c093a9d97ff781e877719dcf678735f83999"
})


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    };
  }


  componentDidMount() {
    unsplash.photos.getRandomPhoto()
      .then(toJson)
      .then(async json => {
        // let media = [json.]

        let media = await [json];
        console.log(media);
        this.setState({
          media
        })
      });
  }

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        {/* <img src={this.state.media} alt="" /> */}
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
