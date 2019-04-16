import React from 'react';

class Gallery extends React.Component {
    render() {
        const { username, url, location, photos } = this.props;
        let photos = [];
        return (
            <div className="photo__gallery">
                <div className="image-container">
                    <img src={photos} />
                </div>
            </div>
        );
    }
}