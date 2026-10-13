import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessPointSchema, type AccessPoint } from "./access-point.js";

export type Payload6 = {
  accessPoints?: AccessPoint[];
};

export const payload6Schema: Schema<Payload6> = s.object<Payload6>({
  accessPoints: s.optional(s.array(s.lazy(() => accessPointSchema))),
});
