import React from 'react';


class Gallery extends React.Component {
    render() {
        const { thumb, description, name, location } = this.props;
        return (
            <div className="bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5 min-h-100">
                <div className="tc ">
                    <img src={thumb} alt={description} />
                </div>
                <div className="info">
                    <h1>Name : {name} </h1>
                    <h3>Location : {location} </h3>
                </div>
            </div>
        )
    }
}

export default Gallery;