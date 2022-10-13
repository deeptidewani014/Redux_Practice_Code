import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen() {

    const counterValue = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const [message, setmessage] = React.useState("")


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 1, width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                {/* <TouchableOpacity onPress={() => {
                    dispatch({ type: "DEL", data: [1, 2, 3, 4, 5] })
                }}>
                    <Text style={{ fontSize: 40 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>{counterValue.count}</Text>
                <TouchableOpacity onPress={() => {
                    dispatch({ type: "ADD", data: [1, 2, 3, 4, 5] })
                }}>
                    <Text style={{ fontSize: 40 }}>+</Text>
                </TouchableOpacity> */}
                <TextInput style={{ borderWidth: 1 }} placeholder="Enter Message"
                    onChangeText={(text) => setmessage(text)}
                />
                <TouchableOpacity style={{ backgroundColor: "red", paddingHorizontal: 15, paddingVertical: 20 }}
                    onPress={() => {
                        alert(message)
                    }}>
                    <Text>Press</Text>
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={{ flex: 1 }} onPress={() => dispatch({ type: "msg", text: "Hello Good Morning" })}>
                <Text>Hello</Text>
            </TouchableOpacity> */}
        </View>
    )
}