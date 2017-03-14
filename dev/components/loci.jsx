import React from 'react';

var Loci = React.createClass({
  getInitialState: function(){
    return({
      data: this.props.loci_data
    });
  },

  render: function(){
    var lociStyle = {
      backgroundColor: '#87CEFA',
      height: 30,
      borderRadius: 5,
      WebKitBorderRadius: 5,
      margin: 10,
      paddingLeft: 10,
      width: "50%",
    };
    return(
      <div id={"loci_" + this.state.data.id} className='loci-handle' key={this.state.data.id} style={lociStyle}>{this.state.data.name}</div>
    );
  }

});

export default Loci;
