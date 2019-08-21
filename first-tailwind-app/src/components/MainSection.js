import React, {Component} from 'react'
import Pills from './Pills';
import Cities from './Cities';
import PostList from './posts/PostList';

class MainSection extends Component {
    render() {
        return (
            <div className="MainContent flex justify-center">
                <Pills />
                <Cities />
                <PostList />
            </div>
        )
    }
}

export default MainSection