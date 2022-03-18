/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
            nextToken
          }
          medias {
            items {
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
            nextToken
          }
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $id: ID
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTeams(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
          categorie
          type
          tasks {
            items {
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
            nextToken
          }
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $id: ID
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
          nextToken
        }
        medias {
          items {
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
          nextToken
        }
        teamID
        type
        login
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMission = /* GraphQL */ `
  query GetMission($id: ID!) {
    getMission(id: $id) {
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
          categorie
          type
          tasks {
            items {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMissions = /* GraphQL */ `
  query ListMissions(
    $id: ID
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMissions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getObjectif = /* GraphQL */ `
  query GetObjectif($id: ID!) {
    getObjectif(id: $id) {
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
          items {
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
          nextToken
        }
        medias {
          items {
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
export const listObjectifs = /* GraphQL */ `
  query ListObjectifs(
    $id: ID
    $filter: ModelObjectifFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listObjectifs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
            items {
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
            nextToken
          }
          medias {
            items {
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
            nextToken
          }
          medias {
            items {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $id: ID
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTasks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          categorie
          type
          tasks {
            items {
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
      nextToken
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
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
          items {
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
          nextToken
        }
        medias {
          items {
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
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $id: ID
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMedia(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
            items {
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
            nextToken
          }
          medias {
            items {
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
      nextToken
    }
  }
`;
