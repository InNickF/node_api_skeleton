import usersRoutes from "./http/routes/usersRoutes";
import authRoutes from "./http/routes/authRoutes";
import settingsRoutes from "./http/routes/settingsRoutes";

export default [...usersRoutes, ...authRoutes, ...settingsRoutes];
