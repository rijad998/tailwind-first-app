import React from 'react';
import './App.css';
import HeaderBackground from './components/HeaderBackground'
import MainSection from './components/MainSection';
import PostList from './components/posts/PostList';

function App() {
  return (
    <div className="App">
      <HeaderBackground />
      <MainSection />
      <PostList />
    </div>
  );
}

export default App;
