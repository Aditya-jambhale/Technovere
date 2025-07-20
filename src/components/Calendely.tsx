import { useEffect } from "react";

declare global {
    interface Window {
        Calendly?: any;
    }
}

const CalendlyEmbed = () => {
    useEffect(() => {
        if (window.Calendly) {
            window.Calendly.initInlineWidget({
                url: "https://calendly.com/mohammadyusuf025/30min",
                parentElement: document.getElementById("calendly-inline-widget"),
                prefill: {},
                utm: {},
            });
        }
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div
                id="calendly-inline-widget"
                style={{ minWidth: "320px", height: "600px" }}
                className="shadow-lg rounded-xl"
            ></div>
        </div>
    );
};

export default CalendlyEmbed;
