import React from 'react';

var ItemList = React.createClass({
  getInitialState: function(){
    var storage = JSON.parse(sessionStorage.getItem("palaceConfig"));
    console.log(storage.loci);
    var loci    = storage.loci.filter(function(l){
      return l.value != "";
      return true;
    });

    return({
      loci: loci
    });
  },

  render: function(){
    
    var btnStyle = {
      height: 100,
      width: 300,
      lineHeight: "100px",
      fontSize: "1.5em",
      marginTop: 30
    };

    var nameStyle = {
      fontWeight: 'bold',
      color: 'red'
    };

    var valueStyle = {
      fontStyle: 'italic',
      color: 'blue'
    };
    
    return(
      <div>
        <p>
          Review your list below. Try to come up with a vivid image placing a hint about
          each item at it's corresponding loci in your memory palace. Remember, the more 
          out of place or strange the image you come up with, the more likely you are to 
          remember it.
        </p>
        <p>
          When you've finished, (try to give yourself a time limit to review the list), click
          the "START" button to test yourself.
        </p>
        {
          this.state.loci.map(function(loci){
            return(
              <div key={'loci-' + loci.id}> 
                At the <span style={nameStyle}>{loci.name}</span> is <span style={valueStyle}>{ loci.value }</span>
              </div>
            );
          })
        }
        <a style={btnStyle} href='#trainer' className='btn btn-success btn-lg'>START</a>
      </div>
    );
  }
});

export default ItemList;
