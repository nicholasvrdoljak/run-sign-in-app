import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default class NewUserScreen extends React.Component {
    constructor(props) {
        super(props);
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


            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text>We don't recognize you. Is this your first time running with Sloppy Moose?</Text>
                <Text>If this is not your first time, please go back and double-check your spelling. </Text>
                <Text>Please select your t-shirt size and press `SUBMIT`.</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                        onPress={() => {
                            this.props.navigation.state.params.notify('Please revise your name and try again\n');
                            this.props.navigation.navigate('Home')}}>
                    <Text>GO BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={() => {
                            this.props.navigation.navigate('Scan')}}>
                    <Text>SUBMIT</Text>
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
});
