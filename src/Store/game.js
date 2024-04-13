import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stepVariants1: {},
    stepVariants2: {},
    stepVariants3: {},
    stepVariants4: {},
    stepVariants5: {},
    stepVariants6: {},
    rollButtonDisabled: false,
    pick: null,
    maxPlayers: 6,
    player1: {
        currentPos: 1,
        name: 'Player 1',
        color: '#CC2B22'
    },
    player2: {
        currentPos: 1,
        name: 'Player 2',
        color: '#4ECC22'
    },
    player3: {
        currentPos: 1,
        name: 'Player 3',
        color: '#2233CC'
    },
    player4: {
        currentPos: 1,
        name: 'Player 4',
        color: '#CC2269'
    },
    player5: {
        currentPos: 1,
        name: 'Player 5',
        color: 'yellow',
    },
    player6: {
        currentPos: 1,
        name: 'Player 6',
        color: 'purple'
    },
    dice: null,
    regionModal: true,
    playersModal: false,
    numberOfPlayers: null,
    chanceOfPlayer: 1,
    selectedRegionId: null,
    snakeModal: {
        open: false,
        tile: null
    },
    winnerModal: false,
    board: [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    snakes: [
        [[98, 65], [61, 38], [94, 71], [75, 32], [37, 3], [48, 16], [28, 10]],
        [[97, 78], [62, 18], [43, 6], [95, 57], [88, 24], [68, 10], [48, 16]],
        [[99, 63], [83, 45], [85, 59], [60, 23], [27, 10], [56, 1], [90, 48]],
        [[99, 78], [87, 24], [17, 7], [54, 30], [95, 68], [64, 19], [62, 21]],
        [[96, 42], [94, 71], [75, 32], [26, 10], [37, 3], [47, 16], [80, 38]]
    ],
    ladders: [
        [[99, 80], [67, 50], [92, 90], [76, 25], [14, 4], [30, 8], [42, 21]],
        [[22, 4], [50, 9], [57, 26], [63, 41], [75, 54], [93, 70], [98, 79]],
        [[25, 3], [33, 11], [55, 35], [80, 43], [88, 67], [92, 70], [97, 65]],
        [[39, 2], [25, 8], [53, 29], [77, 46], [81, 61], [91, 72], [58, 41]],
        [[21, 3], [28, 7], [52, 30], [56, 36], [79, 43], [87, 68], [97, 76]]

    ],
    ladderStyles: [
        [
            {
                top: 10,
                left: 50,
                height: 220,
                deg: 30
            },
            {
                top: 200,
                left: 700,
                height: 320,
                deg: -60
            },
            {
                top: 10,
                left: 780,
                height: 150,
                deg: -30
            },
            {
                top: 180,
                left: 380,
                height: 450,
                deg: 0
            },
            {
                top: 600,
                left: 420,
                height: 280,
                deg: 70
            },
            {
                top: 570,
                left: 740,
                height: 250,
                deg: 50
            },
            {
                top: 420,
                left: 50,
                height: 220,
                deg: 25
            }
        ],
        [
            {
                top: 550,
                left: 200,
                height: 280,
                deg: -45
            },
            {
                top: 420,
                left: 780,
                height: 380,
                deg: 15
            },
            {
                top: 320,
                left: 370,
                height: 340,
                deg: -35
            },
            {
                top: 240,
                left: 100,
                height: 250,
                deg: 45
            },
            {
                top: 170,
                left: 520,
                height: 220,
                deg: -25
            },
            {
                top: 0,
                left: 730,
                height: 315,
                deg: -35
            },
            {
                top: 20,
                left: 150,
                height: 220,
                deg: 25
            }
        ],
        [
            {
                top: 570,
                left: 300,
                height: 255,
                deg: 45
            },
            {
                top: 480,
                left: 730,
                height: 250,
                deg: -40
            },
            {
                top: 350,
                left: 460,
                height: 199,
                deg: 0
            },
            {
                top: 160,
                left: 100,
                height: 330,
                deg: -35
            },
            {
                top: 100,
                left: 600,
                height: 220,
                deg: 20
            },
            {
                top: 5,
                left: 780,
                height: 315,
                deg: -20
            },
            {
                top: 5,
                left: 320,
                height: 315,
                deg: -20
            }
        ],
        [
            {
                top: 530,
                left: 100,
                height: 250,
                deg: 0
            },
            {
                top: 530,
                left: 500,
                height: 340,
                deg: -60
            },
            {
                top: 350,
                left: 700,
                height: 300,
                deg: -20
            },
            {
                top: 160,
                left: 380,
                height: 335,
                deg: -35
            },
            {
                top: 100,
                left: 5,
                height: 198,
                deg: 0
            },
            {
                top: 10,
                left: 780,
                height: 215,
                deg: 30
            },
            {
                top: 300,
                left: 100,
                height: 215,
                deg: 60
            }
        ],
        [
            {
                top: 560,
                left: 100,
                height: 280,
                deg: -50
            },
            {
                top: 580,
                left: 590,
                height: 225,
                deg: 30
            },
            {
                top: 350,
                left: 780,
                height: 285,
                deg: -20
            },
            {
                top: 350,
                left: 380,
                height: 195,
                deg: 0
            },
            {
                top: 200,
                left: 150,
                height: 250,
                deg: -20
            },
            {
                top: 100,
                left: 600,
                height: 220,
                deg: -20
            },
            {
                top: 15,
                left: 320,
                height: 220,
                deg: -25
            }
        ]
    ]
}

