import s from './Section.module.css';
import {useState} from 'react';

function Section({props}) {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);
    };

    let content;


    if (isChecked) {
        content = props.content.map((link) => (
            <div className={
                s.links
            }>
                <a href={link}>
                    {link}</a>
                <button>Done</button>
            </div>
        ));
    }

    return (
        <div className={
            s.section
        }>
            <h2 className={
                s.section_title
            }>
                <label>{
                    props.title
                }</label>
                <label onClick={checkHandler}
                    className={
                        s.btn
                }>
                    {
                    isChecked ? 'less' : 'more'
                }</label>
            </h2>

            <div>{content}</div>
        </div>
    );
}

export default Section;
