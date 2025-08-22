import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, Play, Bookmark, User } from "lucide-react";
import PostGrid from "./PostGrid";

const ContentTabs = () => {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="grid w-full grid-cols-4 h-12 bg-transparent border-t">
        <TabsTrigger 
          value="posts" 
          className="data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none border-t-2 border-transparent"
        >
          <Grid3X3 className="w-5 h-5" />
          <span className="hidden sm:ml-2 sm:inline">POSTS</span>
        </TabsTrigger>
        <TabsTrigger 
          value="reels"
          className="data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none border-t-2 border-transparent"
        >
          <Play className="w-5 h-5" />
          <span className="hidden sm:ml-2 sm:inline">REELS</span>
        </TabsTrigger>
        <TabsTrigger 
          value="saved"
          className="data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none border-t-2 border-transparent"
        >
          <Bookmark className="w-5 h-5" />
          <span className="hidden sm:ml-2 sm:inline">SAVED</span>
        </TabsTrigger>
        <TabsTrigger 
          value="tagged"
          className="data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none border-t-2 border-transparent"
        >
          <User className="w-5 h-5" />
          <span className="hidden sm:ml-2 sm:inline">TAGGED</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="posts" className="mt-0">
        <PostGrid type="posts" />
      </TabsContent>
      
      <TabsContent value="reels" className="mt-0">
        <PostGrid type="reels" />
      </TabsContent>
      
      <TabsContent value="saved" className="mt-0">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Bookmark className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No saved posts yet</h3>
          <p className="text-muted-foreground">When you save posts, you'll see them here.</p>
        </div>
      </TabsContent>
      
      <TabsContent value="tagged" className="mt-0">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <User className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No tagged posts</h3>
          <p className="text-muted-foreground">When people tag you in photos, they'll appear here.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ContentTabs;