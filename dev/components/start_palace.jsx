import React from 'react';

var StartPalace = React.createClass({
  render: function(){
    var btnStyle = {
      fontSize: "1.5em",
      height: 100,
      width: 300,
      lineHeight: "80px"
    };
    return(
      <div>
        <h2>Memory Palace Trainer</h2>
        <p>
          Welcome to the Memory Palace Trainer. This application will help you 
          master the Memory Palace technique by helping you to construct and visualize
          your personal Memory Palace. Before you start, if you haven't already, you should
          take a look at the <a href='/learn.html'>Learn page</a> to learn about the technique
          and how to use the Trainer.
        </p>

        <p>
          If you're ready to get started, click the big green button below!
        </p>
        <div style={{textAlign: 'center'}}>
          <a style={btnStyle} href='#name-palace' className='btn btn-lg btn-success'>Start!</a>
        </div>
          
      </div>
    );
  }
});

export default StartPalace;