const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        setNumberOfPlayers(state, action) {
            state.numberOfPlayers = action.payload.numberOfPlayers
        },
        setPlayerChance(state, action) {
            state.chanceOfPlayer = action.payload.chanceOfPlayer;
        },
        setRegionModalClose(state, action) {
            state.regionModal = false;
        },
        setRegionModalTrue(state, action) {
            state.regionModal = true;
        },
        setSelectedRegion(state, action) {
            state.selectedRegionId = action.payload.selectedRegionId;
        },
        setPlayersClose(state, action) {
            state.playersModal = false;
        },
        setPlayersOpen(state, action) {
            state.playersModal = true;
        },
        setDice(state, action) {
            state.dice = action.payload.dice;
        },
        setPick(state, action) {
            state.pick = action.payload.pick;
        },
        setPlayer1(state, action) {
            state.player1 = action.payload.player1;
        },
        setPlayer2(state, action) {
            state.player2 = action.payload.player2;
        },
        setPlayer3(state, action) {
            state.player3 = action.payload.player3;
        },
        setPlayer4(state, action) {
            state.player4 = action.payload.player4;
        },
        setPlayer5(state, action) {
            state.player5 = action.payload.player5;
        },
        setPlayer6(state, action) {
            state.player6 = action.payload.player6;
        },
        setStepVariants1(state, action) {
            state.stepVariants1 = action.payload.stepVariants;
        },
        setStepVariants2(state, action) {
            state.stepVariants2 = action.payload.stepVariants;
        },
        setStepVariants3(state, action) {
            state.stepVariants3 = action.payload.stepVariants;
        },
        setStepVariants4(state, action) {
            state.stepVariants4 = action.payload.stepVariants;
        },
        setStepVariants5(state, action) {
            state.stepVariants5 = action.payload.stepVariants;
        },
        setStepVariants6(state, action) {
            state.stepVariants6 = action.payload.stepVariants;
        },
        setRollButtonDisabled(state, action) {
            state.rollButtonDisabled = action.payload.rollButtonDisabled;
        },
        setSnakeModalOpen(state, action) {
            state.snakeModal = {
                open: true,
                tile: action.payload.tile
            };
        },
        setSnakeModalClose(state, action) {
            state.snakeModal = {
                open: false,
                tile: null
            };
        },
        setWinnerOpen(state, action) {
            state.winnerModal = true;
        },
        setWinnerClose(state, action) {
            state.winnerModal = false;
        }
    }
});

export default gameSlice;