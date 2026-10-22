import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { causeSchema, type Cause } from "./cause.js";
import { gatewayErrorCategorySchema, type GatewayErrorCategory } from "./gateway-error-category.js";
import { severitySchema, type Severity } from "./severity.js";

export type Error3 = {
  code: string;
  field?: string;
  description?: string;
  info?: string;
  severity?: Severity;
  category?: Category;
  causes?: Cause[];
  errorIdentifiers?: Record<string, Record<string, unknown>>;
  component?: string;
  type?: string;
  serviceName?: string;
  gatewayErrorCategory?: GatewayErrorCategory;
};

export const error3Schema: Schema<Error3> = s.object<Error3>({
  code: s.string(),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  info: s.optional(s.string()),
  severity: s.optional(s.lazy(() => severitySchema)),
  category: s.optional(s.lazy(() => categorySchema)),
  causes: s.optional(s.array(s.lazy(() => causeSchema))),
  errorIdentifiers: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  component: s.optional(s.string()),
  type: s.optional(s.string()),
  serviceName: s.optional(s.string()),
  gatewayErrorCategory: s.optional(s.lazy(() => gatewayErrorCategorySchema)),
});
