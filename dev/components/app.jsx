import React from 'react';

var App = React.createClass({
  render: function(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-12' style={{textAlign: 'left'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

});

export default App;
