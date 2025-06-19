import React from 'react';
import { Play, Smartphone, Share2, Eye, TrendingUp, Zap, Users, Camera, BarChart3, QrCode, ArrowRight, CheckCircle, Calendar, Disc as Discord, Instagram, Video } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
            <Zap className="w-4 h-4" />
            Smart Gaming Clips
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Pulstream
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            Let your players spread the game for you.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Smart clipping. Mobile-ready. Shared in seconds.<br />
            <span className="text-purple-300">Built for studios and indie teams who want signal, not noise.</span>
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://calendly.com/martin-munity/45min-1?back=1&month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text mb-2 animate-pulse">
                COMING SOON
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                Q4 2025
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-purple-500/10 rounded-lg rotate-12 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-blue-500/10 rounded-full animate-bounce hidden lg:block"></div>
      </section>

      {/* What Pulstream Does */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Pulstream does</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Pulstream watches your game and captures key gameplay moments as they happen.
            It turns them into vertical clips ready to share.
            Your players spread your game, while you stay focused on building it.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Core features</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Smart auto-clip detection", desc: "AI-powered moment recognition" },
              { icon: Smartphone, title: "9:16 mobile-first format", desc: "Perfect for social sharing" },
              { icon: QrCode, title: "QR code and share link", desc: "Instant distribution" },
              { icon: Camera, title: "Optional reaction facecam", desc: "Add personality to clips" },
              { icon: Share2, title: "Branded share pages", desc: "Maintain your game's identity" },
              { icon: BarChart3, title: "Social reach analytics", desc: "Track performance insights" }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Why it matters</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "More visibility", desc: "Your players become a share engine", icon: Eye },
              { title: "More insight", desc: "See which moments drive reactions", icon: TrendingUp },
              { title: "More signal", desc: "Track sharing trends in real time", icon: BarChart3 },
              { title: "Less effort", desc: "No editing. No setup. No post-prod pipeline", icon: CheckCircle }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Built for</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Indie teams testing builds with early fans",
              "Studios launching shareable demos", 
              "Publishers exploring UGC strategies",
              "LiveOps and marketing leads who want traction, not guesswork"
            ].map((audience, index) => (
              <div key={index} className="bg-gray-800/70 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800">
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-200 text-lg">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Early Access */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Request early access</h3>
          <p className="text-xl text-gray-300 mb-8">
            We're building Pulstream with early partners.<br />
            Want to test it on your game and shape what comes next?
          </p>
          
          <a 
            href="https://calendly.com/martin-munity/45min-1?back=1&month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3 mb-4"
          >
            <Calendar className="w-6 h-6" />
            Book a Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-purple-300 italic">Early access is invite-only</p>
        </div>
      </section>

      {/* Coming Next */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Coming next</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Facecam picture-in-picture",
              "Hashtag-based social tracking",
              "Clip-triggered feedback prompts", 
              "Integrations: Discord, Jira, Notion, Slack",
              "Auto-generated highlight reels"
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <p className="text-gray-200">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4 text-white">
            UGC isn't a bonus. It's your best distribution channel.
          </p>
          <p className="text-xl text-purple-300 mb-8">
            Pulstream helps you unlock it. Coming soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-6 text-white">Connect with us</h4>
            <div className="flex justify-center gap-8">
              <a 
                href="https://discord.gg/trBSeh9xFD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Discord className="w-6 h-6 text-indigo-400" />
                <span className="text-gray-200 group-hover:text-white">Discord</span>
              </a>
              
              <a 
                href="https://www.instagram.com/pulstream_ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-6 h-6 text-pink-400" />
                <span className="text-gray-200 group-hover:text-white">@pulstream_ai</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@pulstream.gg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Video className="w-6 h-6 text-red-400" />
                <span className="text-gray-200 group-hover:text-white">@pulstream.gg</span>
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>&copy; 2025 Pulstream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;