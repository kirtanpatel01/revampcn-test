import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router"
import DashboardPage from "@/app/dashboard/page"
import LoginPage from "@/app/login/page"
import SignupPage from "@/app/signup/page"
import { Button } from "@/components/ui/button"

import { Zap } from "lucide-react"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-5 w-5" />
          </div>
          <span>RevampCN</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center">
        {/* Hero Section */}
        <section className="">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center rounded-full bg-linear-to-br from-muted to-blue-950 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
              Welcome to the new standard
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build faster with <br className="hidden sm:block" />
              <span className="animate-pulse bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                beautiful components
              </span>
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A highly customizable, feature-rich dashboard and authentication
              system ready to be integrated into your next big project.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Start Building
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                View Dashboard
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">Built on Vite and React for incredible performance and seamless developer experience.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Secure by Default</h3>
              <p className="text-muted-foreground">Robust authentication flows and protected routes ready for your custom backend.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Stunning UI</h3>
              <p className="text-muted-foreground">Crafted with Tailwind CSS and Shadcn for an instantly beautiful, accessible interface.</p>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-xs tracking-wider text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} RevampCN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
