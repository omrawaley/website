import React from "react";

// export default function RGBIcon() {
//   return (
//     <div className="relative h-16 w-16 overflow-hidden rounded-xl group cursor-pointer">
//       {/* The Rotating Gradient Background */}
//       <div className="absolute inset-0 scale-150 bg-[conic-gradient(from_0deg,#ff0000,#ff8800,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)]" />

//       {/* The Mask / Foreground Content */}
//       <div className="absolute inset-[4px] bg-bg rounded-[10px] flex items-center justify-center">
//         {/* Replace this text with your logo, SVG, or initials */}
//         <span className="text-muted font-bold text-lg tracking-wider">OR</span>
//       </div>
//     </div>
//   );
// }

export default function RGBIcon() {
  return (
    /* The outer container clips the rotating shape into a clean square icon */
    <div className="relative h-16 w-full overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* The full-bleed rotating gradient */}
      <div className="absolute inset-0 scale-150 animate-spin-slow bg-[conic-gradient(from_0deg,#ff0000,#ff8800,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)]" />
    </div>
  );
}

// export default function RGBIcon() {
//   return (
//     /* Outer container: Clips everything into a clean 16x16 square */
//     <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-black shadow-lg cursor-pointer">
//       {/* The Cloud Canvas:
//         - Larger than the container (w-24 h-24) to cover edges while spinning
//         - Centered using top-1/2 left-1/2 and translates
//         - Uses v4 inline arbitrary background for the 4 radial gradients
//       */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 blur-md animate-spin [animation-duration:10s] bg-[radial-gradient(circle_at_20%_20%,#ff007f_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#00f2fe_0%,transparent_50%),radial-gradient(circle_at_20%_80%,#4facfe_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#f9d423_0%,transparent_50%)]" />
//     </div>
//   );
// }
