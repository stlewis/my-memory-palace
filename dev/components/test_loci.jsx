import React from 'react';

var TestLoci = React.createClass({
  getInitialState: function(){
    var loci = JSON.parse(sessionStorage.getItem("palaceConfig")).loci;
    return({loci: loci, loci_index: 0, message: ""});
  },

  checkLoci: function(e){
    var element = document.getElementById('loci_guess');
    var guess = element.value;
    if(guess.toLowerCase() == this.state.loci[this.state.loci_index].value.toLowerCase()){
      element.value = "";
      // If they were right, increment the loci counter, provided there's something in the 
      // next loci. If there isn't, they've completed the list, so bounce
      var nextLociIdx = this.state.loci_index + 1;
      var nextLoci = this.state.loci[nextLociIdx];
      if (nextLoci != undefined){
        this.setState({loci_index: nextLociIdx});
      }else{
        this.setState({message: "You got them all, congratulations!"});
      }
    }else{
      element.value = "";
      this.setState({message: "Sory, that was wrong! Give it another shot!"});
      // If they guessed wrong, they should be told so and given an opportunity to try again.
    }
    e.preventDefault();
  },
  
  render: function(){
    var loci = this.state.loci[this.state.loci_index]
    return(
      <div>
        <p>
          What is at the {loci.name}?
        </p>
        <h3>{this.state.message}</h3>
        <form name='test-loci-form' onSubmit={this.checkLoci}>
          <input type='text' name='loci' placeholder='Loci' id='loci_guess' />
          <input type='submit' name='submit' value='Check' className='btn btn-success' />
        </form>
      </div>
    );
  }
});

export default TestLoci;
