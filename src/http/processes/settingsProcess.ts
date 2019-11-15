import * as settingsRepository from "../repositories/settingsRepository";

export const updateSettings = async setting => {
  await settingsRepository.updateSettings(setting);
  return { status: "ok", message: "Setting has been updated" };
};

export const getAll = async () => {
  const entity = await settingsRepository.findAll();
  return { status: "ok", message: "All settings retrieved", entity };
};
