import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
const Counter = () => {
    const [count, setCount] = React.useState(0)

    const handleCounter = (action) => {
        switch (action.operation) {
            case "+":
                setCount(count + 1)
                break;
            case "-":
                setCount(count - 1)
                break;
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleCounter({ operation: "-" })}
                style={styles.boxContainer}>
                <Text>-</Text>
            </TouchableOpacity>
            <View>
                <Text>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => handleCounter({ operation: "+" })}
                style={styles.boxContainer}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    boxContainer:
    {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10
    }
})

export default Counter

// ok now look basic logic for reducers
// here we need to create 2 seprate function but functionality is same and eay
// so we can merge this both like