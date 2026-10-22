import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierInfoListSchema, type CarrierInfoList } from "./carrier-info-list.js";

export type Label = {
  /** Url to get the return label.<br><b style='color:green;'>Market availability: US</b> */
  labelImageUrl?: string;
  /** Carrier information for the return.<br><b style='color:green;'>Market availability: US</b> */
  carrierInfoList?: CarrierInfoList[];
};

export const labelSchema: Schema<Label> = s.object<Label>({
  labelImageUrl: s.optional(s.string()),
  carrierInfoList: s.optional(s.array(s.lazy(() => carrierInfoListSchema))),
  _keysMap: {
    labelImageUrl: "labelImageURL",
  },
});
