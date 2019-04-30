import React from 'react';

class SearchParams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photographerName: "Sam Roach",
            picturesName: "",
            location: ""
        }
    }

    handlePhotographerName = event => {
        this.setState({
            photographerName: event.target.value
        });
    }

    handlePicturesName = event => {
        this.setState({
            picturesName: event.target.value
        });
    }

    handleLocationChange = event => {
        this.setState({
            location: event.target.value
        });
    }

    render() {
        return (
            <div className="pa4 black-80">
                <div className="measure center">
                    <label htmlFor="photographerName">
                        Photographer Name :
                    </label>
                    <input id="photographerName"
                        value={this.state.photographerName}
                        placeholder="Photographers Name"
                        onChange={this.handlePhotographerName} />
                </div>
                <div className="measure center">
                    <label htmlFor="picturesName">
                        Pictures Name :
                    </label>
                    <input id="picturesName"
                        value={this.state.picturesName}
                        placeholder="Photographers Name"
                        onChange={this.handlePicturesName} />
                </div>
                <div className="measure center">
                    <label htmlFor="location">
                        Location
                        <select
                            id="location"
                            value={this.state.location}
                            onChange={this.handleLocationChange}
                        >
                            <option >
                                {Location.map(location => { })}

                            </option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

export default SearchParams;