import React from 'react';

import { AppBar } from 'react-toolbox/lib';
import { Navigation, Link } from 'react-toolbox/lib';

import theme from './theme.css'

export default class AppHeader extends React.Component {
    render() {
        return(
            <AppBar fixed={false} flat={true} leftIcon='menu' title='the1900.me' onLeftIconClick={ this.props.onClick } >
              <Navigation type='horizontal'>
                <Link href='http://' label='KO' />
                ｜
                <Link href='http://' active label='EN' />
              </Navigation>
          </AppBar>
        );
    }
}