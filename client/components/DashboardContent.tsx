import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const tabs: Tab[] = [
  {
    id: "account",
    label: "Account",
    active: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2001_341)">
          <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11.98 13.3333C11.8734 11.4053 11.2834 10 8.00002 10C4.71669 10 4.12669 11.4053 4.02002 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 6.47333V6.00333C12.5 3.424 10.484 1.33333 8.00001 1.33333C5.51601 1.33333 3.50001 3.424 3.50001 6.00333V6.47333C3.50081 7.03436 3.34071 7.58386 3.03868 8.05666L2.30001 9.20666C1.62601 10.2567 2.14068 11.684 3.31334 12.016C6.37741 12.8846 9.62261 12.8846 12.6867 12.016C13.8593 11.684 14.374 10.2567 13.7 9.20733L12.9613 8.05733C12.6591 7.5846 12.4987 7.0351 12.4993 6.474L12.5 6.47333Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 12.6667C5.43667 13.832 6.61467 14.6667 8 14.6667C9.38533 14.6667 10.5633 13.832 11 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// Avatar data
const avatars = [
  { id: 1, src: "/assets/avatar-1.png" },
  { id: 2, src: "/assets/avatar-2.png" },
  { id: 3, src: "/assets/avatar-3.png" },
  { id: 4, src: "/assets/avatar-4.png" },
  { id: 5, src: "/assets/avatar-5.png" },
  { id: 6, src: "/assets/avatar-6.png" },
  { id: 7, src: "/assets/avatar-7.png" },
  { id: 8, src: "/assets/avatar-8.png" },
];

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("account");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1); // Set avatar-1 as default
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Form state
  const [currentPassword, setCurrentPassword] = useState("••••••••••••••••");
  const [newPassword, setNewPassword] = useState("••••••••••••••••");
  const [nickName, setNickName] = useState("Mathew Anderson");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pcNotifications, setPcNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [notificationTone, setNotificationTone] = useState("pullout");
  const [tabbyInstalments, setTabbyInstalments] = useState(true);
  const [country, setCountry] = useState("Saudi Arabia");
  const [email, setEmail] = useState("info@gmail.com");
  const [phone, setPhone] = useState("+966 12345 65478");
  const [businessName, setBusinessName] = useState("Flowers Store");
  const [businessDescription, setBusinessDescription] = useState("A store specializing in the sales of natural roses and fast delivery within hours");
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startStrengthRef = useRef<number>(0);

  // Handle avatar selection
  const handleAvatarSelect = (avatarId: number) => {
    setSelectedAvatar(avatarId);
    setShowAvatarModal(false);
  };

  // Handle slider drag start
  const handleSliderMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    startXRef.current = e.clientX;
    startStrengthRef.current = passwordStrength;
    document.addEventListener('mousemove', handleSliderMouseMove);
    document.addEventListener('mouseup', handleSliderMouseUp);
  };

  // Handle slider click (jump to position)
  const handleSliderClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newStrength = (clickX / rect.width) * 100;
    
    setPasswordStrength(Math.max(0, Math.min(100, newStrength)));
    
    if (newStrength >= 90) {
      setIsPasswordVerified(true);
    }
  };

  const handleSliderMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newStrength = (clickX / rect.width) * 100;
    
    setPasswordStrength(Math.max(0, Math.min(100, newStrength)));
    
    // If dragged to 90% or more, mark as verified
    if (newStrength >= 90) {
      setIsPasswordVerified(true);
    }
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleSliderMouseMove);
    document.removeEventListener('mouseup', handleSliderMouseUp);
  };

  // Touch events for mobile
  const handleSliderTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    startStrengthRef.current = passwordStrength;
  };

  const handleSliderTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    
    const rect = sliderRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;
    
    // Only update if touch is within the slider bounds
    if (touchY >= 0 && touchY <= rect.height) {
      const newStrength = (touchX / rect.width) * 100;
      setPasswordStrength(Math.max(0, Math.min(100, newStrength)));
      
      // If dragged to 90% or more, mark as verified
      if (newStrength >= 90) {
        setIsPasswordVerified(true);
      }
    }
  };

  const handleSliderTouchEnd = () => {
    setIsDragging(false);
  };

  // Cleanup event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleSliderMouseMove);
      document.removeEventListener('mouseup', handleSliderMouseUp);
    };
  }, []);

  return (
    <div className="h-full rounded-[20px] bg-teal-bg p-[30px]">
      <div className="h-full rounded-xl bg-white shadow-sm">
        {/* Tab Navigation */}
        <div className="border-b border-gray-border-light">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 border-b px-4 py-4 text-sm font-medium",
                  tab.id === activeTab
                    ? "border-primary text-primary"
                    : "border-transparent text-primary hover:text-primary/80"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Top Section - Change Profile & Change Password */}
          <div className="mb-[30px] flex flex-col lg:flex-row gap-[30px]">
            {/* Change Profile */}
            <div className="flex-1 rounded-xl border border-gray-border-light bg-white p-[30px] shadow-sm">
              <div className="mb-[30px]">
                <h3 className="mb-1 text-lg font-semibold text-gray-primary">
                  Change profile
                </h3>
                <p className="text-sm text-gray-muted">
                  Change your profile picture from here
                </p>
              </div>

              <div className="flex flex-col items-center gap-[34px]">
                {/* Profile Image */}
                <div className="h-[120px] w-[120px] rounded-full bg-gradient-to-br from-teal-light to-teal overflow-hidden">
                  <img 
                    src={`/assets/avatar-${selectedAvatar}.png`}
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                    Your Files
                  </button>
                  <button 
                    onClick={() => setShowAvatarModal(true)}
                    className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Avatars
                  </button>
                  <button 
                    onClick={() => setSelectedAvatar(1)}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </div>

                <p className="text-center text-sm text-gray-muted">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>

            {/* Change Password */}
            <div className="flex-1 rounded-xl border border-gray-border-light bg-white p-[30px] shadow-sm">
              <div className="mb-[30px]">
                <h3 className="mb-1 text-lg font-semibold text-gray-primary">
                  Change Password
                </h3>
                <p className="text-sm text-gray-muted">
                  To change your password please confirm here
                </p>
              </div>

              <div className="space-y-[30px]">
                {/* Current Password */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-primary">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full rounded border border-gray-border-light px-3 py-2.5 text-sm text-gray-primary focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-primary">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full rounded border border-gray-border-light px-3 py-2.5 text-sm text-gray-primary focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Password Strength Slider */}
                <div 
                  ref={sliderRef}
                  className="relative h-[34px] bg-gray-200 rounded cursor-pointer select-none w-64 border border-gray-300 shadow-sm"
                  onMouseDown={handleSliderMouseDown}
                  onClick={handleSliderClick}
                  onTouchStart={handleSliderTouchStart}
                  onTouchMove={handleSliderTouchMove}
                  onTouchEnd={handleSliderTouchEnd}
                >
                  <div 
                    className={cn(
                      "h-full transition-all duration-100 rounded",
                      passwordStrength >= 90 ? "bg-primary" : "bg-teal-light"
                    )}
                    style={{ width: `${passwordStrength}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                    {passwordStrength >= 90 ? (
                      <span className="text-white">Verified</span>
                    ) : (
                      <span className="text-gray-800">Hold and drag to the right</span>
                    )}
                  </div>
                  <div 
                    className={cn(
                      "absolute top-0 h-full w-[42px] cursor-pointer flex items-center justify-center shadow-md rounded transition-all duration-100 z-10",
                      passwordStrength >= 90 
                        ? "bg-primary border-2 border-white" 
                        : "bg-white border border-gray-300"
                    )}
                    style={{ 
                      left: `${Math.max(0, Math.min(100, passwordStrength))}%`, 
                      transform: 'translateX(-50%)' 
                    }}
                  >
                    {passwordStrength >= 90 ? (
                      <img src="/assets/tick.svg" alt="Verified" className="w-4 h-4" />
                    ) : (
                      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.54395 5.33496L0.743164 10.6689L0 10L4.19922 5.33496L0 0.668945L0.743164 0L5.54395 5.33496ZM11.5439 5.33496L6.74316 10.6689L6 10L10.1992 5.33496L6 0.668945L6.74316 0L11.5439 5.33496Z" fill="#999999"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="rounded-xl border border-gray-border-light bg-white p-[30px] shadow-sm">
            <div className="mb-[30px]">
              <h3 className="mb-3 text-lg font-semibold text-gray-primary">
                Personal Details
              </h3>
              <p className="text-sm text-gray-muted">
                To change your personal detail, edit and save from here
              </p>
            </div>

            <div className="space-y-[30px]">
              {/* Nick Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-primary">
                  Nick Name
                </label>
                <input
                  type="text"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  className="w-full rounded border border-gray-border-light px-3 py-2.5 text-sm text-gray-primary focus:border-primary focus:outline-none"
                />
              </div>

              {/* Discount Notification */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30">
                  <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0L21 8V31L10.5 23L0 31V8L10.5 0Z" fill="#3AC2CB"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-primary">There is discount</h4>
                  <p className="text-sm text-gray-muted">if there is a discount on your cart</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "h-5 w-5 rounded flex items-center justify-center transition-colors",
                      emailNotifications ? "bg-teal-secondary" : "bg-gray-200"
                    )}>
                      {emailNotifications && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.00002 10.78L3.68668 8.46666C3.56203 8.34201 3.39297 8.27198 3.21668 8.27198C3.0404 8.27198 2.87133 8.34201 2.74668 8.46666C2.62203 8.59131 2.552 8.76037 2.552 8.93666C2.552 9.02394 2.56919 9.11038 2.6026 9.19102C2.636 9.27166 2.68496 9.34494 2.74668 9.40666L5.53335 12.1933C5.79335 12.4533 6.21335 12.4533 6.47335 12.1933L13.5267 5.13999C13.6513 5.01534 13.7214 4.84627 13.7214 4.66999C13.7214 4.49371 13.6513 4.32464 13.5267 4.19999C13.402 4.07534 13.233 4.00531 13.0567 4.00531C12.8804 4.00531 12.7113 4.07534 12.5867 4.19999L6.00002 10.78Z" fill="white"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-primary">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pcNotifications}
                      onChange={(e) => setPcNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "h-5 w-5 rounded flex items-center justify-center transition-colors",
                      pcNotifications ? "bg-teal-secondary" : "bg-gray-200"
                    )}>
                      {pcNotifications && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.00002 10.78L3.68668 8.46666C3.56203 8.34201 3.39297 8.27198 3.21668 8.27198C3.0404 8.27198 2.87133 8.34201 2.74668 8.46666C2.62203 8.59131 2.552 8.76037 2.552 8.93666C2.552 9.02394 2.56919 9.11038 2.6026 9.19102C2.636 9.27166 2.68496 9.34494 2.74668 9.40666L5.53335 12.1933C5.79335 12.4533 6.21335 12.4533 6.47335 12.1933L13.5267 5.13999C13.6513 5.01534 13.7214 4.84627 13.7214 4.66999C13.7214 4.49371 13.6513 4.32464 13.5267 4.19999C13.402 4.07534 13.233 4.00531 13.0567 4.00531C12.8804 4.00531 12.7113 4.07534 12.5867 4.19999L6.00002 10.78Z" fill="white"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-primary">PC</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={appNotifications}
                      onChange={(e) => setAppNotifications(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "h-5 w-5 rounded flex items-center justify-center transition-colors",
                      appNotifications ? "bg-teal-secondary" : "bg-gray-200"
                    )}>
                      {appNotifications && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.00002 10.78L3.68668 8.46666C3.56203 8.34201 3.39297 8.27198 3.21668 8.27198C3.0404 8.27198 2.87133 8.34201 2.74668 8.46666C2.62203 8.59131 2.552 8.76037 2.552 8.93666C2.552 9.02394 2.56919 9.11038 2.6026 9.19102C2.636 9.27166 2.68496 9.34494 2.74668 9.40666L5.53335 12.1933C5.79335 12.4533 6.21335 12.4533 6.47335 12.1933L13.5267 5.13999C13.6513 5.01534 13.7214 4.84627 13.7214 4.66999C13.7214 4.49371 13.6513 4.32464 13.5267 4.19999C13.402 4.07534 13.233 4.00531 13.0567 4.00531C12.8804 4.00531 12.7113 4.07534 12.5867 4.19999L6.00002 10.78Z" fill="white"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-primary">App</span>
                  </label>
                </div>
              </div>

              {/* Notifications Tone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2_2286)">
                        <path d="M9.8108 4.99078C8.54325 4.06177 7.24275 2.91675 6.31716 1.52836L5.50688 0.312985C5.33522 0.0555009 5.01525 -0.0591554 4.71792 0.0300946C4.4213 0.120048 4.21875 0.393329 4.21875 0.703032V11.7348C3.80344 11.4926 3.32705 11.3437 2.8125 11.3437C1.26136 11.3437 0 12.605 0 14.1562C0 15.7073 1.26136 16.9686 2.8125 16.9686C4.36364 16.9686 5.625 15.7073 5.625 14.1561V3.01167C6.61856 4.26755 7.86141 5.30527 8.97928 6.12511C9.52856 6.52749 9.84375 7.14825 9.84375 7.82799C9.84375 8.99114 8.89753 9.93736 7.73438 9.93736C7.34573 9.93736 7.03125 10.2518 7.03125 10.6405C7.03125 11.0291 7.34573 11.3436 7.73438 11.3436C9.6728 11.3436 11.25 9.76641 11.25 7.82799C11.25 6.71217 10.7123 5.652 9.8108 4.99078Z" fill="#3AC2CB"/>
                        <path d="M23.1039 5.7454L13.1664 8.55789C12.8643 8.64443 12.6562 8.92043 12.6562 9.23425V18.766C12.2409 18.5238 11.7645 18.3749 11.25 18.3749C9.69886 18.3749 8.4375 19.6362 8.4375 21.1874C8.4375 22.7385 9.69886 23.9999 11.25 23.9999C12.8011 23.9999 14.0625 22.7385 14.0625 21.1874C14.0625 21.0271 14.0625 12.5774 14.0625 12.5774L22.5938 10.1666V15.9535C22.1784 15.7113 21.702 15.5624 21.1875 15.5624C19.6364 15.5624 18.375 16.8237 18.375 18.3749C18.375 19.926 19.6364 21.1874 21.1875 21.1874C22.7386 21.1874 24 19.926 24 18.3749C24 18.2146 24 6.42175 24 6.42175C24 5.95671 23.5552 5.61794 23.1039 5.7454Z" fill="#3AC2CB"/>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-primary">Notifications Tone</h4>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="notificationTone"
                      value="no"
                      checked={notificationTone === "no"}
                      onChange={(e) => setNotificationTone(e.target.value)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                      notificationTone === "no" ? "border-teal-secondary bg-teal-secondary" : "border-gray-muted"
                    )}>
                      {notificationTone === "no" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-sm text-gray-primary">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="notificationTone"
                      value="pullout"
                      checked={notificationTone === "pullout"}
                      onChange={(e) => setNotificationTone(e.target.value)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                      notificationTone === "pullout" ? "border-teal-secondary bg-teal-secondary" : "border-gray-muted"
                    )}>
                      {notificationTone === "pullout" && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="text-sm text-gray-primary">Pull out</span>
                  </label>
                </div>
              </div>

              {/* Tabby instalments */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-primary mb-1">Tabby instalments</h4>
                  <p className="text-xs text-gray-muted">
                    6.325% + 1.15 (VAT included) , <span className="font-bold">Refund</span> 6.325% + 1.15 (Vat included)
                  </p>
                </div>
                {/* Toggle Switch */}
                <div className="relative">
                  <button
                    onClick={() => setTabbyInstalments(!tabbyInstalments)}
                    className={cn(
                      "h-6 w-11 rounded-full transition-all duration-200 relative",
                      tabbyInstalments ? "bg-primary" : "bg-gray-300"
                    )}
                  >
                    <div className={cn(
                      "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-200",
                      tabbyInstalments ? "right-0.5" : "left-0.5"
                    )} />
                  </button>
                </div>
              </div>

              {/* Country and Contact Info */}
              <div className="grid grid-cols-1 gap-[30px]">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-primary">Country</label>
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded border border-gray-border-light px-3 py-2.5 text-sm text-gray-muted focus:border-primary focus:outline-none"
                  >
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-primary">Email</label>
                    <div className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-l border border-r-0 border-gray-border-light px-3 py-2.5 text-sm text-gray-primary focus:border-primary focus:outline-none"
                      />
                      <div className="flex items-center rounded-r border border-l-0 border-gray-border-light bg-gray-50 px-3 text-sm text-primary">
                        Verified
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-primary">Phone</label>
                    <div className="flex">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 rounded-l border border-r-0 border-gray-border-light px-3 py-2.5 text-sm text-gray-muted focus:border-primary focus:outline-none"
                      />
                      <div className="flex items-center rounded-r border border-l-0 border-gray-border-light bg-gray-50 px-3 text-sm text-red-error">
                        Verify
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Info Section */}
            <div className="mt-[30px] border-t border-gray-border-light pt-[30px]">
              {/* Logo Upload */}
              <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="h-[100px] w-[100px] rounded-lg bg-gradient-to-br from-teal-light to-teal flex items-center justify-center">
                  <img src="/assets/logo.svg" alt="LOGO" className="w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-4">
                    <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 shadow">
                      Upload Your Logo
                    </button>
                    <button className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
                      Reset
                    </button>
                  </div>
                  <p className="text-sm text-gray-muted">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>

              {/* Business Card Preview */}
              <div className="mb-6 w-[400px] rounded-lg bg-white shadow">
                <div className="rounded-t-lg bg-blue-50 p-5">
                  <h4 className="text-lg font-medium text-blue-600">{businessName}</h4>
                  <p className="text-sm text-green-600">Storename.name.com</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-muted">
                    {businessDescription}
                  </p>
                </div>
              </div>

              {/* Business Details Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ex : Flowers Store"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-lg border border-gray-border-light px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Ex : A store specializing in the sale of natural roses and fast delivery within hours"
                  rows={3}
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className="w-full rounded-lg border border-gray-border-light px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end gap-3">
              <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                Save
              </button>
              <button className="rounded-lg bg-primary/17 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/25">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Selection Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-primary mb-2">Change profile</h3>
              <p className="text-sm text-gray-muted">Click on Avatar you like</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar.id)}
                  className={cn(
                    "h-20 w-20 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-200",
                    selectedAvatar === avatar.id
                      ? "border-primary scale-110"
                      : "border-transparent hover:border-primary hover:scale-105"
                  )}
                >
                  <img src={avatar.src} alt={`Avatar ${avatar.id}`} className="h-full w-full object-cover rounded-full" />
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAvatarModal(false)}
                className="flex-1 rounded-lg bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAvatarModal(false)}
                className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verification Success Card - Similar to Figma design */}
      {isPasswordVerified && (
        <div className="fixed bottom-6 right-6 bg-primary rounded-lg p-4 text-white shadow-lg z-40">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-white flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="#3AC2CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-medium">Verified</span>
          </div>
        </div>
      )}
    </div>
  );
}
