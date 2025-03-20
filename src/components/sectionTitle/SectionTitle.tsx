type SectionTitleProps = {
    title: string;
};

import style from "./sectionTitle.module.css";

function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className={style.titleContainer}>
            <h2>{title}</h2>
            <div className={style.line}></div>
        </div>
    );
}

export default SectionTitle;
