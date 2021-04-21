import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";

export const NavLinkData = [
  { id: 1, path: "/", title: "Home", icon: <FaHome /> },
  { id: 2, path: "/showings", title: "Showings", icon: <FaRegCalendarAlt /> },
  { id: 3, path: "/people", title: "People", icon: <FaUserFriends /> },
  { id: 4, path: "/places", title: "Places", icon: <FaMapMarkerAlt /> },
  { id: 5, path: "/tasks", title: "Tasks", icon: <FaCheckSquare /> },
];
