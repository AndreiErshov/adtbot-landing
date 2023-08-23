import PageLayout from "@/components/PageLayout/PageLayout";
import GuideHero from "@/pageModules/guide/GuideHero/GuideHero";
import GuideStart from "@/pageModules/guide/GuideStart/GuideStart";
import GuideContent from "@/pageModules/guide/GuideContent/GuideContent";


const GuidePage = () => {

    return (
        <PageLayout>
            <section>
                <GuideHero/>
            </section>
            <section>
                <GuideContent/>
            </section>
            <section>
                <GuideStart/>
            </section>
        </PageLayout>
    )

}

export default GuidePage;