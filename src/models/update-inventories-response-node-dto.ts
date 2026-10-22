import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

export type UpdateInventoriesResponseNodeDto = {
  /** ShipNode Id of the ship node for which the inventory is requested */
  shipNode?: string;
  /** Node Update status. Example: 'Success' */
  status?: string;
  /** Node Update Error description. */
  errors?: Error4[];
};

export const updateInventoriesResponseNodeDtoSchema: Schema<UpdateInventoriesResponseNodeDto> =
  s.object<UpdateInventoriesResponseNodeDto>({
    shipNode: s.optional(s.string()),
    status: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => error4Schema))),
  });
