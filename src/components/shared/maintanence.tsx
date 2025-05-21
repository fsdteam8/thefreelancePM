import { Clock, Settings } from "lucide-react";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-white shadow-sm">
        <div className="container mx-auto flex justify-center items-center">
          <Image src="/Logo.png" width={40} height={100} alt="logo" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <Settings className="h-24 w-24 text-blue-500 animate-spin-slow" />
              <Clock className="h-12 w-12 text-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            We&apos;re <span className="text-blue-500">Upgrading</span> Our
            System
          </h1>

          <p className="text-[14px] text-slate-600 max-w-2xl mx-auto">
            The FreelancePM Club is currently undergoing scheduled maintenance.
            We&apos;ll be back online shortly with new features to help you
            manage your freelance projects even better!
          </p>

          <div className="pt-6">
            <a
              href="mailto:support@freelancepmclub.com"
              target="_blank"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>
            © {new Date().getFullYear()} The FreelancePM Club. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a
              href="https://www.youtube.com/@thefreelancepm"
              target="_blank"
              className="text-slate-500 hover:text-blue-500 transition"
            >
              Youtube
            </a>
            <a
              target="_blank"
              href="http://www.linkedin.com/company/the-freelance-pm-club"
              className="text-slate-500 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/thefreelancepm"
              target="_blank"
              className="text-slate-500 hover:text-blue-500 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
