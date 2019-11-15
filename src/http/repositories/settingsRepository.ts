import { getRepository } from "typeorm";
import { Setting } from "../entities/Setting";

export const findById = async (id: number) => {
  const settingsRepository = getRepository(Setting);
  const settings = await settingsRepository.findOneOrFail(id);
  return settings;
};

export const findAll = async () => {
  const settingsRepository = getRepository(Setting);
  const settings = await settingsRepository.find();
  return settings;
};

export const updateSettings = async settingsData => {
  const settingsRepository = getRepository(Setting);
  const settingsToUpdate = await settingsRepository.findOne({
    key: "ui_menu_styles"
  });
  settingsToUpdate.jsonValue = JSON.stringify(settingsData);
  await settingsRepository.save(settingsToUpdate);
};
