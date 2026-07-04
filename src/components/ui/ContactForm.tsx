"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { ContactFormData, ContactFormState } from "@/lib/types";

export interface ContactFormProps {
  id?: string;
  web3FormsAccessKey?: string;
  className?: string;
}

export function ContactForm({
  id = "contact-form",
  web3FormsAccessKey,
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "Tax & Advisory",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState<ContactFormState>({
    status: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "submitting" });

    try {
      if (web3FormsAccessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            ...formData,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setFormState({
            status: "success",
            message: "Thank you. Your consultation inquiry has been submitted. Our team will review and contact you within 24 business hours.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Tax & Advisory",
            subject: "",
            message: "",
          });
        } else {
          throw new Error(result.message || "Failed to send message.");
        }
      } else {
        // Simulated submission delay for client demo
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setFormState({
          status: "success",
          message: "Thank you! Your consultation request has been received. We will get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Tax & Advisory",
          subject: "",
          message: "",
        });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred. Please try again.";
      setFormState({
        status: "error",
        message: errorMessage,
      });
    }
  };

  return (
    <div
      id={id}
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-lg ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Request a Confidential Consultation
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Submit your queries regarding taxation, audit, or statutory compliance.
        </p>
      </div>

      {formState.status === "success" ? (
        <div
          id={`${id}-success`}
          className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-200 text-center space-y-3"
        >
          <div className="flex justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircleIcon size={44} />
          </div>
          <h4 className="text-lg font-semibold">Inquiry Sent Successfully</h4>
          <p className="text-sm leading-relaxed">{formState.message}</p>
          <Button
            id={`${id}-reset-button`}
            variant="outline"
            size="sm"
            onClick={() => setFormState({ status: "idle" })}
            className="mt-3"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {formState.status === "error" && (
            <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm">
              {formState.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`${id}-name`}
                className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Full Name *
              </label>
              <input
                type="text"
                id={`${id}-name`}
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor={`${id}-email`}
                className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email Address *
              </label>
              <input
                type="email"
                id={`${id}-email`}
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`${id}-phone`}
                className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id={`${id}-phone`}
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor={`${id}-service`}
                className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Service Category *
              </label>
              <select
                id={`${id}-service`}
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
              >
                <option value="Tax & Advisory">Direct Tax & Advisory</option>
                <option value="GST Services">GST & Indirect Taxation</option>
                <option value="Statutory Audit">Statutory & Internal Audit</option>
                <option value="Corporate Law">Corporate Law & MCA Compliance</option>
                <option value="FEMA & Cross-Border">FEMA & International Tax</option>
                <option value="Valuation & M&A">Valuation & Financial Advisory</option>
                <option value="Other Enquiries">General Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor={`${id}-subject`}
              className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Subject
            </label>
            <input
              type="text"
              id={`${id}-subject`}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief summary of inquiry"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-message`}
              className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Detailed Requirements *
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding your financial structure, timeline, or specific compliance questions..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 resize-y"
            />
          </div>

          <div className="pt-2">
            <Button
              id={`${id}-submit-button`}
              type="submit"
              variant="primary"
              size="lg"
              isLoading={formState.status === "submitting"}
              className="w-full"
            >
              Submit Consultation Request
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-3">
            <ShieldCheckIcon size={14} className="text-blue-500" />
            <span>ICAI Guidelines: All information remains strictly privileged & confidential.</span>
          </div>
        </form>
      )}
    </div>
  );
}
