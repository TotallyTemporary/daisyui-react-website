import { Button, Link, Theme } from 'react-daisyui'

let GithubButton = ({ title, link }) => {
    // i don't know why i have to wrap the svg file in a svg file but this is the only way that it will work.
    // guessing it's funkyness with webpack.
    let GithubIcon = <svg width={26} height={26} viewBox="0 0 100 100" >
        <image href="/github/github-mark-white.svg" />
    </svg>

    return <Button startIcon={GithubIcon} href={link}>{title}</Button>
};

export default GithubButton;