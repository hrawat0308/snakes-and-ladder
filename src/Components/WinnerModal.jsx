import { Modal, Typography, Card, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../Store";

const WinnerModal = () => {
    const dispatch = useDispatch();
    const winnerModal = useSelector((state) => state.game.winnerModal);
    const chanceOfPlayer = useSelector((state) => state.game.chanceOfPlayer);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 300,
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
        backgroundColor: '#FFF',
        scrollY: 'auto',
        textAlign: 'center'
    };

    const playGameAgain = () => {
        window.location.reload();
    }

    return (
        <Modal
            open={winnerModal}
            onClose={() => dispatch(gameActions.setWinnerClose())}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(1, 1, 1, 0.5)',
                    },
                },
            }}
        >
            <Card sx={style}>
                <Typography gutterBottom variant="h5" component="div">Player {chanceOfPlayer} Won !!</Typography>
                <Button onClick={playGameAgain}>Play again !!!</Button>
            </Card>
        </Modal>
    )
}

export default WinnerModal;