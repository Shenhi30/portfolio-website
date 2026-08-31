import Link from "next/link";
import Image from "next/image";
import css from "./card.module.scss"

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
}


export default function Card({title, description, techStack, imageUrl, liveLink }: ProjectCardProps) {
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
          />
         </div>
          <div className={css.techStack}>
            {techStack.join(' ')}
          </div>
         <div className={css.content}>
            <h1>
              {title}
            </h1>
            <p>
              {description}
            </p>
            {liveLink && (  
              <Link href={liveLink} className={css.button}>Live ←—→</Link>
            )}  
          </div>
        </div>
        
        </>
    )
}