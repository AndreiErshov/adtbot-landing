import PageLayout from "@/components/PageLayout/PageLayout"
import HomePricing from "@/pageModules/home/HomePricing/HomePricing";
import HomeTariffFaq from "@/pageModules/home/HomeTariffFaq/HomeTariffFaq";



const PricingPage = () => {

    return (
        <PageLayout>
            <section>
                <HomePricing/>
            </section>
            <section>
                <HomeTariffFaq/>
            </section>
        </PageLayout>
    )
}

export default PricingPage;