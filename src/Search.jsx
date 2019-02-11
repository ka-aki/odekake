import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function Search(props) {
  const all = '';
  const restaurant = '4d4b7105d754a06374d81259';
  const cafe = '4bf58dd8d48988d16d941735';
  const amusument = '4d4b7104d754a06370d81259';

  return (
    <React.Fragment>
      <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            style={{ fontWeight: 'bold' }}
          >
            　 おでかけあぷり
          </Typography>
        </Toolbar>
      </AppBar>
      <BarLayout>
        <TextField
          label="place"
          placeholder="東京"
          variant="outlined"
          fullWidth
          value={props.place}
          onChange={e => {
            props.changePlace(e.target.value);
          }}
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-age-simple">category</InputLabel>
          <Select
            value={props.category}
            onChange={e => {
              props.changeCategory(e.target.value);
            }}
            input={
              <OutlinedInput
                labelWidth={61}
                name="category"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={'food'}>Food</MenuItem>
            <MenuItem value={'coffee'}>Coffee</MenuItem>
            <MenuItem value={'drinks'}>Drinks</MenuItem>
            <MenuItem value={'shopping'}>Shopping</MenuItem>
            <MenuItem value={'fun'}>Fun</MenuItem>
            <MenuItem value={'sights'}>Sights</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="keyword"
          placeholder="カフェ"
          variant="outlined"
          fullWidth
          value={props.keyword}
          onChange={e => {
            props.changeKeyword(e.target.value);
          }}
        />
      </BarLayout>
      <ButtonLayout>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#ffc107',
            color: 'white',
            fontWeight: 'bold'
          }}
          onClick={() => {
            props.search(props.place, props.category, props.keyword);
            props.history.push('/result');
          }}
        >
          決定
        </Button>
      </ButtonLayout>
    </React.Fragment>
  );
}

export default Search;

const BarLayout = styled.div`
  width: 80%;
  height: 30%;
  margin: 100px auto 50px;
  line-height: 6;
`;

const ButtonLayout = styled.p`
  text-align: center;
`;
