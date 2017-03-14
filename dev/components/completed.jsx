import React from 'react';

var Completed = React.createClass({

  render: function(){
    return(
      <div>
        <h2>Congratulations!</h2>
        <p>
          You got through your whole list and got everything right!
        </p>
        <p>
          Choose an option below to continue:
        </p>
      </div>
    );
  }

});

export default Completed;
