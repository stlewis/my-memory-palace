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

    var cancelStyle = {
      float: 'right',
      color: '#FF0000',
      cursor: 'pointer'
    };

    return(
      <div id={"loci_" + this.state.data.id} className='loci-handle' key={this.state.data.id} style={lociStyle}>
        <span className='loci-name'>{this.state.data.name}</span>
        <span id={"remove_" + this.state.data.id + "_loci"} style={cancelStyle} onClick={this.props.onDelete} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    );
  }

});

export default Loci;
