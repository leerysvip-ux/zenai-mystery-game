window.MYSTERY_GAMES = [
  {
    id: "door",
    title: "Do Not Open The Door",
    cardText: "Someone knocks at 2:13 AM. Your phone says: “Do not open.”",
    intro: "You are alone at night. Someone knocks three times. Then your phone lights up with one message: “Do not open the door.”",
    scene: "It is 2:13 AM. The hallway is silent. A shadow moves under the door. The knocking begins again.<br><br>What do you do?",
    choices: [
      { text: "Open the door", scene: "You slowly unlock the door...", result: "<strong>Bad Ending.</strong><br>The hallway is empty. Then you hear breathing behind you.", ending: "Bad Ending" },
      { text: "Hide in the closet", scene: "You hide inside the closet and hold your breath...", result: "<strong>Survived.</strong><br>The knocking stops. But your phone receives another message: “I know where you are.”", ending: "Survived" },
      { text: "Call the police", scene: "You dial emergency services...", result: "<strong>Strange Ending.</strong><br>The operator answers before the call connects: “Do not make a sound.”", ending: "Strange Ending" },
      { text: "Look through the peephole", scene: "You step closer and look through the peephole...", result: "<strong>True Ending.</strong><br>You see yourself standing outside the door, smiling.", ending: "True Ending" }
    ]
  },
  {
    id: "missing-room",
    title: "The Missing Room",
    cardText: "A floor plan shows a blank space where no room should exist.",
    intro: "You wake up in an old house. On the wall is a floor plan. Every room is marked except one blank space.",
    scene: "A cold draft comes from behind the wallpaper. The floor plan shows a room that should not exist.<br><br>What do you do?",
    choices: [
      { text: "Tear off the wallpaper", scene: "You pull the wallpaper down...", result: "<strong>Hidden Room Ending.</strong><br>Behind the wall is a door. On the door is your name, written yesterday.", ending: "Hidden Room Ending" },
      { text: "Leave the house", scene: "You run toward the front door...", result: "<strong>Loop Ending.</strong><br>You open the door and step outside. You are back in the same hallway.", ending: "Loop Ending" },
      { text: "Check the basement", scene: "You walk down the basement stairs...", result: "<strong>Basement Ending.</strong><br>The missing room is below you. Something inside starts knocking upward.", ending: "Basement Ending" },
      { text: "Burn the floor plan", scene: "You light the paper on fire...", result: "<strong>Vanished Ending.</strong><br>The house shakes. When the smoke clears, the missing room is the only room left.", ending: "Vanished Ending" }
    ]
  },
  {
    id: "last-message",
    title: "Last Message",
    cardText: "A dead friend sends one final text from an inactive number.",
    intro: "Your friend disappeared one year ago. Tonight, your phone receives a message from their number: “I found the way back.”",
    scene: "The message is still typing. You see three dots appear, disappear, then appear again.<br><br>How do you reply?",
    choices: [
      { text: "Where are you?", scene: "You type: Where are you?", result: "<strong>Location Ending.</strong><br>A map opens automatically. The location is your bedroom.", ending: "Location Ending" },
      { text: "Who is this?", scene: "You type: Who is this?", result: "<strong>Wrong Number Ending.</strong><br>The reply appears instantly: “You know exactly who I am.”", ending: "Wrong Number Ending" },
      { text: "Do not come back", scene: "You type: Do not come back.", result: "<strong>Doorbell Ending.</strong><br>Your phone goes black. Then your doorbell rings once.", ending: "Doorbell Ending" },
      { text: "I miss you", scene: "You type: I miss you.", result: "<strong>Final Ending.</strong><br>The reply says: “Then open the window.” A hand is already on the glass.", ending: "Final Ending" }
    ]
  },
  {
    id: "black-elevator",
    title: "The Black Elevator",
    cardText: "Your building has 12 floors. Tonight, the elevator shows 13.",
    intro: "You enter the elevator at midnight. There are only twelve floors in your building, but tonight a new button appears: 13.",
    scene: "The elevator doors close. Your phone vibrates: “Do not press it. I did.”<br><br>What do you do?",
    choices: [
      { text: "Press 13", scene: "You press the glowing button...", result: "<strong>Floor 13 Ending.</strong><br>The doors open to your apartment, but everyone inside is wearing funeral clothes.", ending: "Floor 13 Ending" },
      { text: "Press Lobby", scene: "You press the lobby button repeatedly...", result: "<strong>Stuck Ending.</strong><br>The display counts downward: 12, 11, 10... then -1.", ending: "Stuck Ending" },
      { text: "Use emergency phone", scene: "You pick up the emergency phone...", result: "<strong>Operator Ending.</strong><br>A voice says, “You called from this elevator yesterday. You screamed for 13 seconds.”", ending: "Operator Ending" },
      { text: "Force the doors open", scene: "You pry the doors apart...", result: "<strong>Open Shaft Ending.</strong><br>There is no elevator shaft outside. Only a hallway with your childhood bedroom at the end.", ending: "Open Shaft Ending" }
    ]
  },
  {
    id: "wrong-reflection",
    title: "The Wrong Reflection",
    cardText: "Your reflection moves half a second after you do.",
    intro: "You brush your teeth at midnight. In the mirror, your reflection smiles before you do.",
    scene: "The bathroom light flickers. Your reflection raises one finger and points behind you.<br><br>What do you do?",
    choices: [
      { text: "Turn around", scene: "You turn around quickly...", result: "<strong>Behind You Ending.</strong><br>Nothing is there. But in the mirror, your reflection is now gone.", ending: "Behind You Ending" },
      { text: "Touch the mirror", scene: "You place your hand on the glass...", result: "<strong>Glass Ending.</strong><br>A cold hand presses back from the other side.", ending: "Glass Ending" },
      { text: "Break the mirror", scene: "You smash the mirror...", result: "<strong>Shattered Ending.</strong><br>Every broken piece shows a different version of you begging to be let out.", ending: "Shattered Ending" },
      { text: "Smile back", scene: "You force yourself to smile...", result: "<strong>Swap Ending.</strong><br>Your reflection stops smiling. You realize you are now the one inside the glass.", ending: "Swap Ending" }
    ]
  },
  {
    id: "unknown-caller",
    title: "The Unknown Caller",
    cardText: "A call comes from your own number while your phone is in your hand.",
    intro: "Your phone rings. The caller ID shows your own number, but your phone is already in your hand.",
    scene: "The ringing will not stop. On the screen, the call duration already says 00:13.<br><br>What do you do?",
    choices: [
      { text: "Answer it", scene: "You answer the call...", result: "<strong>Voice Ending.</strong><br>Your own voice whispers, “Do not go home tonight.”", ending: "Voice Ending" },
      { text: "Decline the call", scene: "You decline the call...", result: "<strong>Missed Call Ending.</strong><br>A voicemail appears. It is the sound of you sleeping.", ending: "Missed Call Ending" },
      { text: "Turn off the phone", scene: "You hold the power button...", result: "<strong>Power Ending.</strong><br>The phone turns off. Then it rings again from inside the wall.", ending: "Power Ending" },
      { text: "Call yourself back", scene: "You dial your own number...", result: "<strong>Connected Ending.</strong><br>Someone answers from your living room.", ending: "Connected Ending" }
    ]
  },
  {
    id: "room-404",
    title: "Room 404",
    cardText: "The hotel says Room 404 does not exist. Your key says otherwise.",
    intro: "You check into a hotel during a storm. The clerk hands you a key labeled 404, then denies that room exists.",
    scene: "The elevator skips from floor 3 to floor 5. But the key in your hand becomes warm.<br><br>What do you do?",
    choices: [
      { text: "Take the stairs", scene: "You enter the stairwell...", result: "<strong>Stairwell Ending.</strong><br>Between floors 3 and 5, you find a door marked 404 with fresh scratches around the handle.", ending: "Stairwell Ending" },
      { text: "Return the key", scene: "You return to the front desk...", result: "<strong>Desk Ending.</strong><br>The clerk is gone. A note says: “Guest in 404 checked out wearing your face.”", ending: "Desk Ending" },
      { text: "Sleep in the lobby", scene: "You sit on the lobby couch...", result: "<strong>Lobby Ending.</strong><br>You wake up in a bed. The room number on the phone is 404.", ending: "Lobby Ending" },
      { text: "Search the hallway", scene: "You walk the fourth floor hallway...", result: "<strong>Found Ending.</strong><br>A door appears only when you stop looking at it.", ending: "Found Ending" }
    ]
  },
  {
    id: "locked-phone",
    title: "The Locked Phone",
    cardText: "A phone you do not own unlocks with your fingerprint.",
    intro: "You find a phone on a train seat. It is locked, but it opens when you touch it.",
    scene: "The wallpaper is a photo of you sleeping last night. A new message arrives: “Keep scrolling.”<br><br>What do you do?",
    choices: [
      { text: "Open the gallery", scene: "You tap the gallery...", result: "<strong>Gallery Ending.</strong><br>Every photo shows you from behind, taken one minute before you found the phone.", ending: "Gallery Ending" },
      { text: "Read the messages", scene: "You open the messages...", result: "<strong>Chat Ending.</strong><br>The latest message says: “He found it. Start phase two.”", ending: "Chat Ending" },
      { text: "Throw it away", scene: "You throw the phone onto the tracks...", result: "<strong>Return Ending.</strong><br>Your own pocket vibrates. The same phone is inside.", ending: "Return Ending" },
      { text: "Call the last number", scene: "You call the last contact...", result: "<strong>Contact Ending.</strong><br>Your mother answers and says, “Why are you calling from your funeral?”", ending: "Contact Ending" }
    ]
  },
  {
    id: "girl-window",
    title: "The Girl in the Window",
    cardText: "A girl waves from a window in an abandoned building.",
    intro: "Across the street stands an abandoned apartment building. Every night, a girl waves from the same dark window.",
    scene: "Tonight, she is holding a sign. It says: “Do not wave back.”<br><br>What do you do?",
    choices: [
      { text: "Wave back", scene: "You raise your hand slowly...", result: "<strong>Signal Ending.</strong><br>The girl smiles. Every window in the building lights up with people waving back.", ending: "Signal Ending" },
      { text: "Close your curtains", scene: "You pull the curtains shut...", result: "<strong>Curtain Ending.</strong><br>Something taps your window from the outside, even though you live on the tenth floor.", ending: "Curtain Ending" },
      { text: "Take a photo", scene: "You snap a photo...", result: "<strong>Photo Ending.</strong><br>The photo shows the girl standing behind you instead.", ending: "Photo Ending" },
      { text: "Call the police", scene: "You report the building...", result: "<strong>Report Ending.</strong><br>The officer says the building was demolished five years ago.", ending: "Report Ending" }
    ]
  },
  {
    id: "final-train",
    title: "The Final Train",
    cardText: "A train arrives after the station is closed.",
    intro: "You miss the last train. The station lights turn off. Then one more train arrives with no destination shown.",
    scene: "The doors open. Inside, every passenger is asleep except one person staring at you.<br><br>What do you do?",
    choices: [
      { text: "Get on the train", scene: "You step inside...", result: "<strong>Passenger Ending.</strong><br>The doors close. The staring passenger is you, older and crying.", ending: "Passenger Ending" },
      { text: "Stay on the platform", scene: "You step back...", result: "<strong>Platform Ending.</strong><br>The train leaves. Your reflection remains in the window, still sitting inside.", ending: "Platform Ending" },
      { text: "Ask the driver", scene: "You walk to the front car...", result: "<strong>Driver Ending.</strong><br>The driver's seat is empty. The controls are covered in dust.", ending: "Driver Ending" },
      { text: "Wake a passenger", scene: "You shake a sleeping passenger...", result: "<strong>Wake Ending.</strong><br>The passenger opens their eyes and says, “You are not supposed to be awake.”", ending: "Wake Ending" }
    ]
  }
},
    {
    id: "red-notebook",
    title: "The Red Notebook",
    cardText: "A red notebook records tomorrow’s events before they happen.",
    intro: "You find a red notebook on your desk. You do not remember buying it. The first page describes exactly what you did this morning.",
    scene: "The next page is dated tomorrow. It says: “At 2:13 AM, you will hear someone crying in the kitchen.”<br><br>What do you do?",
    choices: [
      {
        text: "Read the next page",
        scene: "You turn the page slowly...",
        result: "<strong>Prediction Ending.</strong><br>The page is blank at first. Then words appear: “You should have stopped reading.”",
        ending: "Prediction Ending"
      },
      {
        text: "Burn the notebook",
        scene: "You light the notebook on fire...",
        result: "<strong>Ash Ending.</strong><br>The pages burn, but the words remain floating in the smoke. They now describe your death.",
        ending: "Ash Ending"
      },
      {
        text: "Write your own ending",
        scene: "You grab a pen and write: I survive...",
        result: "<strong>Rewrite Ending.</strong><br>The ink turns red. Under your sentence, another line appears: “Not in this version.”",
        ending: "Rewrite Ending"
      },
      {
        text: "Hide the notebook",
        scene: "You lock it inside a drawer...",
        result: "<strong>Drawer Ending.</strong><br>At midnight, the drawer opens by itself. The notebook is now on the page titled “Where You Hid Me.”",
        ending: "Drawer Ending"
      }
    ]
  },
  {
    id: "empty-school",
    title: "The Empty School",
    cardText: "A school closed for years still rings its bell every night.",
    intro: "You pass an abandoned school on your way home. It closed ten years ago, but tonight the lights are on in one classroom.",
    scene: "The school bell rings once. On the blackboard inside, your name is written under the words: “Absent again.”<br><br>What do you do?",
    choices: [
      {
        text: "Enter the classroom",
        scene: "You push open the classroom door...",
        result: "<strong>Attendance Ending.</strong><br>Every desk is empty except one. On it is a report card with your adult face as the student photo.",
        ending: "Attendance Ending"
      },
      {
        text: "Call someone",
        scene: "You call your friend...",
        result: "<strong>No Signal Ending.</strong><br>Your friend answers, but you hear children laughing behind them. They say, “We are already in class.”",
        ending: "No Signal Ending"
      },
      {
        text: "Erase your name",
        scene: "You wipe your name off the blackboard...",
        result: "<strong>Chalk Ending.</strong><br>The chalk dust forms a handprint on your sleeve. A voice whispers, “Stay after class.”",
        ending: "Chalk Ending"
      },
      {
        text: "Run away",
        scene: "You run from the school gate...",
        result: "<strong>Detention Ending.</strong><br>No matter how far you run, the hallway keeps stretching ahead of you. The bell rings again.",
        ending: "Detention Ending"
      }
    ]
  },
  {
    id: "basement-light",
    title: "The Basement Light",
    cardText: "Your basement light turns on by itself every night at 2:13 AM.",
    intro: "For three nights in a row, the basement light has turned on by itself. Tonight, you hear footsteps below.",
    scene: "You stand at the basement door. A thin line of yellow light leaks from underneath. Someone coughs on the other side.<br><br>What do you do?",
    choices: [
      {
        text: "Open the basement door",
        scene: "You open the door and look down...",
        result: "<strong>Downstairs Ending.</strong><br>The basement is empty except for a second staircase going even deeper.",
        ending: "Downstairs Ending"
      },
      {
        text: "Turn off the breaker",
        scene: "You switch off the power...",
        result: "<strong>Dark Ending.</strong><br>The whole house goes black. Then the basement light turns on again, brighter than before.",
        ending: "Dark Ending"
      },
      {
        text: "Call out",
        scene: "You say, “Who is down there?”",
        result: "<strong>Answer Ending.</strong><br>A voice replies from below: “You are. We have been waiting for you to come back.”",
        ending: "Answer Ending"
      },
      {
        text: "Block the door",
        scene: "You push a chair against the door...",
        result: "<strong>Scratch Ending.</strong><br>Something scratches words into the wood from the basement side: “Wrong side.”",
        ending: "Scratch Ending"
      }
    ]
  },
  {
    id: "last-photo",
    title: "The Last Photo",
    cardText: "Your camera roll contains a photo taken five minutes in the future.",
    intro: "You open your phone gallery and see a new photo. It was taken five minutes from now, but your phone never left your pocket.",
    scene: "The photo shows your bedroom door half open. A hand is reaching through the gap.<br><br>What do you do?",
    choices: [
      {
        text: "Check the bedroom",
        scene: "You walk toward your bedroom...",
        result: "<strong>Photo Match Ending.</strong><br>The door is exactly like the photo. Then your phone takes another picture by itself.",
        ending: "Photo Match Ending"
      },
      {
        text: "Delete the photo",
        scene: "You delete the image...",
        result: "<strong>Deleted Ending.</strong><br>The photo disappears. Then it returns with one new detail: you are lying on the floor.",
        ending: "Deleted Ending"
      },
      {
        text: "Take a new photo",
        scene: "You raise your phone and take a picture...",
        result: "<strong>Camera Ending.</strong><br>The new photo shows the room behind you, and someone standing inches from your back.",
        ending: "Camera Ending"
      },
      {
        text: "Leave the house",
        scene: "You grab your keys and run outside...",
        result: "<strong>Outside Ending.</strong><br>Your gallery updates. The new photo shows your front door from inside the house.",
        ending: "Outside Ending"
      }
    ]
  },
  {
    id: "stranger-upstairs",
    title: "The Stranger Upstairs",
    cardText: "You live alone, but someone upstairs walks every night.",
    intro: "You live on the top floor. There is no apartment above you. But every night, you hear footsteps overhead.",
    scene: "Tonight the footsteps stop directly above your bed. Dust falls from the ceiling in the shape of letters: “LOOK UP.”<br><br>What do you do?",
    choices: [
      {
        text: "Look up",
        scene: "You slowly tilt your head upward...",
        result: "<strong>Ceiling Ending.</strong><br>A closed eye is painted on the ceiling. Then it opens.",
        ending: "Ceiling Ending"
      },
      {
        text: "Knock on the ceiling",
        scene: "You tap the ceiling three times...",
        result: "<strong>Reply Ending.</strong><br>Something knocks back four times. Then five. Then six. It is counting down.",
        ending: "Reply Ending"
      },
      {
        text: "Go to the roof",
        scene: "You climb the stairs to the roof...",
        result: "<strong>Roof Ending.</strong><br>On the roof, you find a full apartment layout drawn in chalk. Your bed is marked with an X.",
        ending: "Roof Ending"
      },
      {
        text: "Sleep anyway",
        scene: "You turn off the light and close your eyes...",
        result: "<strong>Sleep Ending.</strong><br>You wake up on the ceiling, staring down at your empty bed.",
        ending: "Sleep Ending"
      }
    ]
  },
  {
    id: "midnight-taxi",
    title: "The Midnight Taxi",
    cardText: "A taxi stops for you before you call one.",
    intro: "You are walking home in the rain. Your phone battery is dead. A taxi pulls up beside you and the driver says your name.",
    scene: "The back door opens by itself. The meter already shows a fare of $13.13.<br><br>What do you do?",
    choices: [
      {
        text: "Get in",
        scene: "You sit in the back seat...",
        result: "<strong>Ride Ending.</strong><br>The driver says, “Same destination as last time?” You have never been in this taxi before.",
        ending: "Ride Ending"
      },
      {
        text: "Ask where it is going",
        scene: "You lean toward the window...",
        result: "<strong>Destination Ending.</strong><br>The driver smiles and says, “Where everyone goes eventually.”",
        ending: "Destination Ending"
      },
      {
        text: "Walk away",
        scene: "You keep walking down the street...",
        result: "<strong>Follow Ending.</strong><br>The taxi follows silently with its headlights off. Every turn you take leads back to it.",
        ending: "Follow Ending"
      },
      {
        text: "Check the license plate",
        scene: "You look at the plate number...",
        result: "<strong>Plate Ending.</strong><br>The plate reads your birth date, followed by tomorrow’s date.",
        ending: "Plate Ending"
      }
    ]
  },
  {
    id: "voice-recorder",
    title: "The Voice Recorder",
    cardText: "An old recorder plays your voice before you speak.",
    intro: "You find an old voice recorder in a drawer. It has one recording dated tomorrow.",
    scene: "You press play. Your own voice whispers: “If you hear this, do not answer the next question.”<br><br>What do you do?",
    choices: [
      {
        text: "Keep listening",
        scene: "You let the recording continue...",
        result: "<strong>Recording Ending.</strong><br>Your voice says exactly what you are thinking, one second before you think it.",
        ending: "Recording Ending"
      },
      {
        text: "Ask a question",
        scene: "You ask, “Who are you?”",
        result: "<strong>Question Ending.</strong><br>The recorder answers in your voice: “I am what is left after you stop speaking.”",
        ending: "Question Ending"
      },
      {
        text: "Destroy the recorder",
        scene: "You smash it against the table...",
        result: "<strong>Broken Ending.</strong><br>The pieces keep playing. Now the voice is coming from your mouth.",
        ending: "Broken Ending"
      },
      {
        text: "Record yourself",
        scene: "You press record and speak...",
        result: "<strong>Playback Ending.</strong><br>When you replay it, the recording includes another voice standing right beside you.",
        ending: "Playback Ending"
      }
    ]
  },
  {
    id: "shadow-behind-you",
    title: "The Shadow Behind You",
    cardText: "Your shadow is facing the wrong direction.",
    intro: "Under a streetlight, you notice your shadow is not following you. It is standing still behind you.",
    scene: "You take one step forward. Your shadow stays where it is. Then it raises its hand and points ahead.<br><br>What do you do?",
    choices: [
      {
        text: "Follow where it points",
        scene: "You walk toward the dark end of the street...",
        result: "<strong>Follow Ending.</strong><br>You find another streetlight. Under it, someone else's shadow is waiting for a body.",
        ending: "Follow Ending"
      },
      {
        text: "Run away",
        scene: "You start running...",
        result: "<strong>Run Ending.</strong><br>Your shadow runs faster than you. It reaches home first and opens your door.",
        ending: "Run Ending"
      },
      {
        text: "Step into darkness",
        scene: "You leave the light behind...",
        result: "<strong>Darkness Ending.</strong><br>For a moment you have no shadow. Then you feel something climb onto your back.",
        ending: "Darkness Ending"
      },
      {
        text: "Wave at it",
        scene: "You wave at your shadow...",
        result: "<strong>Wave Ending.</strong><br>It waves back with too many fingers.",
        ending: "Wave Ending"
      }
    ]
  },
  {
    id: "broken-clock",
    title: "The Broken Clock",
    cardText: "A broken clock starts ticking backward.",
    intro: "Your grandfather’s broken clock has not moved in years. Tonight, it starts ticking backward.",
    scene: "The hands spin from 2:13 to 2:12 to 2:11. Each tick makes the room look slightly older.<br><br>What do you do?",
    choices: [
      {
        text: "Stop the clock",
        scene: "You grab the clock hands...",
        result: "<strong>Time Cut Ending.</strong><br>The ticking stops. So does every sound outside. Even your heartbeat pauses for one second too long.",
        ending: "Time Cut Ending"
      },
      {
        text: "Let it run",
        scene: "You watch the clock turn backward...",
        result: "<strong>Reverse Ending.</strong><br>Your hands become smaller. A child’s voice behind you says, “Welcome back.”",
        ending: "Reverse Ending"
      },
      {
        text: "Break it",
        scene: "You smash the clock glass...",
        result: "<strong>Glass Ending.</strong><br>Inside the clock is a photo of you taken tomorrow, already fading.",
        ending: "Glass Ending"
      },
      {
        text: "Set it to 3:00",
        scene: "You move the hands forward...",
        result: "<strong>Wrong Hour Ending.</strong><br>The clock screams. Every clock in the house changes to 3:00, except the one in your chest.",
        ending: "Wrong Hour Ending"
      }
    ]
  },
  {
    id: "lost-child",
    title: "The Lost Child",
    cardText: "A child asks for directions to a house that burned down years ago.",
    intro: "On an empty street, a child in old clothes asks if you can help them find their way home.",
    scene: "They hand you a paper with an address. You recognize it. That house burned down before you were born.<br><br>What do you do?",
    choices: [
      {
        text: "Walk them home",
        scene: "You take the child’s hand...",
        result: "<strong>Home Ending.</strong><br>The burned house appears at the end of the street, lights on, smoke rising from the chimney.",
        ending: "Home Ending"
      },
      {
        text: "Call the police",
        scene: "You call for help...",
        result: "<strong>Report Ending.</strong><br>The officer goes silent after hearing the address. Then asks, “Is the child still wearing the red coat?”",
        ending: "Report Ending"
      },
      {
        text: "Ask their name",
        scene: "You ask, “What is your name?”",
        result: "<strong>Name Ending.</strong><br>The child gives your name, then smiles with your childhood teeth.",
        ending: "Name Ending"
      },
      {
        text: "Refuse and leave",
        scene: "You step away from the child...",
        result: "<strong>Alone Ending.</strong><br>The child starts crying. Every streetlight behind you goes out one by one.",
        ending: "Alone Ending"
      }
    ]
  }
];
