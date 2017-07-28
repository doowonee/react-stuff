import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';
import { events } from 'react-toolbox/lib/utils';
import { Overlay } from 'react-toolbox/lib/overlay';

import { BrandColor, RssIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from '../Icons';
//import { polyfill } from 'smoothscroll-polyfill';

// 특이하게도 {} javascript expression을 쓰면 해당 css문에 클래스 속성을 못읽는 문제 박생 property가 없다고함 근데 위에 react는 또 없어도되고 있어도됨
import theme from './theme.css'

/*export default class FloatingMenu extends React.Component {
  render() {
    return (
      <Button label='add' neutral floating />
     )
  }
}*/




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
    require('smoothscroll-polyfill').polyfill();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.active && nextState.active) {
      events.addEventsToDocument({
        click: this.handleDocumentClick,
        touchstart: this.handleDocumentClick,
      });
    }
  }

  /* componentDidUpdate(prevProps, prevState) {
    if (prevState.active && !this.state.active) {
      //if (this.props.onHide) this.props.onHide();
      events.removeEventsFromDocument({
        click: this.handleDocumentClick,
        touchstart: this.handleDocumentClick,
      });
    }
  } */
  
  //멤버 접근하면서 완전한 클래스 메소드의 역할을 하기 때문에 생성자에서의 bind 작업이 필요하다.
  handleClick() {
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
        <Navigation type='vertical' theme={theme} className={this.state.active ? theme.fm__active :""}>
          <Overlay active={this.state.active ? true : false} theme={theme} onClick={this.hide}  />
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
        {/* <Button icon='arrow_upward' floating accent onClick={this.scrollUp}/> 
            에니메이션도 추가 4개버튼 원래 겹쳐있도록 해야함 안보이게 해야함 아니면 안보이게 하든지
            onclick 3개 함수 매핑해야됨 state 바꾸는거랑 스크롤 업하는거랑 다른곳 클릭시 다시 바꾸고 버튼 안보이게 하는거랑
            이 FM눌렀을때 주위 어둡게 하는거 방법있지 않을까 Drawer가 어캐 되있ㄴ느지를 봐야댐 
        */}
        </Navigation>
        
    );
  }

}

// 이렇게 따로 노출해도 되고 애초에 함수 만뜰때 노출해도 되고 ㅇㅇ
export default FloatingMenu