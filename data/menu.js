const Menu = [
  { header: "Apps" },
  {
    text: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/"
  },
  {
    text: "Chat",
    icon: "mdi-forum",
    target: "_blank",
    to: "/chat/messaging"
  },
  {
    text: "Inbox",
    to: "/mail",
    target: "_blank",
    icon: "mdi-email"
  },
  {
    text: "Media",
    to: "/media",
    icon: "mdi-folder-multiple-image"
  },
  {
    text: "Widgets",
    group: "widgets",
    to: "/widgets",
    icon: "mdi-widgets",
    children: [
      { to: "/widgets/social", text: "Social" },
      { to: "/widgets/statistic", text: "Statistic", badge: "new" },
      { to: "/widgets/chart", text: "Chart" },
      { to: "/widgets/list", text: "List" }
    ]
  },
  { header: "CMS" },
  {
    text: "List & Query",
    group: "layout",
    to: "cms",
    icon: "mdi-view-compact",
    children: [{ to: "/cms/table", text: "Basic Table" }]
  }
];

export default Menu;
