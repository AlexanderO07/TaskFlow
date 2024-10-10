'use client';
// topics called teams
import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout"; //sidebar
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BadgePercent, BarChart4, Columns3, Globe, Key, Settings2, MessageCircleWarning, DiamondPlus, CircleX, Users } from "lucide-react"; //icons for menu
import { useParams, useRouter } from "next/navigation"; //nav loading

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Management',
  },
  {
    name: "New Chat",
    href: "/newchat",
    icon: DiamondPlus,
    type: "item",
  },
  {
    name: "Insights",
    href: "/insights",
    icon: BarChart4,
    type: "item",
  }, 
  {
    name: "Chat Memory",
    href: "/memory",
    icon: Columns3,
    type: "item",
  },
  {
    name: "FlowTools",
    href: "/flowtools",
    icon: Key,
    type: "item",
  },
  {
    type: 'label',
    name: 'Collaboration',
  },
  {
    name: "Invitations",
    href: "/invitations",
    icon: MessageCircleWarning,
    type: "item",
  },
  {
    name: "Team Chat",
    href: "/team-chat",
    icon: Users,
    type: "item",
  },
  {
    type: 'label',
    name: 'Settings',     
  },
  {
    name: "Configuration",
    href: "/configuration",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: 'redirect' }); 
  const team = user.useTeam(params.teamId);
  const router = useRouter(); 

  if (!team) {
    router.push('/dashboard');
    return null;
  }

  return (
    <SidebarLayout 
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<SelectedTeamSwitcher 
        selectedTeam={team}
        urlMap={(team) => `/dashboard/${team.id}`}
      />}
      baseBreadcrumb={[{
        title: team.displayName,
        href: `/dashboard/${team.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}