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
import LocationOn from '@material-ui/icons/LocationOn';
import RateReview from '@material-ui/icons/RateReview';
import Bookmark from '@material-ui/icons/Bookmark';
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
      <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => {
              props.history.push('/');
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            style={{ fontWeight: 'bold' }}
          >
            　おでかけあぷり
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {props.data ? (
          props.data.meta.code === 200 &&
          props.data.response.group.totalResults > 0 ? (
            props.data.response.group.results.map((result, i) => {
              return (
                <Card
                  key={result.venue.id}
                  style={{
                    margin: '20px',
                    width: '100%',
                    maxWidth: '350px',
                    cursor: 'pointer'
                  }}
                >
                  <CardMedia
                    onClick={() => {
                      props.setDialogValue(true);
                      props.fetchDetailData(result.venue.id);
                    }}
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
                  <TextArea
                    onClick={() => {
                      props.setDialogValue(true);
                      props.fetchDetailData(result.venue.id);
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {result.venue.name}
                    </Typography>
                    <Title>
                      <Bookmark
                        style={{
                          width: '20px',
                          marginRight: '10px',
                          color: '#5D99FF	'
                        }}
                      />
                      <Typography
                        component="div"
                        style={{ marginBottom: '10px' }}
                      >
                        {result.venue.categories[0].name}
                      </Typography>
                    </Title>
                    <Title style={{ clear: 'both' }}>
                      <LocationOn
                        style={{
                          width: '20px',
                          marginRight: '10px',
                          color: '#5D99FF'
                        }}
                      />
                      <Typography
                        component="div"
                        style={{ marginBottom: '10px' }}
                      >
                        {result.venue.location.address}
                      </Typography>
                    </Title>
                    {result.snippets.items[0].detail && (
                      <Title style={{ clear: 'both' }}>
                        <RateReview
                          style={{
                            width: '20px',
                            marginRight: '10px',
                            color: '#5D99FF	'
                          }}
                        />
                        <Typography
                          component="div"
                          style={{ marginBottom: '10px' }}
                        >
                          {result.snippets.items[0].detail
                            ? result.snippets.items[0].detail.object.text
                            : ''}
                        </Typography>
                      </Title>
                    )}
                  </TextArea>
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
      {props.detailData && (
        <Dialog
          open={props.dialog}
          onClose={() => props.setDialogValue(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {props.detailData.response.venue.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>Rating: {props.detailData.response.venue.rating}</p>
              <p>Hours: {props.detailData.response.venue.hours.status}</p>
              <p>Phone: {props.detailData.response.venue.contact.phone}</p>
              <p>
                URL:
                <a href={props.detailData.response.venue.url}>
                  {props.detailData.response.venue.url}
                </a>
              </p>
              <p>Likes: {props.detailData.response.venue.likes.summary}</p>
            </DialogContentText>
            <CardActions disableActionSpacing style={{ clear: 'both' }}>
              <LineShareButton
                url={'https://www.npmjs.com/package/react-share'}
                style={{ marginRight: '10px' }}
              >
                <LineIcon size={32} round={true} />
              </LineShareButton>
              <TwitterShareButton
                url={props.detailData.response.venue.url}
                title={'ツイートする'}
                via="おでかけあぷり"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </CardActions>
          </DialogContent>
        </Dialog>
      )}
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

const TextArea = styled(CardContent)`
  width: 280px;
  z-index: 2;
`;

const Title = styled.div`
  display: float;
  float: left;
  font-size: 10px;
`;
