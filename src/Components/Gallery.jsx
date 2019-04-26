import React from 'react';


class Gallery extends React.Component {
    render() {
        const { thumb, description, name, location } = this.props;
        return (
            <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <div className="image-container">
                    <img src={thumb} alt={description} />
                </div>
                <div className="info">
                    <h1>Photographer Name : {name} </h1>
                    <h3>Photographer location : {location} </h3>
                </div>
            </div>
        )
    }
}

export default Gallery;