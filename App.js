import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/redux/reducers'
import CounterPracticeScreen from './src/screens/Practice/CounterPracticeScreen'
const store = createStore(rootReducer)

export default function App() {

  return (
    <Provider store={store}>
      <CounterPracticeScreen />
    </Provider>
  )
}


