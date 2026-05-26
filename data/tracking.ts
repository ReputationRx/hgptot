/** Tracking IDs from environment — only loaded after cookie consent. */
export const trackingConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID ?? "",
  bingUetTagId: process.env.NEXT_PUBLIC_BING_UET_TAG_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "",
  /** Full script URL for LeadSpider CRM website tracking embed */
  leadSpiderScriptUrl: process.env.NEXT_PUBLIC_LEADSPIDER_SCRIPT_URL ?? process.env.NEXT_PUBLIC_ODOO_TRACKING_SCRIPT_URL ?? ""
};

export function hasAnalyticsConfig() {
  return Boolean(trackingConfig.googleAnalyticsId || trackingConfig.googleTagManagerId || trackingConfig.bingUetTagId);
}

export function hasMarketingConfig() {
  return Boolean(trackingConfig.metaPixelId || trackingConfig.linkedInPartnerId);
}

export function hasCrmConfig() {
  return Boolean(trackingConfig.leadSpiderScriptUrl);
}
