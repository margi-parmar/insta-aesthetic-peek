const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-8 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
          <a href="#" className="hover:text-foreground">Meta</a>
          <a href="#" className="hover:text-foreground">About</a>
          <a href="#" className="hover:text-foreground">Blog</a>
          <a href="#" className="hover:text-foreground">Jobs</a>
          <a href="#" className="hover:text-foreground">Help</a>
          <a href="#" className="hover:text-foreground">API</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Locations</a>
          <a href="#" className="hover:text-foreground">Instagram Lite</a>
          <a href="#" className="hover:text-foreground">Threads</a>
          <a href="#" className="hover:text-foreground">Contact Uploading & Non-Users</a>
          <a href="#" className="hover:text-foreground">Meta Verified</a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>English</span>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;