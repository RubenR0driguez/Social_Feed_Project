import React, { useState } from 'react';
import DisplayPost from './components/DisplayPosts';
import NavBar from './components/Navbar';
import AddPost from './components/AddPost';

function App() {
  const [ posts, setPosts] = useState([
    {name: "David Lagrange",
     content: "I recently went into the woods to find the oldest tree i could find.To my luck i found a very old hemlock around 200-250 years old let me know if you would like me to show it to you",
     name1: "JJ Vega",
     content1: "Its aprils fools day give this a dislike if ypu really like it! ",
     name2: "Nevin Seible",
     content2: "My Rubik's cube is fully charged and ready for battle. right after i eat my meal that has appeared from the magical hand from behind my curtain.",
    }
])

  return (
    <div>
      <NavBar />
      <AddPost />
      <DisplayPost posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
