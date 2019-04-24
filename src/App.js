import React, { Component } from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "1e2735fc9fdf7638b606cfad6e52068ab6d1922b6cdfd7950d768c5d372e04c9",
  secret: "cb6f12d85cb8aa9d500b8ba87e16c093a9d97ff781e877719dcf678735f83999"
})


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }


  componentDidMount() {
    unsplash.photos.listPhotos(2, 15, "latest")
      .then(toJson)
      .then(async json => {
        let images = await json;
        this.setState({
          images
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.images.map(image => {
            console.log(image);
            return (
              <Gallery
                thumb={image.urls.thumb}
                description={image.alt_description}
                name={image.user.name}
                location={image.user.location}
                key={image.id} />
            )
          })}
        </div>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>

        </pre>
      </div>
    );
  }
}

export default App;
