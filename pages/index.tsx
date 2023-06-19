import {FC} from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import HomeHero from '@/pageModules/home/HomeHero/HomeHero';
import HomeLook from '@/pageModules/home/HomeLook/HomeLook';
import HomeExp from '@/pageModules/home/HomeExp/HomeExp';
import HomeWork from '@/pageModules/home/HomeWork/HomeWork';
import HomeDemo from '@/pageModules/home/HomeDemo/HomeDemo';
import HomeExchange from '@/pageModules/home/HomeExchange/HomeExchange';
import HomeRevs from '@/pageModules/home/HomeRevs/HomeRevs';
import HomePricing from '@/pageModules/home/HomePricing/HomePricing';
import HomeSec from '@/pageModules/home/HomeSec/HomeSec';
import HomeFaq from '@/pageModules/home/HomeFaq/HomeFaq';
import HomeDb from '@/pageModules/home/HomeDb/HomeDb';


const HomePage:FC = () => {
    return (
        <PageLayout>
            <section>
                <HomeHero/>
            </section>
            <section>
                <HomeLook/>
            </section>
            <section>
                <HomeExp/>
            </section>
            <section>
                <HomeWork/>
            </section>
            <section>
                <HomeDemo/>
            </section>
            <section>
                <HomeExchange/>
            </section>
            {/* <section>
                <HomeRevs/>
            </section> */}
            {/* <section>
                <HomePricing/>
            </section> */}
            <section>
                <HomeSec/>
            </section>
            <section>
                <HomeFaq/>
            </section>
            <section>
                <HomeDb/>
            </section>
        </PageLayout>
    )
}

export default HomePage;