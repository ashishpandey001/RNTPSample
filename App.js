import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
type Props = {};
export default class App extends Component<Props> {

  constructor(Props) {
    super(Props);
    this.state = {
      isPlaying: false,
    };
  }

  onPlayStopButtonPress = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    }, () => {
      if (this.state.isPlaying) {
        this.onSSPlay();
      } else {
        this.onSSStop();
      }
    });
  }

  onSSPlay = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
        id: '1',
        url: require('./android/app/src/main/res/raw/hdfc_d_s_2_1.mp3'),
        title: '1',
        artist: '1'
      });
    await TrackPlayer.play();
  };

  onSSStop = async () => {
    await TrackPlayer.stop();
  }

  render() {
    return (
      <View>
        <Button
          title={this.state.isPlaying ? 'Stop' : 'Play'}
          onPress={this.onPlayStopButtonPress}
        />
      </View>
    );
  }
}
