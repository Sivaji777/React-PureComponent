// import React from 'react';
// import { Component } from 'react';

// class RegCom extends Component {

//   render(){ 
//     console.log('----regular component -------');
//     return (
//     <div>
//        Regular: <h1>{this.props.data}</h1>
//     </div>)
//   }
// }

// export default RegCom;

import React from 'react';

function RegCom({data}) {

  console.log('------- regular component ----');

  return <div>
     <h1>{data}</h1>
  </div>;
}

export default RegCom;
