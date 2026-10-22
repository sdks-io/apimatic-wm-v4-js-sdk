import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type Header = {
  headerAttributes?: string | null;
};

export const headerSchema: Schema<Header> = s.object<Header>({
  headerAttributes: s.optionalNullable(s.string()),
});
