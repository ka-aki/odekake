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
  LineIcon,
  FacebookShareButton,
  FacebookIcon
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
                <CardHover
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
                </CardHover>
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
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            {props.detailData.response.venue.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <StarReviews>
                <StarCount>{props.detailData.response.venue.rating}</StarCount>
                <StarRating>
                  <StarRatingFront
                    style={{
                      width: `${props.detailData.response.venue.rating * 10}%`
                    }}
                  >
                    ★★★★★★★★★★
                  </StarRatingFront>
                  <StarRatingBack>★★★★★★★★★★</StarRatingBack>
                </StarRating>
              </StarReviews>
              <DialogTextArea>
                <div>
                  <p>Hours : {props.detailData.response.venue.hours.status}</p>
                  Phone :
                  <a
                    href={`tel: ${
                      props.detailData.response.venue.contact.phone
                    }`}
                  >
                    {props.detailData.response.venue.contact.phone}
                  </a>
                  <p>
                    URL :
                    <a href={props.detailData.response.venue.url}>
                      ホームページはこちら
                    </a>
                  </p>
                  <p>Likes : {props.detailData.response.venue.likes.summary}</p>
                </div>
              </DialogTextArea>
            </DialogContentText>
            <CardActions
              disableActionSpacing
              style={{ clear: 'both', justifyContent: 'center' }}
            >
              <LineShareButton
                url={props.detailData.response.venue.url}
                style={{ marginRight: '8px' }}
              >
                <LineIcon size={32} round={true} />
              </LineShareButton>
              <TwitterShareButton
                url={props.detailData.response.venue.url}
                title={props.detailData.response.venue.name}
                via="おでかけあぷり"
                style={{ marginRight: '8px' }}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton
                url={props.detailData.response.venue.url}
                hashtag={`#${props.detailData.response.venue.name}`}
                style={{ marginRight: '8px' }}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
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

const CardHover = styled(Card)`
  &:hover {
    background-color: #9bf9cc;
  }
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

const DialogTextArea = styled.div`
  display: flexbox;
  flex-direction: column;
  justify-content: center;
`;

const StarReviews = styled.div`
  text-align: center;
  font-size: 22px;
`;

const StarCount = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 22px;
`;

const StarRating = styled.div`
  position: relative;
  display: inline-block;
`;

const StarRatingFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  color: #cc3366;
`;
const StarRatingBack = styled.div`
  color: #ccc;
`;
