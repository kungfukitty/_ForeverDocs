export const cfg = {
  apiBase: (import.meta.env.VITE_API_URL || '/api').replace(/\/+$/, ''),
  siteName: import.meta.env.VITE_SITE_NAME || 'ForeverDocs',
  tagline: import.meta.env.VITE_BRAND_TAGLINE || 'Protect your family. Preserve your legacy.',
  sponsor: import.meta.env.VITE_SPONSOR_NAME || '',
  formUrls: {
    waitlist: "https://docs.google.com/forms/d/e/1FAIpQLSe39Qi4wSf1wsGYmPsw_ewWGX6aYGORt7Wp8QQPTVNV4X317Q/viewform?embedded=true",
    ambassador: "https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform?embedded=true",
    sponsor: "https://docs.google.com/forms/d/e/1FAIpQLSfbY2KWdqfIN_QowhT5lK4IWxGuysHbDF1wJBiqyRIwN-9QuA/viewform?embedded=true"
  }
}
