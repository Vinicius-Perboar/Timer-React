import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/index'
import { LayoutContainer } from './DefaultLayout/styles'

export function DefaulLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
