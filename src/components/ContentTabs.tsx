import { Grid3X3, Bookmark } from "lucide-react";
import PostGrid from "./PostGrid";

const ContentTabs = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Grid3X3 className="w-5 h-5" />
        <span className="ml-2 text-sm font-medium">POSTS</span>
      </div>

      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Bookmark className="w-12 h-12 text-muted-foreground mb-4" />
        <span className="hidden sm:ml-2 sm:inline">SAVED</span>
      </div>

      <div className="mt-0">
        <PostGrid />
      </div>
    </div>
  );
};

export default ContentTabs;