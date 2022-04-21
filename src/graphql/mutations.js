/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      age
      pied
      urlMedia
      niveauActuel
      progressBar
      nombreDePointsActuel
      overflow
      poster
      objectifs {
        items {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      medias {
        items {
          id
          uri
          status
          playerID
          missionID
          type
          description
          poster
          tag
          createdAt
          updatedAt
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      age
      pied
      urlMedia
      niveauActuel
      progressBar
      nombreDePointsActuel
      overflow
      poster
      objectifs {
        items {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      medias {
        items {
          id
          uri
          status
          playerID
          missionID
          type
          description
          poster
          tag
          createdAt
          updatedAt
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      age
      pied
      urlMedia
      niveauActuel
      progressBar
      nombreDePointsActuel
      overflow
      poster
      objectifs {
        items {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      medias {
        items {
          id
          uri
          status
          playerID
          missionID
          type
          description
          poster
          tag
          createdAt
          updatedAt
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
    }
  }
`;
export const createMission = /* GraphQL */ `
  mutation CreateMission(
    $input: CreateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    createMission(input: $input, condition: $condition) {
      id
      objectif
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      categorie
      status
      type
      afficherMission
      tasks {
        id
        name
        status
        objectifID
        objectif {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMission = /* GraphQL */ `
  mutation UpdateMission(
    $input: UpdateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    updateMission(input: $input, condition: $condition) {
      id
      objectif
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      categorie
      status
      type
      afficherMission
      tasks {
        id
        name
        status
        objectifID
        objectif {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMission = /* GraphQL */ `
  mutation DeleteMission(
    $input: DeleteMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    deleteMission(input: $input, condition: $condition) {
      id
      objectif
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      categorie
      status
      type
      afficherMission
      tasks {
        id
        name
        status
        objectifID
        objectif {
          id
          name
          description
          difficulte
          niveauActuel
          niveauMax
          progressBar
          playerID
          categorie
          type
          createdAt
          updatedAt
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createObjectif = /* GraphQL */ `
  mutation CreateObjectif(
    $input: CreateObjectifInput!
    $condition: ModelObjectifConditionInput
  ) {
    createObjectif(input: $input, condition: $condition) {
      id
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      categorie
      type
      tasks {
        items {
          id
          name
          status
          objectifID
          missionID
          type
          comment
          commentNote
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateObjectif = /* GraphQL */ `
  mutation UpdateObjectif(
    $input: UpdateObjectifInput!
    $condition: ModelObjectifConditionInput
  ) {
    updateObjectif(input: $input, condition: $condition) {
      id
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      categorie
      type
      tasks {
        items {
          id
          name
          status
          objectifID
          missionID
          type
          comment
          commentNote
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteObjectif = /* GraphQL */ `
  mutation DeleteObjectif(
    $input: DeleteObjectifInput!
    $condition: ModelObjectifConditionInput
  ) {
    deleteObjectif(input: $input, condition: $condition) {
      id
      name
      description
      difficulte
      niveauActuel
      niveauMax
      progressBar
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      categorie
      type
      tasks {
        items {
          id
          name
          status
          objectifID
          missionID
          type
          comment
          commentNote
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      name
      status
      objectifID
      objectif {
        id
        name
        description
        difficulte
        niveauActuel
        niveauMax
        progressBar
        playerID
        player {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      name
      status
      objectifID
      objectif {
        id
        name
        description
        difficulte
        niveauActuel
        niveauMax
        progressBar
        playerID
        player {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      name
      status
      objectifID
      objectif {
        id
        name
        description
        difficulte
        niveauActuel
        niveauMax
        progressBar
        playerID
        player {
          id
          name
          age
          pied
          urlMedia
          niveauActuel
          progressBar
          nombreDePointsActuel
          overflow
          poster
          teamID
          type
          login
          createdAt
          updatedAt
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
    }
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      uri
      status
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      missionID
      type
      description
      poster
      tag
      createdAt
      updatedAt
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      uri
      status
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      missionID
      type
      description
      poster
      tag
      createdAt
      updatedAt
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      uri
      status
      playerID
      player {
        id
        name
        age
        pied
        urlMedia
        niveauActuel
        progressBar
        nombreDePointsActuel
        overflow
        poster
        objectifs {
          nextToken
        }
        medias {
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
      }
      missionID
      type
      description
      poster
      tag
      createdAt
      updatedAt
    }
  }
`;
export const createVoters = /* GraphQL */ `
  mutation CreateVoters(
    $input: CreateVotersInput!
    $condition: ModelVotersConditionInput
  ) {
    createVoters(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateVoters = /* GraphQL */ `
  mutation UpdateVoters(
    $input: UpdateVotersInput!
    $condition: ModelVotersConditionInput
  ) {
    updateVoters(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteVoters = /* GraphQL */ `
  mutation DeleteVoters(
    $input: DeleteVotersInput!
    $condition: ModelVotersConditionInput
  ) {
    deleteVoters(input: $input, condition: $condition) {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const createCandidats = /* GraphQL */ `
  mutation CreateCandidats(
    $input: CreateCandidatsInput!
    $condition: ModelCandidatsConditionInput
  ) {
    createCandidats(input: $input, condition: $condition) {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidats = /* GraphQL */ `
  mutation UpdateCandidats(
    $input: UpdateCandidatsInput!
    $condition: ModelCandidatsConditionInput
  ) {
    updateCandidats(input: $input, condition: $condition) {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandidats = /* GraphQL */ `
  mutation DeleteCandidats(
    $input: DeleteCandidatsInput!
    $condition: ModelCandidatsConditionInput
  ) {
    deleteCandidats(input: $input, condition: $condition) {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
