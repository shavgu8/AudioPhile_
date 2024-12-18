
import './App.module.scss'
import { AuthProvider } from './components/singup/singup'
import Router from './router/Route'

function App() {

  return (
    <AuthProvider>
 <Router/>
    </AuthProvider>
 
  )
}

export default App
