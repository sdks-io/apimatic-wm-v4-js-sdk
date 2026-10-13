import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regulatedCategorySchema, type RegulatedCategory } from "./regulated-category.js";
import {
  requiredVerificationMethodSchema,
  type RequiredVerificationMethod,
} from "./required-verification-method.js";
import { valueAddedServiceSchema, type ValueAddedService } from "./value-added-service.js";

/**
 * Verification requirements for an order containing regulated items. Mirrors Amazon SP-API Orders
 * v0 `RegulatedInformation` plus a `regulatedCategory` discriminator so a caller can short- circuit
 * when the order is not regulated at all.
 */
export type RegulatedInfo = {
  /**
   * Top-level category of regulation that applies. NOT_REGULATED means no verification is required
   * and the rest of the fields are informational only.
   */
  regulatedCategory: RegulatedCategory;
  /**
   * How the buyer must prove identity at delivery. NONE means no verification is required
   * (NOT_REGULATED orders always return NONE).
   */
  requiredVerificationMethod: RequiredVerificationMethod;
  /** Minimum buyer age in years (e.g. 21 for alcohol in the US). */
  requiredAgeMinimum?: number;
  /** True when the carrier must capture a signature on delivery. */
  signatureRequired?: boolean;
  /** True when the buyer's date of birth must be captured / cross-checked. */
  buyerDateOfBirthRequired?: boolean;
  /**
   * Any value-added services attached to the order that are relevant to the regulated workflow
   * (e.g. signed-delivery, adult-signature). Empty when none apply.
   */
  valueAddedServices?: ValueAddedService[];
};

export const regulatedInfoSchema: Schema<RegulatedInfo> = s.object<RegulatedInfo>({
  regulatedCategory: regulatedCategorySchema,
  requiredVerificationMethod: requiredVerificationMethodSchema,
  requiredAgeMinimum: s.optional(s.int()),
  signatureRequired: s.optional(s.boolean()),
  buyerDateOfBirthRequired: s.optional(s.boolean()),
  valueAddedServices: s.optional(s.array(s.lazy(() => valueAddedServiceSchema))),
});
