import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';

// import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

const TestButtons = () => (
  <div>
    <Button label='Bookmark' />
    <Button label='asdasd' />
    <Button label="Hello World!" />
  </div>

  );

ReactDOM.render(
  TestButtons(),  document.getElementById('root')
  );