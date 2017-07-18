import React from 'react';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import styles from '../global.css';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const ViewCards = (props) => (
    <Card style={props.style}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="부제목"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle className={styles.test2}
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText className={styles.test2}>{dummyText}</CardText>
    <CardActions className={styles.test2}>
      <Button icon='bookmark' label='Bookmark' accent />
      <Button label="Action 2" />
    </CardActions>
  </Card>
)

export default ViewCards ;