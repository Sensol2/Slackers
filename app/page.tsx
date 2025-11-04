import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to Slackers
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            A bilingual (Korean-Japanese) language exchange and tutoring
            platform for university students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/login"
              className="bg-primary text-white px-6 py-3 rounded-2xl hover:bg-secondary transition-colors duration-200 text-center"
            >
              Get Started
            </Link>
            <Link
              href="/dashboard"
              className="border-2 border-primary text-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-colors duration-200 text-center"
            >
              Dashboard
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-2xl">
              <h3 className="font-semibold text-primary mb-2">Find Teachers</h3>
              <p className="text-sm text-text-secondary">
                Connect with native speakers for language exchange
              </p>
            </div>
            <div className="p-4 bg-background rounded-2xl">
              <h3 className="font-semibold text-primary mb-2">
                Chat in Real-time
              </h3>
              <p className="text-sm text-text-secondary">
                Practice with Slack-style chat rooms
              </p>
            </div>
            <div className="p-4 bg-background rounded-2xl">
              <h3 className="font-semibold text-primary mb-2">
                Manage Subscriptions
              </h3>
              <p className="text-sm text-text-secondary">
                Flexible plans for your learning journey
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
