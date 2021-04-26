// Code CoordinatesButton Component Here

import React from "react"

class CoordinatesButton extends React.Component {
    clickHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>
                    button
                </button>
            </div>
        )
    }
}

export default CoordinatesButton;