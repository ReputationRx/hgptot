export const CONSENT_STORAGE_KEY = "hgptot-cookie-consent";
export const CONSENT_VERSION = 1;

export type CookieConsentPreferences = {
  version: number;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  crm: boolean;
  updatedAt: string;
};

export type CookieConsentChoice = "all" | "essential" | "custom";

export function defaultPreferences(overrides?: Partial<Omit<CookieConsentPreferences, "version" | "essential" | "updatedAt">>): CookieConsentPreferences {
  return {
    version: CONSENT_VERSION,
    essential: true,
    analytics: false,
    marketing: false,
    crm: false,
    updatedAt: new Date().toISOString(),
    ...overrides
  };
}

export function preferencesFromChoice(choice: CookieConsentChoice, custom?: Partial<CookieConsentPreferences>): CookieConsentPreferences {
  if (choice === "all") {
    return defaultPreferences({ analytics: true, marketing: true, crm: true });
  }
  if (choice === "essential") {
    return defaultPreferences();
  }
  return defaultPreferences({
    analytics: custom?.analytics ?? false,
    marketing: custom?.marketing ?? false,
    crm: custom?.crm ?? false
  });
}

export function readConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentPreferences;
    if (parsed.version !== CONSENT_VERSION) return null;

    return {
      ...defaultPreferences(),
      ...parsed,
      essential: true
    };
  } catch {
    return null;
  }
}

export function saveConsent(preferences: CookieConsentPreferences): void {
  if (typeof window === "undefined") return;

  const payload: CookieConsentPreferences = {
    ...preferences,
    version: CONSENT_VERSION,
    essential: true,
    updatedAt: new Date().toISOString()
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: payload }));
}

export function hasConsentDecision(): boolean {
  return readConsent() !== null;
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}

export const CONSENT_OPEN_EVENT = "hgptot-consent-open";
export const CONSENT_CHANGE_EVENT = "hgptot-consent-change";
