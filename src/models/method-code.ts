import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodCode = {
  Standard: "Standard",
  Express: "Express",
  SameDay: "SameDay",
  Freight: "Freight",
} as const;
export type MethodCode = (typeof MethodCode)[keyof typeof MethodCode] | (string & {});

export const methodCodeSchema: EnumSchema<MethodCode> = s.enumOf<MethodCode>(MethodCode);
