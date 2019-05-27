import React from 'react';
import './App.css';
import CommentsListsContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <CommentsListsContainer />
      <DevTools />
    </div>
  )
}

export default App;
