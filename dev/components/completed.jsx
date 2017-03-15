import React from 'react';

var Completed = React.createClass({

  render: function(){
    var btnStyle = {
      height: 100,
      width: 350,
      lineHeight: "100px",
      fontSize: "1.5em",
      marginTop: 30
    };
    return(
      <div>
        <h2>Congratulations!</h2>
        <p>
          You got through your whole list and got everything right!
        </p>
        <p>
          Choose an option below to continue:
        </p>
        <div><a style={btnStyle} href='#start-palace' className='btn btn-success'>Start From Scratch</a></div>
        <div><a style={btnStyle} href='#add-items' className='btn btn-success'>Build Another Item List</a></div>
        <div><a style={btnStyle} href='#item-list' className='btn btn-success'>Try This List Again</a></div>
      </div>
    );
  }

});

export default Completed;
