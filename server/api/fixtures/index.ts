import fs from "fs";
import { Fixture } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/fixtures.json", "utf8");
  return JSON.parse(data) as Fixture[];
});
