import React, {Component} from 'react'
import icon from './images/iconCom.svg'

class Pills extends Component {
    render() {
        return (
            <div className = "ContentWidth flex justify-center Retracted">
                <div className="Card flex flex-col justify-center">
                    <img src={icon} className="Icon" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p className="text-gray-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="Card flex flex-col justify-center">
                    <img src={icon} className="Icon" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p className="text-gray-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="Card flex flex-col justify-center">
                    <img src={icon} className="Icon justify-center" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p className="text-gray-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="Card flex flex-col justify-center">
                    <img src={icon} className="Icon" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p className="text-gray-500">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default Pills