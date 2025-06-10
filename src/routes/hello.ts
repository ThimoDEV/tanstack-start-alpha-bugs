import { createServerFileRoute } from "@tanstack/react-start/server"
export const ServerRoute = createServerFileRoute("/hello").methods({
  GET: async () => {
    return new Response("Hello, World!");
  },
});
