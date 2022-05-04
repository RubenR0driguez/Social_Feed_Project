import React, { useState } from 'react';
import DisplayPost from './components/DisplayPosts';
import NavBar from './components/Navbar';
// import Post from './components/post';
import AddPost from './components/AddPost';

function App() {

  const [ posts, setPosts] = useState([])

  return (
    <div>
      <NavBar/>
      <AddPost/>
      <DisplayPost/>
    </div>
  );
}

export default App;
