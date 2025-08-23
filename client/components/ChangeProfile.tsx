import { useState } from "react";

interface ChangeProfileProps {
  selectedAvatar: number;
  onAvatarChange: (avatarId: number) => void;
  onShowAvatarModal: () => void;
}

export function ChangeProfile({ selectedAvatar, onAvatarChange, onShowAvatarModal }: ChangeProfileProps) {
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
            onClick={onShowAvatarModal}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Avatars
          </button>
          <button 
            onClick={() => onAvatarChange(1)}
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
  );
}
