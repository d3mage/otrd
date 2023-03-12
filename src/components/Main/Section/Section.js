import s from "./Section.module.css";

function Section() {
    return <div className={s.section}>
        <h2 className={s.section_title}>Constants<label for={"checker"} className={s.btn}></label></h2>
        <input type={"checkbox"} class={s.checker} id={"checker"}></input>
        <div className={s.text_wrapper}><p className={s.section_text}>asdasd</p></div>

    </div>
}

export default Section;