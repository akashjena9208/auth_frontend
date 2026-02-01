import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { motion } from "framer-motion";
import useAuth from "@/auth/store";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const user = useAuth((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "" });

  // useEffect(() => {
  //   if (user) setFormData({ name: user.name || "" });
  // }, [user]);
  useEffect(() => {
  if (user) {
    Promise.resolve().then(() => {
      setFormData({ name: user.name || "" });
    });
  }
}, [user]);

  const handleSave = () => {
    console.log("Saved:", formData);
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen px-4 py-8 flex justify-center">
      {/* subtle futuristic background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="w-full max-w-4xl space-y-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-bold text-center"
        >
          Profile Information
        </motion.h1>

        {/* PROFILE CARD */}
        <Card className="rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              User Details
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-3">
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border border-white/20 shadow-lg">
                <AvatarImage src="https://api.dicebear.com/7.x/thumbs/svg?seed=user" />
                <AvatarFallback>
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="rounded-xl">
                Change Picture
              </Button>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  value={isEditing ? formData.name : user?.name || ""}
                  readOnly={!isEditing}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={user?.email || ""}
                  readOnly
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label>Provider</Label>
                <Input
                  value={user?.provider || ""}
                  readOnly
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <Input
                  value={user?.enabled ? "Enabled" : "Disabled"}
                  readOnly
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* ACTION BAR */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end border-t border-white/10 pt-6">
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="rounded-2xl px-8 text-base"
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="rounded-2xl w-full sm:w-auto"
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={handleSave}
                    className="rounded-2xl w-full sm:w-auto shadow-lg shadow-green-500/40 hover:shadow-green-500/70 transition"
                  >
                    Save Changes
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* ACCOUNT SETTINGS */}
        <Card className="rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Account Settings
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full rounded-xl py-3"
            >
              Change Password
            </Button>
            <Button
              variant="destructive"
              className="w-full rounded-xl py-3"
            >
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

