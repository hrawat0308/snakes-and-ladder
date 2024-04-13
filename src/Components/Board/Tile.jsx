import { Typography } from "@mui/material";
import Token1 from "../Token/Token1";
import Token2 from "../Token/Token2";
import Token3 from "../Token/Token3";
import Token4 from "../Token/Token4";
import Token5 from "../Token/Token5";
import Token6 from "../Token/Token6";
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
                borderBottomRightRadius: tileNumber === 10 && '15px'
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
                {tileNumber === player1.currentPos && numberOfPlayers >= 1 && <Token1 colorIndex={0}>1</Token1>}
                {tileNumber === player2.currentPos && numberOfPlayers >= 2 && <Token2 colorIndex={1}>2</Token2>}
                {tileNumber === player3.currentPos && numberOfPlayers >= 3 && <Token3 colorIndex={2}>3</Token3>}
                {tileNumber === player4.currentPos && numberOfPlayers >= 4 && <Token4 colorIndex={3}>4</Token4>}
                {tileNumber === player5.currentPos && numberOfPlayers >= 5 && <Token5 colorIndex={4}>5</Token5>}
                {tileNumber === player6.currentPos && numberOfPlayers >= 6 && <Token6 colorIndex={5}>6</Token6>}
            </div>
        </div >


    )
}

export default Tile;