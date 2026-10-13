import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PageLayout = {
  Default: "DEFAULT",
  FourInOne: "FOUR_IN_ONE",
} as const;
export type PageLayout = (typeof PageLayout)[keyof typeof PageLayout] | (string & {});

export const pageLayoutSchema: EnumSchema<PageLayout> = s.enumOf<PageLayout>(PageLayout);
