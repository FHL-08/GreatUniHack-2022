import fs from "fs";
import { Fixture } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/fixtures.json", "utf8");
  const json = JSON.parse(data) as Fixture[]

  return json.find((fixture) => fixture.fixture.id === parseInt(event.context.params.fixture));
});
