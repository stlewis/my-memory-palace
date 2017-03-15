import React from 'react';

var NamePalace = React.createClass({
  
  getInitialState: function(){
    return({error_message: null});
  },

  setPalaceName: function(e){
    var input = document.getElementById('palace_name');
    
    if(input.value == '' || input.value == null){
      this.setState({error_message: "You must give your palace a name."}) 
    }else{
      this.setState({error_message: null});
      var config_data = {
        name: input.value,
        loci: []
      };

      window.sessionStorage.setItem("palaceConfig", JSON.stringify(config_data));
      input.value = '';
      window.location ='#set-loci'
    }
    e.preventDefault();
  },

  render: function(){
    var inputStyle = {
      width: "50%",
      display: 'inline-block',
      marginRight: 10,
      fontSize: "1.3em"
    };

    if(this.state.error_message != null){
      var error_message = <div style={{color: 'red'}}>{this.state.error_message}</div>
    }

    return(
      <div>
        {error_message}
        <p>
          Give your palace a name. You can call it anything you want, this is just for your own reference.
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

