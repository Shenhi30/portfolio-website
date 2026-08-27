import Link from "next/link";
import Image from "next/image";
import css from "./card.module.scss"

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  cachedLink?: string;
}


export default function Card({title, description, techStack, imageUrl, liveLink, cachedLink }: ProjectCardProps) {
    return (
        <>
        <div className={css.card} >
          <div  className={css.imageWrap}>      
          <Image
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          width={330}
          height={201}
          priority
          fill
          />
         </div>
          <div className={css.techStack}>
            html, react, node.js, MYSQL, express
          </div>
         <div className={css.content}>
          <h1>
            CarWash servise
          </h1>
          <p>

          </p>
         </div>     
          <Link href="https://kiyv-carwash.vercel.app/">Live ←—→</Link>
        </div>
        
        </>
    )
}