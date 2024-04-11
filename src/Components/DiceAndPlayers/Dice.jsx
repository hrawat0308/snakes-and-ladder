import React, { useState } from "react";
import { motion } from "framer-motion";
import dice1 from '../../Assets/dice-1.png';
import dice2 from '../../Assets/dice-2.png';
import dice3 from '../../Assets/dice-3.png';
import dice4 from '../../Assets/dice-4.png';
import dice5 from '../../Assets/dice-5.png';
import dice6 from '../../Assets/dice-6.png';
import { Paper } from "@mui/material";
import { gameActions } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { RollDice, calculatePath } from "../../Utils/helper";

const Dice = () => {
    const dispatch = useDispatch();
    const dice = useSelector((state) => state.game.dice);
    const player1 = useSelector((state) => state.game.player1);
    const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

    const diceRollHandler = () => {
        let num = RollDice();
        setCurrentFaceIndex(num - 1);
        dispatch(gameActions.setDice({ dice: num }));
        let firstVal = calculatePath(player1.currentPos, player1.currentPos + num);
        console.log("first val:", firstVal);
        if (firstVal.again) {
            let secondVal = calculatePath(firstVal.newPos.currentPos, firstVal.newPos.targetPos);
            console.log("second val:", secondVal);
            let variants = {
                step1: { x: firstVal.x, y: firstVal.y },
                step2: { x: secondVal.x, y: secondVal.y },
            };
            console.log("variant:", variants);
            dispatch(gameActions.setStepVariants({ stepVariants: variants }));
            setTimeout(() => {
                dispatch(gameActions.setStepVariants({ stepVariants: {} }));
                dispatch(gameActions.setPlayer1({
                    player1: {
                        on: false,
                        currentPos: player1.currentPos + num,
                    }
                }));
            }, 1500);
        }
        else {
            let variants = {
                step1: { x: firstVal.x, y: firstVal.y }
            };
            console.log("variant:", variants);
            dispatch(gameActions.setStepVariants({ stepVariants: variants }));
            setTimeout(() => {
                dispatch(gameActions.setStepVariants({ stepVariants: {} }));
                dispatch(gameActions.setPlayer1({
                    player1: {
                        on: false,
                        currentPos: player1.currentPos + num,
                    }
                }));
            }, 1000);
        }
    }

    return (
        <motion.div
            elevation={1}
            style={{
                width: 100,
                height: 100,
                marginTop: 50,
                marginLeft: 95
            }}
        >
            <motion.img
                src={diceFaces[currentFaceIndex]}
                alt={`Dice ${currentFaceIndex + 1}`}
                onClick={diceRollHandler}
                style={{ width: 100, height: 100 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    rotate: 360,
                    duration: 0.1
                }}
            />
        </motion.div>
    )
}

export default Dice;    