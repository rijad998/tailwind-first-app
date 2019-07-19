import React, {Component} from 'react'
import HeaderMenu from './HeaderMenu'

class HeaderBackground extends Component {
    render() {
        return (
            <div className="HeaderSection flex justify-center ">
                <HeaderMenu />
            </div>
        )
    }
}

export default HeaderBackground