import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, WebBrowser } from 'expo';
import axios from 'axios';

export default class ScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      autofocus: Camera.Constants.AutoFocus.on,
      code: '',
      camera: true
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeRead(data) {
    // start loader
    this.setState({camera: false});
    axios.post(`${config.REST_SERVER}${this.props.navigation.state.params.route}`, {
        params: {
          f: this.props.navigation.state.params.first, 
          l: this.props.navigation.state.params.last, 
          d: this.props.navigation.state.params.dob, 
          s: this.props.navigation.state.params.size,
          c: data.data
        }
      }).then((response) => {
        console.log('response', response.data);
        let responseOptions = {
          'successful_signup': 1, 
          'error_wrong_code': 1, 
          'duplicate_signin': 1, 
          'successful_signin': 1,
          'multiple_users': 1
        }
      }).catch(err => {
        console.log('error', err);
      });
    // this.props.navigation.navigate('Links', {runCode: data.data});
    // WebBrowser.openBrowserAsync(data.data);
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (this.state.camera) {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.state.type} 
            autoFocus={this.state.autofocus}
            onBarCodeRead={(data) => this.handleBarCodeRead(data)}
            onMountError={(message) => console.log(message)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    } else {
      return(
        <Text>Please wait</Text>
      );
    }
  }
}