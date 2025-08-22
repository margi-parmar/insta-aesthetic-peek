import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  is_video: boolean;
  url: string;
  cover_photo?: string;
}

const PostGrid = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        let urls = "https://instacapture.stuffs.me/api/posts/@prathmeshsoni";
        const response = await fetch(urls);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
        // Fallback to dummy data on error
        const dummyPosts: Post[] = [
          { is_video: false, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" },
          { is_video: true, url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", cover_photo: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop" },
          { is_video: false, url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop" },
          { is_video: true, url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4", cover_photo: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=400&fit=crop" },
          { is_video: false, url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=400&fit=crop" },
          { is_video: false, url: "https://images.unsplash.com/photo-1494790108755-2616c9f4d93e?w=400&h=400&fit=crop" },
        ];
        setPosts(dummyPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-1 md:gap-2 p-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-square bg-muted animate-pulse rounded-sm" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <p>{error}</p>
        <p className="text-sm mt-2">Showing fallback content</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2 p-4">
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
            </div>
          </DialogTrigger>
          {selectedPost === post && <PostModal post={post} />}
        </Dialog>
      ))}
    </div>
  );
};

export default PostGrid;