import * as settingsController from "../controllers/settingsController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";
import { userRole } from "../entities/User";

export default [
  {
    path: "/api/v1/settings",
    method: "get",
    handler: [
      checkJwt,
      checkRole([userRole.DEVELOPER]),
      settingsController.getAll
    ]
  },
  {
    path: "/api/v1/settings",
    method: "post",
    handler: [
      checkJwt,
      checkRole([userRole.DEVELOPER]),
      settingsController.updateSettings
    ]
  }
];
