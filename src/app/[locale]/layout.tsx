import Layout from "_components/Layout";
import { getStaticParams } from "locales/server";
import { PropsWithChildren } from "react";
import "theme/global.css";
import { LocaleParams, Params } from "types";

export function generateStaticParams() {
  return getStaticParams();
}

const LocaleLayout = ({
  children,
  params: { locale },
}: PropsWithChildren<Params<LocaleParams>>) => {
  return <Layout locale={locale}>{children}</Layout>;
};

export default LocaleLayout;
