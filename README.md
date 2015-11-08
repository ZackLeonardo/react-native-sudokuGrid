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

## Properties

| Prop | Type | Description |
|---|---|---|
|**`activeProps`**|`object`|Optional set of props applied to the content component when in lightbox mode. Usable for applying custom styles or higher resolution image source.|
|**`renderHeader(close)`**|`function`|Custom header instead of default with X button|
|**`renderContent`**|`function`|Custom lightbox content instead of default child content|
|**`onClose`**|`function`|Triggered when lightbox is closed|
|**`onOpen`**|`function`|Triggered when lightbox is opened|
|**`underlayColor`**|`string`|Color of touchable background, defaults to `black`|
|**`swipeToDismiss`**|`bool`|Enables gestures to dismiss the fullscreen mode by swiping up or down, defaults to `true`.|
|**`springConfig`**|`object`|[`Animated.spring`](https://facebook.github.io/react-native/docs/animations.html) configuration, defaults to `{ tension: 30, friction: 7 }`.|

## Demo

![Demo](https://github.com/ZackLeonardo/react-native-sudokuGrid/blob/master/screenShot1.png)(https://github.com/ZackLeonardo/react-native-sudokuGrid/blob/master/screenShot2.png)

## Example

Check full example in the `Example` folder.

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Joel Arvidsson
