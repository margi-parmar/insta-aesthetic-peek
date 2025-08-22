import { Grid3X3, Bookmark } from "lucide-react";
import PostGrid from "./PostGrid";

const ContentTabs = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-4 border-t border-border">
        <Grid3X3 className="w-5 h-5" />
        <span className="ml-2 mr-2 text-sm font-medium">POSTS</span>

        <Bookmark className="ml-2 w-5 h-5 text-muted-foreground" />
        <span className="ml-2 text-sm font-medium text-muted-foreground">SAVED</span>
      </div>

      <div className="mt-0">
        <PostGrid />
      </div>
    </div>
  );
};

export default ContentTabs;
