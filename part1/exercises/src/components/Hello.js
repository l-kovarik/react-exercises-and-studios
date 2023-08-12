import classes from './Hello.module.css';

export default function Hello() {
    return (
        <div>
            <p className={classes.helloText}>Hello World!</p>
        </div>
    );
}