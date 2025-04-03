import { Toaster } from "sonner";
import { ScreenLoader } from "./components/shared/ScreenLoader";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import ProtectedRoutes from "./components/layouts/ProtectedRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/auth/ForgotPassword";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Api = lazy(() => import("./pages/apiPage/Api"));
const Notifications = lazy(() => import("./pages/Notifications"));
const UserProfile = lazy(() => import("./pages/profile/UserProfile"));
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const UpgradePlan = lazy(() => import("./pages/pricing/UpgradePlan"));
const ChangePassword = lazy(() => import("./pages/profile/ChangePassword"));
const EmailCampaign = lazy(() => import("./pages/dashboard/EmailCampaign"));
const EmailAddTag = lazy(() => import("./pages/emailCampaign/AddTag"));
const EditTemplate = lazy(() => import("./pages/emailCampaign/EditTemplate"));
const ConfirmDetails = lazy(
  () => import("./pages/emailCampaign/ConfirmDetails")
);
const PlainText = lazy(() => import("./pages/emailCampaign/PlainText"));
const Templates = lazy(() => import("./pages/dashboard/Templates"));
const SMSCampaign = lazy(() => import("./pages/dashboard/SMSCampaign"));
const SmsSettings = lazy(() => import("./pages/smsCampaign/SmsSettings"));
const SmsSetup = lazy(() => import("./pages/smsCampaign/SmsSetup"));
const SendSms = lazy(() => import("./pages/smsCampaign/SendSms"));
const PlainCampaign = lazy(() => import("./pages/emailCampaign/PlainCampaign"));
const HtmlCampaign = lazy(() => import("./pages/emailCampaign/HtmlCampaign"));
const Overview = lazy(() => import("./pages/list/Overview"));
const Subscribers = lazy(() => import("./pages/list/Subscribers"));
const UnSubscribe = lazy(() => import("./pages/list/UnSubscribe"));
const SpamReport = lazy(() => import("./pages/list/SpamReport"));
const Tag = lazy(() => import("./pages/list/Tag"));
const BlackList = lazy(() => import("./pages/list/BlackList"));
const Collaborations = lazy(() => import("./pages/list/Collaborations"));
const Invitees = lazy(() => import("./pages/list/Invitees"));
const NewSubscriber = lazy(() => import("./pages/list/NewSubscriber"));
const RegularCampaign = lazy(
  () => import("./pages/emailCampaign/RegularCampaign")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/notifications",
            element: <Notifications />,
            index: true,
          },
          {
            path: "/profile",
            element: <UserProfile />,
            index: true,
          },
          {
            path: "/change_password",
            element: <ChangePassword />,
            index: true,
          },
          {
            path: "/email_campaign",
            element: <EmailCampaign />,
            index: true,
          },
          {
            path: "/email_campaign/plain-text",
            element: <PlainText />,
            index: true,
          },
          {
            path: "/email_campaign/add_tag",
            element: <EmailAddTag />,
            index: true,
          },
          {
            path: "/email_campaign/edit_template",
            element: <EditTemplate />,
            index: true,
          },
          {
            path: "/email_campaign/confirm_details",
            element: <ConfirmDetails />,
            index: true,
          },
          {
            path: "/email_campaign/regular-campaign",
            element: <RegularCampaign />,
            index: true,
          },
          {
            path: "/email_campaign/plain-text-campaign",
            element: <PlainCampaign />,
            index: true,
          },
          {
            path: "/email_campaign/custom-html-campaign",
            element: <HtmlCampaign />,
            index: true,
          },
          {
            path: "/sms_campaign",
            element: <SMSCampaign />,
            index: true,
          },
          {
            path: "/sms_campaign/send_sms",
            element: <SendSms />,
            index: true,
          },
          {
            path: "/sms_campaign/sms_settings",
            element: <SmsSettings />,
            index: true,
          },
          {
            path: "/sms_campaign/sms_settings/sms_setup",
            element: <SmsSetup />,
            index: true,
          },
          {
            path: "/templates",
            element: <Templates />,
            index: true,
          },
          {
            path: "/list/subscribers/new-subscriber",
            index: true,
            element: <NewSubscriber />,
          },
          {
            path: "/list",
            children: [
              {
                path: "",
                index: true,
                element: <Overview />,
              },
              {
                path: "overview",
                index: true,
                element: <Overview />,
              },
              {
                path: "subscribers",
                index: true,
                element: <Subscribers />,
              },

              {
                path: "unsubscribes",
                index: true,
                element: <UnSubscribe />,
              },
              {
                path: "overview",
                index: true,
                element: <Dashboard />,
              },
              {
                path: "spam_report",
                index: true,
                element: <SpamReport />,
              },
              {
                path: "group",
                index: true,
                element: <Tag />,
              },
              {
                path: "collaboration",
                index: true,
                element: <Collaborations />,
              },
              {
                path: "invites",
                index: true,
                element: <Invitees />,
              },
            ],
          },
          {
            path: "/sending_blacklist",
            element: <BlackList />,
            index: true,
          },
          {
            path: "/pricing",
            element: <Pricing />,
            index: true,
          },
          {
            path: "/pricing/upgrade_plan",
            element: <UpgradePlan />,
            index: true,
          },
          {
            path: "/api",
            element: <Api />,
            index: true,
          },
        ],
      },
    ],
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },

  {
    path: "/auth/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset_password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<ScreenLoader />}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
