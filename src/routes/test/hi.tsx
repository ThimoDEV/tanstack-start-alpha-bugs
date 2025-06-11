import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/test/hi')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hi"!</div>
}
