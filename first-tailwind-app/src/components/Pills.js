import React, {Component} from 'react'
import icon from './images/iconCom.svg'

class Pills extends Component {
    render() {
        return (
            <div className = "ContentWidth flex justify-center Retracted">
                <div className="CardTab flex flex-col justify-center">
                    <img src={icon} className="Icon ml-auto mr-auto" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="CardTab flex flex-col justify-center">
                    <img src={icon} className="Icon ml-auto mr-auto" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="CardTab flex flex-col justify-center">
                    <img src={icon} className="Icon ml-auto mr-auto" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="CardTab flex flex-col justify-center">
                    <img src={icon} className="Icon ml-auto mr-auto" alt="s" />
                    <h3 className="font-semibold ">Travel Profile</h3>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default Pills