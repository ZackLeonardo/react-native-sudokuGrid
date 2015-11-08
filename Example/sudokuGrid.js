/*
* sudoku style grid:
* props from parent: data, info
* data: json data like: ./Example/roles.json
* info: a js file render how girdCell click to show by navigator, like: ./Example/roleInfo.js
*/
'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  ListView,
  StyleSheet,
  View,
  Platform,
} = React;

var GridCell = require('./gridCell');
var s = require('./styles');

var list = React.createClass({
  getInitialState: function() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    return {
      dataSource: this.getDataSource(this.props.data),
    };
  },

  render: function() {
    // var rolePicName = roles.roles[0].rolePicName;
    // var roleName = roles.roles[0].roleName;
    var content = <ListView
      contentContainerStyle={s.list}
      ref="listview"
      dataSource={this.getDataSource(this.props.data)}
      renderRow={this.renderRow}
      />;
    return (
      <View style={s.container}>
        {content}
      </View>
    );
  },

  renderRow: function (
    listItem: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <GridCell
        style={styles.item}
        onPress={()=> this.selectCell(listItem)}
        cell={listItem}
      />
    );
  },

  getDataSource: function(items: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(items);
  },

  selectCell: function(listItem: Object) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: listItem.name,
        component: this.props.info,
        passProps: {listItem},
      });
    }
    // else {
    //   dismissKeyboard();
    //   this.props.navigator.push({
    //     title: item.itemName,
    //     name: 'movie',
    //     movie: movie,
    //   });
    // }
  },

});

var styles = StyleSheet.create({
  item: {
      margin: 10,
  }
});

module.exports = list;
