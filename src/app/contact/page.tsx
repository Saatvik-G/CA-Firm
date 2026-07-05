'use client';

import React, { useState } from 'react';
import siteConfig from '@/lib/siteConfig';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Direct Tax Compliance',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Open email client with form contents addressed to gupta.puneetca@gmail.com
    const subject = encodeURIComponent(formData.subject || `Service Inquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name / Entity: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Required: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:gupta.puneetca@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">
            Client Inquiry
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Contact Anil Puneet and Associates
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Reach out for professional engagements, tax audit consultations, or statutory compliance reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Schedule Consultation or Service Inquiry
            </h2>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold mx-auto text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for contacting Anil Puneet and Associates. Our practice office will review your request and contact you via email or phone within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-blue-600 underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name / Entity Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Shah / ABC Pvt Ltd"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., contact@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Practice Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Direct Tax Compliance & Advisory</option>
                      <option>GST Advisory & Annual Filing</option>
                      <option>Statutory & Tax Audit under Sec 44AB</option>
                      <option>Company Law Compliance</option>
                      <option>Startup Valuation & FDI (Rule 11UA)</option>
                      <option>Virtual CFO Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject Summary
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Tax Audit FY 2024-25 Engagement"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message / Engagement Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your statutory requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-bold bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors shadow-md"
                  >
                    Submit Inquiry to Principal CA →
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  * Communications submitted are kept strictly confidential under ICAI ethical guidelines.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Office Location & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white">
                Practice Office Details
              </h2>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px] mb-1">Office Address:</strong>
                  <p className="leading-relaxed">{siteConfig.contact.address}</p>
                </div>

                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px] mb-1">Phone Contact:</strong>
                  <p>{siteConfig.contact.phone}</p>
                </div>

                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px] mb-1">Email Inquiry:</strong>
                  <p>{siteConfig.contact.email}</p>
                </div>

                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px] mb-1">Working Hours:</strong>
                  <p>{siteConfig.contact.workingHours}</p>
                </div>

                <div>
                  <strong className="text-white block uppercase tracking-wider text-[11px] mb-1">Sole Proprietor:</strong>
                  <p>CA Puneet Gupta (FCA) • ICAI Mem #059435</p>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] uppercase tracking-wider font-bold text-blue-400 block mb-2">
                  Interactive Map Location
                </span>
                <div className="w-full h-48 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <div className="text-2xl">📍</div>
                  <div className="text-xs font-bold text-white">SCF 57, Level 2, Sector 8</div>
                  <div className="text-[11px] text-slate-400">Panchkula, Haryana 134109</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
