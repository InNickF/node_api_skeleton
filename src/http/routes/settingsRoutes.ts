import * as settingsController from "../controllers/settingsController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

export default [
  {
    path: "/api/v1/settings",
    method: "get",
    handler: [checkJwt, checkRole(["DEVELOPER"]), settingsController.getAll]
  },
  {
    path: "/api/v1/settings/update",
    method: "post",
    handler: [
      checkJwt,
      checkRole(["DEVELOPER"]),
      settingsController.updateSettings
    ]
  }
];
