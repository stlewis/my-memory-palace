import React from 'react';

var StartPalace = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Memory Palace Trainer</h2>
        <p>
          Welcome to the Memory Palace Trainer. This application will help you 
          master the Memory Palace technique by helping you to construct and visualize
          your personal Memory Palace. Before you start, if you haven't already, you should
          take a look at the <a href='/about.html'>About page</a> to learn about the technique
          and how to use the Trainer.
        </p>

        <p>
          If you're ready to get started, click the big green button below!
        </p>
        <a href='#name-palace' className='btn btn-lg btn-success'>Start!</a>
          
      </div>
    );
  }
});

export default StartPalace;

