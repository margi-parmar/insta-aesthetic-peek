import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const profileAvatar = '/lovable-uploads/6a919feb-5b34-4839-abda-6aa2bd6ac5ba.png';

const ProfileHeader = () => {
  return (
    <div className="bg-black text-white p-6">
      {/* Mobile & Desktop Layout Combined */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
        <Avatar className="w-24 h-24 md:w-32 md:h-32">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback className="bg-gray-700 text-white">PS</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          {/* Username and Follow Button */}
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <h1 className="text-xl md:text-2xl font-light text-white">PrathmeshSoni25</h1>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-gray-600 text-white hover:bg-gray-500 border-none w-fit"
            >
              Follow
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex space-x-8 text-sm md:text-base">
            <span className="text-white"><strong>478</strong> followers</span>
            <span className="text-white"><strong>757</strong> following</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-4 space-y-1">
        <h2 className="font-semibold text-white">Prathmesh Soni ❤️ 🔥</h2>
        <p className="text-white">Libra</p>
        <p className="text-white">人生の戦い</p>
        <a 
          href="https://soniprathmesh.com/" 
          className="text-white hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          soniprathmesh.com
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;