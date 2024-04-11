import Tile from "./Tile";
import { useDispatch, useSelector } from "react-redux";
import snakeIMG from '../../Assets/snake.png';
import ladderImg from '../../Assets/ladder.png';
import { getRandomSnakesandLadders, calculateSnakePosition } from '../../Utils/helper'
import Token from "../Token/Token";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { gameActions } from "../../Store";

const Board = () => {
    const dispatch = useDispatch();
    const pick = useSelector((state) => state.game.pick);
    const board = useSelector((state) => state.game.board);
    const snakes = useSelector((state) => state.game.snakes)[pick];
    const ladders = useSelector((state) => state.game.ladders)[pick];
    const ladderStyles = useSelector((state) => state.game.ladderStyles)[pick];

    useEffect(() => {
        dispatch(gameActions.setPick({ pick: getRandomSnakesandLadders() }))
    }, [pick]);

    return (
        <div style={{ paddingTop: 70 }}>
            <div
                style={{
                    width: '900px',
                    // margin: 'auto',
                    marginLeft: 700,
                    position: 'relative',
                }}
            >
                {
                    board?.map((tile, i) => {
                        return <Tile key={tile} tileNumber={tile} />
                    })
                }
                {
                    snakes?.map((pos) => {
                        let { top, left, imageHeight, imageWidth, transform } = calculateSnakePosition(pos[0], pos[1]);
                        return (
                            <img
                                key={pos[0].toString() + pos[1].toString()}
                                src={snakeIMG}
                                alt="snakes"
                                style={{
                                    position: 'absolute',
                                    top: top,
                                    left: left,
                                    height: imageHeight,
                                    width: imageWidth,
                                    transform: transform,
                                }}>
                            </img>
                        )
                    })
                }
                {
                    ladders?.map((pos, i) => {
                        return (
                            <span
                                key={pos[0].toString() + pos[1].toString()}
                                style={{
                                    position: 'absolute',
                                    top: ladderStyles[i].top,
                                    left: ladderStyles[i].left,
                                    height: ladderStyles[i].height,
                                    width: 60,
                                    transform: `rotate(${ladderStyles[i].deg}deg)`,
                                    backgroundRepeat: 'repeat-y',
                                    backgroundImage: `url(${ladderImg})`,
                                    opacity: 0.8
                                }}>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Board;