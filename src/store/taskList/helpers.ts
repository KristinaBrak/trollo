import { uuid } from "../../generator";

export const getId = () => String(uuid());
export const getDate = () => new Date().toISOString();