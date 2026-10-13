import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CodeChallengeMethod = {
  S256: "S256",
} as const;
export type CodeChallengeMethod =
  | (typeof CodeChallengeMethod)[keyof typeof CodeChallengeMethod]
  | (string & {});

export const codeChallengeMethodSchema: EnumSchema<CodeChallengeMethod> =
  s.enumOf<CodeChallengeMethod>(CodeChallengeMethod);
