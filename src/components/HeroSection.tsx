import { Typewriter } from "react-simple-typewriter";
import ScrambleText from "@/components/ScrambleText";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const { t, i18n } = useTranslation("common");
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prev) => prev + 1);
    }, [i18n.language]);

    return (
        <section className="flex flex-col items-center justify-start md:justify-center md:min-h-[80vh] bg-white text-black md:pt-20 mb-16 pt-32">
            <h1 className="text-6xl md:text-[200px] lg:text-[300px] font-bold tracking-wide">
                <ScrambleText
                    key={key}
                    text="MOnE"
                    intervalTime={100}
                    stepDelay={400}
                />
            </h1>

            <h2 className="text-sm md:text-[26px] lg:text-[40px] text-gray-700">
                <Typewriter
                    key={key}
                    words={[t("hero.subtitle")]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
        </section>
    );
}
