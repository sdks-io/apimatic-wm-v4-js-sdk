import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indication of how box content is meant to be provided. */
export const CommonBoxContentInformationSource = {
  BoxContentProvided: "BOX_CONTENT_PROVIDED",
  ManualProcess: "MANUAL_PROCESS",
  Barcode2D: "BARCODE_2D",
} as const;
export type CommonBoxContentInformationSource =
  | (typeof CommonBoxContentInformationSource)[keyof typeof CommonBoxContentInformationSource]
  | (string & {});

export const commonBoxContentInformationSourceSchema: EnumSchema<CommonBoxContentInformationSource> =
  s.enumOf<CommonBoxContentInformationSource>(CommonBoxContentInformationSource);
