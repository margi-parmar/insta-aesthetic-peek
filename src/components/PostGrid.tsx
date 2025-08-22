import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  is_video: boolean;
  url: string;
}

const PostGrid = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Dummy data for showcase
  useEffect(() => {
    const dummyPosts: Post[] = [
      { is_video: false, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" },
      { is_video: true, url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" },
      { is_video: false, url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop" },
      { is_video: true, url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" },
      { is_video: false, url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=400&fit=crop" },
      { is_video: false, url: "https://images.unsplash.com/photo-1494790108755-2616c9f4d93e?w=400&h=400&fit=crop" },
    ];
    setPosts(dummyPosts);
  }, []);

  useEffect(() => {
    if (selectedPost?.is_video && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedPost]);

  const PostModal = ({ post }: { post: Post }) => (
    <DialogContent className="max-w-4xl p-0 bg-black border-0">
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 bg-black/50 rounded-full w-10 h-10 p-0"
          onClick={() => setSelectedPost(null)}
        >
          <X className="w-6 h-6" />
        </Button>
        
        {post.is_video ? (
          <video
            ref={videoRef}
            src={post.url}
            className="max-h-full max-w-full object-contain"
            controls
            autoPlay
            loop
            muted
          />
        ) : (
          <img 
            src={post.url} 
            alt="Post" 
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>
    </DialogContent>
  );

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2 p-4">
      {posts.map((post, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="relative aspect-square cursor-pointer group overflow-hidden rounded-sm">
              <img 
                src={post.url} 
                alt="Post" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {post.is_video ? (
                  <Play className="w-8 h-8 text-white" />
                ) : (
                  <Image className="w-8 h-8 text-white" />
                )}
              </div>
              
              {/* Reel Indicator */}
              {post.is_video && (
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