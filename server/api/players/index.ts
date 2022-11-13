import fs from "fs";
import { Player } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/players.json", "utf8");
  return JSON.parse(data) as Player[];
});
