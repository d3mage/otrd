import s from './Header.module.css';
import image from '../Header/image.png';

function Header() {
  return (
    <header>
      <div className={s.head}>
        <div className={s.header_content}>
          <h2 className={s.title}>Solidity</h2>
          <img src={image} className={s.logo}></img>
        </div>
        <div className={s.developers}>
          <label>By Dmytro and Vitaliy PI-421</label>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
