import React, { Component } from 'react';
import './assets/css/style.css'
import { Helmet } from 'react-helmet';

/*grapQL*/
const posts = [{
  id:2,
  text:'lorem ipsum',
  user: {
    avatar: '/uploads/avatar1.png',
    username: 'Test user'
  }
},
  {
    id:1,
    text:'lorem ipsum',
    user: {
      avatar: '/uploads/avatar2.png',
      username: 'test user 2'
    }
  }
]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts:posts,
      postContent:''
    }
    this.handlePostContentChange = this.handlePostContentChange.bind(this);
  }

  handlePostContentChange = (event) => {
      this.setState({postContent: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id:this.state.posts.lenght +1,
      text:this.state.postContent,
      user: {
        avatar: 'uploat/avatar3.png',
        username: 'fake user'
      }
    }
    this.setState((prevState) => ({
      posts:[newPost, ...prevState.posts],
      postContent:''
    }))
  }

  render(){
    const { posts, postContent } = this.state;
    return (
      <div className="container">
        
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" constent="Newsfeed of all your friends in Graphbook"/>
        </Helmet>

        <div className="postForm">
          <form onSubmit={this.handleSubmit}>
            <textarea value={postContent} 
                      onChange={this.handlePostContentChange}
                      placeholder="Write your post!"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        <div className="feed">
        {posts.map((post,i) => 

          <div key={post.id} className="post">

              <div className="header">
                <img src={post.user.avatar}/>
                <h2>{post.user.username}</h2>
              </div>
              <p className="content">
                {post.text}
              </p>

          </div>

        )}
        </div>
      </div>
    )
  }
}
