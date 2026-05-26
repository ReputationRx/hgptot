"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { trackingConfig } from "@/data/tracking";
import { CONSENT_CHANGE_EVENT, type CookieConsentPreferences, readConsent } from "@/lib/cookie-consent";

export function ConsentScripts() {
  const [prefs, setPrefs] = useState<CookieConsentPreferences | null>(null);

  useEffect(() => {
    setPrefs(readConsent());

    function onConsentChange(event: Event) {
      const detail = (event as CustomEvent<CookieConsentPreferences | null>).detail;
      if (detail === null) {
        setPrefs(null);
        return;
      }
      setPrefs(detail ?? readConsent());
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
  }, []);

  if (!prefs) return null;

  const { googleAnalyticsId, googleTagManagerId, bingUetTagId, metaPixelId, linkedInPartnerId, leadSpiderScriptUrl } =
    trackingConfig;

  return (
    <>
      {prefs.analytics && googleTagManagerId ? (
        <>
          <Script id="gtm-loader" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}</Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}

      {prefs.analytics && googleAnalyticsId && !googleTagManagerId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-config" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}', { anonymize_ip: true });
          `}</Script>
        </>
      ) : null}

      {prefs.analytics && bingUetTagId ? (
        <Script id="bing-uet" strategy="afterInteractive">{`
          (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${bingUetTagId}", enableAutoSpaTracking: true};
          o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,
          n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},
          i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
        `}</Script>
      ) : null}

      {prefs.marketing && metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixelId}');
          fbq('track', 'PageView');
        `}</Script>
      ) : null}

      {prefs.marketing && linkedInPartnerId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          _linkedin_partner_id = "${linkedInPartnerId}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}</Script>
      ) : null}

      {prefs.marketing && linkedInPartnerId ? (
        <Script id="linkedin-insight-loader" strategy="afterInteractive">{`
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}</Script>
      ) : null}

      {prefs.crm && leadSpiderScriptUrl ? (
        <Script src={leadSpiderScriptUrl} strategy="afterInteractive" />
      ) : null}
    </>
  );
}
