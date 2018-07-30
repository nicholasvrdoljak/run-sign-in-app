import React from 'react';
import axios from 'axios';
import config from '../config.js';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      text: ''
    }
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/sloppy.jpg')}
              style={styles.welcomeImage}
            />
          </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>

              <Text style={styles.getStartedText}>
                Please sign in with your username and password to register for the run.
              </Text>
              
              <View style={{flexDirection: 'row'}}>
                <View style={styles.signInContainer}> 
                  <TextInput
                    style = {styles.signInFields}
                    onChangeText={(text) => this.setState({username: text})}
                    placeholder='username'
                    placeholderTextColor = "#9a73ef"
                  />
                  <TextInput
                    style = {styles.signInFields}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder='password'
                    secureTextEntry={true}
                    placeholderTextColor = "#9a73ef"
                  />
                </View>
                
                <View style={{justifyContent: 'center'}}>
                  <TouchableOpacity 
                    onPress={this._handleSignIn.bind(this)}>
                    <Image
                      source={require('../assets/images/go.png')}
                      style = {{
                          height: 30, 
                          width: 30,
                          resizeMode: 'contain',
                          marginTop: 3,
                          marginHorizontal: 5,
                          alignItems: 'center',
                          alignContent: 'center'
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* {this._maybeRenderDevelopmentModeWarning()} */}
  
            <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              The mission of the Sloppy Moose Running Club is to raise health and fitness 
              awareness to the Sacramento community and the greater Northern California region.
            </Text>

            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this._handleFacebookPress}>
                <Image
                  source={require('../assets/images/facebook.png')}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleInstagramPress}>
                <Image
                  source={require('../assets/images/instagram.png')}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>

      </View>
    );
  }

  _handleSignIn = () => {
    console.log('navigating');
    this.props.navigation.push('Scan')
    // axios.post(`${config.REST_SERVER}/checkName`, {
      // params: {
      //   username: this.state.username
      // }
    // })
    // .then((response) => {
      /**
       * If the response shows it is a new user, notify the user and let them select either to proceed to sign in
       * or to go back to revise their name
       */
      /**
       * If the response shows an existing user, proceed to scan screen
       * */ 
    //   console.log('hi');
    // }).catch((error) => {
    //   console.log(error);
    // });
  };

  _handleFacebookPress = () => {
    WebBrowser.openBrowserAsync('https://www.facebook.com/SloppyMooseRunningClub');
  };

  _handleInstagramPress = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/sloppymooserunningclub/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0//-10,
  },
  iconContainer: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  goButton: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 3,
    marginHorizontal: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 3,
    marginHorizontal: 5,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  signInContainer: {},
  signInFields: {
    marginVertical: 5,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    width: 250,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  }
});
