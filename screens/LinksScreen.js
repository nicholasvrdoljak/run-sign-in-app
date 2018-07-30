import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <View style={{justifyContent: 'center'}}>
                  <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Home')}>
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
                      <View>GO BACK</View>
                  </TouchableOpacity>
                </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
