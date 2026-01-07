import RightSolution from "../home/RightSolution";
const ConcernHero = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
                <div className="flex flex-col items-center justify-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                            Skin Concerns
                        </h1>
                        <p className="text-[#7D7D7D] text-base text-center leading-relaxed">
                            Find the right products for your specific skin concern. Our dermatologist
                            recommended solutions target common skincare needs.
                        </p>
                    </div>
                </div>
            </div>
            <RightSolution
                showHeader={false}
                showButton={true}
                buttonText="Browse All Solutions" />
        </section>
    );
};

export default ConcernHero;