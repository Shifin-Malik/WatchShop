import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "jotai";
import { store } from "./states/storage.ts";
import "./index.css";
import { theme } from "./theme.ts";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <BrowserRouter basename="/WatchShop/">

      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Provider store={store}>
          <ThemeProvider value={theme}>{(<App />) as never} <ToastContainer/> </ThemeProvider>

          <ReactQueryDevtools buttonPosition="top-right" />
        </Provider>
      </PersistQueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>  
);