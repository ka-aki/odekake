import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components';

const Result = props => {
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton color="inherit">
            <ArrowBackIcon
              onClick={() => {
                props.history.push('/');
              }}
            />
          </IconButton>
          <Typography variant="h6" color="inherit">
            　おでかけあぷり
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {props.data ? (
          props.data.meta.code === 200 ? (
            props.data.response.group.results.map((result, i) => {
              return (
                <Card
                  style={{
                    margin: '20px',
                    width: '100%',
                    maxWidth: '300px'
                  }}
                >
                  <CardMedia
                    image={
                      result.photo
                        ? `${result.photo.prefix}1000${result.photo.suffix}`
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
            <p>結果がありませんでした</p>
          )
        ) : (
          <p>Now Loading...</p>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;
