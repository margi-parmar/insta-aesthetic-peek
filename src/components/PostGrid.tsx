import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";
import post4 from "@/assets/post4.jpg";
import post5 from "@/assets/post5.jpg";
import post6 from "@/assets/post6.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface PostGridProps {
  type: "posts" | "reels";
}

const PostGrid = ({ type }: PostGridProps) => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    { id: 1, image: post1, likes: 234, comments: 12, isReel: false },
    { id: 2, image: post2, likes: 567, comments: 23, isReel: type === "reels" },
    { id: 3, image: post3, likes: 123, comments: 8, isReel: false },
    { id: 4, image: post4, likes: 890, comments: 45, isReel: type === "reels" },
    { id: 5, image: post5, likes: 345, comments: 19, isReel: false },
    { id: 6, image: post6, likes: 678, comments: 34, isReel: type === "reels" },
  ];

  const filteredPosts = type === "reels" ? posts.filter(post => post.isReel) : posts.filter(post => !post.isReel);

  const PostModal = ({ post }: { post: any }) => (
    <DialogContent className="max-w-5xl p-0 bg-background">
      <div className="flex flex-col md:flex-row h-[80vh]">
        {/* Image Section */}
        <div className="flex-1 bg-black flex items-center justify-center relative">
          <img 
            src={post.image} 
            alt="Post" 
            className="max-h-full max-w-full object-contain"
          />
          {post.isReel && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-16 h-16 bg-black/50 hover:bg-black/70">
                <Play className="w-8 h-8 text-white ml-1" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Details Section */}
        <div className="w-full md:w-96 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={profileAvatar} alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-semibold">jane.doe</span>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Comments */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={profileAvatar} alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">jane.doe</span>
                <span className="ml-2">Beautiful moment captured! ✨ #photography #aesthetic</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">alice_brown</span>
                <span className="ml-2">Love this! 😍</span>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="p-4 border-t space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="p-0 hover-glow">
                  <Heart className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="sm" className="p-0">
                  <MessageCircle className="w-6 h-6" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="p-0">
                <Bookmark className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="text-sm font-semibold">{post.likes.toLocaleString()} likes</div>
            <div className="text-xs text-muted-foreground">2 hours ago</div>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2">
      {filteredPosts.map((post) => (
        <Dialog key={post.id}>
          <DialogTrigger asChild>
            <div className="relative aspect-square cursor-pointer group overflow-hidden">
              <img 
                src={post.image} 
                alt="Post" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>
              
              {/* Reel Indicator */}
              {post.isReel && (
                <div className="absolute top-2 right-2">
                  <Play className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
              )}
            </div>
          </DialogTrigger>
          <PostModal post={post} />
        </Dialog>
      ))}
    </div>
  );
};

export default PostGrid;