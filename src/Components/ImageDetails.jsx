import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: "1e2735fc9fdf7638b606cfad6e52068ab6d1922b6cdfd7950d768c5d372e04c9",
    secret: "cb6f12d85cb8aa9d500b8ba87e16c093a9d97ff781e877719dcf678735f83999"
})

class ImageDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = { image: [] };
    }

    componentDidMount() {
        unsplash.photos.getPhoto(`${this.props.id}`)
            .then(toJson)
            .then(async json => {
                let image = await json;
                console.log(image)
                this.setState({
                    photographerName: image.user.name,
                    imageName: image.alt_description,
                    media: image.urls.regular,
                    location: image.user.location
                });
            });
    }
    render() {
        const { photographerName, imageName, media } = this.state;
        return (
            <div>
                <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns dim">
                    <img src={media} alt={imageName} className="mt0 db ba b--black-10" />
                    <dl className="mt2 f6 lh-copy">
                        <dt className="clip">Title</dt>
                        <dt className="ml0">{photographerName}</dt>
                    </dl>
                </div >
            </div>
        )
    }
}

export default ImageDetails;