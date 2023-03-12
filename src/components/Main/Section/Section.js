import s from './Section.module.css';
import { useState } from 'react';
import LinkList from './LinkList';

function Section({ props }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  let content = props.content.map((link) => {
    return <LinkList key={link} link={link}></LinkList>;
  });

  return (
    <div className={s.section}>
      <h2 className={s.section_title}>
        <label>{props.title}</label>
        <label onClick={checkHandler} className={s.btn}>
          {isChecked ? 'less' : 'more'}
        </label>
      </h2>
      <ul>{content}</ul>
    </div>
  );
}

export default Section;
