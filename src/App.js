import Routes from './Routes/index'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App
