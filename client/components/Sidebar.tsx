import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  hasNotification?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const sidebarData: NavSection[] = [
  {
    title: "12",
    items: [
      {
        id: "dashboard",
        label: "333333333",
        active: true,
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "location",
        label: "66666666666",
        icon: (
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8641 14.1156C13.5677 14.1156 14.9488 12.6474 14.9488 10.8363C14.9488 9.02524 13.5677 7.55705 11.8641 7.55705C10.1605 7.55705 8.77945 9.02524 8.77945 10.8363C8.77945 12.6474 10.1605 14.1156 11.8641 14.1156Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3.57901 8.92342C5.5267 -0.178682 18.2114 -0.168171 20.1492 8.93393C21.2862 14.2733 18.162 18.7928 15.4234 21.5886C13.4361 23.6276 10.2921 23.6276 8.295 21.5886C5.56625 18.7928 2.44203 14.2628 3.57901 8.92342Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        id: "receipt",
        label: "6666",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6.22522V8.64522C22 10.2252 21 11.2252 19.42 11.2252H16V4.23522C16 3.12522 16.91 2.22522 18.02 2.22522C19.11 2.23522 20.11 2.67522 20.83 3.39522C21.55 4.12522 22 5.12522 22 6.22522Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 7.22522V21.2252C2 22.0552 2.93998 22.5252 3.59998 22.0252L5.31 20.7452C5.71 20.4452 6.27 20.4852 6.63 20.8452L8.28998 22.5152C8.67998 22.9052 9.32002 22.9052 9.71002 22.5152L11.39 20.8352C11.74 20.4852 12.3 20.4452 12.69 20.7452L14.4 22.0252C15.06 22.5152 16 22.0452 16 21.2252V4.22522C16 3.12522 16.9 2.22522 18 2.22522H7H6C3 2.22522 2 4.01522 2 6.22522V7.22522Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 9.22522H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.75 13.2252H11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "cart",
        label: "66666666666",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.2209 24.2252C6.60318 24.2252 6.0762 24.013 5.63997 23.5885C5.20288 23.1633 4.98434 22.6501 4.98434 22.0491C4.98434 21.448 5.20288 20.9349 5.63997 20.5096C6.0762 20.0851 6.60318 19.8729 7.2209 19.8729C7.83861 19.8729 8.36559 20.0851 8.80182 20.5096C9.23891 20.9349 9.45746 21.448 9.45746 22.0491C9.45746 22.6501 9.23891 23.1633 8.80182 23.5885C8.36559 24.013 7.83861 24.2252 7.2209 24.2252ZM19.6178 24.2252C19.0001 24.2252 18.4731 24.013 18.0369 23.5885C17.5998 23.1633 17.3813 22.6501 17.3813 22.0491C17.3813 21.448 17.5998 20.9349 18.0369 20.5096C18.4731 20.0851 19.0001 19.8729 19.6178 19.8729C20.2355 19.8729 20.7625 20.0851 21.1988 20.5096C21.6358 20.9349 21.8544 21.448 21.8544 22.0491C21.8544 22.6501 21.6358 23.1633 21.1988 23.5885C20.7625 24.013 20.2355 24.2252 19.6178 24.2252ZM5.78311 4.57755L9.01015 11.1682H17.7327C17.7966 11.1682 17.8605 11.1525 17.9244 11.121C17.9883 11.0903 18.0309 11.0439 18.0522 10.9817L21.5029 4.91952C21.5455 4.83662 21.5455 4.75911 21.5029 4.68698C21.4603 4.61403 21.3964 4.57755 21.3112 4.57755H5.78311ZM4.85653 2.71227H22.5893C23.1218 2.71227 23.5214 2.92988 23.7881 3.36512C24.0539 3.80035 24.0697 4.24595 23.8353 4.7019L19.7137 11.9143C19.522 12.2667 19.2506 12.5411 18.8996 12.7376C18.5477 12.9349 18.1694 13.0335 17.7647 13.0335H8.43503L6.96529 15.676C6.90139 15.7796 6.89628 15.8833 6.94995 15.9869C7.00278 16.0905 7.09309 16.1423 7.2209 16.1423H21.8544V18.0076H7.2209C6.36887 18.0076 5.72986 17.6503 5.30384 16.9357C4.87783 16.2202 4.86718 15.5102 5.27189 14.8055L7.09309 11.6035L2.42827 2.0905H0V0.22522H3.6424L4.85653 2.71227Z" fill="currentColor"/>
          </svg>
        ),
      },
      {
        id: "box",
        label: "66666666",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.17001 7.66522L12 12.7752L20.77 7.69519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 21.8352V12.7652" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.92999 2.70522L4.59 5.67525C3.38 6.34525 2.39001 8.02523 2.39001 9.40523V15.0553C2.39001 16.4353 3.38 18.1152 4.59 18.7852L9.92999 21.7553C11.07 22.3853 12.94 22.3853 14.08 21.7553L19.42 18.7852C20.63 18.1152 21.62 16.4353 21.62 15.0553V9.40523C21.62 8.02523 20.63 6.34525 19.42 5.67525L14.08 2.70522C12.93 2.06522 11.07 2.06522 9.92999 2.70522Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 13.4652V9.80524L7.51001 4.3252" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "arrows",
        label: "555555555",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.95 8.17522L10.536 9.58922L8 7.05322V20.2252H6V7.05322L3.465 9.58922L2.05 8.17522L7 3.22522L11.95 8.17522ZM21.95 16.2752L17 21.2252L12.05 16.2752L13.464 14.8612L16.001 17.3972L16 4.22522H18V17.3972L20.536 14.8612L21.95 16.2752Z" fill="currentColor"/>
          </svg>
        ),
      },
      {
        id: "ticket",
        label: "555555555",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 12.7252C19.5 11.3452 20.62 10.2252 22 10.2252V9.22522C22 5.22522 21 4.22522 17 4.22522H7C3 4.22522 2 5.22522 2 9.22522V9.72522C3.38 9.72522 4.5 10.8452 4.5 12.2252C4.5 13.6052 3.38 14.7252 2 14.7252V15.2252C2 19.2252 3 20.2252 7 20.2252H17C21 20.2252 22 19.2252 22 15.2252C20.62 15.2252 19.5 14.1052 19.5 12.7252Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 14.9752L15 8.97522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9945 14.9752H15.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.99451 9.47522H9.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "heart",
        label: "55555",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.62 21.0352C12.28 21.1552 11.72 21.1552 11.38 21.0352C8.48 20.0452 2 15.9152 2 8.91523C2 5.82523 4.49 3.32523 7.56 3.32523C9.38 3.32523 10.99 4.20523 12 5.56523C13.01 4.20523 14.63 3.32523 16.44 3.32523C19.51 3.32523 22 5.82523 22 8.91523C22 15.9152 15.52 20.0452 12.62 21.0352Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "rotate",
        label: "5555",
        icon: (
          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00684 5.56456C9.86699 5.29129 10.8161 5.11261 11.8641 5.11261C16.5999 5.11261 20.4359 9.19069 20.4359 14.2252C20.4359 19.2598 16.5999 23.3378 11.8641 23.3378C7.12836 23.3378 3.29229 19.2598 3.29229 14.2252C3.29229 12.3544 3.82618 10.6096 4.73576 9.15916" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.78088 5.81682L10.6382 2.32733" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.78088 5.81683L11.1127 8.40242" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "forum",
        label: "55555",
        hasNotification: true,
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.1154 17.5657C6.86475 17.5657 6.65465 17.481 6.4851 17.3114C6.31555 17.1419 6.23077 16.9318 6.23077 16.6811V15.1812H18.6057L18.9231 15.4985V6.45042H20.423C20.6737 6.45042 20.8838 6.53519 21.0533 6.70474C21.2229 6.87429 21.3076 7.08438 21.3076 7.33501V21.1042L17.7692 17.5657H7.1154ZM2.69235 16.7196V3.83506C2.69235 3.58441 2.77712 3.37432 2.94667 3.20477C3.11622 3.03522 3.32632 2.95044 3.57697 2.95044H16.0385C16.2891 2.95044 16.4992 3.03522 16.6687 3.20477C16.8383 3.37432 16.9231 3.58441 16.9231 3.83506V12.2966C16.9231 12.5472 16.8383 12.7573 16.6687 12.9268C16.4992 13.0964 16.2891 13.1812 16.0385 13.1812H6.23077L2.69235 16.7196ZM15.4231 11.6812V4.45042H4.19232V12.3736L4.88467 11.6812H15.4231Z" fill="currentColor"/>
          </svg>
        ),
      },
      {
        id: "coupon",
        label: "555",
        hasNotification: true,
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.95044V4.45044C2 4.18522 2.10536 3.93087 2.29289 3.74333C2.48043 3.5558 2.73478 3.45044 3 3.45044H21C21.2652 3.45044 21.5196 3.5558 21.7071 3.74333C21.8946 3.93087 22 4.18522 22 4.45044V9.95044C21.337 9.95044 20.7011 10.2138 20.2322 10.6827C19.7634 11.1515 19.5 11.7874 19.5 12.4504C19.5 13.1135 19.7634 13.7494 20.2322 14.2182C20.7011 14.687 21.337 14.9504 22 14.9504V20.4504C22 20.7157 21.8946 20.97 21.7071 21.1575C21.5196 21.3451 21.2652 21.4504 21 21.4504H3C2.73478 21.4504 2.48043 21.3451 2.29289 21.1575C2.10536 20.97 2 20.7157 2 20.4504V14.9504C2.66304 14.9504 3.29893 14.687 3.76777 14.2182C4.23661 13.7494 4.5 13.1135 4.5 12.4504C4.5 11.7874 4.23661 11.1515 3.76777 10.6827C3.29893 10.2138 2.66304 9.95044 2 9.95044ZM14 5.45044H4V8.41844C4.75121 8.79074 5.38347 9.36549 5.8255 10.0779C6.26754 10.7903 6.50176 11.612 6.50176 12.4504C6.50176 13.2888 6.26754 14.1106 5.8255 14.823C5.38347 15.5354 4.75121 16.1101 4 16.4824V19.4504H14V5.45044ZM16 5.45044V19.4504H20V16.4824C19.2488 16.1101 18.6165 15.5354 18.1745 14.823C17.7325 14.1106 17.4982 13.2888 17.4982 12.4504C17.4982 11.612 17.7325 10.7903 18.1745 10.0779C18.6165 9.36549 19.2488 8.79074 20 8.41844V5.45044H16Z" fill="currentColor"/>
          </svg>
        ),
      },
    ],
  },
  {
    title: "324",
    items: [
      {
        id: "money",
        label: "555",
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 14.2004C9.5 15.1704 10.25 15.9504 11.17 15.9504H13.05C13.85 15.9504 14.5 15.2704 14.5 14.4204C14.5 13.5104 14.1 13.1804 13.51 12.9704L10.5 11.9204C9.91 11.7104 9.51001 11.3904 9.51001 10.4704C9.51001 9.63043 10.16 8.94043 10.96 8.94043H12.84C13.76 8.94043 14.51 9.72043 14.51 10.6904" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7.95044V16.9504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 12.4504C22 17.9704 17.52 22.4504 12 22.4504C6.48 22.4504 2 17.9704 2 12.4504C2 6.93044 6.48 2.45044 12 2.45044" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6.45044V2.45044H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 7.45044L22 2.45044" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        id: "book",
        label: "55555",
        active: false,
        icon: (
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 17.1904V5.12045C22 3.92045 21.02 3.03045 19.83 3.13045H19.77C17.67 3.31045 14.48 4.38045 12.7 5.50045L12.53 5.61045C12.24 5.79045 11.76 5.79045 11.47 5.61045L11.22 5.46045C9.44 4.35045 6.26 3.29045 4.16 3.12045C2.97 3.02045 2 3.92044 2 5.11045V17.1904C2 18.1504 2.78 19.0504 3.74 19.1704L4.03 19.2104C6.2 19.5004 9.55 20.6004 11.47 21.6504L11.51 21.6704C11.78 21.8204 12.21 21.8204 12.47 21.6704C14.39 20.6104 17.75 19.5004 19.93 19.2104L20.26 19.1704C21.22 19.0504 22 18.1504 22 17.1904Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5.94043V20.9404" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.75 8.94043H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 11.9404H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
];

export function Sidebar({ className, isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen border-r border-gray-border bg-white transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-[274px]",
      className
    )}>
      {/* Header with Logo and Toggle Button */}
      <div className="flex h-[93px] items-center justify-between border-b border-gray-border px-[30px]">
        {!isCollapsed && (
          <h1 className="text-[64px] font-bold leading-[140%] text-teal-light">
            Logo
          </h1>
        )}
        <button
          onClick={onToggleCollapse}
          className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex h-[calc(100vh-93px)] flex-col">
        <div className="flex-1 overflow-y-auto">
          {sidebarData.map((section, sectionIndex) => (
            <div key={sectionIndex} className={cn(
              "border-b border-gray-border py-[30px] transition-all duration-300",
              isCollapsed ? "px-4" : "px-[30px]"
            )}>
              {!isCollapsed && (
                <div className="mb-3 text-xs font-semibold text-secondary">
                  {section.title}
                </div>
              )}
              <div className="space-y-0">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className={cn(
                      "flex w-full items-center gap-4 rounded px-3 py-2.5 text-left text-sm font-normal transition-colors",
                      item.active 
                        ? "bg-primary text-white" 
                        : "text-secondary hover:bg-gray-50"
                    )}
                  >
                    <div className="flex h-6 w-6 items-center justify-center">
                      {item.icon}
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.hasNotification && (
                          <div className="h-2.5 w-2.5 rounded-full bg-red-accent" />
                        )}
                      </>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Submenu for book item - only show when not collapsed */}
              {section.title === "324" && !isCollapsed && (
                <div className="mt-2.5 space-y-0 pl-6">
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm font-normal text-secondary hover:bg-gray-50">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22.4504C17.5228 22.4504 22 17.9733 22 12.4504C22 6.92759 17.5228 2.45044 12 2.45044C6.47715 2.45044 2 6.92759 2 12.4504C2 17.9733 6.47715 22.4504 12 22.4504Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 6.45044V18.4504M15 9.95044C15 8.57044 13.657 7.45044 12 7.45044C10.343 7.45044 9 8.57044 9 9.95044C9 11.3304 10.343 12.4504 12 12.4504C13.657 12.4504 15 13.5704 15 14.9504C15 16.3304 13.657 17.4504 12 17.4504C10.343 17.4504 9 16.3304 9 14.9504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="truncate">6666</span>
                  </button>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm font-normal text-primary hover:bg-gray-50">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.01 11.6704V16.1604C3.01 20.6504 4.81 22.4504 9.3 22.4504H14.69C19.18 22.4504 20.98 20.6504 20.98 16.1604V11.6704" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12.4504C13.83 12.4504 15.18 10.9604 15 9.13044L14.34 2.45044H9.67L9 9.13044C8.82 10.9604 10.17 12.4504 12 12.4504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.31 12.4504C20.33 12.4504 21.81 10.8104 21.61 8.80044L21.33 6.05044C20.97 3.45044 19.97 2.45044 17.35 2.45044H14.3L15 9.46044C15.17 11.1104 16.66 12.4504 18.31 12.4504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.64 12.4504C7.29 12.4504 8.78 11.1104 8.94 9.46044L9.16 7.25044L9.64 2.45044H6.59C3.97 2.45044 2.97 3.45044 2.61 6.05044L2.34 8.80044C2.14 10.8104 3.62 12.4504 5.64 12.4504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17.4504C10.33 17.4504 9.5 18.2804 9.5 19.9504V22.4504H14.5V19.9504C14.5 18.2804 13.67 17.4504 12 17.4504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="truncate text-primary font-semibold">77777</span>
                  </button>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm font-normal text-secondary hover:bg-gray-50">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3 21.9504C5.8 21.9504 5.375 21.7754 5.025 21.4254C4.675 21.0754 4.5 20.6504 4.5 20.1504V8.75044C4.5 8.25044 4.675 7.82544 5.025 7.47544C5.375 7.12544 5.8 6.95044 6.3 6.95044H8.25V6.70044C8.25 5.66711 8.61667 4.78377 9.35 4.05044C10.0833 3.31711 10.9667 2.95044 12 2.95044C13.0333 2.95044 13.9167 3.31711 14.65 4.05044C15.3833 4.78377 15.75 5.66711 15.75 6.70044V6.95044H17.7C18.2 6.95044 18.625 7.12544 18.975 7.47544C19.325 7.82544 19.5 8.25044 19.5 8.75044V20.1504C19.5 20.6504 19.325 21.0754 18.975 21.4254C18.625 21.7754 18.2 21.9504 17.7 21.9504H6.3ZM6.3 20.4504H17.7C17.7667 20.4504 17.8333 20.4171 17.9 20.3504C17.9667 20.2838 18 20.2171 18 20.1504V8.75044C18 8.68377 17.9667 8.61711 17.9 8.55044C17.8333 8.48377 17.7667 8.45044 17.7 8.45044H15.75V10.7004C15.75 10.9171 15.6793 11.0961 15.538 11.2374C15.396 11.3794 15.2167 11.4504 15 11.4504C14.7833 11.4504 14.6043 11.3794 14.463 11.2374C14.321 11.0961 14.25 10.9171 14.25 10.7004V8.45044H9.75V10.7004C9.75 10.9171 9.67933 11.0961 9.538 11.2374C9.396 11.3794 9.21667 11.4504 9 11.4504C8.78333 11.4504 8.60433 11.3794 8.463 11.2374C8.321 11.0961 8.25 10.9171 8.25 10.7004V8.45044H6.3C6.23333 8.45044 6.16667 8.48377 6.1 8.55044C6.03333 8.61711 6 8.68377 6 8.75044V20.1504C6 20.2171 6.03333 20.2838 6.1 20.3504C6.16667 20.4171 6.23333 20.4504 6.3 20.4504ZM9.75 6.95044H14.25V6.70044C14.25 6.06711 14.0333 5.53377 13.6 5.10044C13.1667 4.66711 12.6333 4.45044 12 4.45044C11.3667 4.45044 10.8333 4.66711 10.4 5.10044C9.96667 5.53377 9.75 6.06711 9.75 6.70044V6.95044ZM6 20.4504V8.45044V20.4504Z" fill="currentColor"/>
                    </svg>
                    <span className="truncate">88888</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </aside>
  );
}
