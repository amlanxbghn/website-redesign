export const Footer = () => {
    return (
        <footer className="container py-5 border-t border-black/15">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                    <img src="./profile-transparent-blue.svg" alt="Logo" className="h-6 md:h-8 lg:h-10" />
                </div>
                <nav className="flex flex-col md:flex-row gap-5 lg:gap-7">
                    <a href="#" className="text-black/70 hover:text-black hover:underline underline-offset-4 text-xs md:text-sm transition">Our Storytelling Masterclass</a>
                    <a href="#" className="text-black/70 hover:text-black hover:underline underline-offset-4 text-xs md:text-sm transition">Privacy Policy</a>
                    <a href="#" className="text-black/70 hover:text-black hover:underline underline-offset-4 text-xs md:text-sm transition">Terms of Use</a>
                </nav>
            </div>
        </footer>
    );
}