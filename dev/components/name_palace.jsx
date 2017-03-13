import React from 'react';

var NamePalace = React.createClass({
  setPalaceName: function(e){
    var input = document.getElementById('palace_name');
    var config_data = {
      name: input.value,
      loci: []
    };

    window.sessionStorage.setItem("palaceConfig", JSON.stringify(config_data));
    input.value = '';
    window.location ='#set-loci'
    e.preventDefault();
  },

  render: function(){
    var inputStyle = {
      width: "50%",
      display: 'inline-block'
    };
    return(
      <div>
        <p>
          Start by giving your palace a name. This is for your easy reference if you should
          happen to create more than one.
        </p>
        <form name='start-palace' onSubmit={this.setPalaceName}>
          <input type='text' 
            className='form-control' 
            id='palace_name' 
            style={inputStyle}
            name='palace-name' 
            placeholder="Palace Name" />
          <input className='btn btn-success' type='submit' name='submit' value='Name My Palace!' />
        </form>
      </div>
    ) ;
  }
});

export default NamePalace;

