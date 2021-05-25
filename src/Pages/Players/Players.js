import Banner from '../../components/Banner/Banner';
import Layout from '../../components/Layout/Layout';

import Squard from '../../assets/Squard.webp';
const Players = props => (
    <Layout>
        <Banner bgImage={Squard} heading='PLAYERS' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s' />
    </Layout>
);

export default Players;