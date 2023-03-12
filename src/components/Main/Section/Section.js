import s from './Section.module.css';
import { useState } from 'react';

function Section({ props }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  let content;


  if (isChecked) {
    content = props.content.map((link) => (
      <>
        <h4>{link}</h4>
        <button>Done</button>
      </>
    ));
  }

  return (
    <div className={s.section}>
      <h2 className={s.section_title}>
        <label>{props.title}</label>
        <label onClick={checkHandler} className={s.btn}>{isChecked ? 'less' : 'more'}</label>
      </h2>

      {content}
    </div>
  );
}

export default Section;
