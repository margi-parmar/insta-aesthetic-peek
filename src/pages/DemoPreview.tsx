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
import { Upload, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
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
  const [profileIconInputType, setProfileIconInputType] = useState<'text' | 'file'>('text');
  const [postInputTypes, setPostInputTypes] = useState<{[key: number]: {url: 'text' | 'file', cover: 'text' | 'file'}}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFileUpload = (file: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        callback(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const togglePostInputType = (index: number, field: 'url' | 'cover') => {
    setPostInputTypes(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: prev[index]?.[field] === 'text' ? 'file' : 'text'
      }
    }));
  };

  const getPostInputType = (index: number, field: 'url' | 'cover'): 'text' | 'file' => {
    return postInputTypes[index]?.[field] || 'text';
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://instacapture-v2.vercel.app/api/profile_submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      
      if (result.url) {
        toast({
          title: "Success!",
          description: `Profile created successfully! URL: ${result.url}`,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to create profile",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit profile",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="profileIcon">Profile Icon</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setProfileIconInputType(prev => prev === 'text' ? 'file' : 'text')}
                    >
                      {profileIconInputType === 'text' ? <Upload className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                      {profileIconInputType === 'text' ? 'Switch to File' : 'Switch to URL'}
                    </Button>
                  </div>
                  {profileIconInputType === 'text' ? (
                    <Input
                      id="profileIcon"
                      value={userData.profileIcon}
                      onChange={(e) => setUserData(prev => ({ ...prev, profileIcon: e.target.value }))}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  ) : (
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileUpload(file, (url) => 
                            setUserData(prev => ({ ...prev, profileIcon: url }))
                          );
                        }
                      }}
                    />
                  )}
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
                      <div className="flex items-center justify-between mb-2">
                        <Label>Image/Video URL</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => togglePostInputType(index, 'url')}
                        >
                          {getPostInputType(index, 'url') === 'text' ? <Upload className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                          {getPostInputType(index, 'url') === 'text' ? 'File' : 'URL'}
                        </Button>
                      </div>
                      {getPostInputType(index, 'url') === 'text' ? (
                        <Input
                          value={post.url}
                          onChange={(e) => updatePost(index, 'url', e.target.value)}
                          placeholder="https://example.com/image.jpg"
                        />
                      ) : (
                        <Input
                          type="file"
                          accept="image/*,video/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileUpload(file, (url) => updatePost(index, 'url', url));
                            }
                          }}
                        />
                      )}
                    </div>

                    {post.is_type !== "multi" || !post.url ? (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label>Cover Photo URL</Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => togglePostInputType(index, 'cover')}
                          >
                            {getPostInputType(index, 'cover') === 'text' ? <Upload className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                            {getPostInputType(index, 'cover') === 'text' ? 'File' : 'URL'}
                          </Button>
                        </div>
                        {getPostInputType(index, 'cover') === 'text' ? (
                          <Input
                            value={post.cover_photo}
                            onChange={(e) => updatePost(index, 'cover_photo', e.target.value)}
                            placeholder="https://example.com/cover.jpg"
                          />
                        ) : (
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleFileUpload(file, (url) => updatePost(index, 'cover_photo', url));
                              }
                            }}
                          />
                        )}
                      </div>
                    ) : null}

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
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                size="lg"
                className="w-full max-w-md"
              >
                {isSubmitting ? "Submitting..." : "Create Profile"}
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-4 lg:h-fit">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Phone-like Preview */}
                <div className="bg-black text-white rounded-lg p-6 w-full min-h-[600px]">
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
                    <p className="text-xs text-gray-300 mt-1 whitespace-pre-wrap">{userData.description}</p>
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
                        {(post.is_type === "multi" && post.url) ? (
                          <img 
                            src={post.url} 
                            alt={`Post ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : post.cover_photo ? (
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
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded flex items-center">
                              <svg aria-label="Clip" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z" fillRule="evenodd"></path>
                              </svg>
                            </div>
                          )}
                          {post.is_type === "multi" && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded flex items-center">
                              <svg aria-label="Carousel" fill="currentColor" height="12" role="img" viewBox="0 0 48 48" width="12">
                                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                              </svg>
                            </div>
                          )}
                          {post.is_type === "pinned" && (
                            <div className="bg-black bg-opacity-60 text-white text-xs px-1 rounded flex items-center">
                              <svg aria-label="Pinned post icon" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z"></path>
                              </svg>
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
