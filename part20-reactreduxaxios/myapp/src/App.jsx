import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { togglefavorite,fetchposts } from './store/postsreducer.js' // after thunk


function App() {

  const {posts,favorites,loading,error} = useSelector(state => state.posts);
  // console.log(users);

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchposts())
    .unwrap()
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.log(err)
    })


  },[])

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
                  <button type='button' onClick={()=>dispatch(togglefavorite(post.id))}>
                    {favorites.includes(post.id) ? "Unfavourite" : "Favourite"}
                  </button>
                </li>
              ))}

             
            </ul>

        </div>
    
  )
}

export default App

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
