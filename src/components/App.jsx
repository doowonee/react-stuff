import React from 'react';

import ViewCards from './ViewCards.jsx'
import FloatingMenu from './FloatingMenu.jsx'

const cardStyle  = {
    marginLeft: '48px',
    marginBottom: '48px',
    width: '400px'
};


export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1 style={{textAlign: 'center'}}>react 가동완료</h1>
        <ViewCards style={cardStyle} />
        <FloatingMenu />
      </div> );
  }
}