import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of address to which shipping has to be covered as part of mentioned region, sub region and
 * states.
 */
export const AddressType = {
  PoBox: "PO_BOX",
  Military: "MILITARY",
  Street: "STREET",
} as const;
export type AddressType = (typeof AddressType)[keyof typeof AddressType] | (string & {});

export const addressTypeSchema: EnumSchema<AddressType> = s.enumOf<AddressType>(AddressType);
