import s from './Section.module.css';
import { useState } from 'react';

function Section({ props }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const buttonHandler = (link) => {
    localStorage.setItem(link, true);
    updateContent();
  };

  let content;
  
  const updateContent = () => {
    console.log("updated")
    if (isChecked) {
      content = props.content.map((link) => {
        let completed = localStorage.getItem(link);
        let button;
        if (completed === null) {
          completed = 'false';
          localStorage.setItem(link, false);
        }
        if (completed == 'false') {
          button = (
            <button
              onClick={() => {
                buttonHandler(link);
              }}
            >
              Done
            </button>
          );
        }
        return (
          <li key={link}>
            <div className={s.links}>
              <a href={link}>{link}</a>
              {button}
            </div>
          </li>
        );
      });
    }
  }

  updateContent();

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
