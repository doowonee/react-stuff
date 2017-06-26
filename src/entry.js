import React from 'react';
import ReactDOM from 'react-dom';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

import ViewCards from './components/ViewCards.jsx'

ReactDOM.render(
  <ViewCards />,  document.getElementById('root')
  );