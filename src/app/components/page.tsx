import { Link, Outlet } from "react-router";

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Components</h1>
        <div className="flex gap-4 justify-center mb-12">
          <Link to="/components/button" className="text-blue-500 hover:underline">
            View Button Page
          </Link>
        </div>
        <div className="flex justify-center border p-12 rounded-xl bg-card/50">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
