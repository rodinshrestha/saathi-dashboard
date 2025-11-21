import ApprovalIcon from "@/assets/svg/approvalIcon";
import dashboardIcon from "@/assets/svg/dashboardIcon";
import FileIcon from "@/assets/svg/fileIcon";
import FolderIcon from "@/assets/svg/folderIcon";
import ListIcon from "@/assets/svg/listIcon";

export const navData = [
  {
    id: 1,
    icon: dashboardIcon,
    label: "Dashboard",
    slug: "/",
  },
  {
    id: 2,
    icon: FileIcon,
    label: "Data Entry",
    slug: "data-entry",
  },
  {
    id: 3,
    icon: ListIcon,
    label: "Registration List",
    slug: "registration-list",
  },

  {
    id: 5,
    icon: ApprovalIcon,
    label: "Approvals",
    slug: "approvals",
  },
  {
    id: 6,
    icon: FolderIcon,
    label: "Projects",
    slug: "projects",
  },
];
