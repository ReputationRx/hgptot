"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  type CookieConsentPreferences,
  clearConsent,
  hasConsentDecision,
  preferencesFromChoice,
  readConsent,
  saveConsent
} from "@/lib/cookie-consent";

type PreferenceKey = "analytics" | "marketing" | "crm";

const categories: {
  key: PreferenceKey;
  title: string;
  description: string;
  alwaysOn?: boolean;
}[] = [
  {
    key: "analytics",
    title: "Analytics",
    description: "Google Analytics, Google Tag Manager, and Microsoft Bing UET to understand traffic and improve the site."
  },
  {
    key: "marketing",
    title: "Marketing & social",
    description: "Meta, LinkedIn, and other social platform pixels for ad measurement and audience insights."
  },
  {
    key: "crm",
    title: "LeadSpider CRM",
    description: "LeadSpider CRM for inquiries, lead capture, and follow-up."
  }
];

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draft, setDraft] = useState<CookieConsentPreferences | null>(null);

  useEffect(() => {
    function syncFromStorage() {
      const existing = readConsent();
      if (existing) {
        setDraft(existing);
        setVisible(false);
        return;
      }
      setDraft(preferencesFromChoice("essential"));
      setVisible(true);
    }

    syncFromStorage();

    function onReopen() {
      setDraft(preferencesFromChoice("essential"));
      setShowPreferences(true);
      setVisible(true);
    }

    window.addEventListener(CONSENT_OPEN_EVENT, onReopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onReopen);
  }, []);

  function applyChoice(choice: "all" | "essential") {
    const next = preferencesFromChoice(choice);
    saveConsent(next);
    setDraft(next);
    setShowPreferences(false);
    setVisible(false);
  }

  function applyCustom() {
    if (!draft) return;
    saveConsent(draft);
    setShowPreferences(false);
    setVisible(false);
  }

  function togglePreference(key: PreferenceKey) {
    setDraft((current) => {
      if (!current) return current;
      return { ...current, [key]: !current[key] };
    });
  }

  if (!visible || !draft) return null;

  return (
    <div
      className="cookie-consent-root fixed inset-x-0 bottom-0 z-[60] p-2 sm:p-5 md:bottom-0"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="cookie-consent-panel mx-auto max-w-4xl overflow-hidden rounded-2xl border border-teal/20 shadow-[0_24px_80px_rgba(8,63,61,0.45)] md:rounded-[1.75rem]">
        <div className="cookie-consent-glow relative bg-charcoal/95 px-3 py-2.5 text-white backdrop-blur-md sm:px-7 sm:py-7 md:px-7 md:py-7">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" aria-hidden />
          <div className="relative">
            {/* Mobile: compact bar */}
            <div className="md:hidden">
              <h2 className="text-sm font-semibold leading-tight text-white">Cookie preferences</h2>
              <p id="cookie-consent-description" className="mt-1 line-clamp-2 text-[11px] leading-4 text-white/82">
                We use cookies for security, site insights, social platforms, and LeadSpider CRM.
              </p>

              {!showPreferences ? (
                <>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      className="btn-primary rounded-full px-2 py-2 text-[11px] font-semibold leading-tight"
                      onClick={() => applyChoice("all")}
                    >
                      Accept all
                    </button>
                    <button
                      type="button"
                      className="btn-outline-on-dark rounded-full px-2 py-2 text-[11px] font-semibold leading-tight"
                      onClick={() => applyChoice("essential")}
                    >
                      Essential
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/25 px-2 py-2 text-[11px] font-semibold leading-tight text-gold"
                      onClick={() => setShowPreferences(true)}
                    >
                      Customize
                    </button>
                  </div>
                  <p className="mt-1.5 text-center text-[10px] leading-4 text-white/55">
                    <button
                      type="button"
                      className="text-gold hover:underline"
                      onClick={() => setShowPreferences(true)}
                    >
                      Manage preferences
                    </button>
                    {" · "}
                    <Link href="/cookie-notice" className="hover:text-white">
                      Notice
                    </Link>
                    {" · "}
                    <Link href="/privacy-policy" className="hover:text-white">
                      Privacy
                    </Link>
                  </p>
                </>
              ) : (
                <div className="cookie-consent-prefs-mobile mt-2 max-h-[38vh] space-y-2 overflow-y-auto rounded-xl border border-white/15 bg-white/5 p-2">
                  <div className="flex items-center justify-between gap-2 rounded-lg border border-gold/25 bg-gold/10 px-2.5 py-2">
                    <span className="text-xs font-semibold text-white">Essential</span>
                    <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-semibold text-white">On</span>
                  </div>
                  {categories.map((category) => (
                    <label
                      key={category.key}
                      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border border-white/12 px-2.5 py-2"
                    >
                      <span className="text-xs font-semibold text-white">{category.title}</span>
                      <input
                        type="checkbox"
                        className="cookie-consent-toggle h-4 w-4 shrink-0 accent-gold"
                        checked={draft[category.key]}
                        onChange={() => togglePreference(category.key)}
                      />
                    </label>
                  ))}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button
                      type="button"
                      className="btn-outline-on-dark rounded-full px-2 py-2 text-[11px]"
                      onClick={() => setShowPreferences(false)}
                    >
                      Back
                    </button>
                    <button type="button" className="btn-primary rounded-full px-2 py-2 text-[11px]" onClick={applyCustom}>
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop: full layout */}
            <div className="hidden md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Your privacy</p>
            <h2 id="cookie-consent-title" className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
              Cookie preferences
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/86">
              We use cookies to keep HGPTOT secure and running smoothly, understand how visitors use our site to
              support social platform insights, and help follow up on inquiries through LeadSpider CRM. You can accept
              all, allow essentials only, or choose category by category—and change your mind anytime in{" "}
              <button
                type="button"
                className="font-semibold text-gold underline-offset-2 hover:underline"
                onClick={() => setShowPreferences((open) => !open)}
              >
                manage preferences
              </button>
              .
            </p>

            {showPreferences ? (
              <div className="mt-6 space-y-3 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
                <div className="rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">Essential</p>
                      <p className="mt-1 text-sm leading-6 text-white/75">Required for security, consent storage, and core site features.</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Always on
                    </span>
                  </div>
                </div>

                {categories.map((category) => (
                  <label
                    key={category.key}
                    className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 transition hover:border-gold/35"
                  >
                    <span>
                      <span className="font-semibold text-white">{category.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-white/75">{category.description}</span>
                    </span>
                    <input
                      type="checkbox"
                      className="cookie-consent-toggle mt-1 h-5 w-5 shrink-0 accent-gold"
                      checked={draft[category.key]}
                      onChange={() => togglePreference(category.key)}
                    />
                  </label>
                ))}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button type="button" className="btn-outline-on-dark px-5 py-3 text-sm" onClick={() => setShowPreferences(false)}>
                    Back
                  </button>
                  <button type="button" className="btn-primary px-5 py-3 text-sm" onClick={applyCustom}>
                    Save preferences
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button type="button" className="btn-primary px-6 py-3.5 text-center text-sm sm:text-base" onClick={() => applyChoice("all")}>
                  Accept all
                </button>
                <button
                  type="button"
                  className="btn-outline-on-dark px-6 py-3.5 text-center text-sm sm:text-base"
                  onClick={() => applyChoice("essential")}
                >
                  Essential only
                </button>
                <button
                  type="button"
                  className="px-2 py-3.5 text-center text-sm font-semibold text-gold hover:text-white"
                  onClick={() => setShowPreferences(true)}
                >
                  Customize
                </button>
              </div>
            )}

            <p className="mt-5 text-xs leading-6 text-white/60">
              Read our{" "}
              <Link href="/cookie-notice" className="text-gold hover:text-white">
                Cookie Notice
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-gold hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Floating control to reopen preferences after a choice was made. */
export function CookiePreferencesButton() {
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    setHasDecision(hasConsentDecision());

    function refresh() {
      setHasDecision(hasConsentDecision());
    }

    window.addEventListener("hgptot-consent-change", refresh);
    return () => window.removeEventListener("hgptot-consent-change", refresh);
  }, []);

  if (!hasDecision) return null;

  function reopen() {
    clearConsent();
  }

  return (
    <button
      type="button"
      onClick={reopen}
      className="fixed bottom-[5.75rem] left-4 z-[55] rounded-full border border-white/20 bg-charcoal/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur hover:border-gold hover:text-gold md:bottom-6"
      aria-label="Manage cookie preferences"
    >
      Cookies
    </button>
  );
}
