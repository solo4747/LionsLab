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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission {
    onCreateMission {
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
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission {
    onUpdateMission {
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
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission {
    onDeleteMission {
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
export const onCreateObjectif = /* GraphQL */ `
  subscription OnCreateObjectif {
    onCreateObjectif {
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
export const onUpdateObjectif = /* GraphQL */ `
  subscription OnUpdateObjectif {
    onUpdateObjectif {
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
export const onDeleteObjectif = /* GraphQL */ `
  subscription OnDeleteObjectif {
    onDeleteObjectif {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia {
    onCreateMedia {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia {
    onUpdateMedia {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia {
    onDeleteMedia {
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
export const onCreateVoters = /* GraphQL */ `
  subscription OnCreateVoters {
    onCreateVoters {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVoters = /* GraphQL */ `
  subscription OnUpdateVoters {
    onUpdateVoters {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVoters = /* GraphQL */ `
  subscription OnDeleteVoters {
    onDeleteVoters {
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCandidats = /* GraphQL */ `
  subscription OnCreateCandidats {
    onCreateCandidats {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCandidats = /* GraphQL */ `
  subscription OnUpdateCandidats {
    onUpdateCandidats {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCandidats = /* GraphQL */ `
  subscription OnDeleteCandidats {
    onDeleteCandidats {
      id
      name
      nombreDeVotes
      poll
      createdAt
      updatedAt
    }
  }
`;
