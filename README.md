# react-native-sudokuGrid
react native sudoku grid layout

## Installation

```
npm install --save react-native-sudoku-grid
```

**This module requires React Native 0.11 or later**

## Usage

example: see github Example.
https://github.com/ZackLeonardo/react-native-sudokuGrid/tree/master/Example

```js
var SudokuGrid = require('sudokuGrid');
//example
var s = require('./styles');
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
```

### Navigator setup/Android support

For android support you must pass a reference to a `Navigator` since it does not yet have the `Modal` component and is not on the official todo list. See the `Example` project for a complete example.

```
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
```

## Demo

![Demo](https://github.com/ZackLeonardo/react-native-sudokuGrid/blob/master/screenShot1.png)
![Demo](https://github.com/ZackLeonardo/react-native-sudokuGrid/blob/master/screenShot2.png)

## Example

Check full example in the `Example` folder.

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Joel Arvidsson
