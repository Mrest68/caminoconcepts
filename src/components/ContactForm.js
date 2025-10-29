"use client";

import { useState } from 'react';

/**
 * ContactForm - client component
 * Fields: name, email, phone, service, subject, message
 * Submits to /api/contact via fetch POST
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: null });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.message.trim()) return 'Please enter a message.';
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ loading: false, error: err, success: null });
      return;
    }

    setStatus({ loading: true, error: null, success: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || 'Submission failed');

      setStatus({ loading: false, error: null, success: 'Thanks! Your message was sent.' });
      setForm({ name: '', email: '', phone: '', service: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Something went wrong', success: null });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-2xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
          <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
          <select id="service" name="service" value={form.service} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            <option value="">Select a service</option>
            <option>Remodeling</option>
            <option>Handyman</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us about your project and timeline..." className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          {status.error && (
            <div className="text-sm text-red-600 font-medium">{status.error}</div>
          )}

          {status.success && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-sm">{status.success}</span>
            </div>
          )}
        </div>

        <button type="submit" disabled={status.loading} className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-60">
          {status.loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="4" /></svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
}
