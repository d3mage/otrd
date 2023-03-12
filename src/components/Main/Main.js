import s from './Main.module.css';
import Section from './Section/Section';

const data = [
  {
    title: 'Start',
    content: 'pragma specifies the compiler version of Solidity.',
  },
  {
    title: 'Variables',
    content: 'There are 3 types of variables in Solidity',
  },
  {
    title: 'Constants',
    content:
      'Constants are variables that cannot be modified.Their value is hard coded and using constants can save gas cost.',
  },
  {
    title: 'Immutable',
    content:
      'Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.',
  },
];

const sections = data.map((section) => (
  <Section key={section.title} props={section}></Section>
));

function Main() {
  return <div className={s.main}>{sections}</div>;
}

export default Main;
