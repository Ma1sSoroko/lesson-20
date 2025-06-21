import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/showModals/store'
import { router } from './router'

export function App(): React.ReactElement {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}