import { Suspense } from 'react'
import './App.css'
import AppNavigator from './services/context'
import CenterLoader from './utils/loaders/center'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />

    <Suspense fallback={CenterLoader()}>
      <AppNavigator />
    </Suspense>
    </>
  )
}

export default App
