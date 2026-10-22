import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload2Schema, type Payload2 } from "./payload2.js";

export type GetUnpublishedItemsCount = {
  payload?: Payload2[];
};

export const getUnpublishedItemsCountSchema: Schema<GetUnpublishedItemsCount> =
  s.object<GetUnpublishedItemsCount>({
    payload: s.optional(s.array(s.lazy(() => payload2Schema))),
  });
