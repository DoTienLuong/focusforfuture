import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Typing here!'></TextInput>
                <Button style={styles.addToDo}></Button>
            </View>
            <View style={styles.container}>
                <Text sytle={styles.textList}>Nội dung hiển thị</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 100
    },
    inputContainer: {
        flexDirection: row,
    },
    textInput: {
        borderWidth: 2, 
        borderColor: 'blue',
        padding: 8,
        marginRight: 8,
        width: '70%'
    }
})