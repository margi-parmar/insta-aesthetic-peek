import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const profileAvatar = 'https://krishna.stuffs.me/instacapture/assets/images/home/Look-At-Her.jpg';

const ProfileHeader = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={profileAvatar} alt="Profile" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-normal text-white">PrathmeshSoni25</h1>
            </div>
          </div>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-gray-700 hover:bg-gray-600 text-white border-0 px-6"
          >
            Follow
          </Button>
        </div>

        {/* Stats Section */}
        <div className="flex space-x-6 mb-6">
          <div className="text-center">
            <div className="text-white font-semibold">478</div>
            <div className="text-gray-300 text-sm">followers</div>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold">757</div>
            <div className="text-gray-300 text-sm">following</div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="space-y-1">
          <h2 className="text-white font-normal">Prathmesh Soni ❤️🔥</h2>
          <p className="text-orange-400 font-semibold">Libra</p>
          <p className="text-white">人生の戦い</p>
          <a 
            href="https://soniprathmesh.com/" 
            className="text-blue-400 hover:underline block" 
            target="_blank"
          >
            soniprathmesh.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;