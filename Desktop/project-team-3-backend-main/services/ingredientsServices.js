import path from "path";
import { promises as fs } from "fs";
import HttpError from "../helpers/HttpError.js";

const ingredientsPath = path.resolve("db/data/ingredients.json");

export const getAllIngredients = async () => {
  try {
    const data = await fs.readFile(ingredientsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw HttpError(500, "Failed to load ingredients");
  }
};

