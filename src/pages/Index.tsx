import ProfileHeader from "@/components/ProfileHeader";
import ContentTabs from "@/components/ContentTabs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />
        <ContentTabs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
