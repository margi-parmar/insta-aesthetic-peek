import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Settings } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Mobile Layout */}
      <div className="flex items-center space-x-4 md:hidden">
        <Avatar className="w-20 h-20 story-gradient p-0.5">
          <div className="w-full h-full bg-background rounded-full p-0.5">
            <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
            <AvatarFallback>JD</AvatarFallback>
          </div>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-xl font-semibold">jane.doe</h1>
            <Badge variant="secondary" className="text-xs">✓</Badge>
          </div>
          <div className="flex space-x-4 text-sm">
            <span><strong>1,234</strong> posts</span>
            <span><strong>12.5K</strong> followers</span>
            <span><strong>987</strong> following</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center space-x-8">
        <Avatar className="w-32 h-32 story-gradient p-1">
          <div className="w-full h-full bg-background rounded-full p-1">
            <AvatarImage src={profileAvatar} alt="Profile" className="rounded-full" />
            <AvatarFallback>JD</AvatarFallback>
          </div>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-light">jane.doe</h1>
            <Badge variant="secondary">✓</Badge>
            <Button variant="secondary" size="sm">Following</Button>
            <Button variant="outline" size="sm">Message</Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex space-x-8">
            <span><strong>1,234</strong> posts</span>
            <span><strong>12.5K</strong> followers</span>
            <span><strong>987</strong> following</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-2">
        <h2 className="font-semibold">Jane Doe</h2>
        <p className="text-muted-foreground">Creative Director & Photographer</p>
        <p className="text-muted-foreground">📍 San Francisco, CA</p>
        <p className="text-muted-foreground">✨ Capturing life's beautiful moments</p>
        <a href="#" className="text-primary hover:underline">linktr.ee/jane.doe</a>
      </div>

      {/* Story Highlights */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {["Travel", "Food", "Work", "Art"].map((highlight) => (
          <div key={highlight} className="flex-shrink-0 text-center">
            <div className="w-16 h-16 rounded-full story-gradient p-0.5 hover-scale cursor-pointer">
              <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">{highlight}</span>
              </div>
            </div>
            <p className="text-xs mt-1 text-muted-foreground">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;