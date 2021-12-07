// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful"
import { Document } from "@contentful/rich-text-types"

export interface IJeju43Fields {
  jeju43Event: any

  /** Event */
  event?: string

  /** region */
  region?: string

  /** slug */
  slug?: string

  /** background */
  background?: Document

  /** actors */
  actors?: Document | undefined

  /** story */
  story?: Document | undefined
}

/** Event pages for the Jeju 4-3 website */

export interface IJeju43 extends Entry<IJeju43Fields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: "jeju43"
        linkType: "ContentType"
        type: "Link"
      }
    }
  }
}

export type CONTENT_TYPE = "blogPost" | "jeju43" | "portfolioItem"

export type LOCALE_CODE = "en-US"

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US"
