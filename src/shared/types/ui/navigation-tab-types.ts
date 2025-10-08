import { AppPaths } from "@/app/providers/router/paths.ts";


export interface NavigationTabProps {
  label: string;
  to: AppPaths;
  icon: string;
  iconActive: string;
  isActive: boolean;
}