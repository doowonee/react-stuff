import React from 'react';

import { Button } from 'react-toolbox/lib/button';

/*export default class FloatingMenu extends React.Component {
  render() {
    return (
      <Button label='add' neutral floating />
     )
  }
}*/

export default function FloatingMenu(props) {
  return (
    <div>
      <Button icon='arrow_upward' floating accent  />
      <Button icon='add' floating accent  />
      <Button icon='add' floating accent  />
      <Button label='Facebook' floating />
      <Button icon='add' floating accent  />
    </div>
  )
}

// 이렇게 따로 노출해도 되고 애초에 함수 만뜰때 노출해도 되고 ㅇㅇ
// export default FloatingMenu