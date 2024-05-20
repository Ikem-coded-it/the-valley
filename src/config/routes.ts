const ApplicationRoutes = {
  LANDING: "/",
  HOME: "/home",
  COMMUNITIES: {
    ALL_COMMUNITIES: "/communities",
    CREATE: "create",
    SINGLE_COMMUNITIES: ":id",
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
  USER: {
    AUTHORIZE: "/authorize/request",
    LOGOUT: "/auth/logout",
  }
};

export default ApplicationRoutes;
