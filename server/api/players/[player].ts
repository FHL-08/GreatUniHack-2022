import fs from "fs";
import { Player } from "~~/types/api";

export default defineEventHandler((event) => {
  const data = fs.readFileSync("data/players.json", "utf8");
  const json = JSON.parse(data) as Player[];

  return json.find(
    (player) => player.player.id === parseInt(event.context.params.player)
  );
});
