import React from 'react';
import './App.css';
import HomeComponent from './containers/home/HomeContainer';
import { GlobalState } from './store';
import { connect } from 'react-redux';
import {thunkSendMessage} from './store/actions';

const mapStateToProps =(state: GlobalState) => ({
  isServerAlive: state.serverCheck.isServerAlive
});

interface AppProps {
  isServerAlive?: boolean
  thunkSendMessage?: any
}

class App extends React.Component<AppProps, object> {

  constructor(props: AppProps){
    super(props);
    props.thunkSendMessage();
  }

  public render() {
    return (
      <div className="App">
        <HomeComponent isServerAlive={this.props.isServerAlive ? this.props.isServerAlive: false }/>
      </div>
    );
  }
}

export default connect(mapStateToProps,{thunkSendMessage})(App);
