import { createClient } from "pexels";

export const pexels = createClient(String(process.env.API_KEY_PEXELS));
