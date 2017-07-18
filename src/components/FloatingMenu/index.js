import React from 'react';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';

// 특이하게도 {} javascript expression을 쓰면 해당 css문에 클래스 속성을 못읽는 문제 박생 property가 없다고함 근데 위에 react는 또 없어도되고 있어도됨
import theme from './theme.css'

/*export default class FloatingMenu extends React.Component {
  render() {
    return (
      <Button label='add' neutral floating />
     )
  }
}*/

export default function FloatingMenu(props) {
  return (
    <List theme={theme}>
        <Navigation type='vertical' theme={theme}>
          <Button label='Facebook' floating />
          <Button label='rss' floating />
          <Button label='linkedin' floating />
          <Button label='twitter' floating />
        </Navigation>
        <Button icon='more_vert' floating accent />
        <Button icon='arrow_upward' floating accent  />
    </List>
  )
}

// 이렇게 따로 노출해도 되고 애초에 함수 만뜰때 노출해도 되고 ㅇㅇ
// export default FloatingMenu