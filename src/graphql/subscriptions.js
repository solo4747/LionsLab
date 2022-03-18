/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
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
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
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
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
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
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      teamID
      type
      login
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission($owner: String) {
    onCreateMission(owner: $owner) {
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
          owner
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission($owner: String) {
    onUpdateMission(owner: $owner) {
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
          owner
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission($owner: String) {
    onDeleteMission(owner: $owner) {
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
          owner
        }
        missionID
        type
        comment
        commentNote
        description
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateObjectif = /* GraphQL */ `
  subscription OnCreateObjectif($owner: String) {
    onCreateObjectif(owner: $owner) {
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
        owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateObjectif = /* GraphQL */ `
  subscription OnUpdateObjectif($owner: String) {
    onUpdateObjectif(owner: $owner) {
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
        owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteObjectif = /* GraphQL */ `
  subscription OnDeleteObjectif($owner: String) {
    onDeleteObjectif(owner: $owner) {
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
        owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String) {
    onCreateTask(owner: $owner) {
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
          owner
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String) {
    onUpdateTask(owner: $owner) {
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
          owner
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String) {
    onDeleteTask(owner: $owner) {
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
          owner
        }
        categorie
        type
        tasks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      missionID
      type
      comment
      commentNote
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($owner: String) {
    onCreateMedia(owner: $owner) {
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
        owner
      }
      missionID
      type
      description
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($owner: String) {
    onUpdateMedia(owner: $owner) {
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
        owner
      }
      missionID
      type
      description
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($owner: String) {
    onDeleteMedia(owner: $owner) {
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
        owner
      }
      missionID
      type
      description
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
