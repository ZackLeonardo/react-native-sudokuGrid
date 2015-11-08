'use strict';

var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  Platform,
  AppRegistry,
  NavigatorIOS,
} = React;

// var ListItem = require('./listItem');
var s = require('./styles');
var SudokuGrid = require('./sudokuGrid');
var roleData = require('./roles.json');
var roleInfo = require('./roleInfo');

var roleSudokuGrid = React.createClass({
  render: function() {
    return (
        <SudokuGrid
          data={roleData.items}
          info={roleInfo}
          navigator={this.props.navigator}
        />
    );
  },
});

var roleSudokuApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'roles',
          component: roleSudokuGrid,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => roleSudokuApp);

module.exports = roleSudokuGrid;
