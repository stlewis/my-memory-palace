import React from 'react';

var TestLoci = React.createClass({
  getInitialState: function(){
    return({loci: loci, loci_index: 0});
  },
  
  render: function(){
    loci = this.state.loci[this.state.loci_index]
    return(
      <div>
        <p>
          What is at the {loci.name}?
        </p>
        <form name='test-loci-form' onSubmit={checkLoci}>
          <input type='text' name='loci' placeholder='Loci' />
          <input type='submit' name='submit' value='Check' className='btn btn-success' />
        </form>
      </div>
    );
  }
});

export default Trainer;
