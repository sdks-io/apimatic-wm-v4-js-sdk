import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Pagination criteria */
export type SemPage = {
  /** The starting position for fetching records. Must be zero or a positive value. */
  offset: number;
  /**
   * The maximum number of records to fetch per page. Must be a positive value and cannot exceed
   * 200.
   */
  limit: number;
};

export const semPageSchema: Schema<SemPage> = s.object<SemPage>({
  offset: s.int(),
  limit: s.int(),
});
