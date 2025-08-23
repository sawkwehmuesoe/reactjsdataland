import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { togglefavorite,fetchposts,fetchcomments } from './store/postsreducer.js' // after thunk


function App() {

  const {posts,comments,favorites,loading,error} = useSelector(state => state.posts);
  // console.log(users);

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchposts())
    .unwrap()
    .then(response=>{
      // console.log(response);
    })
    .catch(err=>{
      console.log(err)
    })

     dispatch(fetchcomments())
    .unwrap()
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.log(err)
    })


  },[]);

  // Group comments by postID 

  const commentsbypost = comments.reduce((init,comment)=>{
    init[comment.postId] = init[comment.postId] || [];
    init[comment.postId].push(comment);
    return init;
  },{});

  // console.log(commentsbypost);

  // explain sample codes 

  // {
  //   1:[comment1,comment2],
  //   2:[comment3],
  //   3:[comment4,comment5]
  // }

  return (
   
        <div>
            <h3>Post List</h3>
        
              {loading && <p>Loading posts...</p>}
              {error && <p style={{color:'red'}}>{error}</p>}
            <ul>

              {posts.map(post=>(
                <li key={post.id} >
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>

                  <h3>Comments</h3>

                <ul>

                  {
                    commentsbypost[post.id] ? (
                      commentsbypost[post.id].map(comment => (
                        <li key={comment.id}>
                          <strong>{comment.name}</strong> : {comment.body}
                        </li>
                      ))
                    ) : (
                      <p>No comments available</p>
                    )
                  }

                  

                
                </ul>

                  <button type='button' onClick={()=>dispatch(togglefavorite(post.id))}>
                    {favorites.includes(post.id) ? "Unfavourite" : "Favourite"}
                  </button>
                </li>
              ))}

             
            </ul>

            {/* <h3>Comments</h3>

            <ul>

              {comments.map(comment=>(
                <li key={comment.id} >
                  <strong>{comment.name}</strong> : {comment.body}
                </li>
              ))}

             
            </ul> */}

        </div>

  )
}

export default App

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
