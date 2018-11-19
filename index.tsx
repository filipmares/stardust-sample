import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, themes } from '@stardust-ui/react'

import App from './src/App'

ReactDOM.render(
  <Provider theme={themes.teams}>
    <App />
  </Provider>,
  document.getElementById('root'),
)