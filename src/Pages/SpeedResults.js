import React from 'react';
import axios from 'axios';

export default class SpeedResults extends React.Component {
    state = {
        results: []
    }

    // componentDidMount() {
    //     axios.get(`http://localhost:3000/results/`)
    //         .then(res => {
    //             const results = res.data;
    //             this.setState({results});
    //         })
    // }

    render() {
        return (
            <div>
                SPEED RESULTS
            </div>
        )
    }
}

