/* tslint:disable */
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
