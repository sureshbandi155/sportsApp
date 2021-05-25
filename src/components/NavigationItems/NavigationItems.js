import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../assets/Logo.jpg';
const NavigationItems = props => (
    <div className={classes.NavigationItems}>
        <div className="wrapper">
            <ul>
                <img src={Logo} alt="Sports-logo" />
                <NavigationItem exact link="/home">Home</NavigationItem>
                <NavigationItem link="/players">Players</NavigationItem>
                <NavigationItem link="/modify-players">Modify Players</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
                <NavigationItem link="/profile">Profile</NavigationItem>
            </ul>
        </div>
    </div>
);

export default NavigationItems;