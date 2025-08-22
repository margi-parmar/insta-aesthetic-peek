import ProfileHeader from "@/components/ProfileHeader";
import ContentTabs from "@/components/ContentTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />
        <ContentTabs />
      </div>
    </div>
  );
};

export default Index;
