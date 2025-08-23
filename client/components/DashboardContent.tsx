import { useState } from "react";
import { ChangeProfile } from "./ChangeProfile";
import { ChangePassword } from "./ChangePassword";
import { PersonalDetails } from "./PersonalDetails";
import { BusinessSection } from "./BusinessSection";
import { AvatarModal } from "./AvatarModal";
import { VerificationCard } from "./VerificationCard";

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

interface DashboardContentProps {
  selectedAvatar: number;
  onAvatarChange: (avatarId: number) => void;
  customAvatarUrl: string | null;
  onCustomAvatarChange: (url: string | null) => void;
}

export function DashboardContent({ selectedAvatar, onAvatarChange, customAvatarUrl, onCustomAvatarChange }: DashboardContentProps) {
  const [activeTab, setActiveTab] = useState("account");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  
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

  // Handle avatar selection
  const handleAvatarSelect = (avatarId: number) => {
    onAvatarChange(avatarId);
    setShowAvatarModal(false);
  };

  // Handle file upload for avatar
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const uploadedAvatarUrl = e.target?.result as string;
      onCustomAvatarChange(uploadedAvatarUrl);
      console.log("File uploaded:", file.name);
    };
    reader.readAsDataURL(file);
  };

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
                className={`flex items-center gap-2.5 border-b px-4 py-4 text-sm font-medium ${
                  tab.id === activeTab
                    ? "border-primary text-primary"
                    : "border-transparent text-primary hover:text-primary/80"
                }`}
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
            <ChangeProfile
              selectedAvatar={selectedAvatar}
              onAvatarChange={onAvatarChange}
              onShowAvatarModal={() => setShowAvatarModal(true)}
              onFileUpload={handleFileUpload}
              customAvatarUrl={customAvatarUrl}
              onClearCustomAvatar={() => onCustomAvatarChange(null)}
            />
            
            <ChangePassword
              currentPassword={currentPassword}
              newPassword={newPassword}
              onCurrentPasswordChange={setCurrentPassword}
              onNewPasswordChange={setNewPassword}
              passwordStrength={passwordStrength}
              isPasswordVerified={isPasswordVerified}
              onPasswordStrengthChange={setPasswordStrength}
              onPasswordVerifiedChange={setIsPasswordVerified}
            />
          </div>

          {/* Personal Details Section */}
          <PersonalDetails
            nickName={nickName}
            emailNotifications={emailNotifications}
            pcNotifications={pcNotifications}
            appNotifications={appNotifications}
            notificationTone={notificationTone}
            tabbyInstalments={tabbyInstalments}
            country={country}
            email={email}
            phone={phone}
            onNickNameChange={setNickName}
            onEmailNotificationsChange={setEmailNotifications}
            onPcNotificationsChange={setPcNotifications}
            onAppNotificationsChange={setAppNotifications}
            onNotificationToneChange={setNotificationTone}
            onTabbyInstalmentsChange={setTabbyInstalments}
            onCountryChange={setCountry}
            onEmailChange={setEmail}
            onPhoneChange={setPhone}
          />

          {/* Business Section */}
          <BusinessSection />

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

      {/* Avatar Selection Modal */}
      <AvatarModal
        isOpen={showAvatarModal}
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        onAvatarSelect={handleAvatarSelect}
        onClose={() => setShowAvatarModal(false)}
      />

      {/* Verification Success Card */}
      <VerificationCard 
        isVisible={isPasswordVerified} 
        onHide={() => setIsPasswordVerified(false)} 
      />
    </div>
  );
}
