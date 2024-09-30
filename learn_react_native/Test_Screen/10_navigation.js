import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
      <Text style={{paddingBottom: 20}}>Home Screen</Text>
      <Button title='Open Details' onPress={()=>{
        navigation.navigate('DetailScreen');
      }}/>
    </View>
  )
}

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
      <Text style={{paddingBottom: 20}}>Detail Screen</Text>
      <Button title='Back Home Screen' onPress={()=>{
        navigation.navigate('HomeScreen');
      }}/>
    </View>
  )
}


const Stack = createStackNavigator(); // Tạo Stack để tạo menu
const App = () => {
    return (
        // <View style={styles.container}>
        //     <Text>Open up App.js to start working on your app!</Text>
        //     <StatusBar style='auto'></StatusBar>
        // </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>        
          <Stack.Screen name='DetailScreen' component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      // Trong Navigation Container, Screen nào ở trên thì trang chủ sẽ là screen đó.
      // Không được command trong Navigator
    );
}
export default App;