import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserSearch from './components/UserSearch/UserSearch'
import ItemUser from './components/ItemUser/ItemUser'
import { NotFound } from './components/notFoundPage'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSearch />} />
        <Route path="/:UserId" element={<ItemUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
