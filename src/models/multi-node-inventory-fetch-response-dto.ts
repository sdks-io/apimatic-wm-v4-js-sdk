import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { elementsSchema, type Elements } from "./elements.js";
import { metaSchema, type Meta } from "./meta.js";

export type MultiNodeInventoryFetchResponseDto = {
  meta?: Meta;
  elements?: Elements;
};

export const multiNodeInventoryFetchResponseDtoSchema: Schema<MultiNodeInventoryFetchResponseDto> =
  s.object<MultiNodeInventoryFetchResponseDto>({
    meta: s.optional(s.lazy(() => metaSchema)),
    elements: s.optional(s.lazy(() => elementsSchema)),
  });
