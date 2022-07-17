import { useRouter } from "next/router";
import { useMemo } from "react";

const useNextQueryParams = (): { [key: string]: boolean | string } => {
  const router = useRouter();
  const value = useMemo(() => {
    const queryParamsStr = router.asPath.split("?").slice(1).join("");
    const urlSearchParams = new URLSearchParams(queryParamsStr);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  }, [router.asPath]);

  return value;
};

export default useNextQueryParams;
