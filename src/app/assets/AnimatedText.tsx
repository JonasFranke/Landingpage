"use client";
import { useState, useEffect, useRef} from "react";
import {clearInterval} from "timers";

interface AnimatedTextProps {
    text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const [transformedString, setTransformedString] = useState(text);
    const [isOver, setIsOver] = useState(false);
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    const transformString = (input: string) => {
        let transformed = '';
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (char.match(/[a-zA-Z]/)) {
                transformed += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            } else {
                transformed += char;
            }
        }
        return transformed;
    };

    const mouseEnter = () => {
        setIsOver(true);
    };

    const mouseLeave = () => {
        setIsOver(false);
    };

    useEffect(() => {
        if (isOver) {
            intervalIdRef.current = setInterval(() => {
                setTransformedString(transformString(text));
            }, 100);
        } else {
            clearInterval(intervalIdRef.current!)
            setTransformedString(text);
        }
        return () => {
            clearInterval(intervalIdRef.current!);
        };
    }, [isOver]);


    return(
        <>
            <p className="text-green-700 text-center font-extrabold text-4xl mt-32" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>{transformedString}</p>
        </>
    );
}

export default AnimatedText;