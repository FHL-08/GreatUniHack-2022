import fs from "fs";
import { Fixture } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/fixtures.json", "utf8");

  const query = getQuery(event);
  if (query.q && query.q.length > 3 ) {
    const fixtures = JSON.parse(data) as Fixture[];
    const filtered = fixtures.filter((fixture) => {
      const includesHome = fixture.teams.home.name
        .toLowerCase()
        .includes((query.q as string)?.toLowerCase());

      const includesAway = fixture.teams.home.name
        .toLowerCase()
        .includes((query.q as string).toLowerCase());

      return includesHome || includesAway;
    });

    return filtered;
  }

  return JSON.parse(data) as Fixture[];
});
