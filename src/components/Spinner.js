import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Loading from './Loading.gif'
export class Spinner extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="text-center my-3">
                <img src={Loading} alt="Loading" />
            </div>
        )
    }
}

export default Spinner
