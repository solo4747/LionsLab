import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ObjectifMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly players?: (Player | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly age: string;
  readonly pied?: string;
  readonly urlMedia?: string;
  readonly niveauActuel?: number;
  readonly progressBar?: number;
  readonly nombreDePointsActuel?: number;
  readonly overflow?: number;
  readonly poster?: string;
  readonly objectifs?: (Objectif | null)[];
  readonly medias?: (Media | null)[];
  readonly teamID: string;
  readonly type?: string;
  readonly login?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

export declare class Objectif {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly difficulte?: number;
  readonly niveauActuel?: number;
  readonly niveauMax?: number;
  readonly progressBar?: number;
  readonly player?: Player;
  readonly categorie: number;
  readonly type?: string;
  readonly tasks?: (Task | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Objectif, ObjectifMetaData>);
  static copyOf(source: Objectif, mutator: (draft: MutableModel<Objectif, ObjectifMetaData>) => MutableModel<Objectif, ObjectifMetaData> | void): Objectif;
}

export declare class Task {
  readonly id: string;
  readonly name: string;
  readonly status?: boolean;
  readonly objectif?: Objectif;
  readonly missionID?: string;
  readonly type?: string;
  readonly comment?: boolean;
  readonly commentNote?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class Media {
  readonly id: string;
  readonly uri: string;
  readonly status?: boolean;
  readonly player?: Player;
  readonly missionID?: string;
  readonly type?: string;
  readonly description?: string;
  readonly poster?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Media, MediaMetaData>);
  static copyOf(source: Media, mutator: (draft: MutableModel<Media, MediaMetaData>) => MutableModel<Media, MediaMetaData> | void): Media;
}

export declare class Mission {
  readonly id: string;
  readonly objectif: string;
  readonly name: string;
  readonly description?: string;
  readonly difficulte?: number;
  readonly niveauActuel?: number;
  readonly niveauMax?: number;
  readonly progressBar?: number;
  readonly playerID: string;
  readonly categorie: number;
  readonly status?: boolean;
  readonly type?: string;
  readonly afficherMission?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Mission, MissionMetaData>);
  static copyOf(source: Mission, mutator: (draft: MutableModel<Mission, MissionMetaData>) => MutableModel<Mission, MissionMetaData> | void): Mission;
}