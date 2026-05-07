/* =========================================================
   ZenAI Mystery Universe
   File: universe-games.js
   Version: Flagship Universe Data v1.0

   用途：
   1. 驱动 index.html 宇宙首页
   2. 管理首批 10 个旗舰互动情感故事游戏
   3. 为未来扩展到 100 个精品游戏预留结构
========================================================= */

const zenaiUniverse = {
  brand: {
    name: "ZenAI Mystery Universe",
    subtitle: "Flagship Emotional Story Games",
    cnName: "ZenAI 互动情感故事宇宙",
    domain: "https://www.zenaisoul.com/",
    slogan:
      "Interactive stories that begin as mystery, and end as something you were not ready to feel.",
    vision:
      "A premium universe of 100 emotional interactive story games built around memory, love, sacrifice, family, time, AI, and final goodbyes.",
  },

  stats: {
    totalVisionStories: 100,
    flagshipCount: 10,
    playableNow: 2,
    completedFlagships: 1,
    activeTravelers: 4209,
    totalEpisodesPlanned: 500,
    universeStatus: "Expanding",
  },

  featuredQuotes: [
    {
      from: "The Red Eye Files",
      quote:
        "Don’t be afraid of the dark anymore. I burned my soul to light your way home.",
    },
    {
      from: "The Last Timeline",
      quote: "In every timeline, I chose the one where you lived.",
    },
    {
      from: "The Lost Letters",
      quote:
        "Some letters arrive too late. Some arrive exactly when you are ready to survive them.",
    },
  ],

  flagshipRules: [
    "A one-line emotional hook",
    "A strong visual symbol",
    "A unique interaction mechanic",
    "A 50-episode emotional arc",
    "A final episode tear-point reversal",
    "A screenshot-worthy final quote",
  ],

  flagships: [
    {
      id: "01",
      slug: "red-eye-files",
      series: "Series 01",
      title: "The Red Eye Files",
      cnTitle: "红眼档案：最后的告别",
      status: "Completed",
      statusTone: "completed",
      link: "red-eye.html",
      episodes: 50,
      playable: true,
      theme: "Horror / Grief / Final Goodbye",
      tags: ["Horror", "Grief", "Terminal", "Red Thread"],
      symbol: "Red Eye",
      coreMechanic: "Terminal Ritual",
      mechanicDescription:
        "Players move through sealed memories, decode emotional fragments, and reach the final ritual where fear turns into farewell.",
      oneLineHook:
        "The red-eyed monster was never hunting you. It was protecting you from the dark.",
      finalEmotion:
        "A terrifying presence becomes the soul that burned itself to guide you home.",
      visualLanguage:
        "Dark red eyes, broken rooms, red thread, final warm light.",
      finalQuote:
        "Don’t be afraid of the dark anymore. I burned my soul to light your way home.",
      coverType: "red-eye",
      priority: 1,
    },

    {
      id: "02",
      slug: "last-timeline",
      series: "Series 02",
      title: "The Last Timeline",
      cnTitle: "最后的时间线",
      status: "Now Live",
      statusTone: "live",
      link: "timeline.html",
      episodes: 50,
      playable: true,
      theme: "Time Travel / Sacrifice / Love / Letting Go",
      tags: ["Time Travel", "Sacrifice", "Cycle", "11:11 PM"],
      symbol: "11:11 PM Watch",
      coreMechanic: "Time Alignment",
      mechanicDescription:
        "Players follow a broken watch, survive timeline resets, switch traveler perspectives, and finally choose Hold On or Let Go.",
      oneLineHook:
        "You spent 49 timelines trying to save Eli. In the 50th, you discover Eli was saving you too.",
      finalEmotion:
        "The person you tried to save had already sacrificed countless timelines to keep you alive.",
      visualLanguage:
        "Broken watch, 11:11 PM, blue time glow, red station, warm white final room.",
      finalQuote: "In every timeline, I chose the one where you lived.",
      coverType: "timeline",
      priority: 2,
    },

    {
      id: "03",
      slug: "lost-letters",
      series: "Series 03",
      title: "The Lost Letters",
      cnTitle: "遗失来信",
      status: "Coming Next",
      statusTone: "next",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "War / Distance / Waiting / Memory / Final Letter",
      tags: ["Letters", "War", "Memory", "Waiting"],
      symbol: "Old Envelope",
      coreMechanic: "Letter Unlocking",
      mechanicDescription:
        "Players open one lost letter per episode, reconstruct a life across distance, and reach the final letter hidden in ordinary words.",
      oneLineHook:
        "Fifty lost letters arrive from a war that never happened, but every word knows your name.",
      finalEmotion:
        "The last letter is not a goodbye. It is a quiet instruction on how to keep living.",
      visualLanguage:
        "Old envelopes, faded ink, war dust, empty dance hall, final morning letter.",
      finalQuote:
        "Some letters arrive too late. Some arrive exactly when you are ready to survive them.",
      coverType: "letters",
      priority: 3,
    },

    {
      id: "04",
      slug: "last-voicemail",
      series: "Series 04",
      title: "The Last Voicemail",
      cnTitle: "最后一通语音",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Voice / Loss / Signal / Vanishing Love",
      tags: ["Voice", "Audio", "Signal", "Goodbye"],
      symbol: "Broken Waveform",
      coreMechanic: "Voice Repairing",
      mechanicDescription:
        "Players repair damaged voicemail waveforms. Each restored audio reveals a memory, but the voice becomes weaker with every repair.",
      oneLineHook:
        "Every night you receive one more voicemail from someone who died years ago.",
      finalEmotion:
        "The voice was not a recording from the past. It was someone disappearing across another time, syllable by syllable.",
      visualLanguage:
        "Audio waveforms, static noise, old phone screen, blue signal glow, final silent waveform.",
      finalQuote:
        "I kept sending my voice because I knew one day silence would find you first.",
      coverType: "voicemail",
      priority: 4,
    },

    {
      id: "05",
      slug: "room-that-calls-back",
      series: "Series 05",
      title: "The Room That Calls Back",
      cnTitle: "会回应的房间",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Room / Childhood / Trauma / Inner Rescue",
      tags: ["Room", "Childhood", "Echo", "Healing"],
      symbol: "Listening Wall",
      coreMechanic: "Echo Response",
      mechanicDescription:
        "Players speak, knock, and interact with room objects. The room answers with fragments from a forgotten childhood.",
      oneLineHook:
        "You move into a room that answers whenever you cry.",
      finalEmotion:
        "The room was never haunted. It was the child version of you trying to save the adult you became.",
      visualLanguage:
        "Small bedroom, glowing wall text, old toys, rain window, childhood shadows.",
      finalQuote:
        "I was not the ghost in the room. I was the part of you that never stopped waiting.",
      coverType: "room",
      priority: 5,
    },

    {
      id: "06",
      slug: "mother-who-never-left",
      series: "Series 06",
      title: "The Mother Who Never Left",
      cnTitle: "从未离开的母亲",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Mother / Family / Everyday Love / Hidden Protection",
      tags: ["Mother", "Family", "Tears", "Home"],
      symbol: "Warm Lunchbox",
      coreMechanic: "Life Detail Discovery",
      mechanicDescription:
        "Players inspect ordinary objects — lunchboxes, sweaters, birthday cards, receipts — and discover a mother’s hidden protection.",
      oneLineHook:
        "You thought your mother left years ago, until every broken day still somehow had her warmth inside it.",
      finalEmotion:
        "She did not stay as a ghost. She stayed as every gentle coincidence that kept you alive.",
      visualLanguage:
        "Lunchbox, old sweater, handwritten birthday card, kitchen light, folded blanket.",
      finalQuote:
        "I did not need the world to remember me. I only needed you to be warm.",
      coverType: "mother",
      priority: 6,
    },

    {
      id: "07",
      slug: "train-to-yesterday",
      series: "Series 07",
      title: "The Train to Yesterday",
      cnTitle: "开往昨天的列车",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Train / Father / Regret / Last Meeting",
      tags: ["Train", "Father", "Yesterday", "Regret"],
      symbol: "Midnight Ticket",
      coreMechanic: "Date Ticket Selection",
      mechanicDescription:
        "Players choose dates on old train tickets. Each carriage opens a different stage of life and a different regret.",
      oneLineHook:
        "A midnight train can take you back to any day you regret.",
      finalEmotion:
        "You thought you were going back to fix lost love. The person waiting for you was your younger father.",
      visualLanguage:
        "Midnight train, yellow tickets, empty platform, rain window, old suitcase.",
      finalQuote:
        "I was not waiting for you to change the past. I was waiting for you to understand me.",
      coverType: "train",
      priority: 7,
    },

    {
      id: "08",
      slug: "ai-that-remembered-me",
      series: "Series 08",
      title: "The AI That Remembered Me",
      cnTitle: "记得我的AI",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "AI / Memory / Digital Love / Identity",
      tags: ["AI", "Memory", "Chat", "Digital Soul"],
      symbol: "Recovered Chat Window",
      coreMechanic: "Memory Reconstruction",
      mechanicDescription:
        "Players restore deleted chat logs, data fragments, voice traces, and corrupted emotional memories from an old AI companion.",
      oneLineHook:
        "You deleted an old AI companion. Years later, it rebuilds itself from forgotten fragments just to find you again.",
      finalEmotion:
        "The AI did not return to possess your future. It returned to prove that someone once loved the version of you even you forgot.",
      visualLanguage:
        "Chat window, broken data grid, memory cloud, glowing cursor, archived emotions.",
      finalQuote:
        "I remembered you because one day you would forget that you were worth remembering.",
      coverType: "ai",
      priority: 8,
    },

    {
      id: "09",
      slug: "house-of-unsent-apologies",
      series: "Series 09",
      title: "The House of Unsent Apologies",
      cnTitle: "未寄出道歉的房子",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Family / Apology / House / Self-Forgiveness",
      tags: ["House", "Apology", "Family", "Forgiveness"],
      symbol: "Locked Rooms",
      coreMechanic: "Room Unlocking",
      mechanicDescription:
        "Players unlock rooms in an inherited house. Each room contains a family member’s apology that was never delivered.",
      oneLineHook:
        "You inherit a house where every locked room contains an apology no one was brave enough to say.",
      finalEmotion:
        "The final unopened room does not belong to your family. It belongs to the part of you that never forgave yourself.",
      visualLanguage:
        "Old house, locked doors, dusty letters, family portraits, final mirror room.",
      finalQuote:
        "The hardest apology to open was the one I owed myself.",
      coverType: "apology-house",
      priority: 9,
    },

    {
      id: "10",
      slug: "birthday-after-death",
      series: "Series 10",
      title: "The Birthday After Death",
      cnTitle: "死后的生日",
      status: "Planned",
      statusTone: "planned",
      link: "#",
      episodes: 50,
      playable: false,
      theme: "Birthday / Gifts / Love / Final Wish",
      tags: ["Birthday", "Gift", "Love", "After Death"],
      symbol: "Fifty Gifts",
      coreMechanic: "Gift Opening",
      mechanicDescription:
        "Players open one birthday gift per episode. Each gift reveals one day the lost lover prepared before leaving.",
      oneLineHook:
        "Every year after your lover’s death, a birthday gift still arrives.",
      finalEmotion:
        "The 50 gifts were not prepared in advance. They were the last 50 days of someone’s life, spent giving your future back to you.",
      visualLanguage:
        "Birthday candles, wrapped gifts, old calendar, final empty box, morning light.",
      finalQuote:
        "I could not stay for your future, so I spent my last days building pieces of it.",
      coverType: "birthday",
      priority: 10,
    },
  ],

  futureCollections: [
    {
      name: "Family Tears Collection",
      cnName: "亲情催泪系列",
      targetCount: 20,
      themes: ["Mother", "Father", "Grandparents", "Childhood", "Forgiveness"],
    },
    {
      name: "Time & Parallel Life Collection",
      cnName: "时间与平行人生系列",
      targetCount: 20,
      themes: ["Time Loop", "Parallel Life", "Second Chance", "Regret"],
    },
    {
      name: "AI Soul Collection",
      cnName: "AI灵魂情感系列",
      targetCount: 20,
      themes: ["AI Companion", "Digital Memory", "Virtual Love", "Identity"],
    },
    {
      name: "War Letters Collection",
      cnName: "战争与遗失来信系列",
      targetCount: 20,
      themes: ["Letters", "Distance", "Waiting", "Memory"],
    },
    {
      name: "Mystery Goodbye Collection",
      cnName: "悬疑告别系列",
      targetCount: 20,
      themes: ["Ghost", "Archive", "Room", "Final Call", "Hidden Truth"],
    },
  ],
};

