import { Modal, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../Store";
import Snakes from '../Utils/Snakes.json';


const SnakesModal = () => {
    const dispatch = useDispatch();
    const snakeModal = useSelector((state) => state.game.snakeModal);
    const selectedRegionId = useSelector((state) => state.game.selectedRegionId);

    const snakesData = Snakes.filter((snake) => snake.regionId === selectedRegionId);
    console.log(snakeModal);
    const snakeId = Math.floor(Math.random() * 7);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 600,
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
        backgroundColor: '#FFF18580',
        scrollY: 'auto'

    };

    return (
        <Modal
            open={snakeModal.open}
            onClose={() => dispatch(gameActions.setSnakeModalClose())}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(1, 1, 1, 0.9)',
                    },
                },
            }}
        >
            <Card sx={style}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={snakesData[snakeId]?.url}
                    title={snakesData[snakeId]?.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{snakesData[snakeId]?.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{snakesData[snakeId]?.description}</Typography>
                </CardContent>
            </Card>
        </Modal>
    )
}

export default SnakesModal;