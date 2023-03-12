import s from './Main.module.css';
import Section from './Section/Section';

const data = [
  {
    title: 'Start',
    content: [],
  },
  {
    title: 'EVM / Assembly',
    content: [
      'https://blog.openzeppelin.com/ethereum-in-depth-part-2-6339cf6bddb9/',
      'https://blog.trustlook.com/understand-evm-bytecode-part-1/',
      'https://12ft.io/proxy?q=https://jeancvllr.medium.com/solidity-tutorial-all-about-assembly-5acdfefde05c',
      'https://ethereum.org/en/developers/tutorials/reverse-engineering-a-contract/',
      'https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-vi-the-swarm-hash-70f069e22aef/',
      'https://github.com/CoinCulture/evm-tools',
      'https://www.evm.codes/playground?fork=merge',
      'https://degatchi.com/articles/reading-raw-evm-calldata/',
      'https://ardislu.dev/raw-bytecode-evm',
      'https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy',
      'https://ethereum.org/en/developers/tutorials/short-abi/',
    ],
  },
  {
    title: 'Constants',
    content: [],
  },
  {
    title: 'Immutable',
    content: [],
  },
];

const sections = data.map((section) => (
  <Section key={section.title} props={section}></Section>
));

function Main() {
  return <div className={s.main}>{sections}</div>;
}

export default Main;
