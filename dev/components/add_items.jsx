import React from 'react';

var AddItems = React.createClass({
  getInitialState: function(){
    var storage = JSON.parse(sessionStorage.getItem("palaceConfig"));

    return({
      palace_name: storage.name,
      palace_loci: storage.loci
    });
  },

  setMemoryItems: function(e){
    var loci = []
    this.state.palace_loci.forEach(function(l, idx){
      var item = document.getElementById("loci_" + l.id + "_item").value;
      loci.push({name: l.name, value: item, id: l.id});
    });
    // FIXME Doing both of the below is almost definitely a code-smell.
    this.setState({palace_name: this.state.palace_name, palace_loci: loci});
    var configJSON = JSON.stringify({name: this.state.palace_name, loci: loci});
    console.log(configJSON);
    sessionStorage.setItem("palaceConfig", configJSON);
    e.preventDefault();
    window.location ='#trainer'
  },

  render: function(){
    self = this
    return(
      <div>
        <h2>What Do You Want To Remember?</h2>
        <p>
          Below is a list of all the loci for {this.state.palace_name}. Next to each of your Loci
          is a field to enter an item you'd like to remember. Place each item you want to remember in 
          the appropriate slot, then click "GO" to start the trainer!
        </p>
        <form name='add-memory-items' id='add_memory_items' onSubmit={this.setMemoryItems}>
        {this.state.palace_loci.map(function(loci, idx){
          return(
              <table key={loci.name + idx}>
                <tbody>
                  <tr>
                    <td>{loci.name}</td>
                    <td><input type='text' className='loci-item' name={"loci-" + loci.id + "-item"} id={"loci_" + loci.id + "_item"} /></td>
                  </tr>
                  <tr>
                  </tr>
                </tbody>
              </table>
          ) 
        })}
        <input type='submit' name='submit' value='GO' className='btn btn-lg btn-success' />
        </form>
      </div>
    );
  }

});

export default AddItems;