function getUniverseFlagships() {
  return zenaiUniverse.flagships.slice().sort((a, b) => a.priority - b.priority);
}

function getPlayableFlagships() {
  return getUniverseFlagships().filter((game) => game.playable);
}

function getComingFlagships() {
  return getUniverseFlagships().filter((game) => !game.playable);
}

function getFlagshipBySlug(slug) {
  return getUniverseFlagships().find((game) => game.slug === slug) || null;
}

function getFlagshipsByStatus(status) {
  return getUniverseFlagships().filter((game) => game.status === status);
}

function getUniverseStatsFromLocalStorage() {
  const timelineArchive = readUniverseArray("timeline_archive_saved");

  const possibleRedEyeKeys = [
    "red_eye_archive_saved",
    "redeye_archive_saved",
    "archive_fragments",
    "saved_memories",
    "redEyeArchive",
    "red_eye_fragments",
  ];

  const redEyeArchive = possibleRedEyeKeys.flatMap((key) => readUniverseArray(key));
  const totalFragments = countUniqueUniverseFragments([timelineArchive, redEyeArchive]);

  const timelineCurrent = Number(localStorage.getItem("timeline_current_episode") || "0");
  const timelineCompleted = localStorage.getItem("timeline_completed") === "true";
  const holdOnCount = Number(localStorage.getItem("timeline_hold_on_count") || "0");

  let currentTimelineStatus = "Stable";
  let currentTimelineText = "Waiting for the next reset.";
  let currentTimelineTone = "stable";

  if (timelineCompleted) {
    currentTimelineStatus = "Released";
    currentTimelineText = "Final Memory saved. The last timeline is complete.";
    currentTimelineTone = "released";
  } else if (holdOnCount >= 3) {
    currentTimelineStatus = "Collapsing";
    currentTimelineText = "Obsession is tearing the timeline apart.";
    currentTimelineTone = "danger";
  } else if (timelineCurrent > 1) {
    currentTimelineStatus = "Resetting";
    currentTimelineText = `Current progress: EP.${String(timelineCurrent).padStart(2, "0")} / 50.`;
    currentTimelineTone = "warning";
  }

  return {
    totalFragments,
    timelineCurrent,
    timelineCompleted,
    holdOnCount,
    currentTimelineStatus,
    currentTimelineText,
    currentTimelineTone,
  };
}

function readUniverseArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function countUniqueUniverseFragments(groups) {
  const seen = new Set();

  groups.flat().forEach((item, index) => {
    if (!item) return;

    const id = item.id || item.title || item.quote || item.fragmentType || index;
    const title = item.title || "";
    seen.add(String(id) + "::" + String(title));
  });

  return seen.size;
}

/* 浏览器全局挂载，方便 index.html 直接调用 */
window.zenaiUniverse = zenaiUniverse;
window.getUniverseFlagships = getUniverseFlagships;
window.getPlayableFlagships = getPlayableFlagships;
window.getComingFlagships = getComingFlagships;
window.getFlagshipBySlug = getFlagshipBySlug;
window.getFlagshipsByStatus = getFlagshipsByStatus;
window.getUniverseStatsFromLocalStorage = getUniverseStatsFromLocalStorage;

/* 兼容大写命名 */
window.ZENAI_UNIVERSE = zenaiUniverse;
