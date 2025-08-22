import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const profileAvatar = 'https://krishna.stuffs.me/instacapture/assets/images/home/Look-At-Her.jpg';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col space-y-6 p-4 md:p-6">
      {/* Mobile Layout */}
      <div className="flex items-center space-x-4 md:hidden">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback>PDSO</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-xl font-semibold">PrathmeshSoni25</h1>
            <svg
              aria-label="Verified"
              className="x1lliihq x1n2onr6"
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
          <div className="flex space-x-4 text-sm">
            <span><strong>505</strong> followers</span>
            <span><strong>1051</strong> following</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center space-x-8">
        <Avatar className="w-32 h-32">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback>PDSO</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-light">PrathmeshSoni25</h1>
            <svg
              aria-label="Verified"
              className="x1lliihq x1n2onr6 mx-1"
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
            <Button className="mx-2" variant="outline" size="sm">Follow</Button>
          </div>
          
          <div className="flex space-x-8">
            <span><strong>505</strong> followers</span>
            <span><strong>1051</strong> following</span>
          </div>
        </div>
      </div>
      
      {/* Follow Button for Mobile */}
      <div className="md:hidden mt-4">
        <Button variant="outline" className="w-full">Follow</Button>
      </div>

      {/* Bio Section */}
      <div>
        <h2 className="font-semibold">Prathmesh Soni ❤‍🔥 </h2>
        <p className="text-muted-foreground">𝕃𝕚𝕓𝕣𝕒</p>
        <p className="text-muted-foreground">人生の戦い</p>
        <a href="https://soniprathmesh.com/" className="text-blue-500 hover:underline" target="_blank">soniprathmesh.com</a>
      </div>
    </div>
  );
};

export default ProfileHeader;