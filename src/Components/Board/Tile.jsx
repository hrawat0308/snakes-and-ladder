import { Typography } from "@mui/material";
import Token from "../Token/Token";
import { useSelector } from "react-redux";

const Tile = ({ tileNumber }) => {
    const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
    const player1 = useSelector((state) => state.game.player1);
    const player2 = useSelector((state) => state.game.player2);
    const player3 = useSelector((state) => state.game.player3);
    const player4 = useSelector((state) => state.game.player4);
    const player5 = useSelector((state) => state.game.player5);
    const player6 = useSelector((state) => state.game.player6);

    return (
        <div
            style={{
                height: '80px',
                border: '1px solid #000',
                width: '88px',
                display: 'inline-block',
                backgroundColor: tileNumber % 2 === 0 ? '#FFF185' : '#FEA102',
                borderTopLeftRadius: tileNumber === 100 && '15px',
                borderTopRightRadius: tileNumber === 91 && '15px',
                borderBottomLeftRadius: tileNumber === 1 && '15px',
                borderBottomRightRadius: tileNumber === 10 && '15px',
            }}
            id={tileNumber}
        >
            <Typography
                variant="h5"
                sx={{
                    fontFamily: 'Gluten',
                    paddingLeft: 1,
                }}>
                {tileNumber}
            </Typography>
            <div style={{
                position: 'absolute',
                display: 'flex',
                width: '88px',
                height: '50px',
                columnGap: 3,
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {tileNumber === player1.currentPos && numberOfPlayers >= 1 && <Token colorIndex={0}>1</Token>}
                {tileNumber === player2.currentPos && numberOfPlayers >= 2 && <Token colorIndex={1}>2</Token>}
                {tileNumber === player3.currentPos && numberOfPlayers >= 3 && <Token colorIndex={2}>3</Token>}
                {tileNumber === player4.currentPos && numberOfPlayers >= 4 && <Token colorIndex={3}>4</Token>}
                {tileNumber === player5.currentPos && numberOfPlayers >= 5 && <Token colorIndex={4}>5</Token>}
                {tileNumber === player6.currentPos && numberOfPlayers >= 6 && <Token colorIndex={5}>6</Token>}
            </div>
        </div >


    )
}

export default Tile;