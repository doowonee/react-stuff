import React from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';

import { BrandColor, RssIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from '../Icons';
//import { polyfill } from 'smoothscroll-polyfill';
import exec from '../../global.exec.js';

// 특이하게도 {} javascript expression을 쓰면 해당 css문에 클래스 속성을 못읽는 문제 박생 property가 없다고함 근데 위에 react는 또 없어도되고 있어도됨
import theme from './theme.css'

/*export default class FloatingMenu extends React.Component {
  render() {
    return (
      <Button label='add' neutral floating />
     )
  }
}*/



function scrollUp() {
  //polyfill();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export default function FloatingMenu(props) {

var state = { clinked: false };

  return (
    <List theme={theme}>
      <Navigation type='vertical' theme={theme}>
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
      </Navigation>
      <Button icon='more_vert' floating accent />
      <Button icon='arrow_upward' floating accent onClick={scrollUp}/>
    </List>
  )
}

// 이렇게 따로 노출해도 되고 애초에 함수 만뜰때 노출해도 되고 ㅇㅇ
// export default FloatingMenu