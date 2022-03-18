// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, Player, Objectif, Task, Media, Mission } = initSchema(schema);

export {
  Team,
  Player,
  Objectif,
  Task,
  Media,
  Mission
};