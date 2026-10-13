import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NdrAction = {
  ReturnToOrigin: "RETURN_TO_ORIGIN",
  ReattemptDelivery: "REATTEMPT_DELIVERY",
  RedirectToAccessPoint: "REDIRECT_TO_ACCESS_POINT",
  ContactBuyer: "CONTACT_BUYER",
} as const;
export type NdrAction = (typeof NdrAction)[keyof typeof NdrAction] | (string & {});

export const ndrActionSchema: EnumSchema<NdrAction> = s.enumOf<NdrAction>(NdrAction);
