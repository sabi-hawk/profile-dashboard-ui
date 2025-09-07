import { cn } from "@/lib/utils";

interface Avatar {
  id: number;
  src: string;
}

interface AvatarModalProps {
  isOpen: boolean;
  avatars: Avatar[];
  selectedAvatar: number;
  onAvatarSelect: (avatarId: number) => void;
  onClose: () => void;
}

export function AvatarModal({ isOpen, avatars, selectedAvatar, onAvatarSelect, onClose }: AvatarModalProps) {
  if (!isOpen) return null;

  return (
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
              onClick={() => onAvatarSelect(avatar.id)}
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
            onClick={onClose}
            className="flex-1 rounded-lg bg-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
