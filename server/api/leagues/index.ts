import fs from "fs";
import { League } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/leagues.json", "utf8");
  return JSON.parse(data) as League[];
});
