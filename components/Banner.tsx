import { FaArrowRightLong } from "react-icons/fa6";

export const Banner = () => {
    return (
        <div className="py-3 text-center bg-[linear-gradient(to_right,rgba(247,234,163,0.7),rgba(236,180,238,0.7),rgba(163,203,247,0.7))]">
            <div className="container">
                <p className="font-medium">
                    <span className="hidden sm:inline">Cut Through the Noise — </span>
                    <div className="inline-flex gap-1 items-center">
                        <a href="#" className="underline underline-offset-4">
                            Claim your profile
                        </a>
                        <FaArrowRightLong/>
                    </div>
                </p>
            </div>
        </div>
    );
};
