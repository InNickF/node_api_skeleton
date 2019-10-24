import Validator from "../../utils/validator";
import { Request, Response, NextFunction } from "express";
import transformValidationErrors from "../transformers/errorTransformer";
import "./customValidators";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:20|username_available",
    password: "required|string|min:4|max:20",
    role: ["required", { in: ["ADMIN", "USER"] }]
  };

  const validator = new Validator(data, rules);
  const passes = () => {
    next();
  };
  const fails = () => {
    const formatedErrors = transformValidationErrors(validator.errors);
    res.status(422).send(formatedErrors);
  };

  validator.checkAsync(passes, fails);
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:50|username_exists",
    password: "required|string|min:4|max:20"
  };

  const validator = new Validator(data, rules);
  const passes = () => {
    next();
  };
  const fails = () => {
    const formatedErrors = transformValidationErrors(validator.errors);
    res.status(422).send(formatedErrors);
  };

  validator.checkAsync(passes, fails);
};

export const validateChangePassword = (req: Request, res: Response, next: NextFunction) => {

  const data = req.body;
  const rules = {
    password: "required|string|min:4|max:20",
    newPassword: "required|string|min:4|max:20"
  };

  const validator = new Validator(data, rules);
  const passes = () => {
    next();
  };
  const fails = () => {
    const formatedErrors = transformValidationErrors(validator.errors);
    res.status(422).send(formatedErrors);
  };

  validator.checkAsync(passes, fails);
};
