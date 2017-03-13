import React from 'react';
import Loci from './loci.jsx'

var SetLoci = React.createClass({
  getInitialState: function(){
    return({
      palace_name: JSON.parse(sessionStorage.getItem("palaceConfig")).name,
      palace_loci: JSON.parse(sessionStorage.getItem("palaceConfig")).loci,
    });
  },

  registerLoci: function(e){
    var config    = JSON.parse(sessionStorage.getItem('palaceConfig')) 
    var element   = document.getElementById('loci_name');
    var loci_name = element.value;
    
    var count = config.loci.length; 
    config.loci.push({name: loci_name, value: '', id: count + 1});
    sessionStorage.setItem("palaceConfig", JSON.stringify(config));
    
    this.setState({palace_name: config.name, palace_loci: config.loci});
    element.value = '';
    
    e.preventDefault();
  },

  render: function(){
    var inputStyle = {
      width: "50%",
      display: 'inline-block',
      marginRight: 10
    }
    return(
      <div>
        <p>
          Excellent, now, we need to fill {this.state.palace_name} with loci. Fill in 
          the form below with a name for each of the loci in your palace. Make sure you
          fill them out in proper order!
        </p>
        <p>
          Once you're satisfied with your list, click on "Continue" below to move on.
        </p>

        <form name='loci-list' id='loci-form' onSubmit={this.registerLoci}>
          <input type='text' style={inputStyle} autoComplete='false' className='form-control' name='loci-name' id='loci_name' placeholder='Enter Loci Name' />
          <input type='submit' name='submit' value='Add Loci' className='btn btn-primary' />
        </form>
        <a href='#add-items' className='btn btn-lg btn-success'>Finish Palace</a>
        <div>
          {
            this.state.palace_loci.map(function(loci, idx){
              return(<Loci key={loci.name + idx} loci_data={loci} />);
            })
          }
        </div>
      </div>
    );
  }

});

export default SetLoci;
