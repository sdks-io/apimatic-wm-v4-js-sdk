import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of operation to perform on campaign items. Allowed values: `ADD` or `REMOVE`. */
export const OperationType = {
  Add: "ADD",
  Remove: "REMOVE",
} as const;
export type OperationType = (typeof OperationType)[keyof typeof OperationType] | (string & {});

export const operationTypeSchema: EnumSchema<OperationType> = s.enumOf<OperationType>(OperationType);
