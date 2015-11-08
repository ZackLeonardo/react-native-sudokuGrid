'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  infoImage: {
    borderRadius: 10,
    // backgroundColor: '#333333',
    height: 120,
    margin: 10,
    width: 120,
    resizeMode: 'contain',
  },
  infoRewardImage: {
    borderRadius: 10,
    // backgroundColor: '#333333',
    height: 60,
    margin: 0,
    width: 60,
    resizeMode: 'contain',
  },
  infoDetail: {
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: '#D19A66',
  },
  infoLife:{
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: '#A02D22',
  },
  infoHunger:{
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: '#D9B339',
  },
  infoSpirit:{
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: '#CB7921',
  },
  infoShelf:{
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: 'green',
  },
  infoHarm:{
    fontSize: 15,
    textAlign: 'justify',
    margin: 5,
    color: 'orange',
  },
  infoDesc: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
    color: '#333333',
  },
  infoTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 10,
  },



});

module.exports = styles;
