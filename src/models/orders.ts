import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Orders = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Orders = (typeof Orders)[keyof typeof Orders] | (string & {});

export const ordersSchema: EnumSchema<Orders> = s.enumOf<Orders>(Orders);
