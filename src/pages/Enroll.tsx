import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Laptop, Send } from 'lucide-react';

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to AHK Design Academy. Our team will review your application and contact you via WhatsApp/Email within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-accent"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6">Start Your Design Journey</h1>
            <p className="text-lg text-gray-600 mb-10">
              Fill out the form below to apply for our next intake. No payment is required at this stage.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-xl h-fit">
                  <Laptop className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Hardware Requirements</h4>
                  <p className="text-sm text-gray-500">8GB RAM minimum (16GB recommended). Dedicated GPU preferred for rendering courses.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-xl h-fit">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">What Happens Next?</h4>
                  <p className="text-sm text-gray-500">1. Form Review → 2. Interview Call → 3. Admission Offer → 4. Payment & Onboarding.</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone (WhatsApp)</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="+254..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Course</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                  <option value="">Choose a program</option>
                  <option value="full">Full Program (KSh 30,000)</option>
                  <option value="modeling">Modeling Only (KSh 20,000)</option>
                  <option value="rendering">Rendering Only (KSh 10,000)</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Experience Level</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="pro">Professional</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Laptop RAM</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                    <option value="8">8GB</option>
                    <option value="16">16GB</option>
                    <option value="32">32GB+</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Start Date</label>
                <input required type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
              </div>
              
              <button type="submit" className="w-full btn-accent py-4 flex items-center justify-center gap-2 text-lg">
                Submit Application
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our terms and conditions. We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
