import Page from '../../components/main';
import PageHeader from '../../components/page-header';
import ContentHeader from '../../components/page-content/content-header';
import ContentBody from '../../components/page-content/content-body';
import Resources from './resources';
import ResourcesHeaderContent from './header-content';
import { goToTop } from "@/utils/util";
import { useEffect } from "react";

export default function ResourcesTemplate() {
    useEffect(() => {
        goToTop()
    }, [])
    return(
        <Page>
            <PageHeader>
                <ResourcesHeaderContent/>
            </PageHeader>

            <ContentBody>
                <ContentHeader/>
                <Resources/>
            </ContentBody>
        </Page>
    )
}