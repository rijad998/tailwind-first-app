import React, {Component} from 'react'
import icon from './images/iconCom.svg'

class Pills extends Component {
    render() {
        return (
            <div className = "ContentWidth">
                <div className="Card">
                    <img src={icon} className="Icon" alt="s" />
                    <h3 className="font-semibold text-green-500">Travel Profile</h3>
                    <p className="text-gray-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default Pills