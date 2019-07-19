import React, {Component} from 'react'
import Pills from './Pills';
import Cities from './Cities';

class MainSection extends Component {
    render() {
        return (
            <div className="MainContent flex justify-center">
                <Pills />
                <Cities />
            </div>
        )
    }
}

export default MainSection