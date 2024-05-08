import ApplicationRoutes from "@/config/routes";

export const directoryTabs = [
  {
    text: "Founders",
    url: `${ApplicationRoutes.DIRECTORY.FOUNDERS}`,
  },
  {
    text: "Investors",
    url: `${ApplicationRoutes.DIRECTORY.FOUNDERS}/${ApplicationRoutes.DIRECTORY.INVESTORS}`,
  },
  {
    text: "Companies",
    url: `${ApplicationRoutes.DIRECTORY.FOUNDERS}/${ApplicationRoutes.DIRECTORY.COMPANIES}`,
  },
];
