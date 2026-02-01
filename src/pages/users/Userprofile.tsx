// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { motion } from "framer-motion";
// // import useAuth from "@/auth/store";
// // import { useState } from "react";

// // function Userprofile() {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const user = useAuth((state) => state.user);
// //   return (
// //     <div className="p-6 max-w-3xl mx-auto space-y-8">
// //       {/* Heading */}
// //       <motion.h1
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="text-3xl font-bold text-center"
// //       >
// //         User Profile
// //       </motion.h1>

// //       {/* Profile Card */}
// //       <Card className="rounded-2xl shadow-md p-6">
// //         <CardHeader>
// //           <CardTitle className="text-xl font-semibold">
// //             Profile Information
// //           </CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-6">
// //           {/* Avatar */}
// //           <div className="flex flex-col items-center gap-3">
// //             <Avatar className="w-28 h-28 border shadow-md">
// //               <AvatarImage src="https://api.dicebear.com/7.x/thumbs/svg?seed=user" />
// //               <AvatarFallback>U</AvatarFallback>
// //             </Avatar>
// //             <Button variant="outline" className="rounded-xl px-5">
// //               Change Picture
// //             </Button>
// //           </div>

// //           {/* User Details */}
// //           {!isEditing ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div className="space-y-2">
// //                 <Label htmlFor="name">Full Name</Label>
// //                 <Input
// //                   id="name"
// //                   value={user?.name}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="email">Email</Label>
// //                 <Input
// //                   id="email"
// //                   value={user?.email}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="provider">Provider</Label>
// //                 <Input
// //                   id="provider"
// //                   value={user?.provider}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="enabled">Enabled</Label>
// //                 <Input
// //                   id="enabled"
// //                   value={user?.enabled ? "Yes" : "No"}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div className="space-y-2">
// //                 <Label htmlFor="name">Full Name</Label>
// //                 <Input
// //                   id="name"
// //                   value={user?.name}
// //                   onChange={(e) => {}}
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="email">Email</Label>
// //                 <Input
// //                   id="email"
// //                   value={user?.email}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="provider">Provider</Label>
// //                 <Input
// //                   id="provider"
// //                   value={user?.provider}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="enabled">Enabled</Label>
// //                 <Input
// //                   id="enabled"
// //                   value={user?.enabled ? "Yes" : "No"}
// //                   readOnly
// //                   className="rounded-xl"
// //                 />
// //               </div>
// //             </div>
// //           )}

// //           {!isEditing ? (
// //             <Button
// //               onClick={() => setIsEditing(true)}
// //               className="w-full rounded-2xl mt-4 text-lg"
// //             >
// //               Edit Profile
// //             </Button>
// //           ) : (
// //             <div className="flex gap-3 mt-4">
// //               <Button
// //                 className="rounded-2xl w-full"
// //                 onClick={() => setIsEditing(false)}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button
// //                 className="rounded-2xl w-full"
// //                 onClick={() => {
// //                   /* save handler */
// //                 }}
// //               >
// //                 Save
// //               </Button>
// //             </div>
// //           )}
// //         </CardContent>
// //       </Card>

// //       {/* Additional Section */}
// //       <Card className="rounded-2xl shadow-md p-6">
// //         <CardHeader>
// //           <CardTitle className="text-xl">Account Settings</CardTitle>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <Button
// //             variant="outline"
// //             className="w-full rounded-xl py-3 text-base"
// //           >
// //             Change Password
// //           </Button>
// //           <Button
// //             variant="destructive"
// //             className="w-full rounded-xl py-3 text-base"
// //           >
// //             Delete Account
// //           </Button>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// // export default Userprofile;
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { motion } from "framer-motion";
// import useAuth from "@/auth/store";
// import { useState } from "react";

// function Userprofile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const user = useAuth((state) => state.user);

//   return (
//     <div className="relative min-h-screen bg-[#070b12] text-white overflow-hidden p-6">

//       {/* 🌌 Background Effects */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-[160px] rounded-full" />
//       <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full" />
//       <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] [background-size:70px_70px]" />

//       <div className="relative z-10 max-w-3xl mx-auto space-y-10">

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-4xl font-bold text-cyan-400 text-center"
//         >
//           Profile Control Panel
//         </motion.h1>

//         {/* Profile Card */}
//         <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_-10px_rgba(0,255,255,0.3)] p-6">
//           <CardHeader>
//             <CardTitle className="text-xl text-cyan-400 text-center">
//               Account Information
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="space-y-8">

//             {/* Avatar */}
//             <div className="flex flex-col items-center gap-3">
//               <Avatar className="w-28 h-28 border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
//                 <AvatarImage src="https://api.dicebear.com/7.x/thumbs/svg?seed=user" />
//                 <AvatarFallback>U</AvatarFallback>
//               </Avatar>
//               <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
//                 Change Picture
//               </Button>
//             </div>

//             {/* Info Fields */}
//             {!isEditing ? (
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label>Full Name</Label>
//                   <Input value={user?.name} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//                 <div>
//                   <Label>Email</Label>
//                   <Input value={user?.email} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//                 <div>
//                   <Label>Provider</Label>
//                   <Input value={user?.provider} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//                 <div>
//                   <Label>Status</Label>
//                   <Input value={user?.enabled ? "Active" : "Disabled"} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//               </div>
//             ) : (
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label>Full Name</Label>
//                   <Input value={user?.name} className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//                 <div>
//                   <Label>Email</Label>
//                   <Input value={user?.email} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
//                 </div>
//               </div>
//             )}

//             {/* Buttons */}
//             {!isEditing ? (
//               <Button
//                 onClick={() => setIsEditing(true)}
//                 className="w-full rounded-2xl text-lg bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
//               >
//                 Edit Profile
//               </Button>
//             ) : (
//               <div className="flex gap-4">
//                 <Button variant="outline" className="w-full border-cyan-400 text-cyan-400" onClick={() => setIsEditing(false)}>
//                   Cancel
//                 </Button>
//                 <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
//                   Save
//                 </Button>
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Settings */}
//         <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl shadow-lg p-6">
//           <CardHeader>
//             <CardTitle className="text-xl text-cyan-400">Security Settings</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
//               Change Password
//             </Button>
//             <Button variant="destructive" className="w-full">
//               Delete Account
//             </Button>
//           </CardContent>
//         </Card>

//       </div>
//     </div>
//   );
// }

// export default Userprofile;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import useAuth from "@/auth/store";
import { useState } from "react";

function Userprofile() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAuth((state) => state.user);

  return (
    <div className="p-6 space-y-10 text-white">

      <motion.h1 className="text-4xl font-bold text-cyan-400">Profile Control Panel</motion.h1>

      <Card className="relative bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }} transition={{ duration: 4, repeat: Infinity }} />
        <CardHeader>
          <CardTitle className="text-cyan-400 text-center">Account Information</CardTitle>
        </CardHeader>

        <CardContent className="relative space-y-8 p-6">
          <div className="flex flex-col items-center gap-3">
            <Avatar className="w-28 h-28 border border-cyan-400/20">
              <AvatarImage src="https://api.dicebear.com/7.x/thumbs/svg?seed=user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input value={user?.name} readOnly={!isEditing} className="bg-black/30 border-cyan-400/20 text-white" />
            </div>
            <div>
              <Label>Email</Label>
              <Input value={user?.email} readOnly className="bg-black/30 border-cyan-400/20 text-white" />
            </div>
          </div>

          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="w-full bg-cyan-500 hover:bg-cyan-600">Edit Profile</Button>
          ) : (
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600">Save</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Userprofile;
