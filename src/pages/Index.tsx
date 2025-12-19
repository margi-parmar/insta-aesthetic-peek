import { useEffect, useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ContentTabs from "@/components/ContentTabs";
import BottomNav from "@/components/BottomNav";
import { PrimaryDomain, SecDomain } from "@/components/ui/domains";

const Index = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      let DefaultData = {
        username: 'PrathmeshSoni25',
        followers: '505',
        following: '1051',
        name: 'Prathmesh Soni ❤‍🔥',
        description: '𝕃𝕚𝕓𝕣𝕒\n人生の戦い',
        externalLink: `https://${PrimaryDomain}/`,
        externalLinkText: PrimaryDomain,
        profileIcon: `https://krishna.${SecDomain}/instacapture/assets/images/home/Look-At-Her.jpg`,
        posts: [
          {
            is_video: false, 
            is_type: "pinned", 
            cover_photo: "",
            url: "https://instacapture.stuffs.me/uploads/post/ee-sala-cup-namde.jpg?password=mypost-2509"
          },
          {
            is_video: false, 
            is_type: "multi", 
            cover_photo: "",
            url: "https://instacapture.stuffs.me/uploads/post/lol.jpg?password=mypost-2509"
          },
          {
            is_video: true, 
            is_type: "reel",
            url: "https://instacapture.stuffs.me/uploads/post/Udaipurs.mp4?password=mypost-2509",
            cover_photo: "https://instacapture.stuffs.me/uploads/post/Udaipur.jpg?password=mypost-2509"
          }
        ]
      }
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
          body: JSON.stringify({ username: f_username, url: f_url})
        }); 
        
        const data = await response.json();
        const expectedFields = [
          'username', 'followers', 'following', 'name',
          'description', 'externalLink', 'externalLinkText', 'profileIcon'
        ];
        for (const field of expectedFields) {
          if (!(field in data)) {
            data[field] = DefaultData[field];
          }
        }

        setProfileData(data);
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
        setProfileData(DefaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (profileData && profileData.name) {
      document.title = `${profileData.name} (@${profileData.username}) • Instacapture`;
    }
  }, [profileData]);

  if (loading) {
    const profileData1 = {isLoading: true};
    const profileData2 = {posts: [{isLoading: true}]};
    return (
      <div className="min-h-screen bg-background pb-16">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader profileData={profileData1} />
          <ContentTabs data={profileData2} />
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader profileData={profileData} />
        <ContentTabs data={profileData} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
