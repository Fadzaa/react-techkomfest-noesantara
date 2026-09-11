// Central API base. Set VITE_API_BASE_URL at build time; the fallback keeps
// local `vite dev` working without a .env file.
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api-noesantara.alfadzaa.tech";
