import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Duration category of the investigation. */
export const Name = {
  ResearchingQuantityInShortTerm: "researchingQuantityInShortTerm",
  ResearchingQuantityInMidTerm: "researchingQuantityInMidTerm",
  ResearchingQuantityInLongTerm: "researchingQuantityInLongTerm",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
