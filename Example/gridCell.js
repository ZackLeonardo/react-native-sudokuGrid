/*
* props from parent: cell, onPress;
* cell is a json data contains: picName, name;
*/

'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} = React;

var gridCell = React.createClass({
  render: function() {
    var picName = this.props.cell.picName;
    var name = this.props.cell.name;

    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };

    return (
      <View>
        <TouchableElement
          onPress={this.props.onPress}>
          <View style={styles.container}>
            <Image style={styles.cellImage} source={{uri:picName}} />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </TouchableElement>
      </View>

    );
  },



});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    color: '#333333',
  },
  cellImage: {
    borderRadius: 10,
    backgroundColor: '#333333',
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 2,
    width: 64,
    resizeMode: 'stretch',
  },
});

module.exports = gridCell;
