import { useState } from "react";

interface ChangeProfileProps {
  selectedAvatar: number;
  onAvatarChange: (avatarId: number) => void;
  onShowAvatarModal: () => void;
  onFileUpload: (file: File) => void;
  customAvatarUrl?: string | null;
  onClearCustomAvatar?: () => void;
}

export function ChangeProfile({ selectedAvatar, onAvatarChange, onShowAvatarModal, onFileUpload, customAvatarUrl, onClearCustomAvatar }: ChangeProfileProps) {
  return (
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
                    {customAvatarUrl ? (
                      <img 
                        src={customAvatarUrl}
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img 
                        src={`/assets/avatar-${selectedAvatar}.png`}
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-6">
                  <label className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onFileUpload(file);
                      }}
                      className="hidden"
                    />
                    Your Files
                  </label>
          <button 
            onClick={onShowAvatarModal}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Avatars
          </button>
                                <button 
                        onClick={() => {
                          onAvatarChange(1);
                          // Clear custom avatar when resetting
                          if (onClearCustomAvatar) {
                            onClearCustomAvatar();
                          }
                        }}
                        className="rounded-lg px-4 py-2.5 text-sm font-medium text-teal-700 hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: 'rgba(58, 194, 203, 0.17)' }}
                      >
                        Reset
                      </button>
        </div>

        <p className="text-center text-sm text-gray-muted">
          Allowed JPG, GIF or PNG. Max size of 800K
        </p>
      </div>
    </div>
  );
}
