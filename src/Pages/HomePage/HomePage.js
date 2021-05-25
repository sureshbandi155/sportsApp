// import NavigationItems from '../NavigationItems/NavigationItems';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import TwoColSec from '../../components/TwoColSec/TwoColSec';

import Cricket from '../../assets/Cricket.jpg';
import Football from '../../assets/Football.jpg';
import Ball from '../../assets/ball-3381339_1920.jpg';

import classes from './HomePage.module.css';
const HomePage = props => {
    let parentClass = [classes.TwoColSec, 'section-padding'];
    return (
        <>
            <Layout>
                <Banner bgImage={Ball} heading="HOME PAGE" description="Lorem ipsum" />
                <div className={parentClass.join(' ')}>
                    <div className="wrapper">
                        <TwoColSec image={Cricket} />
                        <TwoColSec rowReverse='rowReverse' image={Football} />
                        <TwoColSec image={Football} />
                        <TwoColSec rowReverse='rowReverse' image={Cricket} />
                    </div>
                </div>
            </Layout>
            {/* <NavigationItems /> */}
        </>
    )
}
export default HomePage;