import { Home, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SecDomain } from "@/components/ui/domains";


const profileAvatar = `https://krishna.${SecDomain}/instacapture/assets/images/home/Prathmesh-Soni.png`;
const isAdmin = new URLSearchParams(window.location.search).get('admin') === 'yes';
const redirectPath = isAdmin ? `https://instacapture.${SecDomain}/prathmeshsoni25/1/` : `https://instacapture.${SecDomain}/admin/`;


const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2 flex justify-around items-center z-50">
      <button 
        className="p-2 hover:bg-accent rounded-lg transition-colors"
        onClick={() => window.open(`https://instacapture.${SecDomain}/@prathmeshsoni25`, '_blank')}
      >
        <Home className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <Search className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <svg
          aria-label="Reels"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Reels</title>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="2.049"
            x2="21.95"
            y1="7.002"
            y2="7.002"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="13.504"
            x2="16.362"
            y1="2.001"
            y2="7.002"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="7.207"
            x2="10.002"
            y1="2.11"
            y2="7.002"
          />
          <path
            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
        <svg
          aria-label="Messenger"
          className="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Messenger</title>
          <path
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
          />
          <path
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
            fillRule="evenodd"
          />
        </svg>
        <div className="absolute topss bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          10+
        </div>
      </button>
      <button 
        className="p-2 hover:bg-accent rounded-lg transition-colors"
        onClick={() => window.open(redirectPath, '_blank')}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-r flex items-center justify-center">
        <Avatar className="w-7 h-7">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback>PDSO</AvatarFallback>
        </Avatar>
        </div>
      </button>
    </div>
  );
};

export default BottomNav;