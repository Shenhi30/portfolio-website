import css from "./contactProp.module.scss"
import Image from "next/image"


interface ContactProps{
    imageUrl: string;
    text?: string;
    linkTo?: string;
    imageAlt: string;
}


export default function ContactInfo({ imageUrl, imageAlt, linkTo, text }: ContactProps) {
    const imageContent = (
        <>
          <Image 
              src={imageUrl}
              alt={imageAlt}
              width={24}
              height={24}
          />
            <p className={css.greyText}>{text}</p>
        </>
    ) 

    if (linkTo){
        return(
        <a href={linkTo} className={css.social} target="_blank" rel="noopener noreferrer">
            {imageContent}
        </a>
        )
                
    }

        return(
        <div className={css.social}>
            {imageContent}
        </div>
        )

}