import * as settingsController from "../controllers/settingsController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

export default [
    {
        path: "/api/v1/settings",
        method: "get",
        handler: [checkJwt, checkRole(["DEVELOP"]), settingsController.getAll]
    },
    {
        path: "/api/v1/settings/update",
        method: "post",
        handler: [checkJwt, checkRole(["DEVELOP"]), settingsController.updateSettings]
    }
];