import s from "./Main.module.css";
import Section from "./Section/Section";

const data = [
    {
        title: "Start",
        content: "pragma specifies the compiler version of Solidity.",
        status: false
    },
    {
        title: "Variables",
        content: "There are 3 types of variables in Solidity",
        status: false
    },
    {
        title: "Constants",
        content: "Constants are variables that cannot be modified.Their value is hard coded and using constants can save gas cost.",
        status: false
    },
    {
        title: "Immutable",
        content: "Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.",
        status: false
    },
];

function Main() {
    return (<div className={s.main}>
        <Section></Section>
    </div>);

}

export default Main;