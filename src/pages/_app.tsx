import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Provider } from "react-redux";

import { store } from "@/store/configureStore";
import { NavBar } from "@/components";
import useTheme from "@/utils/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
        <button
          className="fixed bottom-0 rounded-full bg-base-300  p-2"
          onClick={() => toggleTheme()}
        >
          {theme == "dark" ? (
            <SunIcon className="h-10" />
          ) : (
            <MoonIcon className="h-10" />
          )}
        </button>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
