export default function Herofixderma() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-yellow-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              {/* Logo */}
              <div className="inline-flex w-fit">
                <svg className="w-32 h-auto" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Fixderma Logo - simplified version */}
                  <circle cx="30" cy="30" r="20" stroke="#1a3a52" strokeWidth="2" />
                  <circle cx="40" cy="25" r="8" fill="#f59e0b" />
                  <text x="60" y="40" fontSize="24" fontWeight="bold" fill="#1a3a52" fontFamily="sans-serif">
                    Fixderma
                  </text>
                </svg>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Complete Dermatological Solution
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                Fixderma is a leading dermatological brand dedicated to providing safe, effective, and scientifically
                formulated skincare products.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-block bg-pink-300 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  Dermatologist Tested
                </span>
                <span className="inline-block bg-pink-300 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  Clinically Proven
                </span>
                <span className="inline-block bg-pink-300 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  For All Skin Types
                </span>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              {/* <img
                src="/images/image.png"
                alt="Fixderma skincare products and model"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
