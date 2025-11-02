import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PrimaryDomain, SecDomain } from "@/components/ui/domains";
import { useEffect, useState } from "react";

interface ProfileData {
  username: string;
  followers: string;
  following: string;
  name: string;
  description: string;
  externalLink: string;
  externalLinkText: string;
  profileIcon: string;
}

const ProfileHeader = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams(window.location.search);

        const f_username = params.get("username")?.replace('null', '');
        const f_url = params.get("url")?.replace('null', '');

        const response = await fetch('https://instacapture-v2.vercel.app/api/profile_post', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username: f_username, url: f_url })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProfileData(data);
        setError(null);
      } catch (err) {
        /*
        ### How to Use This Feature

        You can create your own clone profile page on **Instacapture** using a JSON response in the format shown below.

        #### Steps:

        1. **Choose your URL format**

          * Use `@username` format:

            ```
            https://instacapture.stuffs.me/@<username>
            ```

            Example:

            ```
            https://instacapture.stuffs.me/@prathmeshsoni
            ```

          * Or, use any external source URL:

            ```
            https://instacapture.stuffs.me/?url=https://example.com
            ```

        2. **Ensure the response returns JSON** in the following format:

          ```json
          {
            "username": "PrathmeshSoni25",
            "followers": "505",
            "following": "1051",
            "name": "Prathmesh Soni ❤‍🔥",
            "description": "𝕃𝕚𝕓𝕣𝕒\n人生の戦い",
            "externalLink": "https://yourdomain.com/",
            "externalLinkText": "yourdomain.com",
            "profileIcon": "https://krishna.yourdomain.com/instacapture/assets/images/home/Look-At-Her.jpg",
            "posts": [
              {
                "is_video": false,
                "url": "https://instacapture.stuffs.me/uploads/post/ee-sala-cup-namde.jpg?password=mypost-2509",
                "is_type": "pinned",
                "cover_photo": ""
              },
              {
                "is_video": false,
                "url": "https://instacapture.stuffs.me/uploads/post/lol.jpg?password=mypost-2509",
                "is_type": "multi",
                "cover_photo": ""
              },
              {
                "is_video": true,
                "url": "https://instacapture.stuffs.me/uploads/post/Udaipurs.mp4?password=mypost-2509",
                "is_type": "reel",
                "cover_photo": "https://instacapture.stuffs.me/uploads/post/Udaipur.jpg?password=mypost-2509"
              }
            ]
          }
          ```

        3. **Explanation of fields:**
          * `username`: Your profile username.
          * `followers`: Number of followers.
          * `following`: Number of accounts you follow.
          * `name`: Your full name.
          * `description`: Your bio/description (use `\n` for line breaks).
          * `externalLink`: A link to your website or other social media.
          * `externalLinkText`: Text to display for the external link.
          * `profileIcon`: URL to your profile picture.
          * `posts`: An array of your posts with the following details for each post:
            * `is_video`: `true` if the post is a video, otherwise `false`.
            * `url`: Direct link to the image or video.
            * `is_type`: Type of post (`pinned`, `multi`, `reel`, etc.).
            * `cover_photo`: Thumbnail/cover image for videos (optional for images).

        Once the JSON response is set correctly, your profile page will display your posts automatically. ✅

        */
        console.error('Error fetching profile data:', err);
        setError('Failed to load profile data');
        // Fallback to default data
        setProfileData({
          username: 'PrathmeshSoni25',
          followers: '505',
          following: '1051',
          name: 'Prathmesh Soni ❤‍🔥',
          description: '𝕃𝕚𝕓𝕣𝕒\n人生の戦い',
          externalLink: `https://${PrimaryDomain}/`,
          externalLinkText: PrimaryDomain,
          profileIcon: `https://krishna.${SecDomain}/instacapture/assets/images/home/Look-At-Her.jpg`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col space-y-6 p-4 md:p-6 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-muted rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-muted rounded w-48" />
            <div className="h-4 bg-muted rounded w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="flex flex-col space-y-6 p-4 md:p-6">
        <p className="text-muted-foreground">No profile data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6 p-4 md:p-6">
      {/* Mobile Layout */}
      <div className="flex items-center space-x-4 md:hidden">
        <Avatar className="w-20 h-20 cursor-pointer">
          <AvatarImage src={profileData.profileIcon} alt="Profile" className="rounded-full" />
          <AvatarFallback>{profileData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-xl font-semibold">{profileData.username}</h1>
            <svg
              aria-label="Verified"
              className="x1lliihq x1n2onr6"
              fill="rgb(0, 149, 246)"
              height="18"
              role="img"
              viewBox="0 0 40 40"
              width="18"
            >
              <title>Verified</title>
              <path
                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex space-x-4 text-sm">
            <span><strong>{profileData.followers}</strong> followers</span>
            <span><strong>{profileData.following}</strong> following</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center space-x-8">
        <Avatar className="w-32 h-32 cursor-pointer">
          <AvatarImage src={profileData.profileIcon} alt="Profile" className="rounded-full" />
          <AvatarFallback>{profileData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-light">{profileData.username}</h1>
            <svg
              aria-label="Verified"
              className="x1lliihq x1n2onr6 mx-1"
              fill="rgb(0, 149, 246)"
              height="18"
              role="img"
              viewBox="0 0 40 40"
              width="18"
            >
              <title>Verified</title>
              <path
                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                fillRule="evenodd"
              />
            </svg>
            <Button
              className="mx-2" variant="outline" size="sm"
              onClick={() => window.open(`https://instacapture.${SecDomain}/@prathmeshsoni25`, '_blank')}
            >
              Follow
            </Button>
          </div>
          
          <div className="flex space-x-8">
            <span><strong>{profileData.followers}</strong> followers</span>
            <span><strong>{profileData.following}</strong> following</span>
          </div>
        </div>
      </div>
      
      {/* Follow Button for Mobile */}
      <div className="md:hidden mt-4">
        <Button 
          variant="outline" className="w-full"
          onClick={() => window.open(`https://instacapture.${SecDomain}/@prathmeshsoni25`, '_blank')}
        >
          Follow
        </Button>
      </div>

      {/* Bio Section */}
      <div>
        <h2 className="font-semibold">{profileData.name}</h2>
        {profileData.description.split('\n').map((line, index) => (
          <p key={index} className="text-muted-foreground">{line}</p>
        ))}
        {profileData.externalLink && (
          <a href={profileData.externalLink} className="text-blue-500 hover:underline dis-ruby-text" target="_blank" rel="noopener noreferrer">
            <svg
              aria-label="Link icon"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="12"
              width="12"
              className="mr-5px"
            >
              <title>Link icon</title>
              <path
                d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                x1="8.471"
                y1="15.529"
                x2="15.529"
                y2="8.471"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {profileData.externalLinkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
