import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen(){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* Màn hình 1 */}
        <Stack.Screen 
          name = "HomeScreen" 
          component={HomeScreen} 
          options={{
            title: 'My Home Screen',
            headerStyle:{
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }}>
        </Stack.Screen>
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
