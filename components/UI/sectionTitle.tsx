import Link from "next/link";
import css from "./sectionTitle.module.scss"


interface SectionTitleProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionTitle({ title, viewAllLink }: SectionTitleProps) {
  return (
    <div className={css.sectionHeader}>
      
      <h2 className={css.title}>
        <span className={css.hash}>#</span>
        {title}
      </h2>
      
      <div className={css.line}></div>

      {viewAllLink && (
        <Link href={viewAllLink} className={css.viewAll}>
          View all ~~&gt;
        </Link>
      )}
      
    </div>
  );
}