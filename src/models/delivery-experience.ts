import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryExperience = {
  DeliveryConfirmationWithAdultSignature: "DeliveryConfirmationWithAdultSignature",
  DeliveryConfirmationWithSignature: "DeliveryConfirmationWithSignature",
  DeliveryConfirmationWithoutSignature: "DeliveryConfirmationWithoutSignature",
  NoTracking: "NoTracking",
} as const;
export type DeliveryExperience = (typeof DeliveryExperience)[keyof typeof DeliveryExperience] | (string & {});

export const deliveryExperienceSchema: EnumSchema<DeliveryExperience> =
  s.enumOf<DeliveryExperience>(DeliveryExperience);
