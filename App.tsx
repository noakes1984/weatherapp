import React from 'react'
import { StyleSheet, Text, View, Alert, TextInput, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';


export default function App() {

  this.state = {
    //location: null,
    words: '61107',
    description: 'Sunshine',
    currently: '65F',
    rainArray: [],
    cloudsArray: [],
    clear: [],
    city: 'Rockford, IL',
    count: 0,
  }
  this.onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  console.log('this is running');
  }
  var data = [
    {id: 'a', time: 'Today', description: "0"},
    {id: 'b', time: 'Tomorrow', description: "1"},
    {id: 'c', time: 'Day 3', description: "2"},
    {id: 'd', time: 'Day 4', description: "3"},
    {id: 'e', time: 'Day 5', description: "4"},
    {id: 'f', time: 'Day 6', description: "5"},

  ];
  var cityName = ""
  this.zipCodePush = () => {
    console.log("zip code");
  //   const newState = this.someFunc(this.state);
  this.setState({ words: "newState" });
}

  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;

  var dataTwo = [];

  const findCoordinates = () => {

    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        console.log("find coordinates");
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

  }
  

  const axios = require('axios');
  const areacode = "61107"
  //console.log("Is this running?");
// // Make a request for a user with a given ID
  // axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${areacode}&APPID=6b79246ce1d58e9e289aa7abbe141af7`)
  // .then(function (response){
  //   const res = response.data.weather[0];
  //   // handle success
  //   //console.log("Response: " + JSON.stringify(res));
   
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log("Error: " + error);
  // })
  // .finally(function () {
  //   // always executed
  // });

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${areacode}&APPID=6b79246ce1d58e9e289aa7abbe141af7`)
    .then(function (response){
    var listLength = response.data.list.length;
    console.log("City Name: " + response.data.city.name);


    // handle success
    var seconds = JSON.stringify(response.data.list[0].dt);
    var d = new Date(seconds);
    var rainArray = [];
    var clearArray = [];
    var cloudsArray = [];
    var finalArray = [];

    for (var i = 0; i < listLength; i++){
      //console.log("Data two: " + i + response.data.list[i].weather[0]);
      cityName = response.data.city.name;
      
      dataTwo.push(response.data.list[i].weather[0].description);
      if( i % 8 == 0 || i == 39){
      var re = "rain"; 
      var clouds = 'clouds';
      var clear = 'clear'
      var str = dataTwo[i];
      if (str.search(re) == -1){ 

        if (str.search(clouds) == -1){

          if (str.search(clear) == -1){

            } else {
              clearArray.push(i)
              //data[i].description = "clear"
            }
          } else {
            cloudsArray.push(i)
            //data[i].description = "clouds"
          }
        } else { 
          rainArray.push(i)
          //data[i].description = "rain"
        } 
      }
    }

    console.log("Rain Array: " + rainArray );
    console.log("clear Array: " + clearArray);
    console.log("Clouds Array: " + cloudsArray);
    
    
    if(rainArray.includes(0)){
      data[0].description = "rain"
      
    }
    if(rainArray.includes(8)){
      data[1].description = "rain"

    }
    if(rainArray.includes(16)){
      data[2].description = "rain"

    }
    if(rainArray.includes(24)){
      data[3].description = "rain"
    }
    if(rainArray.includes(32)){
      data[4].description = "rain"
    }
    if(rainArray.includes(39)){
      data[5].description = "rain"
    }
    if(clearArray.includes(0)){
      data[0].description = "clear"
      
    }
    if(clearArray.includes(8)){
      data[1].description = "clear"

    }
    if(clearArray.includes(16)){
      data[2].description = "clear"

    }
    if(clearArray.includes(24)){
      data[3].description = "clear"
    }
    if(clearArray.includes(32)){
      console.log("is this running")
      data[4].description = "clear"
    }
    if(clearArray.includes(39)){
      data[5].description = "clear"
    }
    if(cloudsArray.includes(0)){
      data[0].description = "clouds"
      
    }
    if(cloudsArray.includes(8)){
      data[1].description = "clouds"

    }
    if(cloudsArray.includes(16)){
      data[2].description = "clouds"

    }
    if(cloudsArray.includes(24)){
      data[3].description = "clouds"
    }
    if(cloudsArray.includes(32)){
      console.log("is this running")
      data[4].description = "clouds"
    }
    if(cloudsArray.includes(39)){
      data[5].description = "clouds"
    }
    var descriptionArray = []
    for(var t = 0; t < 6; t++){
      descriptionArray.push(data[t].description);
    }
    console.log("Array for Type of Weather: " + descriptionArray);

    
    finalArray = rainArray.concat(clearArray).concat(cloudsArray)
    function sortNumber(a, b) {
      return a - b;
    }
    
    finalArray.sort(sortNumber);
    for (var x = 0; x < rainArray.length; x++){
      if (rainArray[x]== finalArray){

      }
    }
    for (var x = 0; x < clearArray.length; x++){
 
    } 

    for (var x = 0; x < cloudsArray.length; x++){
 
    }
    function handleLearnMorePress() {
      this.setState({ words: "newState" });

         }

    
    
    console.log("Final array: " + finalArray);
    
    })
  .catch(function (error) {
    // handle error
    console.log("Error Two: " + error);
  })
  .finally(function () {
    // always executed
    });

  return (    
    <View style={styles.container}>
      <View style = {styles.zipCodeInput}>
        <Text>Input your zip code</Text>
        <TextInput
          style={{height: 40, width: 100, backgroundColor: 'white', borderColor: 'black', borderWidth: 1}}
          //value={this.state.words}
          //onChangeText={(text) => this.setState({ words: text })}
          //onSubmitEditing={(text) => this._handleTextChange(text)}
        />
        <TouchableOpacity onPress={this.zipCodePush} ><Text>Push</Text></TouchableOpacity>
        <Text style={{ paddingTop: 25 }}> {this.state.currently} {this.state.city}</Text>
          <View style={styles.fiveDay}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{item.time}</Text>
                <Image style={{ width: 75, height: 75}}
                  source={require('./partlycloudy.png')}
                />
                <Text style={{paddingTop: 22}}>{this.state.description}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  zipCodeInput: {
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: 150
  },
  fiveDay: {
    paddingTop: 25,
    //alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  itemContainer: {
    width: this.size,
    height: this.size,
    backgroundColor: 'lightblue',
    margin: 10
  
  },
  item: {
    flex: 1,
    margin: 3,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  }

});
