import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ChangePasswordProps {
  currentPassword: string;
  newPassword: string;
  onCurrentPasswordChange: (value: string) => void;
  onNewPasswordChange: (value: string) => void;
  passwordStrength: number;
  isPasswordVerified: boolean;
  onPasswordStrengthChange: (strength: number) => void;
  onPasswordVerifiedChange: (verified: boolean) => void;
}

export function ChangePassword({
  currentPassword,
  newPassword,
  onCurrentPasswordChange,
  onNewPasswordChange,
  passwordStrength,
  isPasswordVerified,
  onPasswordStrengthChange,
  onPasswordVerifiedChange
}: ChangePasswordProps) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startStrengthRef = useRef<number>(0);

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
    
    onPasswordStrengthChange(Math.max(0, Math.min(100, newStrength)));
    
    if (newStrength >= 90) {
      onPasswordVerifiedChange(true);
    }
  };

  const handleSliderMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newStrength = (clickX / rect.width) * 100;
    
    onPasswordStrengthChange(Math.max(0, Math.min(100, newStrength)));
    
    // If dragged to 90% or more, mark as verified
    if (newStrength >= 90) {
      onPasswordVerifiedChange(true);
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
      onPasswordStrengthChange(Math.max(0, Math.min(100, newStrength)));
      
      // If dragged to 90% or more, mark as verified
      if (newStrength >= 90) {
        onPasswordVerifiedChange(true);
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
              type="password"
              value={currentPassword}
              onChange={(e) => onCurrentPasswordChange(e.target.value)}
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
              type="password"
              value={newPassword}
              onChange={(e) => onNewPasswordChange(e.target.value)}
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
  );
}
