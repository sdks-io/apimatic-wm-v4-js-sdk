import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Operation type. Allowed values: `Delink` and `null`(empty). Set to `Delink` to remove the GTIN
 * association from this asset. Set to `null` (empty) for create/edit operations.
 */
export const MediaOperations = {
  Delink: "Delink",
} as const;
export type MediaOperations = (typeof MediaOperations)[keyof typeof MediaOperations] | (string & {});

export const mediaOperationsSchema: EnumSchema<MediaOperations> = s.enumOf<MediaOperations>(MediaOperations);
