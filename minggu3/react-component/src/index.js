import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*const HelloComponent =()=> {
  return HelloComponent;
}

class StateFullComponent extends Component{
  render(){
    return<p>StateFullComponen</p>
  }
}

ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));*/

//lifeCycle
class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = { hello : "World!"};
  }

  componentWillMount(){
    console.log("componentWillMount()");
  }

  componentDidMount(){
    console.log("componentDidMount()");
  }

  changeState(){
    this.setState({hello : "Geek!"});
  }

  render(){
    return(
      <div>
        <h1>GeeksForGeeks.org, Hello { this.state.hello }</h1>
        <h2>
          <a onClick ={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate()");    
    return true;
  }

  componentWillUpdate(){
    console.log("componentWillUpdate()");    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate()");    
  }
}

ReactDOM.render(
  <Test/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
