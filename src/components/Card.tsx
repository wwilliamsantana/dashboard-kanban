interface CardProps {
  card: {
    title: string
    description: string
    tags: string[]
  }
}

export function Card({ card }: CardProps) {
  return (
    <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
      <h3 className="font-bold text-sm">{card.title}</h3>
      <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
        {card.description}
      </p>
      <div className="flex items-center gap-2 font-medium text-xs mt-2">
        {card.tags.map((item, index) => (
          <span
            key={index}
            className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
