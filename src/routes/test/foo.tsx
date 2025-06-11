import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/test/foo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/test/bla"!</div>
}
