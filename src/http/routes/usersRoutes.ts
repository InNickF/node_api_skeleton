import * as usersController from "../controllers/usersController";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";
import {userRole} from "../entities/User";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: [checkJwt, checkRole([userRole.USER]), usersController.getUsers]
  }
];
