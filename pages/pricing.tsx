import PageLayout from "@/components/PageLayout/PageLayout"
import HomePricing from "@/pageModules/home/HomePricing/HomePricing";
import HomeFaq from "@/pageModules/home/HomeFaq/HomeFaq";



const PricingPage = () => {

    return (
        <PageLayout>
            <section>
                <HomePricing/>
            </section>
            <section>
                <HomeFaq/>
            </section>
        </PageLayout>
    )
}

export default PricingPage;