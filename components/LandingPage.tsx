import React, { useState } from 'react';
import { Sparkles, Zap, FileText, CheckCircle2, ArrowRight, Shield, Globe } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoggingIn(true);
      await signInWithPopup(auth, googleProvider);
      // onGetStarted will be called automatically by onAuthStateChanged in App.tsx
    } catch (error) {
      console.error("Error signing in with Google", error);
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1221] text-slate-50 font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b1221]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              TestBuilder<span className="text-orange-500">.AI</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden md:block">Pricing</a>
            <button 
              onClick={handleGoogleSignIn}
              disabled={isLoggingIn}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all border border-white/10 disabled:opacity-50"
            >
              Sign In
            </button>
            <button 
              onClick={handleGoogleSignIn}
              disabled={isLoggingIn}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 disabled:opacity-50"
            >
              {isLoggingIn ? 'Connecting...' : 'Start Free'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-8 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            The Ultimate Test Generator
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]">
            Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Human-Like</span> Tests <br className="hidden md:block" />
            in 1 Click.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop wasting hours formatting worksheets. Our AI creates 94% human-like designs with custom styles, multiple exercise types, and perfect layouts instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleGoogleSignIn}
              disabled={isLoggingIn}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white text-lg font-bold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoggingIn ? 'Connecting...' : 'Generate Your First Test'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-slate-500 font-medium">2 Free Generations Included</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-[#0f172a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why We Are Better</h2>
            <p className="text-slate-400">Designed specifically for advanced educators who demand perfection.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b]/50 border border-white/10 p-8 rounded-3xl hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">94% Human-Like Quality</h3>
              <p className="text-slate-400 leading-relaxed">
                Our AI doesn't just spit out text. It formats questions, spacing, and layouts exactly how a professional teacher would design them.
              </p>
            </div>
            
            <div className="bg-[#1e293b]/50 border border-white/10 p-8 rounded-3xl hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1-Click Generation</h3>
              <p className="text-slate-400 leading-relaxed">
                Select your topic, choose your exercise types (MCQ, Matching, Fill-in-the-blanks), and get a ready-to-print test instantly.
              </p>
            </div>
            
            <div className="bg-[#1e293b]/50 border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design Your Own Styles</h3>
              <p className="text-slate-400 leading-relaxed">
                Total control over fonts, borders, headers, and branding. Make every worksheet look like it belongs to your school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400">Start for free, upgrade when you need more power.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-[#1e293b] border border-white/10 p-8 rounded-[2rem] relative flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Monthly Pro</h3>
              <p className="text-slate-400 mb-6">Perfect for short-term projects.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">$6</span>
                <span className="text-slate-400 font-medium">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Unlimited Test Generations
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> All Premium Templates
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Export to Word & PDF
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> Custom Branding
                </li>
              </ul>
              
              <button 
                onClick={handleGoogleSignIn}
                disabled={isLoggingIn}
                className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors border border-white/10 disabled:opacity-50"
              >
                {isLoggingIn ? 'Connecting...' : 'Get Started'}
              </button>
            </div>
            
            {/* Yearly Plan */}
            <div className="bg-gradient-to-b from-orange-500/20 to-[#1e293b] border border-orange-500/50 p-8 rounded-[2rem] relative flex flex-col shadow-2xl shadow-orange-500/10">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                Best Value (Save 30%)
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Yearly Pro</h3>
              <p className="text-orange-200/70 mb-6">For dedicated educators.</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-white">$50</span>
                <span className="text-slate-400 font-medium">/year</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" /> Everything in Monthly
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" /> Priority Support
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" /> Early Access to Features
                </li>
                <li className="flex items-center gap-3 text-slate-100">
                  <Shield className="w-5 h-5 text-orange-400" /> Secure Account Protection
                </li>
              </ul>
              
              <button 
                onClick={handleGoogleSignIn}
                disabled={isLoggingIn}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isLoggingIn ? 'Connecting...' : 'Get Yearly Pro'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Globe className="w-4 h-4" />
          <span>Available Globally</span>
        </div>
        <p>© {new Date().getFullYear()} TestBuilder.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
