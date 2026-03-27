'use client';

import { Container } from "@/components/Container";
import { HeadingIdEnum } from "@/constants/selectors";
import { Tab, TabContent, TabContents, TabList, Tabs } from "@/components/ui/Tabs/Tabs";
import { navScroll } from "@/utils/nav-scroll";
import { useTranslations } from "next-intl";
import { Markdown } from "@/components/ui/Markdown";
import { Title } from "@/components/ui/Title";

export function Section5Pricing() {
  const t = useTranslations("pricing");

  return (
    <div className="pb-space-md">
      <Container>
        <Title id={HeadingIdEnum.Pricing}>{t("title")}</Title>
        <Tabs
          className="mt-space-sm"
          scrollUpTargetId={HeadingIdEnum.Pricing}
          scrollUpFn={navScroll}
        >
          <TabList>
            <Tab>{t("tab1PriceCalculation.title")}</Tab>
            <Tab>{t("tab2BuyerBenefits.title")}</Tab>
            <Tab>{t("tab3Conclusion.title")}</Tab>
          </TabList>
          <TabContents className="prose md:prose-lg md:text-justify">
            <TabContent className="prose-in">
              <Markdown>{t.raw("tab1PriceCalculation.text")}</Markdown>
            </TabContent>
            <TabContent className="prose-in">
              <Markdown>{t.raw("tab2BuyerBenefits.text")}</Markdown>
            </TabContent>
            <TabContent className="prose-in">
              <Markdown>{t.raw("tab3Conclusion.text")}</Markdown>
            </TabContent>
          </TabContents>
        </Tabs>
      </Container>
    </div>
  );
}
