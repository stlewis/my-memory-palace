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
      if(item != ''){
        loci.push({name: l.name, value: item, id: l.id});
      }
    });

    console.log("your Loci");
    console.log(loci);
    
    if(loci.length > 0){
      this.setState({error_message: undefined});
      // FIXME Doing both of the below is almost definitely a code-smell.
      this.setState({palace_name: this.state.palace_name, palace_loci: loci});
      var configJSON = JSON.stringify({name: this.state.palace_name, loci: loci});
      sessionStorage.setItem("palaceConfig", configJSON);
      window.location ='#item-list'
    }else{
      this.setState({error_message: "You have to have at least one item in the list to start the test."}) 
    }
    e.preventDefault();
  },

  render: function(){
    self = this;

    var inputStyle = {
      width: "50%",
      fontSize: "1.2em"
    };

    var divStyle = {
      paddingTop: 30 
    };

    var btnStyle = {
      height: 100,
      width: 300,
      lineHeight: "100px",
      fontSize: "1.5em",
      marginTop: 30
    };

    if(this.state.error_message != null){
      var error_message = <div style={{color: 'red'}}>{this.state.error_message}</div>
    }

    return(
      <div>
        <a href='#set-loci' className='btn btn-danger'>Edit Loci</a>
        <h2>What Do You Want To Remember?</h2>
        <p>
          Below is a list of all the loci for {this.state.palace_name}. Next to each of your Loci
          is a field to enter an item you'd like to remember. Place each item you want to remember in 
          the appropriate slot, then click "GO" to start the trainer!
        </p>
        {error_message}
        <form name='add-memory-items' id='add_memory_items' onSubmit={this.setMemoryItems}>
          {this.state.palace_loci.map(function(loci, idx){
            return(
              <div style={divStyle} key={loci.id}>
                <div>What is at the {loci.name}?</div>
                <div>
                  <input style={inputStyle} defaultValue={loci.value} type='text' className='loci-item form-control' name={"loci-" + loci.id + "-item"} id={"loci_" + loci.id + "_item"} />
                </div>
              </div>
            );
          })}
          <input style={btnStyle} type='submit' name='submit' value='GO' className='btn btn-lg btn-success' />
        </form>
      </div>
    );
  }

});

export default AddItems;
