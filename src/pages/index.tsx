import { nextDynamic } from "components";
import Layout from "components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DashboardPage = () => {
  const Dashboard = nextDynamic("Dashboard");
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery("socials", socials);
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ["common", "menu"])),
    },
  };
}

export default DashboardPage;
