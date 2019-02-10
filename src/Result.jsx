import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from 'react-share';

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
                  onClick={() => {
                    props.setDialogValue(true);
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
                    <Typography
                      component="div"
                      style={{ marginBottom: '10px' }}
                    >
                      {result.venue.categories[0].name}
                    </Typography>
                    <Typography
                      component="div"
                      style={{ marginBottom: '10px' }}
                    >
                      {result.venue.location.address}
                    </Typography>
                    <Typography
                      component="div"
                      style={{ marginBottom: '10px' }}
                    >
                      {result.snippets.items[0].detail.object.text}
                    </Typography>
                  </CardContent>
                  <CardActions disableActionSpacing>
                    <LineShareButton
                      url={'https://www.npmjs.com/package/react-share'}
                      style={{ marginRight: '10px' }}
                    >
                      <LineIcon size={32} round={true} />
                    </LineShareButton>
                    <TwitterShareButton
                      url={'https://www.npmjs.com/package/react-share'}
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
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
      <Dialog
        open={props.dialog}
        onClose={() => props.setDialogValue(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

const SNSIcons = styled(CardActions)`
  margin: 0 20px;
`;
