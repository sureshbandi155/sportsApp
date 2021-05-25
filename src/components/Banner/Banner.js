import classes from './Banner.module.css';

const Banner = props => {
    let parentClass = [classes.Banner, 'section-padding', 'overlay'];
    return (
        <div className={parentClass.join(' ')} style={{ 'background': `url(${props.bgImage}) no-repeat center center /cover` }}>
            <div className="wrapper">
                <div className={classes.textContent}>
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;