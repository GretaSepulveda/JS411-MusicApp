import React, { Component } from 'react';
import { Switch, Card, CardContent, CardActions, Typography, Slider, TextField, } from '@material-ui/core'



class Dashboard extends Component {
  state = {
    checkedA: true,
    checkedB: true,
  }

  handleChange = (name) => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  }

  render() {
 return (
     <div className="cardControl">
    <Card className="card">
    <CardContent className="insideCard">
    <Typography color="textSecondary" gutterBottom>
     Online Mode
     </Typography>
    <Typography variant="h5" component="h2">
     </Typography>
    <Typography variant="body2" component="p">
     Is this application connected to the internet?
        </Typography>
        </CardContent>
        <CardActions className="switch">
         <Switch
        checked={this.state.checkedA}
         onChange={this.handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </CardActions>
        </Card>
        <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Master Volume
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
          </CardActions>
        </Card>
        <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <TextField className="dropDown"
            select
            label="Normal">
          </TextField>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Dashboard;