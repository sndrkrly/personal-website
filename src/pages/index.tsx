import { Layout } from '../modules/layouts/Layout';
import { HeaderController } from '../modules/display/HeaderController';

import { Header } from '../modules/ui/header/Header';
import { Footer } from '../modules/ui/footer/Footer';

import { Home } from '../modules/home/Home';

const indexPage = () => {
     return (
          <>
               <HeaderController embed = {{}} title = 'Home' />

               <Header />
                    <Layout>
                         <Home />
                    </Layout>
               <Footer />
          </>
     );
};

export default indexPage;