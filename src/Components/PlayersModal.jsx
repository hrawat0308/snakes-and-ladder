import { Modal, Box, Typography, Stack, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../Store";
import { useState } from "react";


const PlayersModal = () => {
    const dispatch = useDispatch();
    const playersModal = useSelector((state) => state.game.playersModal);
    const maxPlayers = useSelector((state) => state.game.maxPlayers);
    const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);

    const [single, setSingle] = useState(false);
    const [multiple, setMultiple] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#FFF',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
    };
    return (
        <Modal
            open={playersModal}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(1, 1, 1, 0.8)',
                    },
                },
            }}
        >
            <Box sx={style}>
                <Stack rowGap={4}>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>Select Game Mode</Typography>
                    <Stack direction="row" justifyContent="center" columnGap={5}>
                        <Button
                            variant={single ? 'contained' : 'text'}
                            onClick={() => {
                                setMultiple(false);
                                setSingle(true);
                                dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 1 }))
                            }}
                        >
                            Single Player
                        </Button>
                        <Button
                            variant={multiple ? 'contained' : 'text'}
                            onClick={() => {
                                setSingle(false);
                                setMultiple(true);
                            }}
                        >
                            Multiplayer
                        </Button>
                    </Stack>
                    {
                        multiple &&
                        <Stack justifyContent="center" alignItems="center" rowGap={2}>
                            <Typography variant="subtitle">Select Number of Players</Typography>
                            <Stack direction="row" columnGap={1}>
                                <Button
                                    // color={numberOfPlayers == 2 ? 'secondary' : 'primary'}
                                    variant={numberOfPlayers == 2 ? 'contained' : 'outlined'}
                                    onClick={() => { dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 2 })) }}
                                >
                                    2
                                </Button>
                                <Button
                                    variant={numberOfPlayers == 3 ? 'contained' : 'outlined'}
                                    // color={numberOfPlayers == 3 ? 'secondary' : 'primary'}
                                    onClick={() => { dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 3 })) }}
                                >
                                    3
                                </Button>
                                <Button
                                    variant={numberOfPlayers == 4 ? 'contained' : 'outlined'}
                                    // color={numberOfPlayers == 4 ? 'secondary' : 'primary'}
                                    onClick={() => { dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 4 })) }}
                                >
                                    4
                                </Button>
                                <Button
                                    variant={numberOfPlayers == 5 ? 'contained' : 'outlined'}
                                    // color={numberOfPlayers == 5 ? 'secondary' : 'primary'}
                                    onClick={() => { dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 5 })) }}
                                >
                                    5
                                </Button>
                                <Button
                                    variant={numberOfPlayers == 6 ? 'contained' : 'outlined'}
                                    // color={numberOfPlayers == 6 ? 'secondary' : 'primary'}
                                    onClick={() => { dispatch(gameActions.setNumberOfPlayers({ numberOfPlayers: 6 })) }}
                                >
                                    6
                                </Button>
                            </Stack>
                        </Stack>
                    }

                    {single &&
                        <Button
                            color="success"
                            variant="contained" sx={{ width: 200, margin: 'auto' }}
                            onClick={() => { dispatch(gameActions.setPlayersClose()) }}
                        >
                            Play Game !!!
                        </Button>}
                    {numberOfPlayers && numberOfPlayers > 1 &&
                        <Button
                            color="success"
                            variant="contained"
                            sx={{ width: 200, margin: 'auto' }}
                            onClick={() => { dispatch(gameActions.setPlayersClose()) }}
                        >
                            Play Game !!!
                        </Button>}
                </Stack>

            </Box>
        </Modal>
    )
}

export default PlayersModal;