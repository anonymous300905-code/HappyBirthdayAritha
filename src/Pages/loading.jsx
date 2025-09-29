import { useEffect, useState } from "react";
import "./loading.css";
import Home from "./home";
import AboutPage from "./about";
import Confessions from "./confessions";
import Edits from "./edits";
import { Footer } from "./footer";
function Loading({ onLoadingComplete }) {
    const [showRemName, setShowRemName] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [addGap, setAddGap] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showHappyBirthday, setShowHappyBirthday] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRemName(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showRemName) {
            const text = "rith";
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index < text.length) {
                    setTypedText((prev) => prev + text[index-1]);
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setAddGap(true); 
                }
            }, 250);

            return () => clearInterval(typingInterval);
        }
    }, [showRemName]);

    useEffect(() => {
        if (addGap) {
            const happyBirthdayTimer = setTimeout(() => {
                setShowHappyBirthday(true);
            }, 500); 

            const expandTimer = setTimeout(() => {
                setShowHome(true);
                onLoadingComplete();
            }, 3000); 

            return () => {
                clearTimeout(happyBirthdayTimer);
                clearTimeout(expandTimer);
            };
        }
    }, [addGap, onLoadingComplete]);

    return (
        <>
            {!showHome ? (
                <div className="flex justify-center items-center bg-gray-100 min-h-screen loading-container">
                    {showHappyBirthday && <div className="happy-birthday">Happy Birthday</div>}
                    <div className="loading notable-regular">
                        <span className="initial">A</span>
                        {showRemName && <span className="rem-name fade-in typing-effect">{typedText}</span>}
                        <span className={`initial ${addGap ? "gap" : ""}`}>A</span>
                    </div>
                </div>
            ) : (
                <>
                <Home />
                <AboutPage/>
                <Confessions />

                <Edits/>
                <Footer />
                </>
            )}
        </>
    );
}

export default Loading;