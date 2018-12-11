import React from 'react';

class Route3 extends React.Component {
    render() {
        const words = this.props.match.params.words;
        return (
            <div>
                Route 3 here! ----- {words}
            </div>
        )
    }
}

export default Route3;