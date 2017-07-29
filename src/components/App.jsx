import React from 'react';

import { AppBar } from 'react-toolbox/lib';
import { Navigation, Link } from 'react-toolbox/lib';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import { Overlay } from 'react-toolbox/lib/overlay';


import ViewCards from './ViewCards.jsx'
import FloatingMenu from './FloatingMenu'
import Header from './Header'

const cardStyle  = {
    maxWidth: '480px'
};

export default class App extends React.Component {
    constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.state = {
        drawerActive: false,
        fmActive: false
    };
  }
     hide = () => {
      this.setState({fmActive: !this.state.fmActive});
    }

  render() {
    return (
     <Layout>
     <Overlay active={this.state.fmActive ? true : false} style={{ zIndex: 500}} onClick={this.hide}  />
    <NavDrawer active={this.state.drawerActive}
                    permanentAt='sm'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <p>
                        Navigation, account switcher, etc. go here.
                    </p>
      </NavDrawer>
        <Panel>
          <Header />
          <div style={{flex: 1, overflowY: 'auto', padding: '16px'}}>
            <h1 style={{textAlign: 'center'}} onClick={ this.hide }>react 가동완료</h1>
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
            <ViewCards style={cardStyle} />
          </div>
        </Panel>
           <FloatingMenu style={{ zIndex: 501}} onClick={ this.hide } /> 
      </Layout> );
  }
}