import {FC} from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import HomeHero from '@/pageModules/home/HomeHero/HomeHero';
import HomeLook from '@/pageModules/home/HomeLook/HomeLook';


const HomePage:FC = () => {
    return (
        <PageLayout>
            <section>
                <HomeHero/>
            </section>
            <section>
                <HomeLook/>
            </section>
        </PageLayout>
    )
}

export default HomePage;