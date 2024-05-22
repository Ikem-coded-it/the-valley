// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_API_URL: string;
    readonly VITE_LINKEDIN_CLIENT_ID: string
    readonly VITE_LINKEDIN_CALLBACK_URL: string
    readonly VITE_LINKEDIN_URL: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
  