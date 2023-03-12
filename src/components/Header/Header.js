import s from './Header.module.css';
import image from '../Header/image.png';
import {useState} from 'react';

function Header() {
    const [result, setResult] = useState(localStorage.getItem('result') === null ? 0 : localStorage.getItem('result'),);

  window.addEventListener('result_increase', () => {
    console.log('result_increase');
    let temp = result + 5;
    setResult((temp));
    localStorage.setItem('result', temp);
  });

    return (
        <header>
            <div className={
                s.head
            }>
                <div className={
                    s.header_content
                }>
                    <h2 className={
                        s.title
                    }>Solidity</h2>
                    <img src={image}
                        className={
                            s.logo
                    }></img>
                </div>
                <div className={
                    s.developers
                }>
                    <label>By Dmytro and Vitaliy PI-421</label>
                </div>
                <div className={
                    s.result
                }>
                    <h3>Your result:

                    </h3>
                    <ls></ls>
                    <h3>{result}
                        Pts</h3>
                </div>
            </div>
            <div></div>
        </header>
    );
}

export default Header;
