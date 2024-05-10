const ApplicationRoutes = {
  LANDING: "/",
  HOME: "/home",
  COMMUNITIES: {
    ALL_COMMUNITIES: "/communities",
    CREATE: "/communities/create",
  },
  DIRECTORY: {
    FOUNDERS: "/directory",
    INVESTORS: "investors",
    COMPANIES: "companies",
  },
  LEADERBOARD: "/leaderboard",
  FIND_A_COFOUNDER: "/find-a-cofounder",
  EVENTS: "/events",
  RESOURCES: "/resources",
  MARKETPLACES: "/marketplaces",
  QUIZ: "/quiz",
  SETTINGS: "/profile/:id/settings",
  CREATE_POST: "/createpost",
  COMPANY_HEALTH: "/company-health-checklist",
  AUTHORIZE: "/authorize/request",
};

export default ApplicationRoutes;
