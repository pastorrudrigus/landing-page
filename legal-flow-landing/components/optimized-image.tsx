import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  // Verifica se a imagem existe, caso contrário usa um placeholder
  const imageSrc = src || `/placeholder.svg?height=${height}&width=${width}`

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        loading="lazy"
        onError={(e) => {
          // Fallback para placeholder se a imagem não carregar
          const target = e.target as HTMLImageElement
          target.src = `/placeholder.svg?height=${height}&width=${width}`
        }}
      />
    </div>
  )
}

