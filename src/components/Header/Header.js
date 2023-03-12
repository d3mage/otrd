import s from './Header.module.css';
import image from '../Header/image.png';

function Header() {
  return (
    <header>
      <div className={s.head}>
        <h2 className={s.title}>Solidity</h2>
        <img src={image} className={s.logo}></img>
      </div>
    </header>
  );
}

export default Header;
