/* =========================================================
   ZenAI Mystery Universe
   Series 02: The Last Timeline
   File: timeline-games.js
   Version: Playable Story Data v1.2

   本版重点：
   1. 强化 ACT 01：EP.01 - EP.10 正式游戏文本
   2. EP.01 - EP.05：铺设希望
   3. EP.06 - EP.10：引入循环绝望
   4. 保留 traveler / prop / clockMode / visualMode / fragmentType
   5. 保留 EP.31 红眼宇宙彩蛋
   6. 保留 EP.39 Eli 视角反转
   7. 保留 EP.50 Hold On / Let Go 终章逻辑
========================================================= */

const timelineMeta = {
  universe: "ZenAI Mystery Universe",
  seriesId: "series-02",
  cnTitle: "最后的时间线",
  enTitle: "The Last Timeline",
  theme: "Time Travel / Sacrifice / Love / Letting Go",
  coreTime: "11:11 PM",
  coreProp: "Broken Watch",
  logline:
    "You spent 49 timelines trying to save Eli. In the 50th, you discover Eli was saving you too.",
  finalQuote: "In every timeline, I chose the one where you lived.",
};

const timelineEpisodes = [
  {
    id: 1,
    title: "The Night You Lost Them",
    subtitle: "The first time 11:11 PM took Eli away.",
    traveler: "You",
    prop: "Broken Watch",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "message",
    mainText: [
      "At 11:08 PM, Eli sends a message that feels wrong before you even finish reading it.",
      "\"Don’t come looking for me.\"",
      "There is no explanation. No emoji. No second message. Just five words sitting on your screen like a door closing from the other side.",
      "You call once. No answer. Twice. No answer. By the third call, your hands are already shaking.",
      "The city outside is soaked in rain. Streetlights smear across the pavement. Somewhere far away, a clocktower begins to ring even though there is no clocktower in this neighborhood.",
      "At 11:11 PM, you reach the crosswalk.",
      "White light swallows everything.",
      "When your vision returns, Eli is gone. No body. No ambulance. No witnesses. Only a broken watch lying beside a spilled cup of coffee.",
      "The watch hands are frozen at 11:11 PM.",
      "You fall to your knees and scream Eli’s name until your throat stops sounding like yours.",
      "Then the entire world goes silent."
    ],
    choiceText: "Wake Up",
    quote: "Some nights do not end. They reset.",
    endingHint:
      "You open your eyes at 7:00 AM. Your phone buzzes. Eli is alive.",
  },

  {
    id: 2,
    title: "The Message That Shouldn’t Exist",
    subtitle: "A warning appears before you ever write it.",
    traveler: "You",
    prop: "Unsent Message",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "message",
    mainText: [
      "You wake up gasping, still feeling rain on your skin.",
      "Your room is bright with morning. The same shirt is on the chair. The same cup is on your desk. The same notification waits on your phone.",
      "Eli: \"Coffee later?\"",
      "For three seconds, your heart believes mercy exists.",
      "Then you notice another message sitting in your draft box. It has no recipient. It has no timestamp. It is written in your own typing style, but you have no memory of writing it.",
      "\"You have tried this before.\"",
      "Below it, more words appear slowly, as if someone is typing from inside the screen.",
      "\"Do not trust 11:11 PM.\"",
      "You call Eli immediately. They answer with a sleepy laugh, annoyed and alive.",
      "\"You sound like you saw a ghost,\" Eli says.",
      "You almost tell them the truth. Instead, you ask them not to go near the east crosswalk tonight.",
      "Eli pauses.",
      "\"How did you know I was going there?\""
    ],
    choiceText: "Call Eli",
    quote: "The future left a warning in your own hands.",
    endingHint:
      "Eli says a sentence you heard after their death, before they ever had a chance to say it.",
  },

  {
    id: 3,
    title: "One More Morning",
    subtitle: "You try to stop the day before it begins.",
    traveler: "You",
    prop: "Broken Watch",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "This time, you do not wait for fate to start moving.",
      "You arrive at Eli’s door before breakfast. You knock too hard. You say too much. Your voice breaks in all the wrong places.",
      "Eli opens the door in an old sweater, holding a mug of coffee, alive in a way that hurts more than the memory of losing them.",
      "You tell them you had a dream. You say the day feels unsafe. You say staying home would make you feel better.",
      "Eli studies your face for a long time.",
      "\"You are terrible at pretending this is just anxiety,\" they say.",
      "But they stay.",
      "For the first time, the day changes.",
      "No crosswalk. No rain-soaked street. No final message. You make dinner together. You keep looking at the clock and pretending you are not.",
      "At 11:10 PM, Eli squeezes your hand.",
      "\"See? We made it.\"",
      "At 11:11 PM, the ceiling light flickers.",
      "The broken watch in your pocket starts ticking backward.",
      "A sound like tearing metal moves through the apartment walls.",
      "The accident has followed you inside."
    ],
    choiceText: "Hold Eli Back",
    quote: "Fate does not need a street to find someone.",
    endingHint:
      "The room bends around Eli. You reach for them, and the morning restarts.",
  },

  {
    id: 4,
    title: "The Broken Watch",
    subtitle: "The watch remembers what you cannot.",
    traveler: "You",
    prop: "Broken Watch",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "On the fourth morning, you stop screaming.",
      "You sit on the floor and empty your pockets with the calm of someone who has run out of disbelief.",
      "Keys. Phone. Receipt. A small piece of glass.",
      "And the broken watch.",
      "It should have been left in the rain. It should have belonged to the night Eli vanished. It should not be here, warm from your pocket.",
      "The hands are still frozen at 11:11 PM.",
      "You turn it over and find engraving beneath scratches and old blood.",
      "\"For the one who must live.\"",
      "You do not remember receiving it.",
      "You press the side button. The cover opens.",
      "Inside is a tiny photograph of Eli. Not from yesterday. Not from any photo you remember taking.",
      "In the picture, Eli looks older. Tired. Smiling like they are trying not to cry.",
      "Behind the photograph, there is a folded strip of paper.",
      "It says only one thing:",
      "\"When the watch breaks completely, one of us stays gone.\""
    ],
    choiceText: "Open The Watch",
    quote: "A gift from a future that has not forgiven you yet.",
    endingHint:
      "For the first time, the watch ticks once without moving its hands.",
  },

  {
    id: 5,
    title: "The Street With No Cars",
    subtitle: "You remove the accident. The ending remains.",
    traveler: "You",
    prop: "City Map",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "photo",
    mainText: [
      "You decide the universe is not magic. It is a system. A system can be broken.",
      "You map the street. Every traffic light. Every alley. Every camera. Every possible route Eli might take.",
      "You call in a false emergency to block the east crosswalk. You report a gas leak. You make sure no cars can pass within three blocks.",
      "By 10:55 PM, the street is empty.",
      "By 11:05 PM, Eli is safe beside you, confused but trying to trust you.",
      "By 11:10 PM, the rain stops.",
      "The silence feels like victory.",
      "Then every traffic light turns red at once.",
      "At 11:11 PM, Eli looks at you and says, very softly, \"I think I have been here before.\"",
      "You grab their hand.",
      "Nothing hits them.",
      "No car. No white light. No scream.",
      "Eli simply disappears.",
      "Their fingers vanish from inside your grip, leaving only warmth behind.",
      "On the empty road, one shoe remains beneath the traffic signal.",
      "The digital crossing sign flashes:",
      "\"TIMELINE CORRECTION FAILED.\""
    ],
    choiceText: "Search The Street",
    quote: "The accident was never the cause. It was only the shape grief chose first.",
    endingHint:
      "A security camera captures the empty street. In the reflection, someone behind you is holding another watch.",
  },

  {
    id: 6,
    title: "The Train They Never Took",
    subtitle: "The first time the clock fights back.",
    traveler: "You",
    prop: "Train Ticket",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "ticket",
    mainText: [
      "You stop trying to control the street. You choose distance instead.",
      "A train leaves the city at 9:40 PM. It does not pass the crosswalk. It does not pass the apartment. It does not pass any place where Eli has died.",
      "You buy two tickets with hands that know the route before your mind does.",
      "Eli follows you onto the train because they are beginning to understand one terrifying thing:",
      "You are not afraid of something that might happen.",
      "You are afraid of something that already has.",
      "At 10:49 PM, the train leaves the city.",
      "For twenty minutes, the world feels breakable in a good way.",
      "Eli leans against the window and says, \"Maybe we really can leave it behind.\"",
      "At 11:08 PM, the carriage lights turn cold blue.",
      "At 11:09 PM, every passenger stops moving.",
      "At 11:10 PM, the clock above the door begins to shake.",
      "At 11:11 PM, the speakers crackle.",
      "\"Timeline 006 will terminate at 11:11 PM.\"",
      "Every passenger turns toward Eli.",
      "Their mouths open together.",
      "\"Return what was borrowed.\""
    ],
    choiceText: "Run Through The Train",
    quote: "Changing direction is not the same as escaping fate.",
    endingHint:
      "Eli looks at the frozen passengers and whispers, \"Why does this feel familiar?\"",
  },

  {
    id: 7,
    title: "A Door Opens Twice",
    subtitle: "Another version of you knows the rule.",
    traveler: "You",
    prop: "Old Door",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "door",
    mainText: [
      "The door appears on the seventh morning.",
      "It stands at the end of your hallway where there has only ever been a blank wall.",
      "Old wood. Brass handle. A scratch near the lock shaped like 11:11.",
      "You know you should call Eli.",
      "Instead, you open it.",
      "The room beyond is not a room. It is the same hallway, but darker, older, soaked in dust.",
      "Another version of you sits on the floor holding Eli’s coat.",
      "They look like they have not slept in years.",
      "When they see you, they do not seem surprised.",
      "\"You are early,\" they say.",
      "You ask where Eli is.",
      "The other you laughs once, but it breaks before it becomes sound.",
      "\"Which Eli?\"",
      "On the wall behind them are tally marks. Dozens. Hundreds.",
      "At the bottom, written in your handwriting:",
      "\"Do not let Eli know how much they remember.\"",
      "The other you crawls toward the door and grips your wrist.",
      "\"They are not the one who started this,\" they whisper.",
      "\"We are only catching up.\""
    ],
    choiceText: "Step Inside",
    quote: "Some doors do not open into rooms. They open into grief that learned to wait.",
    endingHint:
      "Before you can ask what Eli remembers, the other you is pulled backward into darkness.",
  },

  {
    id: 8,
    title: "The First Paradox",
    subtitle: "You tell Eli too much, too early.",
    traveler: "You",
    prop: "Unsent Message",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "message",
    mainText: [
      "You are tired of lying to someone you keep losing.",
      "So you tell Eli everything.",
      "The first message. The crosswalk. The watch. The apartment. The train. The door. The version of yourself that looked older than grief.",
      "You expect Eli to think you are losing your mind.",
      "They do not.",
      "They go quiet in a way that scares you more than disbelief.",
      "\"What time?\" Eli asks.",
      "You blink.",
      "\"What time does it always happen?\"",
      "\"11:11 PM.\"",
      "Eli closes their eyes.",
      "For a moment, their face changes. Not older, exactly. Just heavier.",
      "Like a person briefly remembering the weight of a life they were not supposed to carry.",
      "\"How many times have you watched me die?\" they ask.",
      "Your throat locks.",
      "Before you can answer, your phone lights up with a new unsent draft.",
      "\"Do not answer that.\"",
      "The clock on the wall jumps from 4:16 PM to 11:11 PM.",
      "Eli reaches for you.",
      "\"Wait,\" they say. \"I know this part.\""
    ],
    choiceText: "Answer Eli",
    quote: "Truth can be a wound if it arrives before memory is ready.",
    endingHint:
      "The timeline forces a reset the moment Eli almost remembers too much.",
  },

  {
    id: 9,
    title: "The Room Full of Tomorrow",
    subtitle: "The future has been collecting your failures.",
    traveler: "You",
    prop: "Wall of Photos",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "photo",
    mainText: [
      "The impossible room returns.",
      "This time, you do not find it by accident. The broken watch leads you there, ticking harder whenever you face the wrong direction.",
      "Behind the old door is a room covered in photographs.",
      "Not memories. Evidence.",
      "Eli at the crosswalk. Eli in the apartment. Eli on the train. Eli in the hospital you have not tried yet. Eli at a red station you have never seen.",
      "Each photo is labeled with a timeline number.",
      "Timeline 001.",
      "Timeline 002.",
      "Timeline 006.",
      "Timeline 012.",
      "Some photos show endings you remember. Some show failures you have not reached.",
      "On one wall, there are pictures of you.",
      "In some, you are alive.",
      "In others, Eli is holding your body.",
      "Your hands go cold.",
      "The final row has only two frames.",
      "Timeline 049 is filled with a photograph of Eli standing before a white door.",
      "Timeline 050 is empty.",
      "Under the empty frame, someone has written:",
      "\"This one is not yours.\""
    ],
    choiceText: "Touch The Last Photo",
    quote: "Tomorrow is not coming. It is waiting to see who pays for it.",
    endingHint:
      "Behind the empty Timeline 050 frame, you hear Eli crying from the other side of the wall.",
  },

  {
    id: 10,
    title: "Stop Saving Me",
    subtitle: "Eli’s voice comes from a future you have not reached.",
    traveler: "You",
    prop: "Broken Watch",
    clockMode: "frozen",
    visualMode: "blue",
    fragmentType: "audio",
    mainText: [
      "On the tenth morning, the watch will not open.",
      "You press the button until your thumb hurts. You whisper Eli’s name. You promise the empty room you will find a better way.",
      "At 11:11 AM, exactly twelve hours before the usual ending, the watch opens by itself.",
      "There is no photograph inside now.",
      "Only a small speaker hidden behind the cracked face.",
      "Static breathes through it.",
      "Then Eli’s voice begins.",
      "\"If you hear this, it means you started again.\"",
      "Their voice is not the Eli from this morning. It is thinner. Older. Exhausted by a grief you do not yet understand.",
      "\"I know you think love means trying one more time.\"",
      "\"I know you think if you find the right road, the right door, the right minute, you can bring me back.\"",
      "The recording breaks into static.",
      "When it returns, Eli is crying.",
      "\"But every time you save me, something else takes your place.\"",
      "\"Every time you refuse to let me go, another part of you disappears.\"",
      "\"Please.\"",
      "\"Stop saving me.\"",
      "You hold the watch so tightly the cracked glass cuts your palm.",
      "Eli whispers your name one last time.",
      "\"You were never supposed to be the one chasing me.\""
    ],
    choiceText: "Replay The Voice",
    quote: "The person you are trying to save is begging you to stop, and you still do not know why.",
    endingHint:
      "The recording ends with a second voice in the background. It is yours, dying in Eli’s arms.",
  },

  {
    id: 11,
    title: "The Timeline Tax",
    subtitle: "Every rescue takes something from you.",
    traveler: "You",
    prop: "Memory Fragment",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "You notice the first loss in a small, cruel way.",
      "You remember how Eli dies, but not the song they always played in the kitchen.",
      "You remember the street, the rain, the watch, the scream.",
      "But Eli’s laugh is becoming harder to hear in your mind.",
      "The watch flashes: Every rescue costs a memory."
    ],
    choiceText: "Keep Going",
    quote: "You are saving a life by losing the reasons you loved it.",
    endingHint: "A memory of Eli’s smile disappears from your phone.",
  },

  {
    id: 12,
    title: "The Hospital Without Names",
    subtitle: "Even safety cannot hold someone who does not belong.",
    traveler: "You",
    prop: "Hospital Bracelet",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "photo",
    mainText: [
      "You bring Eli to the hospital hours before the accident.",
      "Doctors surround them. Monitors beep. Doors lock. You think this place can protect them.",
      "Then every medical record turns blank.",
      "A doctor looks at Eli and says, \"This patient does not belong to this timeline.\"",
      "At 11:11 PM, the heart monitor becomes a flat line."
    ],
    choiceText: "Grab Eli’s Hand",
    quote: "A safe room means nothing if time itself wants someone gone.",
    endingHint: "Eli’s hospital bracelet shows your name instead.",
  },

  {
    id: 13,
    title: "The Photo That Fades First",
    subtitle: "The world begins erasing proof that Eli existed.",
    traveler: "You",
    prop: "Fading Photo",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "photo",
    mainText: [
      "You find an old photo of you and Eli outside a small café.",
      "At first, only the colors fade.",
      "Then Eli’s face begins to blur.",
      "Then your own hand, the one holding Eli’s, starts to vanish too.",
      "On the back, a sentence appears: One of you has already been erased."
    ],
    choiceText: "Save The Photo",
    quote: "Some memories do not fade. They are taken.",
    endingHint: "The café in the photo no longer exists on the map.",
  },

  {
    id: 14,
    title: "Seven Minutes Earlier",
    subtitle: "The watch gives you less time than before.",
    traveler: "You",
    prop: "Broken Watch",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "This reset is different.",
      "You do not wake at 7:00 AM.",
      "You wake seven minutes before 11:11 PM.",
      "Every choice is too small. Every path is too late.",
      "When the final minute begins, Eli pushes you away instead."
    ],
    choiceText: "Try Another Route",
    quote: "Sometimes the universe gives you time only to prove it is not enough.",
    endingHint: "Eli knew where the danger would come from before you did.",
  },

  {
    id: 15,
    title: "The Stranger at the Crosswalk",
    subtitle: "Someone saves you before Eli can die.",
    traveler: "You",
    prop: "Watch Shard",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "A car appears where no car should be.",
      "This time, it is coming for you.",
      "A stranger pulls you back from the crosswalk and disappears into the crowd.",
      "Their coat, their posture, the way they touched your wrist.",
      "It felt like Eli."
    ],
    choiceText: "Chase The Stranger",
    quote: "The person you are saving may have saved you first.",
    endingHint: "You find a shard from a second broken watch.",
  },

  {
    id: 16,
    title: "The Notebook of Failed Worlds",
    subtitle: "Another traveler has been keeping records.",
    traveler: "You",
    prop: "Failed Worlds Notebook",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "letter",
    mainText: [
      "You discover a notebook full of failed rescue plans.",
      "Some are yours. Some are not.",
      "The handwriting feels painfully familiar, but it is not your own.",
      "One page reads: \"They keep trying to save me.\"",
      "\"They don’t know I started first.\""
    ],
    choiceText: "Read More",
    quote: "You were never the only one fighting time.",
    endingHint: "The next page is signed with Eli’s initial.",
  },

  {
    id: 17,
    title: "The Song From Another Life",
    subtitle: "A song that only exists inside broken timelines.",
    traveler: "You",
    prop: "Unknown Song",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "audio",
    mainText: [
      "In every timeline, Eli hums the same song.",
      "You search for it online. No result.",
      "You ask Eli where they learned it. They say they do not know.",
      "Tonight, the lyrics change.",
      "\"If I disappear, remember the life I gave back to you.\""
    ],
    choiceText: "Record The Song",
    quote: "Some songs are not written. They survive.",
    endingHint: "The audio file saves itself as goodbye_107.mp3.",
  },

  {
    id: 18,
    title: "The World Where You Never Met",
    subtitle: "You try to erase the beginning.",
    traveler: "You",
    prop: "First Meeting Place",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "You travel back to the day you first met Eli.",
      "If you never meet, maybe Eli never dies because of you.",
      "You avoid the café. You avoid the rain. You avoid every small accident that once brought you together.",
      "At 11:11 PM, Eli still appears.",
      "\"I don’t know you,\" Eli says, \"but I think I came here for you.\""
    ],
    choiceText: "Step Toward Eli",
    quote: "Love does not always begin with memory.",
    endingHint: "Eli saves you even as a stranger.",
  },

  {
    id: 19,
    title: "The Empty Seat Beside You",
    subtitle: "The world remembers a date you lost.",
    traveler: "You",
    prop: "Movie Ticket",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "ticket",
    mainText: [
      "You wake in a movie theater.",
      "The seat beside you is empty, but the popcorn is still warm.",
      "Two tickets are in your hand.",
      "One has your name. The other has Eli’s name, fading letter by letter.",
      "On the screen, you see a memory of both of you laughing."
    ],
    choiceText: "Watch The Screen",
    quote: "An empty seat can be louder than a scream.",
    endingHint: "The film ends with Eli turning toward the camera.",
  },

  {
    id: 20,
    title: "The First Time You Gave Up",
    subtitle: "You stop running. The world punishes the memory.",
    traveler: "You",
    prop: "Silent Watch",
    clockMode: "collapse",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "For the first time, you do nothing.",
      "You do not call. You do not run. You do not start the watch.",
      "You let the day reach 11:11 PM.",
      "The world does not heal.",
      "Instead, everyone begins forgetting Eli."
    ],
    choiceText: "Remember Eli",
    quote: "Giving up is not the same as letting go.",
    endingHint: "The watch displays: Timeline 020 — Memory Collapse.",
  },

  {
    id: 21,
    title: "A Handwriting You Know",
    subtitle: "Eli has written from beyond your failures.",
    traveler: "You",
    prop: "Failed Worlds Notebook",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "letter",
    mainText: [
      "You compare the notebook to an old birthday card.",
      "The handwriting matches Eli’s.",
      "But some entries were written after the time Eli died.",
      "One line stops your breathing.",
      "\"If they find this, I failed to protect them again.\""
    ],
    choiceText: "Trace The Ink",
    quote: "The handwriting of the dead can still arrive early.",
    endingHint: "The ink is fresh.",
  },

  {
    id: 22,
    title: "The Version of You That Died",
    subtitle: "The original ending was never Eli’s death.",
    traveler: "You",
    prop: "Original Timeline",
    clockMode: "frozen",
    visualMode: "red",
    fragmentType: "memory",
    mainText: [
      "You enter a timeline you have never seen.",
      "Rain. White light. The same street.",
      "But this time, Eli is alive.",
      "The body on the pavement is yours.",
      "Eli holds you and screams until the broken watch begins to move."
    ],
    choiceText: "Watch The Original",
    quote: "The first person lost was you.",
    endingHint: "Eli presses the watch and resets the world.",
  },

  {
    id: 23,
    title: "The Message Under the Floor",
    subtitle: "Eli hid the truth where only grief would search.",
    traveler: "You",
    prop: "Hidden Recorder",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "audio",
    mainText: [
      "Under the floorboards of the old apartment, you find a recorder.",
      "Eli’s voice comes through broken static.",
      "\"I found a way to move through time too.\"",
      "\"I only wanted to save you once.\"",
      "\"But time kept asking for me instead.\""
    ],
    choiceText: "Play The Recorder",
    quote: "A secret can survive beneath the floor longer than a body can survive time.",
    endingHint: "The recording ends with your own crying in the background.",
  },

  {
    id: 24,
    title: "The Timeline Where Eli Lied",
    subtitle: "Eli’s dreams are not dreams.",
    traveler: "You",
    prop: "Dream Journal",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "letter",
    mainText: [
      "Eli says they have been dreaming of you dying.",
      "A station. A hospital. A bridge. A burning house.",
      "They call them nightmares.",
      "But the details match timelines you have never seen.",
      "Eli is remembering what they are pretending to forget."
    ],
    choiceText: "Ask Eli Again",
    quote: "A lie told to protect you still cuts like truth.",
    endingHint: "A time fracture appears on Eli’s wrist.",
  },

  {
    id: 25,
    title: "The Red Station",
    subtitle: "A station between endings.",
    traveler: "You",
    prop: "Red Station Ticket",
    clockMode: "frozen",
    visualMode: "red",
    fragmentType: "ticket",
    mainText: [
      "You and Eli arrive at a station lit entirely in red.",
      "There are no trains. No passengers. No exits.",
      "Only clocks, thousands of them, all stopped at 11:11 PM.",
      "Eli looks too familiar with this place.",
      "The speakers whisper: \"Two travelers cannot leave the same timeline together.\""
    ],
    choiceText: "Enter The Platform",
    quote: "Some stations are built for people who cannot arrive together.",
    endingHint: "A fourth rule is hidden behind a wall of broken clocks.",
  },

  {
    id: 26,
    title: "The Rules Written in Blood",
    subtitle: "Time finally explains its cruelty.",
    traveler: "You",
    prop: "Timeline Rules",
    clockMode: "warning",
    visualMode: "red",
    fragmentType: "museum",
    mainText: [
      "On the station wall, three rules appear.",
      "One life may be returned.",
      "One memory must be paid.",
      "Two travelers cannot keep the same ending.",
      "A fourth rule is covered in blood."
    ],
    choiceText: "Wipe The Wall",
    quote: "A rule written in blood has already been broken.",
    endingHint: "The fourth rule begins with: The one who remembers most...",
  },

  {
    id: 27,
    title: "The Life You Borrowed",
    subtitle: "Your survival has Eli’s fingerprints all over it.",
    traveler: "You",
    prop: "Borrowed Life",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "The station opens into a room of moving memories.",
      "You see every time you survived.",
      "Eli missing a train so you could catch it.",
      "Eli entering a fire so you would not.",
      "Eli staying behind in a collapsing building while you woke safely in another morning."
    ],
    choiceText: "Keep Watching",
    quote: "You called it luck because Eli never let you see the cost.",
    endingHint: "In the final memory, Eli says: Don’t tell them. Let them live.",
  },

  {
    id: 28,
    title: "Do Not Follow Me",
    subtitle: "Eli runs because your love is becoming another loop.",
    traveler: "You",
    prop: "Eli’s Note",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "letter",
    mainText: [
      "Eli leaves before sunset.",
      "No goodbye. No explanation.",
      "Only a note on the kitchen table.",
      "\"If you love me, don’t follow me this time.\"",
      "You follow anyway."
    ],
    choiceText: "Follow Eli",
    quote: "Sometimes chasing someone is how you lose them faster.",
    endingHint: "The timeline tears open the moment you touch Eli’s hand.",
  },

  {
    id: 29,
    title: "The House That Remembers Both of You",
    subtitle: "Two lives haunt the same home.",
    traveler: "You",
    prop: "Memory House",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "You enter a house that contains two histories.",
      "In one, you lived alone after losing Eli.",
      "In another, Eli lived alone after losing you.",
      "Two toothbrushes. One bed. Two different griefs layered in the same room.",
      "On the wall: You were never grieving alone."
    ],
    choiceText: "Touch The Wall",
    quote: "A home can remember every version of heartbreak.",
    endingHint: "The house reveals the location of Eli’s second watch.",
  },

  {
    id: 30,
    title: "The Second Watch",
    subtitle: "Eli’s watch is older than yours.",
    traveler: "You",
    prop: "Eli’s Watch",
    clockMode: "frozen",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "You find Eli’s watch beneath the floor of the memory house.",
      "It is more damaged than yours.",
      "More scratches. More cracks. More dried blood around the hinge.",
      "On the back, Eli carved one sentence.",
      "\"In every timeline, I chose you.\""
    ],
    choiceText: "Join The Watches",
    quote: "The second watch proves the first sacrifice was never yours.",
    endingHint: "When both watches touch, the Timeline Museum opens.",
  },

  {
    id: 31,
    title: "The Timeline Museum",
    subtitle: "Every failed world has been preserved.",
    traveler: "You",
    prop: "Timeline Museum",
    clockMode: "frozen",
    visualMode: "red",
    fragmentType: "museum",
    universeEasterEgg: {
      linkedSeries: "The Red Eye Files: Final Goodbye",
      object: "A faded photograph stitched with a red thread.",
      label: "Some goodbyes happen in other rooms.",
      meaning:
        "A quiet universe-level connection to the Red Eye Files, hinting that the Archive and Museum belong to the same emotional universe.",
    },
    mainText: [
      "The Timeline Museum is silent.",
      "Each glass case contains one failed world.",
      "You see Eli gone. You see yourself gone. You see cities frozen at 11:11 PM.",
      "In one corner, there is a faded photograph stitched with a red thread.",
      "The small label reads: Some goodbyes happen in other rooms."
    ],
    choiceText: "Enter The Original Exhibit",
    quote: "Every universe keeps its grief somewhere.",
    endingHint: "The largest exhibit is labeled: Original Timeline — You Died.",
  },

  {
    id: 32,
    title: "The Birthday You Forgot",
    subtitle: "You remember Eli’s death better than Eli’s life.",
    traveler: "You",
    prop: "Birthday Candle",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "Inside the museum, you find a birthday cake with one candle burning.",
      "You know the exact second Eli dies.",
      "You know the sound of the watch before every reset.",
      "But you cannot remember Eli’s birthday.",
      "Eli asks, \"You remember how I die. Do you still remember how I lived?\""
    ],
    choiceText: "Remember Eli’s Life",
    quote: "Obsession remembers the wound. Love remembers the person.",
    endingHint: "The candle melts into the shape of 11:11.",
  },

  {
    id: 33,
    title: "The World Where Eli Stayed",
    subtitle: "You finally save Eli, but the cost moves to you.",
    traveler: "You",
    prop: "Borrowed Ending",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "For the first time, Eli stays.",
      "No accident arrives. No clock breaks. No white light takes them.",
      "You sit together in a quiet kitchen, stunned by peace.",
      "Then your fingers become transparent around the coffee cup.",
      "Eli sees it and does not look surprised. Only heartbroken."
    ],
    choiceText: "Hide Your Hand",
    quote: "A saved life can still be borrowed from someone else.",
    endingHint: "Eli whispers: This is why I kept leaving.",
  },

  {
    id: 34,
    title: "A Perfect Day, Almost",
    subtitle: "The day Eli wanted to give you.",
    traveler: "You",
    prop: "Two Coffees",
    clockMode: "normal",
    visualMode: "orange",
    fragmentType: "photo",
    mainText: [
      "There is no chase today.",
      "Only coffee, a walk through the city, an old song, and Eli’s hand in yours.",
      "You almost believe this is victory.",
      "At sunset, Eli looks at the sky and says:",
      "\"This is the day I kept trying to give you.\""
    ],
    choiceText: "Stay In The Day",
    quote: "A perfect day can hurt more than a terrible one.",
    endingHint: "The sun stops moving.",
  },

  {
    id: 35,
    title: "The Cost of Staying",
    subtitle: "The world cannot survive a stolen ending.",
    traveler: "You",
    prop: "Frozen Sky",
    clockMode: "collapse",
    visualMode: "orange",
    fragmentType: "memory",
    mainText: [
      "Eli is alive, but the world is dying.",
      "People walk without shadows.",
      "The clouds repeat the same shape.",
      "Every clock in the city becomes 11:11 PM.",
      "The timeline core displays: A borrowed ending cannot hold."
    ],
    choiceText: "Find The Core",
    quote: "Keeping someone can become another way of destroying them.",
    endingHint: "A white door appears at the center of the city.",
  },

  {
    id: 36,
    title: "The Letter From Future Eli",
    subtitle: "Eli tells you what they were truly saving.",
    traveler: "You",
    prop: "Future Letter",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "letter",
    mainText: [
      "Behind the white door, you find a letter addressed to you.",
      "Eli’s handwriting trembles across the page.",
      "\"You thought you were saving me.\"",
      "\"I was saving the version of you who still knew how to love.\"",
      "You realize the loops have not only threatened Eli. They have been changing you."
    ],
    choiceText: "Open Memory 000",
    quote: "I was saving the version of you who still knew how to love.",
    endingHint: "The back of the letter says: Open Memory 000.",
  },

  {
    id: 37,
    title: "The Memory You Must Not Open",
    subtitle: "Truth requires your final safety.",
    traveler: "You",
    prop: "Memory 000",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "memory",
    mainText: [
      "A warning appears before Memory 000 opens.",
      "If you continue, you will learn the original truth.",
      "But you will lose one final reset.",
      "You press your hand to the broken watch.",
      "The memory opens."
    ],
    choiceText: "Open Memory 000",
    quote: "Some truths cost the last chance to avoid them.",
    endingHint: "You return to the first 11:11 PM.",
  },

  {
    id: 38,
    title: "The Day You Were Supposed to Die",
    subtitle: "The original death was yours.",
    traveler: "You",
    prop: "Original Street",
    clockMode: "frozen",
    visualMode: "red",
    fragmentType: "memory",
    mainText: [
      "You see the original timeline.",
      "At 11:11 PM, the car is coming for you.",
      "Eli is safe. Eli could leave.",
      "Instead, Eli turns back, pushes you away, and takes your place in the light.",
      "Except in this first version, Eli survives. You do not."
    ],
    choiceText: "Watch Eli Reset Time",
    quote: "Before you tried to save Eli, Eli broke time to save you.",
    endingHint: "Eli’s watch begins moving for the first time.",
  },

  {
    id: 39,
    title: "The First Sacrifice",
    subtitle: "You are Eli now.",
    traveler: "Eli",
    prop: "Eli’s Watch",
    clockMode: "frozen",
    visualMode: "reversed",
    fragmentType: "watch",
    specialMode: "eliPerspective",
    mainText: [
      "The screen reverses.",
      "The colors shift from cold blue to warm orange.",
      "The button no longer says Save Eli.",
      "It says Save You.",
      "You are Eli. You remember every version of the person you love dying in front of you."
    ],
    choiceText: "Restart As Eli",
    quote: "This is the 107th time I watch you die. I’m not letting go yet.",
    endingHint: "Eli restarts the world and loses the memory of your first confession.",
  },

  {
    id: 40,
    title: "The Promise You Never Heard",
    subtitle: "Eli made a vow at your grave.",
    traveler: "Eli",
    prop: "Grave Memory",
    clockMode: "warning",
    visualMode: "orange",
    fragmentType: "memory",
    mainText: [
      "Still inside Eli’s memory, you stand in the rain beside your own grave.",
      "Eli’s hands are shaking around the watch.",
      "They whisper to the stone:",
      "\"I will break every timeline before I let this be the last one.\"",
      "The watch answers."
    ],
    choiceText: "Break The Timeline",
    quote: "I will break every timeline before I let this be the last one.",
    endingHint: "The system displays: Timeline 040 — Both Travelers Active.",
  },

  {
    id: 41,
    title: "Two Travelers, One Ending",
    subtitle: "Both of you were trying. Both of you were losing.",
    traveler: "You",
    prop: "Twin Watches",
    clockMode: "warning",
    visualMode: "blue",
    fragmentType: "watch",
    mainText: [
      "You return to your own body with Eli’s memories still burning inside you.",
      "For the first time, both of you remember pieces of the same truth.",
      "Every rescue from you triggered another sacrifice from Eli.",
      "Every sacrifice from Eli triggered another rescue from you.",
      "You were not fighting time. You were fighting each other’s grief."
    ],
    choiceText: "Join The Memories",
    quote: "Two people can love each other so much they become each other’s cage.",
    endingHint: "Only one traveler may leave with memory intact.",
  },

  {
    id: 42,
    title: "The Room Between Seconds",
    subtitle: "One second becomes a lifetime.",
    traveler: "You",
    prop: "White Room",
    clockMode: "frozen",
    visualMode: "white",
    fragmentType: "door",
    mainText: [
      "At exactly 11:11 PM, the second freezes.",
      "You and Eli step into a white room between moments.",
      "Outside, the world is paused.",
      "Inside, one second stretches long enough to say everything you avoided.",
      "Eli looks at you and says, \"I remember more than I told you.\""
    ],
    choiceText: "Listen To Eli",
    quote: "Some goodbyes need more than time can give.",
    endingHint: "Eli admits they remembered every timeline.",
  },

  {
    id: 43,
    title: "All the Ways You Saved Me",
    subtitle: "Eli sees the love hidden inside your failures.",
    traveler: "You",
    prop: "Rescue Archive",
    clockMode: "normal",
    visualMode: "blue",
    fragmentType: "museum",
    mainText: [
      "The room fills with every timeline where you tried to save Eli.",
      "You running through rain.",
      "You breaking doors.",
      "You screaming into phones.",
      "You choosing one more loop even after losing another piece of yourself."
    ],
    choiceText: "Let Eli Watch",
    quote: "You loved me so hard it almost destroyed you.",
    endingHint: "Eli reaches for your hand, but their fingers flicker.",
  },

  {
    id: 44,
    title: "All the Ways I Saved You",
    subtitle: "Eli’s sacrifices outnumber your memories.",
    traveler: "You",
    prop: "Eli Archive",
    clockMode: "warning",
    visualMode: "orange",
    fragmentType: "museum",
    mainText: [
      "Now Eli’s timelines appear.",
      "There are more than yours.",
      "Dozens. Hundreds.",
      "Eli pulling you from fires, trains, hospitals, bridges, streets, and rooms you never knew existed.",
      "The archive counter stops at 300, then breaks."
    ],
    choiceText: "Watch Eli’s Archive",
    quote: "You thought Eli was waiting to be saved. Eli was the first rescuer.",
    endingHint: "The museum cannot count Eli’s remaining sacrifices.",
  },

  {
    id: 45,
    title: "The Timeline That Wants One of You",
    subtitle: "The enemy is not evil. It is balance.",
    traveler: "You",
    prop: "Timeline Core",
    clockMode: "collapse",
    visualMode: "red",
    fragmentType: "door",
    mainText: [
      "The timeline core appears.",
      "It is not a monster. It does not hate you.",
      "It is a rule.",
      "Two travelers cannot keep the same ending.",
      "One may live with memory. One must become the goodbye."
    ],
    choiceText: "Face The Core",
    quote: "A rule does not need cruelty to break your heart.",
    endingHint: "The core asks: Save the one you love, or become the one they lose.",
  },

  {
    id: 46,
    title: "The Choice That Isn’t a Choice",
    subtitle: "You try to sacrifice yourself, but Eli already did.",
    traveler: "You",
    prop: "Final Command",
    clockMode: "warning",
    visualMode: "red",
    fragmentType: "message",
    mainText: [
      "You choose to die so Eli can live.",
      "For a second, the timeline accepts.",
      "Then the command is rejected.",
      "A message from Eli appears before your choice can complete.",
      "\"Do not let them die for me again.\""
    ],
    choiceText: "Override The Command",
    quote: "You cannot sacrifice yourself for someone who already sacrificed first.",
    endingHint: "Eli locked your death out of the final timeline.",
  },

  {
    id: 47,
    title: "Eli Remembers Everything",
    subtitle: "Eli was never forgetting. Eli was protecting you.",
    traveler: "You",
    prop: "Full Memory",
    clockMode: "frozen",
    visualMode: "orange",
    fragmentType: "memory",
    mainText: [
      "You finally understand.",
      "Eli did not slowly remember the loops.",
      "Eli remembered all of them from the beginning.",
      "Every time you looked at Eli like it was the first time, Eli had already lost you hundreds of times.",
      "They pretended not to know because they thought the truth would destroy you."
    ],
    choiceText: "Hold Eli",
    quote: "Every time you looked at me like it was the first time, I had already lost you hundreds of times.",
    endingHint: "Eli’s body begins to fade from the white room.",
  },

  {
    id: 48,
    title: "The Final Rescue",
    subtitle: "Eli moves first one last time.",
    traveler: "You",
    prop: "Final Watch",
    clockMode: "collapse",
    visualMode: "red",
    fragmentType: "watch",
    mainText: [
      "You prepare one final rescue.",
      "A loophole. A reversal. A way to force the timeline to take you instead.",
      "But Eli smiles through tears.",
      "They were earlier again.",
      "Eli transfers every remaining timeline permission into your broken watch."
    ],
    choiceText: "Stop Eli",
    quote: "The final rescue was never yours to perform.",
    endingHint: "Eli begins disappearing from every timeline at once.",
  },

  {
    id: 49,
    title: "You Were Never the Only One Trying",
    subtitle: "The last door was Eli’s gift.",
    traveler: "You",
    prop: "The Last Door",
    clockMode: "frozen",
    visualMode: "white",
    fragmentType: "door",
    mainText: [
      "Eli tells you the truth of the final door.",
      "Timeline 050 was not created by you.",
      "It was created by Eli using every memory they had left.",
      "Not as a world where Eli survives.",
      "As a world where you finally can."
    ],
    choiceText: "Enter The Last Timeline",
    quote: "You were never the only one trying.",
    endingHint: "The Last Door opens into morning light.",
  },

  {
    id: 50,
    title: "The Last Timeline",
    subtitle: "There is no rescue left. Only goodbye.",
    traveler: "You",
    prop: "Two Coffees",
    clockMode: "frozen",
    visualMode: "white",
    fragmentType: "final",
    specialMode: "finalChoice",
    mainText: [
      "You enter the last timeline.",
      "There is no accident.",
      "No countdown.",
      "No siren.",
      "Only a quiet room, morning light, and two cups of coffee on the table.",
      "Eli is sitting there, smiling like nothing ever broke.",
      "For one impossible moment, you think you saved them.",
      "Then Eli says:",
      "\"This is not the world where I survive.\"",
      "\"This is the world where you finally do.\""
    ],
    choiceText: "Choose",
    quote: "In every timeline, I chose the one where you lived.",
    endingHint: "Hold On, or Let Go.",
    finalChoices: {
      holdOn: {
        maxBeforeCollapse: 3,
        buttonText: "Hold On",
        lines: [
          "Love cannot become a cage.",
          "The room begins to break. Eli’s voice becomes harder to remember.",
          "Your obsession is tearing the world apart. Is this what love looks like to you?",
          "11:11 PM shakes violently. The letters blur. The world cannot survive your refusal."
        ],
      },
      letGo: {
        buttonText: "Let Go",
        successTitle: "Final Goodbye",
        quote: "In every timeline, I chose the one where you lived.",
        lines: [
          "You let go.",
          "The broken watch stops screaming.",
          "The room fills with warm white light.",
          "Eli smiles, not because leaving is easy, but because you finally understand.",
          "\"I didn’t leave because you failed to save me.\"",
          "\"I left because I finally saved you.\"",
          "\"Now live the life I kept giving back to you.\""
        ],
        finalLine: "Now live the life I kept giving back to you.",
      },
    },
  },
];

