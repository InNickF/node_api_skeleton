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

export const updateSettings = async (settingsData)  => {
    const settings = settingsData;
    const settingsRepository = getRepository(Setting);
    let photoToUpdate = await settingsRepository.findOne({ key: 'ui_menu_styles' });
    photoToUpdate.json_value = JSON.stringify(settings);
    await settingsRepository.save(photoToUpdate);
};