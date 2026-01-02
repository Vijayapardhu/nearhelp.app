"use client";

import { Download, MapPin, Shield, Zap, Users, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hyperlocal Connection",
      description: "Find verified helpers within minutes in your neighborhood"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Matching",
      description: "Instantly connect with available helpers near you"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Helpers",
      description: "Every helper is ID-verified for your safety and trust"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Simple & Direct",
      description: "No complex processes. Request help, get help, pay cash"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Glassmorphic Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-100 bg-clip-text text-transparent">
              NearHelp
            </span>
          </div>
          <a
            href="https://github.com/Vijayapardhu/NearHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 font-medium"
          >
            View on GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-emerald-200"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <Star className="w-4 h-4 fill-emerald-300 text-emerald-300" />
              <span className="text-sm font-medium">Now Available for Android</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                Help When
              </span>
              <span className="block bg-gradient-to-r from-teal-200 via-emerald-200 to-green-100 bg-clip-text text-transparent">
                You Need It
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              Connect with verified helpers in your neighborhood. Real-time assistance for daily tasks.
              Simple, safe, and cash-based.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/Vijayapardhu/NearHelp/releases/download/Release/NearHelp.apk"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Download for Android
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Download Info */}
            <p className="text-sm text-emerald-200/60 pt-4">
              26.9 MB • Android 7.0+ • Free • No Ads
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-center text-emerald-100/70 text-lg mb-16 max-w-2xl mx-auto">
            Getting help is simple. Just post a request and let nearby helpers respond.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Users */}
            <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                For Users (Need Help)
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-emerald-300 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Post Your Request</h4>
                    <p className="text-emerald-100/70 text-sm">Describe what you need help with and set your cash offer</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-emerald-300 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Helper Accepts</h4>
                    <p className="text-emerald-100/70 text-sm">Nearby verified helpers will see and accept your request</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-emerald-300 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Track Progress</h4>
                    <p className="text-emerald-100/70 text-sm">See helper location, contact them, and track arrival</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-emerald-300 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pay & Rate</h4>
                    <p className="text-emerald-100/70 text-sm">Pay in cash when done and rate your experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Helpers */}
            <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                For Helpers (Earn Money)
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-500/20 border border-teal-400/30 flex items-center justify-center">
                    <span className="text-teal-300 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Get Verified</h4>
                    <p className="text-emerald-100/70 text-sm">Upload your ID and selfie for one-time verification</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-500/20 border border-teal-400/30 flex items-center justify-center">
                    <span className="text-teal-300 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Browse Requests</h4>
                    <p className="text-emerald-100/70 text-sm">See nearby requests in real-time and choose what fits</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-500/20 border border-teal-400/30 flex items-center justify-center">
                    <span className="text-teal-300 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Navigate & Complete</h4>
                    <p className="text-emerald-100/70 text-sm">Use built-in navigation to reach user and complete the task</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-500/20 border border-teal-400/30 flex items-center justify-center">
                    <span className="text-teal-300 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Get Paid</h4>
                    <p className="text-emerald-100/70 text-sm">Receive cash payment directly and build your reputation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Why Choose NearHelp?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-emerald-300">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-emerald-100/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-[3rem] backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-[3rem]" />
            <div className="relative text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Ready to Get Help?
              </h2>
              <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto">
                Join thousands of users already getting help in their neighborhood
              </p>
              <a
                href="https://github.com/Vijayapardhu/NearHelp/releases/download/Release/NearHelp.apk"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xl shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-7 h-7" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 backdrop-blur-xl bg-white/5">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NearHelp</span>
          </div>
          <p className="text-emerald-100/60">
            Real-Time Hyperlocal Help Platform • Made with ❤️ in India
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-emerald-200/60">
            <Link href="/privacy" className="hover:text-emerald-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-emerald-200 transition-colors">Terms</Link>
            <a href="https://github.com/Vijayapardhu/NearHelp" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