const timelineClockModes = {
  normal: {
    label: "Normal",
    description: "The 11:11 PM clock flickers faintly.",
  },
  warning: {
    label: "Warning",
    description: "The 11:11 PM clock shakes, brightens, or begins counting down.",
  },
  frozen: {
    label: "Frozen",
    description: "The clock freezes at 11:11 PM. Time refuses to move.",
  },
  collapse: {
    label: "Collapse",
    description: "The clock glitches, tears, and corrupts the screen.",
  },
};

const timelineVisualModes = {
  blue: {
    label: "Cold Blue",
    description: "Main player perspective. Grief, mystery, time pressure.",
  },
  red: {
    label: "Red Station",
    description: "Timeline danger, rule exposure, universe-level mystery.",
  },
  orange: {
    label: "Warm Orange",
    description: "Eli perspective, sacrifice, memory warmth.",
  },
  white: {
    label: "Warm White",
    description: "Final timeline, acceptance, letting go.",
  },
  reversed: {
    label: "Reversed Eli Mode",
    description: "EP.39 perspective flip. Player becomes Eli.",
  },
};

const timelineArchiveFragments = timelineEpisodes.map((episode) => ({
  id: episode.id,
  title: episode.title,
  fragmentType: episode.fragmentType,
  prop: episode.prop,
  traveler: episode.traveler,
  quote: episode.quote,
}));

