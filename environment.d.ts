declare global {
  namespace NodeJS {
    interface LocalEnv {
      CONTENTFUL_SPACE_ID: string
      CONTENTFUL_ACCESS_KE: string
      CONTENTFUL_ENVIRONMEN: string
      CONTENTFUL_PREVIEW_TOKE: string
      CONTENTFUL_MANAGEMENT_API_ACCESS_TOKE: string
    }
  }
}
