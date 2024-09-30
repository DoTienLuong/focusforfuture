import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

function App(){
    // useState là một hook trong React cho phép cập nhật trạng thái của một component
    const [todoText, setToDoText] = useState('');     //Tạo usetase cập nhật trạng thái của todoText
    // todoText ban đầu là chuỗi rỗng
    const [todoList, setToDoList] = useState([]);     //Tạo usetase cập nhật trạng thái của todoList
    // todoList ban đầu là mãng rỗng

    const textInputChange = (textChange) => {
        setToDoText(textChange);
    }
    const addTodo = () => {
      // setToDoList([...todoList, todoText]);                                // Cập nhật thêm data từ typing vào todoList
      setToDoList((currentTodoList) => [...currentTodoList, todoText]);         
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={textInputChange} style={styles.textInput} placeholder='Typing here!'></TextInput>
                <Button onPress={addTodo} title="addTodo"></Button>
            </View>
            <View style={styles.viewData}>
                <Text sytle={styles.textList}>Nội dung hiển thị: </Text>
                {todoList.map((todo)=><Text key={todo}>{todo}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 100
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 50,
    },
    textInput: {
        borderWidth: 2, 
        borderColor: 'blue',
        padding: 8,
        marginRight: 8,
        width: '70%'
    },
    viewData:{
        flex: 4,
    },
    textList:{
        flex: 1,
    }
});

export default App;