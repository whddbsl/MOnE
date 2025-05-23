"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
    text: string;
    intervalTime?: number; // 랜덤 변경 속도 (ms)
    stepDelay?: number; // 글자 고정 간격 (ms)
}

export default function ScrambleText({
    text,
    intervalTime = 50,
    stepDelay = 400,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState<string[]>(
        Array(text.length).fill("")
    );

    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];

        text.split("").forEach((char, index) => {
            // 대문자/소문자 구분
            let characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (char === "n") {
                characters = "abcdeghijklnopqrstuvxyz";
            } else if (char === char.toUpperCase()) {
                characters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
            }

            const interval = setInterval(() => {
                setDisplayText((prev) => {
                    const newText = [...prev];
                    newText[index] = characters.charAt(
                        Math.floor(Math.random() * characters.length)
                    );
                    return newText;
                });
            }, intervalTime);

            intervals.push(interval);

            // 글자별로 stepDelay 간격으로 순차 고정
            setTimeout(() => {
                clearInterval(interval);
                setDisplayText((prev) => {
                    const newText = [...prev];
                    newText[index] = char;
                    return newText;
                });
            }, stepDelay * (index + 1));
        });

        return () => {
            intervals.forEach(clearInterval);
        };
    }, [text, intervalTime, stepDelay]);

    return (
        <span>
            {displayText.map((char, idx) => {
                // 대문자/소문자 구분
                const isUpper =
                    char === char.toUpperCase() && /[A-Z]/.test(char);
                const minWidth = isUpper ? "min-w-[0.85em]" : "min-w-[0.7em]";
                return (
                    <span
                        key={idx}
                        className={`inline-block ${minWidth} text-inherit align-bottom`}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    );
}
