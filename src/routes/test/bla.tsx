import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/bla')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bla"!</div>
}
