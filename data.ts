import { Project } from './types';

export const projects: Project[] = [
  // --- SHORT FORM ---
  {
    id: 1,
    title: "Neon Nights Drift",
    client: "SpeedHunters",
    category: "Short Form", 
    thumbnail: "https://picsum.photos/800/450?random=20",
    aspectRatio: '16:9',
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
    stats: {
      timeline: "48 Hours",
      grading: "Teal & Orange LUT",
      audio: "Engine SFX Layering"
    },
    description: "Raw footage was incredibly shaky and dark. We stabilized every shot, applied a custom heavy-contrast grade, and completely rebuilt the soundscape using library engine noises to match the revs.",
    tools: ["DaVinci Resolve", "After Effects"]
  },
  {
    id: 3,
    title: "Tech Launch",
    client: "Apex Gear",
    category: "Short Form",
    thumbnail: "https://picsum.photos/800/450?random=22",
    aspectRatio: '16:9',
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    stats: {
      timeline: "24 Hours",
      grading: "Clean / High Key",
      audio: "Upbeat Corporate"
    },
    description: "Fast-paced editing synced to the beat. We used dynamic zoom transitions and motion-tracked text overlays to highlight product features without boring the viewer.",
    tools: ["After Effects", "Cinema 4D"]
  },
  {
    id: 5,
    title: "Fitness Promo",
    client: "LiftLife",
    category: "Short Form",
    thumbnail: "https://picsum.photos/400/700?random=24", 
    aspectRatio: '9:16',
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    stats: {
      timeline: "12 Hours",
      grading: "Gritty B&W",
      audio: "Heavy Bass Trap"
    },
    description: "High energy, short retention editing. We used speed ramping (slow-mo to fast) to emphasize the intensity of the workout movements.",
    tools: ["Premiere Pro", "CapCut"]
  },
  {
    id: 7,
    title: "Valorant Montage",
    client: "ProGamerX",
    category: "Short Form",
    thumbnail: "https://picsum.photos/900/400?random=26", 
    aspectRatio: '21:9',
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    stats: {
      timeline: "15 Hours",
      grading: "Cyberpunk Glow",
      audio: "Bass Boosted Sync"
    },
    description: "Beat-synced fragmovie. Heavily used velocity manipulation (Twixtor) and 3D camera mapping for kill feeds.",
    tools: ["After Effects", "Sapphire Plugins"]
  },

  // --- LONG FORM ---
  {
    id: 101,
    title: "Podcast / Interview",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/HRaB4tE0c2g/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=HRaB4tE0c2g",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 102,
    title: "Documentary Style",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/6QICTiLN2rc/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=6QICTiLN2rc",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 103,
    title: "Vlog Edit",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/Jryk7owJQlQ/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=Jryk7owJQlQ",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 104,
    title: "Narrative Story",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/v_kOHdncOTo/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=v_kOHdncOTo",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 105,
    title: "Event Coverage",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/kAZ73e8_DdU/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=kAZ73e8_DdU",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 106,
    title: "Cinematic Reel",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/5AggIZz_aTA/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=5AggIZz_aTA",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },
  {
    id: 107,
    title: "Featurette",
    client: "Client Work",
    category: "Long Form",
    thumbnail: "https://img.youtube.com/vi/MOTBO8--7fA/maxresdefault.jpg",
    aspectRatio: '16:9',
    externalLink: "https://www.youtube.com/watch?v=MOTBO8--7fA",
    stats: { timeline: "N/A", grading: "N/A", audio: "N/A" },
    description: "Long form content editing.",
    tools: ["Premiere Pro"]
  },

  // --- GRAPHIC DESIGN ---
  { id: 201, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=19q_vqBr8tNhmTzV8Gl9Br_UznqsLHFws&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 202, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1E1HUXiBIlwUZ-446nEPrF5iJ9dT9ce_V&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 203, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1GYXzMe-DizulrISw9UINyqtk-MuAxUtO&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 204, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1IMfondei_WSS16QpBI-JmY1NtjqfW3rf&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 205, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1Kk65h4I2fZp1OxKT-Vc7CzizYHs_9IfO&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 206, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1OFuneo88R7BsEVJT_xH7IGqaSaFP1SR3&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 207, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1R9TOsoSnES2DElmwT491bd6Y9KV4LFP3&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 208, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1XcgoptivG_AIaKLeNbD0-aFWfViCO_7T&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 209, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1XfaiWKGCjRTjwVGs99GVGdkUNvoZ2DV2&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 210, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1Yr7cUqSII0kRo-7ZC-U-Dv2o3gmEkYnW&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 211, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1Z9majxbMqI2hql9bF46GxnrOBebG3QYc&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 212, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1bxT-VcYJt1KniGSG_XHDXa6ES15cuvyt&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 213, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1kZBkqJdZQ5Xr02eR2knJzSuppiKp8JjA&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 214, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1s-gZwdKU2EB1DHHvR_URUz24WW-0Sb1w&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 215, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=11Ap1uCvZ8sep7WReOI8goM3urUb-Thiq&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 216, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=11czR4LOKBLWutI_okyAw13-hRBfX257k&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 217, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=15teLL1mZOXbfhFItKLulMRhYT0yzDxkN&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 218, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1G3bajayQzNsk5-Qskcs6hlfwnjzMmIa_&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 219, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1GHSnWWqK_BGWIt4PMyvXXDTMduQ4EO-v&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 220, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1H31D7Rfp1RPYXcXEI1Y7XNi_H_yLc3Rv&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 221, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1U9lutCM2Wj6d9GNv-i5OwabhGJtQByXs&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 222, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1ZglJ6UpY_SUV0doOPbgwhO4_Vrpzt8Ok&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 223, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1_pmtzI6uTXbcjlXKFUnHylacPt651-Fl&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },
  { id: 224, title: "Design Work", client: "Client", category: "Graphic Design", thumbnail: "https://drive.google.com/thumbnail?id=1eBpoDZIfmnp-UKq6v89YLxjDw13_LfXC&sz=w800", aspectRatio: "16:9", stats: { timeline: "N/A", grading: "N/A", audio: "N/A" }, description: "Graphic Design Portfolio", tools: ["Photoshop"] },

  // --- OTHER CATEGORIES ---
  {
    id: 4,
    title: "Summer Fest",
    client: "Vibe Nation",
    category: "Creative Services",
    thumbnail: "https://picsum.photos/800/800?random=23",
    aspectRatio: '1:1',
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    stats: {
      timeline: "72 Hours",
      grading: "Vibrant / Neon",
      audio: "Live Set Master"
    },
    description: "Multi-cam edit from 6 different camera angles. We synced the live audio board feed with crowd noise to make the viewer feel like they are front row.",
    tools: ["Premiere Pro", "PluralEyes"]
  }
];
