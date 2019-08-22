import React, {Component} from 'react';
import PostData from '../data/posts.json'

/* testna komponenta */

class PostList extends Component {
    render() {
        return (
            <div>
                { PostData.map((postGroup, index) => {
                    return <div>
                        <h1>{postGroup.userID}</h1>
                        <p>{postGroup.title}</p>
                        <p>{postGroup.completed}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList;
