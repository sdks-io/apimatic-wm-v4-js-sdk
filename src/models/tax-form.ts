import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaxForm = {
  /** Tax form type, for example 1099-K. */
  formType?: string;
  /** Identifier of the generated tax form document. */
  formId?: string;
};

export const taxFormSchema: Schema<TaxForm> = s.object<TaxForm>({
  formType: s.optional(s.string()),
  formId: s.optional(s.string()),
});
