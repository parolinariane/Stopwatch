import React, { Component } from 'react';
import { StyleSheet,
         Text, 
         View,
         Image,
         TouchableOpacity 
        } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      button: 'START',
      last: null
    };

    //timer variable
    this.timer = null;

    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);

  }


  start(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({button: 'START'});
    }
    else{      
      this.timer = setInterval( ()=> {
        this.setState({number: this.state.number + 0.1})
      }, 100);

      this.setState({button: 'STOP'});
    }

  }

  clean(){
    if(this.timer != null){
      
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.number,
      number: 0,
      button: 'START'
    })

  }


  render(){
    return(
      <View style={styles.container}>
        
        <Image
          source={require('./src/cronometro.png')}
          style={styles.stopwatch}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.btnText}>{this.state.button}</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.button} onPress={this.clean}>
            <Text style={styles.btnText}>CLEAN</Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.lastArea}>
            <Text style={styles.runText}> 
              {this.state.last > 0 ? 'Last Time: ' + this.state.last.toFixed(2) + 's' : ''} 
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#029edb'
  },

  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },

  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#029edb'
  },

  lastArea:{
    marginTop: 40
  },

  runText:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});

export default App;
