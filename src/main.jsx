
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { themes } from './utils/theme/index.js'
import Toast from './components/Toast.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themes}>
    <App />
    <Toast/>
  </ThemeProvider>,
)
