import { user } from "./auth";

const BASE_URL = 'https://api.cuci-in.me/api/auth';

export const LOGIN = `${BASE_URL}/login`;
export const APPLYFORM = `${BASE_URL}/partnership/apply`;
export const STATUS_APPLY = `${BASE_URL}/partnership/status/${user()}`;
export const REGISTER = `${BASE_URL}/register`;
export const DOWNLOAD = `${BASE_URL}/download`;
