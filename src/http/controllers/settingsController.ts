import { Request, Response, NextFunction } from "express";
import * as settingProcess from "../processes/settingsProcess";
import { clientError } from "../../utils/ErrorHandler";

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await settingProcess.getAll();
    res.status(200).send(response);
  } catch (error) {
    clientError(error, res, next);
  }
};

export const updateSettings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await settingProcess.updateSettings(req.body);
    res.status(200).send(response);
  } catch (error) {
    clientError(error, res, next);
  }
};
