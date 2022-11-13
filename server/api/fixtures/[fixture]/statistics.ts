import fs from "fs";
import { Statistic } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/statistics.json", "utf8");
  const json = JSON.parse(data) as Statistic[]

  return json.find((statistic) => statistic.id === parseInt(event.context.params.fixture))?.data;
});
