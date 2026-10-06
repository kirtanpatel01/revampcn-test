import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router"
import { motion } from "motion/react"
import DashboardPage from "@/app/dashboard/page"
import LoginPage from "@/app/login/page"
import SignupPage from "@/app/signup/page"
import ComponentsPage from "@/app/components/page"
import NewButtonPage from "@/app/components/button/page"
import TestPage from "@/app/test/page"
import ImageGenerationLoaderPage from "@/app/test/image-generation-loader/page"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

import PrimaryBtn from "./components/primary-button"

function WavyText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{ y: [-15, 15] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 1.5,
            delay: index * 0.1,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-2.5 font-bold cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="RevampCN" className="h-8 w-8 object-contain" />
          <span className="text-lg tracking-tight">RevampCN</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/test")}>
            Test Page
          </Button>
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
          <ModeToggle />
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center bg-radial from-zinc-200 dark:from-zinc-950 to-zinc-50 dark:to-zinc-900">
        {/* Hero Section */}
        <section className="">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              <span className="inline-flex items-center bg-linear-to-l from-zinc-950 via-zinc-800 to-zinc-700 bg-clip-text pt-4 pb-4 text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-100">Build faster with</span> <br className="hidden sm:block" />
              <span className="inline-flex items-center bg-linear-to-r from-zinc-950 via-zinc-800 to-zinc-700 bg-clip-text pt-4 pb-4 text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-100">
                Beautiful components
              </span>
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A highly customizable, feature-rich dashboard and authentication
              system ready to be integrated into your next big project.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size={"lg"} variant={"primary"} onClick={() => navigate("/signup")}>
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/components" element={<ComponentsPage />}>
            <Route path="button" element={<NewButtonPage />} />
          </Route>
          <Route path="/test" element={<TestPage />}>
            <Route path="image-generation-loader" element={<ImageGenerationLoaderPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
