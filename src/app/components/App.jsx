import React from 'react';

import { AppBar } from 'react-toolbox/lib';
import { Navigation, Link } from 'react-toolbox/lib';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import { Overlay } from 'react-toolbox/lib/overlay';


import ViewCards from './ViewCards.jsx'
import FloatingMenu from './FloatingMenu'
import AppHeader from './AppHeader'

const cardStyle  = {
    maxWidth: '480px'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.state = {
        drawerActive: false,
        overlayActive: false
    };
  }

  toggleNavDrawer = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleOverlay = () => {
    this.setState({overlayActive: !this.state.overlayActive});
  }

  render() {
    return (
      <Layout>
        <Overlay active={this.state.overlayActive} style={{ zIndex: 500 }} onClick = { this.toggleOverlay } />
        <NavDrawer active={this.state.drawerActive}  permanentAt='sm' onOverlayClick={ this.toggleNavDrawer }>          
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppHeader onClick={ this.toggleNavDrawer } />
          <div style={{flex: 1, overflowY: 'auto', padding: '16px'}}>
            <h1 style={{textAlign: 'center'}} onClick={ this.hide }>react 가동완료</h1>
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
          </div>
        </Panel>
        <FloatingMenu style={ this.state.drawerActive? {zIndex: 50} : {zIndex: 501} } onClick={ this.toggleOverlay } /> 
      </Layout> );
  }
}