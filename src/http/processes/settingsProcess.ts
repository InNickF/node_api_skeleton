import { Setting } from "../entities/Setting";
import * as settingsRepository from "../repositories/settingsRepository";
import { HTTP401Error } from "../../utils/httpErrors";
import * as jwt from "jsonwebtoken";
import config from "../../config/config";

export const updateSettings = async (setting) => {
    await settingsRepository.updateSettings(setting);
    return { status: "ok", message: "Setting has been updated" };
};

export const getAll = async () => {
    const entity = await settingsRepository.findAll();

    return { status: "ok", message: "response", entity };
};
