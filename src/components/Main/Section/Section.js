import s from './Section.module.css';
import { useState } from 'react';

function Section() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={s.section}>
      <h2 className={s.section_title}>
        <label>Constants</label>
        <label htmlFor={'checker'} className={s.btn}>
          {isChecked ? 'less' : 'more'}
        </label>
      </h2>
      <input
        type={'checkbox'}
        class={s.checker}
        id={'checker'}
        checked={isChecked}
        onChange={checkHandler}
      ></input>
      <div className={s.text_wrapper}>
        <p className={s.section_text}>asdasd</p>
      </div>
    </div>
  );
}

export default Section;
