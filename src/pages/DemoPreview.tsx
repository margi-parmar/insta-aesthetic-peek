import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Post {
  url: string;
  is_video: boolean;
  cover_photo: string;
  is_type: "reel" | "multi" | "pinned" | "none";
}

interface UserData {
  username: string;
  followers: string;
  following: string;
  name: string;
  description: string;
  externalLink: string;
  externalLinkText: string;
  profileIcon: string;
  posts: Post[];
}

const DemoPreview = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "username",
    followers: "0",
    following: "0", 
    name: "Name",
    description: "Bio description",
    externalLink: "",
    externalLinkText: "",
    profileIcon: "",
    posts: []
  });

  const addPost = () => {
    setUserData(prev => ({
      ...prev,
      posts: [...prev.posts, {
        url: "",
        is_video: false,
        cover_photo: "",
        is_type: "none"
      }]
    }));
  };

  const updatePost = (index: number, field: keyof Post, value: any) => {
    setUserData(prev => ({
      ...prev,
      posts: prev.posts.map((post, i) => 
        i === index ? { ...post, [field]: value } : post
      )
    }));
  };

  const removePost = (index: number) => {
    setUserData(prev => ({
      ...prev,
      posts: prev.posts.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Clone Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={userData.username}
                      onChange={(e) => setUserData(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={userData.name}
                      onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Display Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="followers">Followers Count</Label>
                    <Input
                      id="followers"
                      value={userData.followers}
                      onChange={(e) => setUserData(prev => ({ ...prev, followers: e.target.value }))}
                      placeholder="100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="following">Following Count</Label>
                    <Input
                      id="following"
                      value={userData.following}
                      onChange={(e) => setUserData(prev => ({ ...prev, following: e.target.value }))}
                      placeholder="150"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={userData.description}
                    onChange={(e) => setUserData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Bio description..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="externalLink">External Link</Label>
                    <Input
                      id="externalLink"
                      value={userData.externalLink}
                      onChange={(e) => setUserData(prev => ({ ...prev, externalLink: e.target.value }))}
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="externalLinkText">Link Text</Label>
                    <Input
                      id="externalLinkText"
                      value={userData.externalLinkText}
                      onChange={(e) => setUserData(prev => ({ ...prev, externalLinkText: e.target.value }))}
                      placeholder="example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="profileIcon">Profile Icon URL</Label>
                  <Input
                    id="profileIcon"
                    value={userData.profileIcon}
                    onChange={(e) => setUserData(prev => ({ ...prev, profileIcon: e.target.value }))}
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Posts Section */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Posts</CardTitle>
                  <Button onClick={addPost}>Add Post</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {userData.posts.map((post, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Post {index + 1}</span>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => removePost(index)}
                      >
                        Remove
                      </Button>
                    </div>
                    
                    <div>
                      <Label>Image/Video URL</Label>
                      <Input
                        value={post.url}
                        onChange={(e) => updatePost(index, 'url', e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <Label>Cover Photo URL</Label>
                      <Input
                        value={post.cover_photo}
                        onChange={(e) => updatePost(index, 'cover_photo', e.target.value)}
                        placeholder="https://example.com/cover.jpg"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`video-${index}`}
                        checked={post.is_video}
                        onCheckedChange={(checked) => updatePost(index, 'is_video', checked)}
                      />
                      <Label htmlFor={`video-${index}`}>Is Video</Label>
                    </div>

                    <div>
                      <Label>Post Type</Label>
                      <Select 
                        value={post.is_type} 
                        onValueChange={(value) => updatePost(index, 'is_type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="reel">Reel</SelectItem>
                          <SelectItem value="multi">Multi</SelectItem>
                          <SelectItem value="pinned">Pinned</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-4 lg:h-fit">
            <Card className="max-w-sm mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Phone-like Preview */}
                <div className="bg-black text-white rounded-lg p-4 max-w-sm mx-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={userData.profileIcon} alt="Profile" />
                        <AvatarFallback>{userData.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="font-semibold text-sm">{userData.username}</h2>
                        <div className="flex space-x-4 text-xs text-gray-300">
                          <span><strong>{userData.followers}</strong> followers</span>
                          <span><strong>{userData.following}</strong> following</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Follow
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  {/* Bio */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm">{userData.name}</h3>
                    <p className="text-xs text-gray-300 mt-1">{userData.description}</p>
                    {userData.externalLink && (
                      <a 
                        href={userData.externalLink} 
                        className="text-blue-400 text-xs hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.externalLinkText || userData.externalLink}
                      </a>
                    )}
                  </div>

                  <Separator className="my-4" />

                  {/* Posts Grid */}
                  <div className="grid grid-cols-3 gap-1">
                    {userData.posts.map((post, index) => (
                      <div key={index} className="aspect-square bg-gray-800 relative rounded">
                        {post.cover_photo ? (
                          <img 
                            src={post.cover_photo} 
                            alt={`Post ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                        
                        {/* Post type indicators */}
                        <div className="absolute top-1 right-1 flex space-x-1">
                          {post.is_video && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded">
                              ▶
                            </div>
                          )}
                          {post.is_type === "reel" && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded">
                              R
                            </div>
                          )}
                          {post.is_type === "multi" && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded">
                              ⊞
                            </div>
                          )}
                          {post.is_type === "pinned" && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded">
                              📌
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;