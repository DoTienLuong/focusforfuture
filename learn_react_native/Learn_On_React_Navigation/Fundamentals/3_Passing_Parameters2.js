import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TextInput } from 'react-native-web';


const HomeScreen = ({navigation, route}) => {
  React.useEffect(()=>{
    if(route.params?.post){

    }
  }, [route.params?.post]);
  // Tạo hiệu ứng hiển thị nội dung đã nhập. Hiển thị trong return, {route.param?.post}
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
      <Text style={{paddingBottom: 20}}></Text>
      <Button title='Open Details' onPress={()=>{
        navigation.navigate('DetailScreen', {
            itemID: 21,
            otherParam: 'Anything you want here.'
        });
        // Cấu trúc navigation.navigate('RouteName', {/* Truyền tham số vào đây*/})
      }}/>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Create Post' onPress={() => navigation.navigate('CreatePost')}>
        </Button>
      </View>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> 
    </View>
  )
}
const CreatePostScreen = ({navigation, route}) => {
  const [postText, setPostText] = React.useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder='Nhập vào giá trị muốn hiển thị: '
        style = {{height: 200, padding: 10, backgroundColor: 'grey'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={()=>{
          navigation.navigate({
            name: 'HomeScreen',           // chuyển tới màn hình HomeScreen
            params: {post: postText},     // nội dung lấy từ useState lưu vào post
            merge: true,                  // merge nội dung với màn hình chính, lấy nội dung sau cùng.
          });
        }}
      />
    </>
  )
}
const DetailScreen = ({route, navigation}) => {
  const {itemID, otherParam} = route.params;
    
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
      <Text style={{paddingBottom: 20}}>Detail Screen</Text>
      <Text style={{paddingBottom: 20}}>itemID: {JSON.stringify(itemID)}</Text>
      <Text style={{paddingBottom: 20}}>otherParam: {JSON.stringify(otherParam)}</Text>

      <View style={{marginTop: 20}}>
        <Button title='Open Details...Again' onPress={()=>{
          // navigation.navigate('HomeScreen');
          navigation.push('DetailScreen', {itemID: Math.floor(Math.random() *100)});
        }}/>
      </View>
      <View style={{marginTop: 20}}>
        <Button title='Go to Home' onPress={()=>{
          // navigation.navigate('HomeScreen');
          navigation.navigate('HomeScreen');
        }}/>
      </View>
      <View style={{marginTop: 20}}>
        <Button title='Go back' onPress={()=>{
          // navigation.navigate('HomeScreen');
          navigation.goBack();    // Going Back: quay về trang liền trước.
        }}/>
      </View>
      <View style={{marginTop: 20}}>
        <Button title='Go back to first screen and delete stack waiting' onPress={()=>{
          // navigation.navigate('HomeScreen');
          navigation.popToTop();    // popToTop: quay về trang đầu và xoá tất cả các trang đã trước đó.
        }}/>
      </View>
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
          <Stack.Screen name='CreatePost' component={CreatePostScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      // Trong Navigation Container, Screen nào ở trên thì trang chủ sẽ là screen đó.
      // Không được command trong Navigator
    );
}
export default App;