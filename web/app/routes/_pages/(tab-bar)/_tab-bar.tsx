import { Outlet, createFileRoute } from '@tanstack/react-router'
import BottomBar from '~/shared/ui/bottom-bar'

function LayoutComponent() {
  return (
    <>
      <Outlet />
      <BottomBar />
    </>
  )
}

export const Route = createFileRoute('/_pages/(tab-bar)/_tab-bar')({
  component: LayoutComponent,
})
