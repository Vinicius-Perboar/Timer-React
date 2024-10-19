import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { History } from './pages/History'
import { DefaulLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
