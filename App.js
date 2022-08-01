import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { theme } from './src/style/theme'
import store, { persistor } from './src/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigations from './src/Navigations/Navigations';

export default function App() {
  return (
    <Provider theme={theme} store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigations />
      </PersistGate>
    </Provider>
  )
}
