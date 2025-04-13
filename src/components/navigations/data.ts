import {
  ApiIcon,
  BucketListIcon,
  DashboardIcon,
  ListIcon,
  MessageIcon,
  PricingIcon,
  SmsIcon,
  TemplateIcon,
} from "@/assets/svgs/NavigationIcons";

export const generalLinks = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "/email_campaign",
    label: "Email Campaign",
    icon: MessageIcon,
  },
  {
    path: "/sms_campaign",
    label: "SMS Campaign",
    icon: SmsIcon,
    // sub: [
    //   {
    //     path: "/send_sms",
    //     label: "Send SMS",
    //   },
    //   {
    //     path: "/sms_settings",
    //     label: "SMS settings",
    //   },
    // ],
  },
  { path: "/templates", label: "Templates", icon: TemplateIcon },
  {
    path: "/list",
    label: "List Menu",
    icon: ListIcon,
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
        label: "Unsubscribe",
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
  {
    path: "/sending_blacklist",
    label: "Sending BlackList",
    icon: BucketListIcon,
  },
  { path: "/pricing", label: "Pricing", icon: PricingIcon },
  { path: "/api", label: "API", icon: ApiIcon },
];
