export const generalLinks = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/email_campaign",
    label: "Email Campaign",
  },
  {
    path: "/sms_campaign",
    label: "SMS Campaign",
    sub: [
      {
        path: "/send_sms",
        label: "Send SMS",
      },
      {
        path: "/sms_settings",
        label: "SMS settings",
      },
    ],
  },
  { path: "/templates", label: "Templates" },
  {
    path: "/list",
    label: "List Menu",
    sub: [
      {
        path: "/overview",
        label: "Overview",
      },
      {
        path: "/subscribers",
        label: "Subscribers",
      },
      {
        path: "/unsubscribes",
        label: "Unsubscribes",
      },
      {
        path: "/spam_report",
        label: "Spam Report",
      },
      {
        path: "/group",
        label: "Group",
      },
      {
        path: "/collaboration",
        label: "Collaboration",
      },
      {
        path: "/invites",
        label: "Invites",
      },
    ],
  },
  { path: "/sending_blacklist", label: "Sending BlackList" },
  { path: "/pricing", label: "Pricing" },
  { path: "/api", label: "API" },
];
