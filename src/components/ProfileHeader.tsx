import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const profileAvatar = 'https://krishna.stuffs.me/instacapture/assets/images/home/Look-At-Her.jpg';

const ProfileHeader = () => {
  return (
    <div className="bg-black text-white p-4 md:p-6">
      {/* Main Profile Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20 md:w-24 md:h-24">
            <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
            <AvatarFallback>PDSO</AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <h1 className="text-xl md:text-2xl font-normal text-white">PrathmeshSoni25</h1>
              <svg
                aria-label="Verified"
                fill="rgb(0, 149, 246)"
                height="18"
                role="img"
                viewBox="0 0 40 40"
                width="18"
              >
                <title>Verified</title>
                <path
                  d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex space-x-6 text-sm text-white">
              <span><strong>478</strong> followers</span>
              <span><strong>757</strong> following</span>
            </div>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="bg-gray-600 border-gray-600 text-white hover:bg-gray-700">
          Follow
        </Button>
      </div>

      {/* Bio Section */}
      <div className="space-y-1">
        <h2 className="font-semibold text-white">Prathmesh Soni ❤️‍🔥</h2>
        <p className="text-blue-400">Libra</p>
        <p className="text-gray-300">人生の戦い</p>
        <a href="https://soniprathmesh.com/" className="text-blue-400 hover:underline" target="_blank">soniprathmesh.com</a>
      </div>
    </div>
  );
};

export default ProfileHeader;