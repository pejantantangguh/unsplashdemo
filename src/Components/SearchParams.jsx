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

    render() {
        return (
            <div className="pa4 black-80">
                <div className="measure center">
                    <label htmlFor="photographerName">
                        Photographer Name :
                    </label>
                    <input id="photographerName"
                        value={this.state.photographerName}
                        placeholder="Photographers Name" />
                </div>
            </div>
        )
    }
}

export default SearchParams;