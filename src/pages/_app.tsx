import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import ToggleDrawerProvider from "context/drawer";
import type { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import "../styles/globals.css";
import { AppProps } from "next/app";

// Create rtl cache
export function cacheRtl(rtl?: boolean) {
  return createCache({
    key: rtl ? "rtl" : "ltr",
    prepend: true,
    stylisPlugins: rtl ? [prefixer, rtlPlugin] : [prefixer],
  });
}

const clientSideEmotionCache = cacheRtl();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    router,
    pageProps,
  } = props;
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  useEffect(() => {
    document.dir = router.locale === "fa" ? "rtl" : "ltr";
  }, [router.locale]);

  const memoizedEmotionCache = useMemo(() => {
    if (router.locale === "fa") {
      return cacheRtl(true);
    }
    if (router.locale === "en") {
      return cacheRtl(false);
    }
    return emotionCache;
  }, [router, emotionCache]);

  return (
    <CacheProvider value={memoizedEmotionCache}>
      <ThemeProvider enableSystem={true} attribute="class">
        <ToggleDrawerProvider>
          <Head>
            <title>{"healthomat"}</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </ToggleDrawerProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
