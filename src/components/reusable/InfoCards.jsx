const InfoCards = ({
  cards = [], // Array of { title, items, bgColor, titleColor, iconColor, image }
  columns = 3, 
  containerClassName = "",
  cardClassName = "",
  defaultBgColor = "#FEF4F4",
  defaultTitleColor = "#1B605C",
  defaultIconColor = "#774860",
  imageSize = "h-auto w-full" 
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className={`grid ${gridCols[columns]} gap-6 ${containerClassName}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${cardClassName}`}
            style={{ backgroundColor: card.bgColor || defaultBgColor }}
          >
            {/* Image */}
            {card.image && (
              <div className={`flex justify-center mb-4 ${imageSize}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-contain h-full w-full  rounded-lg"
                />
              </div>
            )}
            {/* Title */}
            <h3
              className="text-xl font-normal mb-4 pb-3 border-b border-gray-100"
              style={{ color: card.titleColor || defaultTitleColor }}
            >
              {card.title}
            </h3>

            {/* Items List */}
            <ul className="space-y-3">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  {/* Icon */}
                  <span
                    className="inline-flex items-center justify-center mr-3 mt-0.5 shrink-0"
                    style={{ color: card.iconColor || defaultIconColor }}
                  >
                    {card.customIcon || (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="5" />
                      </svg>
                    )}
                  </span>

                  {/* Text */}
                  <span className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
