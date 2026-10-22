import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Market | Translation |
 * | --- | ----------- |
 * | CA  | ["Create", "Delete","Replace All"]|
 * | MX & CL | ["Crear", "Eliminar","Reemplazar todo"]|
 *
 * <br><b style='color:green;'>Market availability: CA | MX | CL
 */
export const PromotionSettingAction = {
  Create: "Create",
  Delete: "Delete",
  ReplaceAll: "Replace All",
  Crear: "Crear",
  Eliminar: "Eliminar",
  ReemplazarTodo: "Reemplazar todo",
} as const;
export type PromotionSettingAction =
  | (typeof PromotionSettingAction)[keyof typeof PromotionSettingAction]
  | (string & {});

export const promotionSettingActionSchema: EnumSchema<PromotionSettingAction> =
  s.enumOf<PromotionSettingAction>(PromotionSettingAction);
