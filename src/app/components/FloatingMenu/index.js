import React from 'react';
import ReactDOM from 'react-dom';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';
import { events } from 'react-toolbox/lib/utils';
import { Overlay } from 'react-toolbox/lib/overlay';

import { BrandColor, RssIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from '../Icons';
//import { polyfill } from 'smoothscroll-polyfill';

// 특이하게도 {} javascript expression을 쓰면 해당 css문에 클래스 속성을 못읽는 문제 발생 property가 없다고함 근데 위에 react는 또 없어도되고 있어도됨
import theme from './theme.css'

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props);
    //access inside from class you should bind the finction.
    this.handleClick= this.handleClick.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill();  //it's global not a module(IIFE)
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.active && nextState.active) {
      events.addEventsToDocument({
        click: this.handleDocumentClick,
        touchstart: this.handleDocumentClick,
      });
    }
  }

  //멤버 접근하면서 완전한 클래스 메소드의 역할을 하기 때문에 생성자에서의 bind 작업이 필요하다.
  handleClick() {
    this.props.onClick(); //와 이렇게 parent method 호출 가능 와 ㅎㄷㄷ하네 
    if(this.state.active) {
      this.scrollUp();
      this.hide();
    } else {
      this.show();
    }
  };
  
  // Class properties transform babel plugin required if you want to use arrow function.
  handleDocumentClick = (event) => {
    if (
      this.state.active &&
      !events.targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ active: false});
    }
  };

  //class 안에 멤버 접근을 안하니까 생성자에서 bind 할필요가 없음
  scrollUp() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  show() {
    this.setState({ active: true });
  }

  hide() {
    this.setState({ active: false });
  }

  render() {
    return (
      <div style={this.props.style}>
        <Navigation type='vertical' theme={theme} className={this.state.active ? theme.fm__active :""} >
          <Button icon='link' floating mini theme={theme} className={theme.getlink} />         
          <Button floating mini theme={theme} style={{backgroundColor: BrandColor.linkedin}}>         
            { <LinkedinIcon /> }
          </Button>
          <Button floating mini theme={theme} style={{backgroundColor: BrandColor.facebook}}>         
            { <FacebookIcon /> }
          </Button>        
          <Button floating mini theme={theme} style={{backgroundColor: BrandColor.twitter}}>         
            { <TwitterIcon /> }
          </Button>        
          <Button icon={ this.state.active ? 'arrow_upward' : 'share'} floating accent onClick={this.handleClick}/> 
        </Navigation>
      </div>
    );
  }

}

export default FloatingMenu