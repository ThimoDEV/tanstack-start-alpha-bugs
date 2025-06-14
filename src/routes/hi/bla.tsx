import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hi/bla')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/test/bla"!</div>
}
