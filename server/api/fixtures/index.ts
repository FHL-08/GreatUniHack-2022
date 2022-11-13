import fs from "fs";
import { Fixture } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/fixtures.json", "utf8");

  const query = getQuery(event)
  if (query?.q) {
    const fixtures = JSON.parse(data) as Fixture[];
    const filtered = fixtures.filter((fixture) => {

      const includesHome = fixture.homeTeam.name.toLowerCase().includes(query.q.toLowerCase())
      const includesAway = fixture.homeTeam.name.toLowerCase().includes(query.q.toLowerCase())
      return includesHome;
    });
    return {
      body: JSON.stringify(filtered),
    };
  }

    
  return JSON.parse(data) as Fixture[];
});
