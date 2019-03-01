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
        <Required>【必須】</Required>
        <TextField
          label="place"
          placeholder="東京"
          variant="outlined"
          fullWidth
          value={props.place}
          style={{ marginBottom: '20px' }}
          onChange={e => {
            props.changePlace(e.target.value);
          }}
        />
        <div>【任意】</div>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-age-simple">category</InputLabel>
          <Select
            value={props.category}
            style={{ marginBottom: '20px' }}
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
        <div>【任意】</div>
        <TextField
          label="keyword"
          placeholder="カフェ"
          variant="outlined"
          fullWidth
          value={props.keyword}
          style={{ marginBottom: '20px' }}
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
  line-height: 3;
`;
const Required = styled.div`
  color: red;
`;

const ButtonLayout = styled.p`
  text-align: center;
`;
