import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipPackageSchema, type ShipPackage } from "./ship-package.js";

export type MultiPackageShipRequest = {
  packages: ShipPackage[];
};

export const multiPackageShipRequestSchema: Schema<MultiPackageShipRequest> =
  s.object<MultiPackageShipRequest>({
    packages: s.array(s.lazy(() => shipPackageSchema)),
  });
