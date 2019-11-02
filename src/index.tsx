import React from 'react'
import ReactDOM from 'react-dom'

import { App } from 'components'

import * as serviceWorker from './service-worker'

import 'typeface-montserrat'
import 'typeface-source-code-pro'
import 'typeface-trirong'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
