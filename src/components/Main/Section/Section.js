import s from './Section.module.css';
import { useState } from 'react';

function Section({ props }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  let content;
  if (isChecked) {
    content = <h4>{props.content}</h4>;
  }

  return (
    <div className={s.section}>
      <h2 className={s.section_title}>
        <label>{props.title}</label>
        <label onClick={checkHandler}>{isChecked ? 'less' : 'more'}</label>
      </h2>

      {content}

      <div className={s.text_wrapper}>
        <p className={s.section_text}>asdasd</p>
      </div>
    </div>
  );
}

export default Section;
