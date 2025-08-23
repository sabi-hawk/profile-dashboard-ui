import { cn } from "@/lib/utils";

interface PersonalDetailsProps {
  nickName: string;
  emailNotifications: boolean;
  pcNotifications: boolean;
  appNotifications: boolean;
  notificationTone: string;
  tabbyInstalments: boolean;
  country: string;
  email: string;
  phone: string;
  onNickNameChange: (value: string) => void;
  onEmailNotificationsChange: (value: boolean) => void;
  onPcNotificationsChange: (value: boolean) => void;
  onAppNotificationsChange: (value: boolean) => void;
  onNotificationToneChange: (value: string) => void;
  onTabbyInstalmentsChange: (value: boolean) => void;
  onCountryChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

export function PersonalDetails({
  nickName,
  emailNotifications,
  pcNotifications,
  appNotifications,
  notificationTone,
  tabbyInstalments,
  country,
  email,
  phone,
  onNickNameChange,
  onEmailNotificationsChange,
  onPcNotificationsChange,
  onAppNotificationsChange,
  onNotificationToneChange,
  onTabbyInstalmentsChange,
  onCountryChange,
  onEmailChange,
  onPhoneChange
}: PersonalDetailsProps) {
  return (
    <div className="rounded-xl border border-gray-border-light bg-white p-[30px] shadow-sm mb-[30px]">
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
            onChange={(e) => onNickNameChange(e.target.value)}
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
                onChange={(e) => onEmailNotificationsChange(e.target.checked)}
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
                onChange={(e) => onPcNotificationsChange(e.target.checked)}
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
                onChange={(e) => onAppNotificationsChange(e.target.checked)}
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
                onChange={(e) => onNotificationToneChange(e.target.value)}
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
                onChange={(e) => onNotificationToneChange(e.target.value)}
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
              onClick={() => onTabbyInstalmentsChange(!tabbyInstalments)}
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
              onChange={(e) => onCountryChange(e.target.value)}
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
                  onChange={(e) => onEmailChange(e.target.value)}
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
                  onChange={(e) => onPhoneChange(e.target.value)}
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
    </div>
  );
}
