import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RNDraw from 'rn-draw'
  



export default class App extends React.Component {

  _printStrokes = (currentPoints) => { 
    console.log(currentPoints)
  }

  render() {
    return (
      <RNDraw
        containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
        rewind={ (undo) => {this._undo = undo}}
        clear={(clear) => {this._clear = clear} }
        color={'#000000'}
        strokeWidth={4}
        strokes={this._printStrokes}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
