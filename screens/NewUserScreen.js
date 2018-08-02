import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default class NewUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'M'
        }
    }

    handleSignUp = () => {
        console.log('signing up', {size: this.state.size, ...this.props.navigation.state.params});
        // this.props.navigation.navigate('Scan', {route: 'signUp', size: this.state.size, ...this.props.navigation.state.params});
    }

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


            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={styles.getStartedText}>We don't recognize you. Is this your first time running with Sloppy Moose?</Text>
                <Text style={styles.getStartedText}>If this is not your first time, please go back and double-check your spelling.</Text>
                <Text style={styles.getStartedText}>Please select your t-shirt size and press `SUBMIT`.</Text>
            </View>

            <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                        style={{justifyContent: 'center', marginHorizontal: 10, height: 75, width: 150, borderWidth: 1}}
                        onPress={() => {
                            this.props.navigation.state.params.notify('Please revise your name and try again\n');
                            this.props.navigation.navigate('Home')}}>
                    <Text style={{textAlign: 'center', borderRadius: 5}}>GO BACK</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                        style={{justifyContent: 'center', marginHorizontal: 10, height: 75, width: 150, borderWidth: 1}}
                        onPress={this.handleSignUp.bind(this)}>
                    <Text style={{textAlign: 'center', borderRadius: 5}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
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
getStartedText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
