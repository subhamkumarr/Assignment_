import Image from "next/image";

type ImageWithFallbackProps = { src: string; alt: string; width: number; height: number; }

export default function ImageWithFallback({ src, alt, width, height }: ImageWithFallbackProps) {
    return <Image src={src} alt={alt} width={width} height={height} />
}