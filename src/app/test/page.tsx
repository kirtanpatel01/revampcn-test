import { Link, Outlet } from "react-router";

export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background text-foreground p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Test Page</h1>
        <div className="flex gap-4 justify-center mb-12">
          <Link to="/test/image-generation-loader" className="text-blue-500 hover:underline">
            View Image Generation Loader
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
