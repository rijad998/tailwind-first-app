import React, {Component} from 'react'
import city from './images/city.jpg'

class Cities extends Component {
    render() {
        return (
            <div className = "pt-32 ContentWidth flex justify-center">
                <div className="Card flex flex-col justify-center">
                    <div className = "CardImg">
                        <h2 className="text-2xl">Chiang Mai</h2>
                        <h4 className="text-lg">Thailand</h4>
                    </div>
                    <div>
                        <h3 className="font-semibold ">Info</h3>
                        <p>Additional info</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cities