const timelineFinalLogic = {
  finalEpisodeId: 50,
  holdOnStorageKey: "timeline_hold_on_count",
  archiveStorageKey: "timeline_archive_fragments",
  completedStorageKey: "timeline_completed",
  letGoUnlocksFinalMemory: true,
  finalMemoryCard: {
    title: "Save This Timeline",
    quote: "In every timeline, I chose the one where you lived.",
    subtitle: "The Last Timeline · Final Memory",
    shareText:
      "I didn’t leave because you failed to save me. I left because I finally saved you.",
  },
};

function getTimelineEpisode(id) {
  return timelineEpisodes.find((episode) => episode.id === Number(id)) || null;
}

function getNextTimelineEpisode(id) {
  const nextId = Number(id) + 1;
  return getTimelineEpisode(nextId);
}

function getTimelineProgress(id) {
  const current = Math.min(Math.max(Number(id) || 1, 1), timelineEpisodes.length);
  return {
    current,
    total: timelineEpisodes.length,
    percent: Math.round((current / timelineEpisodes.length) * 100),
  };
}

function isEliPerspectiveEpisode(id) {
  const episode = getTimelineEpisode(id);
  return episode
    ? episode.traveler === "Eli" || episode.specialMode === "eliPerspective"
    : false;
}

function isFinalTimelineEpisode(id) {
  const episode = getTimelineEpisode(id);
  return episode ? episode.specialMode === "finalChoice" : false;
}

/* 浏览器全局挂载，方便 timeline.html 直接使用 */
window.timelineMeta = timelineMeta;
window.timelineEpisodes = timelineEpisodes;
window.timelineClockModes = timelineClockModes;
window.timelineVisualModes = timelineVisualModes;
window.timelineArchiveFragments = timelineArchiveFragments;
window.timelineFinalLogic = timelineFinalLogic;

window.getTimelineEpisode = getTimelineEpisode;
window.getNextTimelineEpisode = getNextTimelineEpisode;
window.getTimelineProgress = getTimelineProgress;
window.isEliPerspectiveEpisode = isEliPerspectiveEpisode;
window.isFinalTimelineEpisode = isFinalTimelineEpisode;

/* 兼容大写命名，后续页面想怎么调都可以 */
window.TIMELINE_META = timelineMeta;
window.TIMELINE_EPISODES = timelineEpisodes;
window.TIMELINE_CLOCK_MODES = timelineClockModes;
window.TIMELINE_VISUAL_MODES = timelineVisualModes;
window.TIMELINE_ARCHIVE_FRAGMENTS = timelineArchiveFragments;
window.TIMELINE_FINAL_LOGIC = timelineFinalLogic;
