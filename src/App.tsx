import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Criteria from "@/pages/Criteria";
import Rankings from "@/pages/Rankings";
import BidangMinat from "@/pages/BidangMinat";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/criteria" component={Criteria} />
        <Route path="/rankings" component={Rankings} />
        <Route path="/bidang-minat" component={BidangMinat} />
        <Route>
          <div className="text-center py-20 text-gray-400">Halaman tidak ditemukan</div>
        </Route>
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base="">
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;