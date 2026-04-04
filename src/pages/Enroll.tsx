import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Laptop, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useSearchParams } from 'react-router-dom';

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      if (courseParam === 'full-program') setSelectedCourse('Full Program (KSh 30,000)');
      else if (courseParam === 'modeling-only') setSelectedCourse('Modeling Only (KSh 20,000)');
      else if (courseParam === 'rendering-only') setSelectedCourse('Rendering Only (KSh 10,000)');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawDate = String(formData.get('start_date') || '');
    const formattedDate = rawDate
      ? new Date(rawDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      : '';

    const templateParams = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      course: String(formData.get('course') || ''),
      experience: String(formData.get('experience') || ''),
      ram: String(formData.get('ram') || ''),
      start_date: formattedDate,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey);

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment variables.');
      setError('Enrollment service is currently not configured. Please contact support or try again later.');
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong with the email service. Please check your connection or try again later.');
    } finally {
      setLoading(false);
    }
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
          <button onClick={() => setSubmitted(false)} className="btn-accent">
            Submit Another Application
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
                  <p className="text-sm text-gray-500">
                    8GB RAM minimum (16GB recommended). Dedicated GPU preferred for rendering courses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-accent/10 p-3 rounded-xl h-fit">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">What Happens Next?</h4>
                  <p className="text-sm text-gray-500">
                    1. Form Review → 2. Interview Call → 3. Admission Offer → 4. Payment & Onboarding.
                  </p>
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
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone (WhatsApp)</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Course</label>
                <select 
                  required 
                  name="course" 
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white"
                >
                  <option value="">Choose a program</option>
                  <option value="Full Program (KSh 30,000)">Full Program (KSh 30,000)</option>
                  <option value="Modeling Only (KSh 20,000)">Modeling Only (KSh 20,000)</option>
                  <option value="Rendering Only (KSh 10,000)">Rendering Only (KSh 10,000)</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Experience Level</label>
                  <select required name="experience" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Laptop RAM</label>
                  <select required name="ram" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white">
                    <option value="8GB">8GB</option>
                    <option value="16GB">16GB</option>
                    <option value="32GB+">32GB+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Start Date</label>
                <input required name="start_date" type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
              </div>

              <button type="submit" disabled={loading} className="w-full btn-accent py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-70">
                {loading ? 'Submitting...' : 'Submit Application'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}