import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** From address */
export type FromAddress3 = {
  /** Contact name. <br/><b>Applicable to SWW only.</span></b> */
  contactName: string;
  /** Company name. <br/><b>Applicable to SWW only.</span></b> */
  companyName?: string;
  /** Address Line 1. <br/><b>Applicable to SWW only.</span></b> */
  addressLine1: string;
  /** Address Line 2. <br/><b>Applicable to SWW only.</span></b> */
  addressLine2?: string;
  /** City of the from address location. <br/><b>Applicable to SWW only.</span></b> */
  city: string;
  /**
   * State or province of the from address. Use the standard two-letter code where applicable.
   * <br/><b>Applicable to SWW only.</span></b>
   */
  state: string;
  /** ZIP or postal code of the from address location. <br/><b>Applicable to SWW only.</span></b> */
  postalCode: string;
  /**
   * Country code of the from address location (example, US, CN). <br/><b>Applicable to SWW
   * only.</span></b>
   */
  country: string;
  /**
   * Phone number associated with the from address location. <br/><b>Applicable to SWW
   * only.</span></b>
   */
  phone: string;
  /**
   * Email address associated with the from address location. <br/><b>Applicable to SWW
   * only.</span></b>
   */
  email?: string;
};

export const fromAddress3Schema: Schema<FromAddress3> = s.object<FromAddress3>({
  contactName: s.string(),
  companyName: s.optional(s.string()),
  addressLine1: s.string(),
  addressLine2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  postalCode: s.string(),
  country: s.string(),
  phone: s.string(),
  email: s.optional(s.string()),
});
