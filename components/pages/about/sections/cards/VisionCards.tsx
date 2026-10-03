// Card data
const cards = [
  {
    rank: "A",
    suit: "♠",
    suitColor: "#1a1a2e",
    title: "Culture",
    subtitle: "Express Yourself",
    items: [
      "Dance Battles & Art Walks",
      "Live Music Jams",
      "Creative Freedom",
    ],
  },
  {
    rank: "K",
    suit: "♥",
    suitColor: "#dc2626",
    title: "Unity",
    subtitle: "Squad Goals",
    items: [
      "100+ Colleges United",
      "Find Your Tribe",
      "Memories That Last",
    ],
  },
  {
    rank: "Q",
    suit: "♦",
    suitColor: "#dc2626",
    title: "Excellence",
    subtitle: "Main Character Era",
    items: [
      "Compete & Shine",
      "Win Big Prizes",
      "Create Your Legacy",
    ],
  },
];

// Card Back Design Component
const CardBack = () => (
  <div 
    className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
    style={{
      background: "linear-gradient(145deg, #7C2D12 0%, #991B1B 50%, #7C2D12 100%)",
      border: "4px solid #D4A853",
      boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)",
      backfaceVisibility: "hidden",
    }}
  >
    {/* Inner border */}
    <div 
      className="absolute inset-3 rounded-xl"
      style={{ border: "2px solid #D4A85350" }}
    />
    
    {/* Diamond pattern */}
    <div 
      className="absolute inset-6 rounded-lg"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #D4A85315 10px,
            #D4A85315 20px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            #D4A85315 10px,
            #D4A85315 20px
          )
        `,
      }}
    />
    
    {/* Center logo/emblem */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #D4A853, #B8860B)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)",
        }}
      >
        <span 
          className="text-2xl sm:text-3xl font-bold"
          style={{ 
            color: "#7C2D12",
            fontFamily: "Georgia, serif",
            textShadow: "0 1px 2px rgba(255,255,255,0.3)",
          }}
        >
          KY
        </span>
      </div>
    </div>
  </div>
);

// Card Front Design Component
const CardFront = ({ card }: { card: typeof cards[0] }) => (
  <div 
    className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
    style={{
      background: "linear-gradient(145deg, #FDF8E8 0%, #F5ECD7 50%, #EDE4C9 100%)",
      border: "4px solid #D4A853",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
    }}
  >
    {/* Inner border */}
    <div 
      className="absolute inset-3 rounded-xl pointer-events-none"
      style={{ border: "2px solid #D4A85330" }}
    />
    
    {/* Top left rank and suit */}
    <div className="absolute top-4 left-4 flex flex-col items-center">
      <span 
        className="text-2xl sm:text-3xl font-bold leading-none"
        style={{ color: card.suitColor, fontFamily: "Georgia, serif" }}
      >
        {card.rank}
      </span>
      <span 
        className="text-xl sm:text-2xl leading-none"
        style={{ color: card.suitColor }}
      >
        {card.suit}
      </span>
    </div>
    
    {/* Bottom right rank and suit (inverted) */}
    <div className="absolute bottom-4 right-4 flex flex-col items-center rotate-180">
      <span 
        className="text-2xl sm:text-3xl font-bold leading-none"
        style={{ color: card.suitColor, fontFamily: "Georgia, serif" }}
      >
        {card.rank}
      </span>
      <span 
        className="text-xl sm:text-2xl leading-none"
        style={{ color: card.suitColor }}
      >
        {card.suit}
      </span>
    </div>
    
    {/* Card content - center */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8">
      <h3 
        className="text-2xl sm:text-3xl font-bold mb-1 italic"
        style={{ color: "#7C2D12", fontFamily: "Georgia, serif" }}
      >
        {card.title}
      </h3>
      
      <p 
        className="text-sm sm:text-base mb-4 sm:mb-6 font-medium"
        style={{ color: "#92400E" }}
      >
        {card.subtitle}
      </p>
      
      <div className="space-y-2 sm:space-y-3 w-full">
        {card.items.map((item, i) => (
          <div key={i}>
            <p 
              className="text-xs sm:text-sm text-center"
              style={{ color: "#1C1917", fontFamily: "Georgia, serif" }}
            >
              {item}
            </p>
            {i < card.items.length - 1 && (
              <div 
                className="w-3/4 h-px mx-auto mt-2 sm:mt-3"
                style={{ background: "#D4A85350" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);


export { cards, CardBack, CardFront };