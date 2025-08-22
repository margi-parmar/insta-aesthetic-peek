import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";
import post4 from "@/assets/post4.jpg";
import post5 from "@/assets/post5.jpg";
import post6 from "@/assets/post6.jpg";

const PostGrid = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const posts = [
    { id: 1, image: post1, isReel: false },
    { id: 2, image: post2, isReel: true },
    { id: 3, image: post3, isReel: false },
    { id: 4, image: post4, isReel: true },
    { id: 5, image: post5, isReel: false },
    { id: 6, image: post6, isReel: true },
  ];

  useEffect(() => {
    if (selectedPost?.isReel && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedPost]);

  const PostModal = ({ post }: { post: any }) => (
    <DialogContent className="max-w-4xl p-0 bg-black border-0">
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={() => setSelectedPost(null)}
        >
          <X className="w-6 h-6" />
        </Button>
        
        {post.isReel ? (
          <video
            ref={videoRef}
            src={post.image}
            className="max-h-full max-w-full object-contain"
            controls
            autoPlay
            loop
            muted
          />
        ) : (
          <img 
            src={post.image} 
            alt="Post" 
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>
    </DialogContent>
  );

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2 p-4">
      {posts.map((post) => (
        <Dialog key={post.id}>
          <DialogTrigger asChild>
            <div className="relative aspect-square cursor-pointer group overflow-hidden rounded-sm">
              <img 
                src={post.image} 
                alt="Post" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {post.isReel ? (
                  <Play className="w-8 h-8 text-white" />
                ) : (
                  <Image className="w-8 h-8 text-white" />
                )}
              </div>
              
              {/* Reel Indicator */}
              {post.isReel && (
                <div className="absolute top-2 right-2">
                  <Play className="w-4 h-4 text-white drop-shadow-lg" />
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