import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Image, X } from "lucide-react";

interface Post {
  is_video: boolean;
  url: string;
  cover_photo?: string;
  is_type?: "reel" | "multi" | "pinned" | "none";
}

interface PostGridProps {
  posts: any[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selectedPost?.is_video && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedPost]);

  const PostModal = ({ post }: { post: Post }) => (
    <DialogContent className="max-w-4xl p-0 bg-black border-0" onOpenAutoFocus={(e) => e.preventDefault()}>
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <button 
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPost(null);
          }}
        >
          <X className="w-6 h-6" />
        </button>
        
        {post.is_video ? (
          <video
            ref={videoRef}
            src={post.url}
            className="max-h-full max-w-full object-contain rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            style={{ background: 'transparent' }}
          />
        ) : (
          <img 
            src={post.url} 
            alt="Post" 
            className="max-h-full max-w-full object-contain rounded-lg"
          />
        )}
      </div>
    </DialogContent>
  );

  if (posts[0]?.isLoading) {
    return (
      <div className="grid grid-cols-3 gap-1 md:gap-2 p-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-square bg-muted animate-pulse rounded-sm" />
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <p>No posts available</p>
        <p className="text-sm mt-2">Sorry, there are no posts to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2 p-1">
      {posts.map((post, index) => (
        <Dialog key={index} open={selectedPost === post} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogTrigger asChild>
            <div 
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-sm"
              onClick={() => setSelectedPost(post)}
            >
              <img 
                src={post.is_video && post.cover_photo ? post.cover_photo : post.url} 
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
              {post.is_type === 'pinned' && (
                <div className="absolute top-2 right-2">
                  <svg
                    aria-label="Pinned post icon"
                    className="x1lliihq x1n2onr6 x9bdzbf"
                    fill="currentColor"
                    height="22"
                    role="img"
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <title>Pinned post icon</title>
                    <path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z" />
                  </svg>
                </div>
              )}

              {post.is_type === 'multi' && (
                <div className="absolute top-2 right-2">
                  <svg
                    aria-label="Carousel"
                    className="x1lliihq x1n2onr6 x9bdzbf"
                    fill="currentColor"
                    height="22"
                    role="img"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <title>Carousel</title>
                    <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z" />
                  </svg>
                </div>
              )}

              {post.is_type === 'reel' && (
                <div className="absolute top-2 right-2">
                  <svg
                    aria-label="Clip"
                    className="x1lliihq x1n2onr6 x9bdzbf"
                    fill="currentColor"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <title>Clip</title>
                    <path
                      d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </DialogTrigger>
          {selectedPost === post && <PostModal post={post} />}
        </Dialog>
      ))}
    </div>
  );
};

export default PostGrid;
