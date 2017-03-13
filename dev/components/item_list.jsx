import React from 'react';

var ItemList = React.createClass({
  getInitialState: function(){
    var storage = JSON.parse(sessionStorage.getItem("palaceConfig"));

    return({
      loci: storage.loci
    });
  },

  render: function(){
    return(
      <div>
        <p>
          Review your item list below, and try to place each one within a loci in your memory palace. When
          you're ready to take the test, click the "Start" button below.
        </p>
        {
          this.state.loci.map(function(loci){
            return(<div key={'loci-' + loci.id}>{ loci.value }</div>);
          })
        }
        <a href='#trainer' className='btn btn-success btn-lg'>Start</a>
      </div>
    );
  }
});

export default ItemList;
