import React, {Component} from 'react'
import PostData from './data/posts.json'

class Cities extends Component {
    render() {
        return (
            <div className = "pt-32 ContentWidth flex justify-between">
                <div className="Card flex flex-col justify-center">
                    <div className = "CardImg">
                        <h2 className="text-2xl align-middle">Chiang Mai</h2>
                        <h4 className="text-lg items-center">Thailand</h4>
                    </div>
                    <div>
                        <h3 className="font-semibold ">Info</h3>
                        <p>Additional info</p>
                    </div>
                </div>
                
                <div className="Card flex flex-col justify-center">
                    <div className = "CardImg">
                        <h2 className="text-2xl align-middle">Chiang Mai</h2>
                        <h4 className="text-lg items-center">Thailand</h4>
                    </div>
                    <div>
                        <h3 className="font-semibold ">Info</h3>
                        <p>Additional info</p>
                    </div>
                </div>
                <div className="Card flex flex-col justify-center">
                    <div className = "CardImg">
                        <h2 className="text-2xl align-middle">Chiang Mai</h2>
                        <h4 className="text-lg items-center">Thailand</h4>
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