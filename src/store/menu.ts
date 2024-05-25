import { Dispatch, SetStateAction } from "react";
import ApplicationRoutes from "../config/routes";

export const menu = [
  {
    icon: "/icons/menu/home.png",
    iconActive: "/icons/menu/green-home.svg",
    text: "Home",
    path: ApplicationRoutes.HOME,
  },
  {
    icon: "/icons/menu/communities.png",
    iconActive: "/icons/menu/green-communities.svg",
    text: "Communities",
    path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
  },
  {
    icon: "/icons/menu/leaderboard.png",
    iconActive: "/icons/menu/green-leaderboard.svg",
    text: "Leaderboard",
    path: ApplicationRoutes.LEADERBOARD,
  },
  {
    icon: "/icons/menu/directory.png",
    iconActive: "/icons/menu/green-directory.svg",
    text: "Directory",
    path: ApplicationRoutes.DIRECTORY.FOUNDERS,
  },
  {
    icon: "/icons/menu/co-founder.png",
    iconActive: "/icons/menu/green-co-founder.svg",
    text: "Find a cofounder",
    path: ApplicationRoutes.FIND_A_COFOUNDER,
  },
  {
    icon: "/icons/menu/event.png",
    iconActive: "/icons/menu/green-event.svg",
    text: "Events",
    path: ApplicationRoutes.EVENTS,
  },
  {
    icon: "/icons/menu/resources.png",
    iconActive: "/icons/menu/green-resources.svg",
    text: "Resources",
    path: ApplicationRoutes.RESOURCES,
  },
  {
    icon: "/icons/menu/marketplace.png",
    iconActive: "/icons/menu/green-marketplace.png",
    text: "Marketplaces",
    path: ApplicationRoutes.MARKETPLACES,
  },
  {
    icon: "/icons/menu/quiz.png",
    iconActive: "/icons/menu/green-quiz.svg",
    text: "Quiz",
    path: ApplicationRoutes.QUIZ,
  },
];

export const recentCommunities = [
  {
    icon: "/tree.jpg",
    text: "Climate change",
    path: "/",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNR0Spx-7J-5WlRIPoE46NzJ-bDFAfYhqXWjjyznlrCQ&s",
    text: "Crypto communities",
    path: "/",
  },
];

export const recentChats = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFKecUxi3sSInAmCaJT5DCrv94ph8dcZ4PiSLgKVW1A&s",
    text: "Tania",
    path: "/",
  },
];

export const extraMenuOptions = [
  {
    icon: "/icons/menu/create-community.png",
    text: "Create Community",
    // path: ApplicationRoutes.COMMUNITIES.CREATE,
    // action: (setter: Dispatch<SetStateAction<boolean>>) => {
    //   setter(true);
    // },
  },
  {
    icon: "/icons/menu/saved.png",
    text: "Saved",
    path: "/",
  },
  {
    icon: "/icons/menu/settings.png",
    text: "Settings",
    path: ApplicationRoutes.SETTINGS,
  },
];
