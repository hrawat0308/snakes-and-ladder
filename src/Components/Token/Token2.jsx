import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Token2 = ({ colorIndex, children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    let colors = ['#CC2B22', '#4ECC22', '#2233CC', '#CC2269', 'yellow', 'purple'];
    let style = {
        height: 20,
        width: 20,
        borderRadius: '20px',
        backgroundColor: colors[colorIndex],
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1
    }

    const variants2 = useSelector((state) => state.game.stepVariants2);
    const steps = Object.keys(variants2);

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
            variants={variants2}
            transition={{
                x: { ease: "easeOut", duration: 0.5 },
                y: { ease: "easeOut", duration: 0.5, delay: 0.5 },
            }}
        >
            {children}
        </motion.div>
    )
}


export default Token2;