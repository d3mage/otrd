import { useState } from 'react';
import s from './Section.module.css';

function LinkList(props) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(
    localStorage.getItem(props.link) === null
      ? true
      : localStorage.getItem(props.link),
  );
  const link = props.link;
  let button;

  const buttonHandler = (link) => {
    localStorage.setItem(link, false);
    setIsButtonEnabled(false);
    updateContent();
    window.dispatchEvent(new Event("result_increase"));
  };

  const updateContent = () => {
    if (isButtonEnabled === null) {
      setIsButtonEnabled(true);
      localStorage.setItem(link, true);
    }
    if (isButtonEnabled == true) {
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
  };

  updateContent();

  return (
    <li key={link}>
      <div className={s.links}>
        <a href={link}>{link}</a>
        {button}
      </div>
    </li>
  );
}

export default LinkList;
