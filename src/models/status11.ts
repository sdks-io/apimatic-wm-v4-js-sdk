import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ENROLL | To enroll items into the program | string |
 * | DISENROLL | To opt out items from the program | string |
 * <br><b style='color:green;'>Market availability: US only</b>
 */
export const Status11 = {
  Enroll: "ENROLL",
  Disenroll: "DISENROLL",
} as const;
export type Status11 = (typeof Status11)[keyof typeof Status11] | (string & {});

export const status11Schema: EnumSchema<Status11> = s.enumOf<Status11>(Status11);
