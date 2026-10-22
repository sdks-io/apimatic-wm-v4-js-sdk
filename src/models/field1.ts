import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Attribute on which filter needs to be applied.
 *
 * **Supported fields**:
 * - `campaignId`: Filter by campaign identifier(s)
 * - `adGroupId`: Filter by ad group identifier(s)
 * - `creativeId`: Filter by creative identifier(s)
 */
export const Field1 = {
  CampaignId: "campaignId",
  AdGroupId: "adGroupId",
  CreativeId: "creativeId",
} as const;
export type Field1 = (typeof Field1)[keyof typeof Field1] | (string & {});

export const field1Schema: EnumSchema<Field1> = s.enumOf<Field1>(Field1);
