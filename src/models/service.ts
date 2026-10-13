import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Service = {
  id: string;
  name: string;
};

export const serviceSchema: Schema<Service> = s.object<Service>({
  id: s.string(),
  name: s.string(),
});
