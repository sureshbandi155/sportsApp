import NavigationItems from '../NavigationItems/NavigationItems';
import Footer from '../Footer/Footer';

const Layout = props => (
    <>
        <NavigationItems />
        <main>
            {props.children}
        </main>
        <Footer />

    </>
);

export default Layout;