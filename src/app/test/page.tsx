import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TestPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isIndex = location.pathname === "/test" || location.pathname === "/test/";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-5 border-b bg-card">
        <h1 className="text-2xl font-bold tracking-tight">Test Components</h1>
        {isIndex ? (
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        ) : (
          <button 
            onClick={() => navigate('/test')} 
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Components
          </button>
        )}
      </header>

      <main className="flex-1 p-4 sm:p-6">
        {isIndex ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/test/image-generation-loader" 
                className="group relative flex flex-col p-6 rounded-2xl border bg-card text-card-foreground hover:shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-xl font-semibold mb-3 relative z-10">Image Generation Loader</h2>
                <p className="text-muted-foreground text-sm relative z-10">
                  A smart chameleon loader that dynamically extracts accent colors from images and casts contrasting shadows.
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Outlet />
          </div>
        )}
      </main>
    </div>
  )
}
