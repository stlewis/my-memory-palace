import React from 'react';
import Loci from './loci.jsx'

var SetLoci = React.createClass({
  getInitialState: function(){
    return({
      palace_name: JSON.parse(sessionStorage.getItem("palaceConfig")).name,
      palace_loci: JSON.parse(sessionStorage.getItem("palaceConfig")).loci,
    });
  },

  componentDidMount: function(){
    self = this;
    $('#loci_list').sortable({
      update: function(evt, ui) {
        // Wholesale update of the list of loci
        var new_loci = [];
        $('#loci_list div.loci-handle').each(function(idx, handle){
          var loci_data = {};
          loci_data['id']   = $(handle).attr('id').replace(/[^\d]+/, '');
          loci_data['name'] = $(handle).html();
          new_loci.push(loci_data)
        });
        self.setState({palace_loci: new_loci});
        var config    = JSON.parse(sessionStorage.getItem('palaceConfig')) 
        config.loci = new_loci;
        sessionStorage.setItem("palaceConfig", JSON.stringify(config));
      }
    }
    
    );
    $('#loci_list').disableSelection();
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
      marginRight: 10,
      fontSize: "1.3em"
    };

    var buttonStyle = {
      marginTop: 30, 
      height:100, 
      width: 300, 
      fontSize: "1.5em", 
      textAlign: "center",
      lineHeight: "80px"
    };

    return(
      <div>
        <p>
          Excellent! Now, we need to fill {this.state.palace_name} with loci. 
        </p>
        <p>
          Fill in the form below with a name for each of the loci in your palace. When
          starting out, it's best to write them in order. That will allow you to practice
          "walking" through your palace from start to finish. For a bigger challenge later,
          you might consider filling in your loci in random order to test your ability to 
          visit them out of order.
        </p>
        <p>
          Once you're satisfied with your list, click on "Finish Palace" below to move on.
        </p>
        <h2>{this.state.palace_name} Loci</h2>
        <div style={{marginTop: 30}}>
          <form name='loci-list' id='loci-form' onSubmit={this.registerLoci}>
            <input type='text' style={inputStyle} autoComplete='off' className='form-control' name='loci-name' id='loci_name' placeholder='Enter Loci Name' />
            <input type='submit' name='submit' value='Add Loci' className='btn btn-primary' />
          </form>
        </div>
        <div id='loci_list'>
          {
            this.state.palace_loci.map(function(loci, idx){
              return(<Loci key={loci.name + idx} loci_data={loci} />);
            })
          }
        </div>
        <div style={{textAlign: 'center'}}><a href='#add-items' style={buttonStyle}className='btn btn-lg btn-success'>Finish Palace</a></div>
      </div>
    );
  }

});

export default SetLoci;
