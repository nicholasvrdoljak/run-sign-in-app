import React from 'react';
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
              source={
                __DEV__
                  ? require('../assets/images/sloppy.jpg')
                  : require('../assets/images/sloppy.jpg')
              }
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
                  source={
                    __DEV__
                    ? require('../assets/images/facebook.png')
                    : require('../assets/images/facebook.png')
                  }
                  style={styles.iconImage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._handleInstagramPress}>
                <Image
                  source={
                    __DEV__
                      ? require('../assets/images/instagram.png')
                      : require('../assets/images/instagram.png')
                  }
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>

            {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View> */}
          </View>

          {/* <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View> */}

        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}


      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleSignIn = () => {

  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
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
