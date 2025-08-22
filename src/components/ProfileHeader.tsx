import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col space-y-6 p-4 md:p-6">
      {/* Mobile Layout */}
      <div className="flex items-center space-x-4 md:hidden">
        <Avatar className="w-20 h-20">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-xl font-semibold">jane.doe</h1>
            <Badge variant="secondary" className="text-xs">✓</Badge>
          </div>
          <div className="flex space-x-4 text-sm">
            <span><strong>12.5K</strong> followers</span>
            <span><strong>987</strong> following</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center space-x-8">
        <Avatar className="w-32 h-32">
          <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-light">jane.doe</h1>
            <Badge variant="secondary">✓</Badge>
            <Button variant="outline" size="sm">Follow</Button>
          </div>
          
          <div className="flex space-x-8">
            <span><strong>12.5K</strong> followers</span>
            <span><strong>987</strong> following</span>
          </div>
        </div>
      </div>
      
      {/* Follow Button for Mobile */}
      <div className="md:hidden mt-4">
        <Button variant="outline" className="w-full">Follow</Button>
      </div>

      {/* Bio Section */}
      <div className="space-y-2">
        <h2 className="font-semibold">Jane Doe</h2>
        <p className="text-muted-foreground">Creative Director & Photographer</p>
        <p className="text-muted-foreground">📍 San Francisco, CA</p>
        <p className="text-muted-foreground">✨ Capturing life's beautiful moments</p>
        <a href="#" className="text-primary hover:underline">linktr.ee/jane.doe</a>
      </div>
    </div>
  );
};

export default ProfileHeader;