import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headersSchema, type Headers } from "./headers.js";
import { payload8Schema, type Payload8 } from "./payload8.js";

export type WfsInventoryDto = {
  headers?: Headers;
  payload?: Payload8;
};

export const wfsInventoryDtoSchema: Schema<WfsInventoryDto> = s.object<WfsInventoryDto>({
  headers: s.optional(s.lazy(() => headersSchema)),
  payload: s.optional(s.lazy(() => payload8Schema)),
});
