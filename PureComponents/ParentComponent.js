import React from 'react';
import { Component } from 'react';
import PureCom from './PureCom';
import RegCom from './RegCom';

class  ParentComponent  extends Component {

constructor(props){
    super(props)
    this.state={
       data:'',
    }
  }

componentDidMount(){
  setInterval(()=>{
     this.setState({
       data:'sivaji'
     })
  },8000)
}


render(){

  console.log('-------- parent component ---------');

  return <div>
  <h1>Parent Component............</h1>
  <RegCom data={this.state.data} />
  <PureCom data={this.state.data} />

  </div>;
}
}

export default ParentComponent;










