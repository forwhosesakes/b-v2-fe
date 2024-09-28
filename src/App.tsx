import { QueryClient, QueryClientProvider } from "react-query";

import { Outlet } from "react-router-dom";
import MainNavbar from "./core/main-navbar/main-navbar";
function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
 