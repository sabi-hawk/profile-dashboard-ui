interface VerificationCardProps {
  isVisible: boolean;
}

export function VerificationCard({ isVisible }: VerificationCardProps) {
  if (!isVisible) return null;

  return (
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
  );
}
