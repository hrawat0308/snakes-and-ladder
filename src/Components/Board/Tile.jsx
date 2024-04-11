import { Typography } from "@mui/material";
import Token from "../Token/Token";
import { useSelector } from "react-redux";

const Tile = ({ tileNumber }) => {
    const player1 = useSelector((state) => state.game.player1);
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
                flexWrap: 2,
                width: '88px',
                height: '50px',
                columnGap: 3,
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {tileNumber === player1.currentPos && <Token colorIndex={0}>1</Token>}
                {/* {tileNumber === player1.currentPos && <Token colorIndex={1}>2</Token>}
                {tileNumber === player1.currentPos && <Token colorIndex={2}>3</Token>}
                {tileNumber === player1.currentPos && <Token colorIndex={3}>4</Token>}
                {tileNumber === player1.currentPos && <Token colorIndex={4}>5</Token>}
                {tileNumber === player1.currentPos && <Token colorIndex={5}>6</Token>} */}
            </div>
        </div >


    )
}

export default Tile;