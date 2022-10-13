import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


export default function CounterPracticeScreen() {
    //const selector = useSelector((state) => state)
    // console.log(selector);

    const counter = useSelector((state) => state.counter)
    // console.log(counter.count);
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <TouchableOpacity style={{ backgroundColor: "blue", width: 50, height: 50, borderRadius: 30, alignItems: "center", justifyContent: "center" }} onPress={() => {
                dispatch({ type: "increment" })
            }}>
                <Text style={{ color: "#fff" }}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 30 }}>{counter.count}</Text>
            <TouchableOpacity style={{ backgroundColor: "blue", width: 50, height: 50, borderRadius: 30, alignItems: "center", justifyContent: "center" }}
                onPress={() => {
                    if (counter.count > 0) {
                        dispatch({ type: "decrement" })
                    }
                }}>
                <Text style={{ color: "#fff" }}>-</Text>
            </TouchableOpacity>

        </View>
    )
}