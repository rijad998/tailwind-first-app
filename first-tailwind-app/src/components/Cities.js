import React, {Component} from 'react'
import PostData from './data/posts.json'

class Cities extends Component {
    render() {
        return (
            <div className = "pt-32 ContentWidth flex justify-between">
                <div className = "grid-row justify-center">
                {PostData.map((postCard, index) => {
                    return <div className="Card flex flex-col justify-center">
                        <div className = "CardImg">
                            <h2 className="text-2xl align-middle">{postCard.title}</h2>
                            <h4 className="text-lg items-center">{postCard.id}</h4>
                        </div>
                        <div>
                            <h3 className="font-semibold ">User ID:</h3>
                            <p>{postCard.userId}</p>
                        </div>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default Cities