import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2 flex justify-around items-center md:hidden z-50">
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <Home className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <Search className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <PlusSquare className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
        <Heart className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          10+
        </div>
      </button>
      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </button>
    </div>
  );
};

export default BottomNav;