import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProductTypeDefinition = {
  metaSchema?: string;
  /** JSON Schema for this product type's attributes */
  schema?: Record<string, unknown>;
  requirements?: Record<string, unknown>;
  propertyGroups?: Record<string, unknown>;
};

export const productTypeDefinitionSchema: Schema<ProductTypeDefinition> = s.object<ProductTypeDefinition>({
  metaSchema: s.optional(s.string()),
  schema: s.optional(s.record(s.string(), s.unknown())),
  requirements: s.optional(s.record(s.string(), s.unknown())),
  propertyGroups: s.optional(s.record(s.string(), s.unknown())),
});
