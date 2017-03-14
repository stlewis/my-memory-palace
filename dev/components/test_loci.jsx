import React from 'react';

var TestLoci = React.createClass({
  getInitialState: function(){
    var all_loci = JSON.parse(sessionStorage.getItem("palaceConfig")).loci;
    var loci     = all_loci.filter(function(l){
      return l.value != "";
      return true;
    });

    return({loci: loci, loci_index: 0, message: "\u00a0"});
  },

  checkLoci: function(e){
    var element = document.getElementById('loci_guess');
    var guess = element.value;
    if(guess.toLowerCase() == this.state.loci[this.state.loci_index].value.toLowerCase()){
      element.value = "";
      this.setState({message: "Correct!"})
      // If they were right, increment the loci counter, provided there's something in the 
      // next loci. If there isn't, they've completed the list, so bounce
      var nextLociIdx = this.state.loci_index + 1;
      var nextLoci = this.state.loci[nextLociIdx];
      if (nextLoci != undefined){
        this.setState({loci_index: nextLociIdx});
      }else{
        window.location = '#completed'
      }
    }else{
      element.value = "";
      this.setState({message: "Sorry, that was wrong! Give it another shot!"});
      // If they guessed wrong, they should be told so and given an opportunity to try again.
    }
    e.preventDefault();
  },
  
  render: function(){
    var loci = this.state.loci[this.state.loci_index];
    var inputStyle = {
      width: "50%",
      float: "left",
      marginRight: 10
    }
    return(
      <div>
        <h2>
          What is at the <span style={{color: 'red'}}>{loci.name}</span>?
        </h2>
        <h3>{this.state.message}</h3>
        <form name='test-loci-form' onSubmit={this.checkLoci}>
          <input style={inputStyle} className='form-control' type='text' name='loci' placeholder='Loci' id='loci_guess' />
          <input type='submit' name='submit' value='Check' className='btn btn-success' />
        </form>
      </div>
    );
  }
});

export default TestLoci;
