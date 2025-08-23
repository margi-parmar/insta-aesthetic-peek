import ProfileHeader from "@/components/ProfileHeader";
import ContentTabs from "@/components/ContentTabs";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />
        <ContentTabs />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
