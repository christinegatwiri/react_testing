import React from 'react'
import ReactDOM from 'react-dom'

const myFriends = [ 
    {
        nickname: "hanifa",
        source: "highschool"
    }, 
    {
        nickname: "tasha",
        source: "highschool"
    },
    {
        nickname: "ash",
        source: "campus"
    }
    
]
class Friends extends React.Component {
    render() {
        const friend = myFriends[2];
        return (
            <div>
                <h1>{friend.nickname}</h1>
                <h4>{friend.source}</h4>
            </div>
        )
    }
}

ReactDOM.render(
    <Friends/>,
    document.getElementById('app')
);