import React from 'react';

import { AppBar } from 'react-toolbox/lib';
import { Navigation, Link } from 'react-toolbox/lib';

import theme from './theme.css'

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAppbar = this.toggleAppbar.bind(this)
        this.measureScrolled = this.measureScrolled.bind(this)
        this.state = {active: false};
    }

    toggleAppbar() {
        console.log(this.props);
    }

    measureScrolled(e) {
        if(window.pageYOffset > 200) {
            this.setState({active: true});
        }
        else {
            this.setState({active: false});
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.measureScrolled.bind(this));
    }

    componentWillUnmount() {
        document.removetListener('scroll', this.measureScrolled.bind(this));
    }

    render() {
        return(
            <AppBar fixed={this.state.active} flat={!this.state.active} leftIcon='menu' title='the1900.me' 
                onLeftIconClick={ this.props.onClick } theme={theme} className={this.state.active? theme.appBar__active: '' }>
              <Navigation type='horizontal' theme={theme}>
                <Link href='#' label='KO' />
                ｜
                <Link href='#' active label='EN' />
              </Navigation>
          </AppBar>
        );
    }
}