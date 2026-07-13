import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import GuestGuard from "./components/GuestGuard";
import AuthGuard from "./components/AuthGuard";
import Support from "./components/Support";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import Account from "./pages/account/Account";
import { Home } from "./pages/Home";
import { Framework } from "./pages/Framework";
import { Reviews } from "./pages/Reviews";
import { EvaluationAreas } from "./pages/EvaluationAreas";
import { About } from "./pages/About";
import { Access } from "./pages/Access";
import { Content } from "./components/Content";
import Terms from "./pages/Terms";
import Survey from "./pages/survey/Survey";
import Studies from "./pages/Studies";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "framework", element: <Framework /> },
      { path: "reviews", element: <Reviews /> },
      { path: "evaluation-areas", element: <EvaluationAreas /> },
      { path: "about", element: <About /> },
      { path: "access", element: <Access /> },
      {
        path: "forgot-password",
        element: (
          <GuestGuard>
            <ForgotPassword />
          </GuestGuard>
        ),
      },
      {
        path: "reset-password/:token",
        element: (
          <GuestGuard>
            <ResetPassword />
          </GuestGuard>
        ),
      },
      {
        path: "account",
        element: (
          <AuthGuard>
            <Account />
          </AuthGuard>
        ),
      },
      { path: "support", element: <Support /> },
      { path: "terms", element: <Terms /> },
      { path: "survey", element: <Survey /> },
      { path: "survey/:id", element: <Survey /> },
      { path: "studies", element: <Studies /> },
      {
        path: ":first/:second?/:third?",
        element: <Content />,
      },
    ],
  },
];

export default routes;
