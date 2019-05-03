import React, { Component } from 'react';
import Gallery from './Gallery';
import Unsplash, { toJson } from 'unsplash-js';
import ReactPaginate from 'react-paginate';


const unsplash = new Unsplash({
    applicationId: "1e2735fc9fdf7638b606cfad6e52068ab6d1922b6cdfd7950d768c5d372e04c9",
    secret: "cb6f12d85cb8aa9d500b8ba87e16c093a9d97ff781e877719dcf678735f83999"
});

let selected;

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            selected
        };
    }

    loadImageFromUnsplash() {
        unsplash.photos.listPhotos(selected, 15, "latest")
            .then(toJson)
            .then(async json => {
                let images = await json;
                this.setState({
                    images
                })
            });
    }

    handlePageClick = event => {
        let selected = event.selected;
        console.log(selected);

        this.setState({ selected: selected }, () => {
            this.loadImageFromUnsplash();
        })
    }

    componentDidMount() {
        this.loadImageFromUnsplash();
    }

    render() {
        return (
            <div className="App">
                <p>{selected}</p>
                <div>
                    {this.state.images.map(image => {
                        return (
                            <Gallery
                                thumb={image.urls.small}
                                description={image.alt_description}
                                name={image.user.name}
                                location={image.user.location}
                                key={image.id}
                                id={image.id} />

                        )
                    })};
                </div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
            </div>
        );
    }
}

export default Image;
