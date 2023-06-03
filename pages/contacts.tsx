import PageLayout from "@/components/PageLayout/PageLayout";
import ContactsMain from "@/pageModules/contacts/ContactsMain/ContactsMain";

const ContactsPage = () => {

    return (
        <PageLayout>
            <section>
                <ContactsMain/>
            </section>
        </PageLayout>
    )
}


export default ContactsPage;