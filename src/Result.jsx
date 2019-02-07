import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const Result = props => {
  return (
    <Container>
      {props.data ? (
        props.data.response.group.results.map((result, i) => {
          return (
            <Card
              style={{
                margin: '20px',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <CardMedia
                image={
                  result.photo
                    ? `${result.photo.prefix}300${result.photo.suffix}`
                    : ''
                }
                title="Paella dish"
                style={{
                  height: 0,
                  paddingTop: '56.25%'
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {result.venue.name}
                </Typography>
                <Typography component="p">
                  {result.venue.categories[0].name}
                </Typography>
              </CardContent>
              <CardActions disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <p>Now Loading...</p>
      )}
    </Container>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
