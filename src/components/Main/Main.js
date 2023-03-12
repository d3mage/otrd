import s from './Main.module.css';
import Section from './Section/Section';

const data = [
  {
    title: 'First steps',
    content: [
      'https://uk.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD',
      'https://docs.soliditylang.org/en/v0.8.19/introduction-to-smart-contracts.html#a-simple-smart-contract',
      'https://ethereum.org/en/whitepaper/',
      'https://solidity-by-example.org/hello-world/',
      'https://docs.soliditylang.org/en/v0.8.19/',
    ],
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
    title: 'Cryptocurrency',
    content: [
      'https://en.wikipedia.org/wiki/Cryptocurrency',
      'https://en.wikipedia.org/wiki/Digital_currency',
      'https://www.oswego.edu/cts/basics-about-cryptocurrency',
      'https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/types-of-cryptocurrencies/',
    ],
  },
  {
    title: 'Ethereum',
    content: [
      'https://uk.wikipedia.org/wiki/Ethereum',
      'https://ethereum.org/en/developers/docs/intro-to-ethereum/',
      'https://solidity-by-example.org/',
      'https://academy.bit2me.com/en/the-new-ethereum-roadmap-explained-step-by-step/',
    ],
  },
];

const sections = data.map((section) => (
  <Section key={section.title} props={section}></Section>
));

function Main() {
  return <div className={s.main}>{sections}</div>;
}

export default Main;
