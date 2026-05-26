"use client";

import { FormEvent, useState } from "react";
import { insuranceCarrierNames } from "@/data/insurance";

type ContactFormProps = {
  defaultService?: string;
  showIntro?: boolean;
};

export function ContactForm({ defaultService, showIntro = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8">
      {showIntro ? (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Get started</p>
          <h2 className="mt-3 font-serif text-2xl text-charcoal">Request a consultation</h2>
          <p className="mt-3 text-charcoal/70">
            Share a few details and we will follow up about availability, location, and private pay options.
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">Name</span>
          <input className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="name" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">Phone</span>
          <input className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="phone" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">Email</span>
          <input className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="email" type="email" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">City</span>
          <input className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="city" required />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">Service Needed</span>
          <select
            className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal"
            name="serviceNeeded"
            defaultValue={defaultService ?? ""}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Physical Therapy</option>
            <option>Occupational Therapy</option>
            <option>Geriatric Therapy</option>
            <option>In-Home Therapy</option>
            <option>Private Pay Therapy</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal">Preferred Visit Type</span>
          <select className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="visitType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>In-home visit</option>
            <option>Not sure yet</option>
            <option>Need help understanding options</option>
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-charcoal">Insurance / Private Pay</span>
          <select className="w-full rounded-2xl border border-teal/15 px-4 py-3 outline-none focus:border-teal" name="insuranceOrPayment" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <optgroup label="Private pay">
              <option>Yes, interested in private pay care</option>
              <option>Need help understanding private pay pricing</option>
            </optgroup>
            <optgroup label="Insurance plans">
              {insuranceCarrierNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </optgroup>
            <option>Other insurance / not listed</option>
            <option>Not sure yet — help me verify benefits</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-charcoal">Message</span>
        <textarea
          className="min-h-36 w-full rounded-3xl border border-teal/15 px-4 py-3 outline-none focus:border-teal"
          name="message"
          placeholder="Tell us about the patient, goals, mobility concerns, surgery history, or preferred location."
        />
      </label>

      <button type="submit" className="btn-primary px-6 py-3">
        Request a Consultation
      </button>

      <p className="text-sm text-charcoal/65">
        This form is currently front-end only. Connect it later to your preferred email, CRM, or scheduling workflow.
      </p>

      {submitted ? (
        <div className="rounded-2xl border border-sage/30 bg-sage/10 px-4 py-3 text-sm text-charcoal">
          Form capture preview complete. Connect a backend or form service before going live.
        </div>
      ) : null}
    </form>
  );
}
