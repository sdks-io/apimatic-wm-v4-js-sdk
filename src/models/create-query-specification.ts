import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagination2Schema, type Pagination2 } from "./pagination2.js";

export type CreateQuerySpecification = {
  /**
   * Structured query string. Format TBD pending ADR: GraphQL vs Walmart-native query DSL (Pod 4).
   */
  query: string;
  pagination?: Pagination2;
};

export const createQuerySpecificationSchema: Schema<CreateQuerySpecification> =
  s.object<CreateQuerySpecification>({
    query: s.string(),
    pagination: s.optional(s.lazy(() => pagination2Schema)),
  });
