
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ItemsProvider } from './contexts/ItemsContext'

function App() {

  return (
   <ItemsProvider>
      <RouterProvider router={router} />
   </ItemsProvider>
  )
}

export default App
