import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Token = ({ colorIndex, children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const player1 = useSelector((state) => state.game.player1);
    let colors = ['#CC2B22', '#4ECC22', '#2233CC', '#CC2269', 'yellow', 'purple'];
    let style = {
        height: 20,
        width: 20,
        borderRadius: '20px',
        backgroundColor: colors[colorIndex],
        fontWeight: 'bold',
        textAlign: 'center',
    }

    const variants = useSelector((state) => state.game.stepVariants);
    const steps = Object.keys(variants);

    const handleNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
            setCurrentStep(nextStep);
        }
    };

    setTimeout(() => {
        handleNextStep();
    }, 1500);

    return (
        <motion.div
            style={style}
            animate={steps[currentStep]}
            variants={variants}
            transition={{
                x: { ease: "easeOut", duration: 0.5 },
                y: { ease: "easeOut", duration: 0.5, delay: 0.5 },
            }}
        >
            {children}
        </motion.div>
    )
}


export default Token;