import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API // Add your News Api Key to .env.local file
  state = {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>

        <Router>
          <Navbar />
          <LoadingBar
            height= {2}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress = {this.setProgress} key="general" pageSize={15} category="general" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/business">
              <News setProgress = {this.setProgress} key="business" pageSize={15} category="business" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/sports">
              <News setProgress = {this.setProgress} key="sports" pageSize={15} category="sports" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/health">
              <News setProgress = {this.setProgress} key="health" pageSize={15} category="health" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {this.setProgress} key="entertainment" pageSize={15} category="entertainment" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/science">
              <News setProgress = {this.setProgress} key="science" pageSize={15} category="science" country="in" apiKey={this.apiKey} />
            </Route>
            <Route exact path="/technology">
              <News setProgress = {this.setProgress} key="technology" pageSize={15} category="technology" country="in" apiKey={this.apiKey} />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}
