import React, { useState } from "react";
import { motion } from "framer-motion";
import dice1 from '../../Assets/dice-1.png';
import dice2 from '../../Assets/dice-2.png';
import dice3 from '../../Assets/dice-3.png';
import dice4 from '../../Assets/dice-4.png';
import dice5 from '../../Assets/dice-5.png';
import dice6 from '../../Assets/dice-6.png';
import { Button } from "@mui/material";
import { gameActions } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { RollDice, calculatePath, checkSnakeOnTile, checkLadderOnTile } from "../../Utils/helper";

const Dice = () => {
    const dispatch = useDispatch();
    const rollButtonDisabled = useSelector((state) => state.game.rollButtonDisabled);
    const chanceOfPlayer = useSelector((state) => state.game.chanceOfPlayer);
    const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);

    const player1 = useSelector((state) => state.game.player1);
    const player2 = useSelector((state) => state.game.player2);
    const player3 = useSelector((state) => state.game.player3);
    const player4 = useSelector((state) => state.game.player4);
    const player5 = useSelector((state) => state.game.player5);
    const player6 = useSelector((state) => state.game.player6);
    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [currentFaceIndex, setCurrentFaceIndex] = useState(0);
    const pick = useSelector((state) => state.game.pick);
    const snakes = useSelector((state) => state.game.snakes)[pick];
    const ladders = useSelector((state) => state.game.ladders)[pick];

    const getPlayersCurrentPosition = () => {
        switch (chanceOfPlayer) {
            case 1: return player1.currentPos;
            case 2: return player2.currentPos;
            case 3: return player3.currentPos;
            case 4: return player4.currentPos;
            case 5: return player5.currentPos;
            case 6: return player6.currentPos;
        }
    }

    const setPlayersNewObj = (targetTile) => {
        switch (chanceOfPlayer) {
            case 1: dispatch(gameActions.setPlayer1({ player1: { ...player1, currentPos: targetTile } }));
                break;
            case 2: dispatch(gameActions.setPlayer2({ player2: { ...player2, currentPos: targetTile } }));
                break;
            case 3: dispatch(gameActions.setPlayer3({ player3: { ...player3, currentPos: targetTile } }));
                break;
            case 4: dispatch(gameActions.setPlayer4({ player4: { ...player4, currentPos: targetTile } }));
                break;
            case 5: dispatch(gameActions.setPlayer5({ player5: { ...player5, currentPos: targetTile } }));
                break;
            case 6: dispatch(gameActions.setPlayer6({ player6: { ...player6, currentPos: targetTile } }));
                break;
        }
    }

    const setNextChance = (diceNum, jumpChance) => {
        if ((jumpChance || diceNum != 6) && numberOfPlayers > 1) {
            console.log('inside next chance block');
            let nextChance = chanceOfPlayer + 1;
            if (nextChance > numberOfPlayers) {
                dispatch(gameActions.setPlayerChance({ chanceOfPlayer: 1 }));
                console.log('playing player set to 1');
            }
            else {
                dispatch(gameActions.setPlayerChance({ chanceOfPlayer: nextChance }));
                console.log('playing player set to', nextChance);
            }
        }
    }

    const setVariants = (variants) => {
        switch (chanceOfPlayer) {
            case 1: dispatch(gameActions.setStepVariants1({ stepVariants: variants }));
                break;
            case 2: dispatch(gameActions.setStepVariants2({ stepVariants: variants }));
                break;
            case 3: dispatch(gameActions.setStepVariants3({ stepVariants: variants }));
                break;
            case 4: dispatch(gameActions.setStepVariants4({ stepVariants: variants }));
                break;
            case 5: dispatch(gameActions.setStepVariants5({ stepVariants: variants }));
                break;
            case 6: dispatch(gameActions.setStepVariants6({ stepVariants: variants }));
                break;
        }
    }

    const diceRollHandler = () => {
        dispatch(gameActions.setRollButtonDisabled({ rollButtonDisabled: true }));
        let num = RollDice();
        setCurrentFaceIndex(num - 1);
        dispatch(gameActions.setDice({ dice: num }));
        const targetTile = getPlayersCurrentPosition() + num;
        let firstVal = calculatePath(getPlayersCurrentPosition(), targetTile);
        console.log("first val:", firstVal);
        const jumpToTile = checkLadderOnTile(ladders, targetTile);
        const backToTile = checkSnakeOnTile(snakes, targetTile);

        if (targetTile > 100) {
            dispatch(gameActions.setRollButtonDisabled({ rollButtonDisabled: false }));
            setNextChance(num, true);
            return;
        }

        if (firstVal.again) {
            let secondVal = calculatePath(firstVal.newPos.currentPos, firstVal.newPos.targetPos);
            console.log("second val:", secondVal);
            let variants = {
                step1: { x: firstVal.x, y: firstVal.y },
                step2: { x: secondVal.x, y: secondVal.y },
            };
            setVariants(variants);
            setTimeout(() => {
                setVariants({});
                setPlayersNewObj(targetTile);
                setTimeout(() => {
                    if (backToTile || jumpToTile) {
                        setPlayersNewObj(backToTile || jumpToTile);
                        backToTile && dispatch(gameActions.setSnakeModalOpen({ tile: targetTile }));
                    }
                    setNextChance(num);
                    dispatch(gameActions.setRollButtonDisabled({ rollButtonDisabled: false }));
                    targetTile == 100 && dispatch(gameActions.setWinnerOpen());
                }, 1500);
            }, 1500);
        }
        else {
            let variants = {
                step1: { x: firstVal.x, y: firstVal.y }
            };

            setVariants(variants);
            setTimeout(() => {
                setVariants({});
                setPlayersNewObj(targetTile);
                setTimeout(() => {
                    if (backToTile || jumpToTile) {
                        setPlayersNewObj(backToTile || jumpToTile);
                        backToTile && dispatch(gameActions.setSnakeModalOpen({ tile: targetTile }));
                    }
                    setNextChance(num);
                    dispatch(gameActions.setRollButtonDisabled({ rollButtonDisabled: false }));
                    targetTile == 100 && dispatch(gameActions.setWinnerOpen());
                }, 1200);
            }, 1000);
        }
    }

    return (
        <motion.div
            elevation={1}
            style={{
                marginTop: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <motion.img
                src={diceFaces[currentFaceIndex]}
                alt={`Dice ${currentFaceIndex + 1}`}
                style={{ width: 100, height: 100 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    rotate: 360,
                    duration: 0.1
                }}
            />
            <Button
                style={{
                    fontFamily: 'Gluten',
                    marginTop: 50,
                    height: '57px',
                    width: '238px',
                    borderRadius: '8px',
                    fontSize: '24px',
                    fontWeight: 500,
                }}
                sx={{
                    backgroundColor: '#CC2B22',
                    color: '#FFF',
                    "&.Mui-disabled": {
                        backgroundColor: "#FFF",
                        color: "#CC2B22"
                    }
                }}
                disabled={rollButtonDisabled}
                onClick={diceRollHandler}
            >
                Roll Dice
            </Button>
        </motion.div>
    )
}

export default Dice;    