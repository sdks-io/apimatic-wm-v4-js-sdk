import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ENROLL | To enroll items into the program | string |
 * | DISENROLL | To opt out items from the program | string |
 */
export const Status1 = {
  Enroll: "ENROLL",
  Disenroll: "DISENROLL",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
