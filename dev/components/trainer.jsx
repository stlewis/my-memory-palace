import React from 'react';
import TestLoci from './test_loci.jsx';

var Trainer = React.createClass({
  render: function(){
    return(
      <div>
        <a href='#item-list' className='btn btn-danger'>Back To Item List</a>
        <h2>Walk Your Palace</h2> 
        <p>
          As each of your loci are presented to you in turn, do your best to remember the item
          you placed there. Once you recall the item in that loci, type it's name in the box below
          to continue. If you get the item right, you'll move on to your next loci. Get it wrong, and
          you won't be able to move on till you get it right.
        </p>
        <p>
          If you feel like giving up, you can click the "Back To Item List" button above.
        </p>
        <TestLoci />
      </div>
    );
  }
});

export default Trainer;
