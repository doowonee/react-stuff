import React from 'react';

import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';

import ViewCards from './ViewCards.jsx'
import FloatingMenu from './FloatingMenu'

const cardStyle  = {
    maxWidth: '480px'
};

export default class App extends React.Component {
  render() {
    return (
     <Layout>
        <Panel>
          <div style={{flex: 1, overflowY: 'auto', padding: '16px'}}>
          {/* 왜 style은 curly braces가 2중인지 https://stackoverflow.com/questions/38156010/can-i-use-one-curly-brace-instead-of-two-curly-braces-in-react-props */}
            <h1 style={{textAlign: 'center'}}>react 가동완료</h1>
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
          </div>
        </Panel>
           <FloatingMenu /> 
      </Layout> );
  }
}