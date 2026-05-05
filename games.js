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
    },
    {
    id: "house-without-doors",
    title: "The House Without Doors",
    cardText: "You enter a house. When you turn around, every door is gone.",
    intro: "You step into an old house during a storm. The moment you enter, the front door disappears into a smooth wall.",
    scene: "There are windows, stairs, and rooms, but no doors anywhere. On the wall, someone has written: “You came in. Now find how you leave.”<br><br>What do you do?",
    choices: [
      {
        text: "Break a window",
        scene: "You pick up a chair and smash the nearest window...",
        result: "<strong>Glass Ending.</strong><br>The glass breaks, but outside is not the street. It is the same living room, seen from another angle.",
        ending: "Glass Ending"
      },
      {
        text: "Search upstairs",
        scene: "You climb the stairs slowly...",
        result: "<strong>Upstairs Ending.</strong><br>Every room upstairs contains the same photo: you standing outside the house, deciding whether to enter.",
        ending: "Upstairs Ending"
      },
      {
        text: "Follow the writing",
        scene: "You touch the words on the wall...",
        result: "<strong>Wall Ending.</strong><br>The letters sink into the paint. A new sentence appears: “Leaving is not the same as surviving.”",
        ending: "Wall Ending"
      },
      {
        text: "Stay still",
        scene: "You stop moving and listen...",
        result: "<strong>Quiet Ending.</strong><br>The house begins breathing around you. After a minute, a door appears on your chest.",
        ending: "Quiet Ending"
      }
    ]
  },
  {
    id: "whispering-wall",
    title: "The Whispering Wall",
    cardText: "A wall in your apartment whispers names while you sleep.",
    intro: "For a week, you have heard whispers coming from the wall beside your bed. Tonight, the whisper says your full name.",
    scene: "You press your ear against the wall. A voice from inside says: “Wrong side.”<br><br>What do you do?",
    choices: [
      {
        text: "Knock on the wall",
        scene: "You knock three times...",
        result: "<strong>Knock Ending.</strong><br>Something knocks back from inside the wall, but the sound comes from directly behind your head.",
        ending: "Knock Ending"
      },
      {
        text: "Cut the wall open",
        scene: "You take a knife and cut into the wallpaper...",
        result: "<strong>Inside Ending.</strong><br>Behind the wall is another layer of wallpaper. It has your handwriting all over it.",
        ending: "Inside Ending"
      },
      {
        text: "Record the whisper",
        scene: "You open your phone recorder...",
        result: "<strong>Playback Ending.</strong><br>When you play it back, the whisper is much clearer: “He is listening too.”",
        ending: "Playback Ending"
      },
      {
        text: "Sleep in another room",
        scene: "You move to the couch...",
        result: "<strong>Follow Ending.</strong><br>At 2:13 AM, the wall behind the couch whispers: “Better. Now we can see you.”",
        ending: "Follow Ending"
      }
    ]
  },
  {
    id: "old-video-tape",
    title: "The Old Video Tape",
    cardText: "A video tape shows your house before you were born.",
    intro: "You find an old VHS tape in a box labeled with your address. The tape is dated twenty years before you moved in.",
    scene: "The video shows your living room. Someone walks past the camera wearing your clothes.<br><br>What do you do?",
    choices: [
      {
        text: "Keep watching",
        scene: "You let the tape continue...",
        result: "<strong>Tape Ending.</strong><br>The person in the video sits down and stares at the camera. Then they mouth your name.",
        ending: "Tape Ending"
      },
      {
        text: "Fast forward",
        scene: "You press fast forward...",
        result: "<strong>Future Ending.</strong><br>The tape jumps to tomorrow. It shows you placing the tape back into the box.",
        ending: "Future Ending"
      },
      {
        text: "Destroy the tape",
        scene: "You pull the tape out and tear it...",
        result: "<strong>Static Ending.</strong><br>The TV turns to static. Inside the noise, you hear someone rewinding.",
        ending: "Static Ending"
      },
      {
        text: "Check the room",
        scene: "You look around your living room...",
        result: "<strong>Camera Ending.</strong><br>In the corner, hidden behind a shelf, you find the same camera still recording.",
        ending: "Camera Ending"
      }
    ]
  },
  {
    id: "locked-hospital-room",
    title: "The Locked Hospital Room",
    cardText: "A hospital room is locked from the outside, but someone inside knows you.",
    intro: "You visit an abandoned hospital for a video. On the third floor, one room has fresh light coming from under the door.",
    scene: "The room number is scratched off. From inside, a weak voice says: “You finally came back.”<br><br>What do you do?",
    choices: [
      {
        text: "Unlock the room",
        scene: "You turn the rusty key left in the lock...",
        result: "<strong>Patient Ending.</strong><br>The bed is empty. The patient file at the foot of the bed has your photo on it.",
        ending: "Patient Ending"
      },
      {
        text: "Ask who is inside",
        scene: "You speak through the door...",
        result: "<strong>Voice Ending.</strong><br>The voice says, “The part of you they removed.”",
        ending: "Voice Ending"
      },
      {
        text: "Look through the window",
        scene: "You wipe dust from the small glass window...",
        result: "<strong>Window Ending.</strong><br>You see yourself lying in the hospital bed, eyes open, staring back.",
        ending: "Window Ending"
      },
      {
        text: "Leave the hospital",
        scene: "You run toward the stairwell...",
        result: "<strong>Discharge Ending.</strong><br>Every exit sign now points back to the locked room.",
        ending: "Discharge Ending"
      }
    ]
  },
  {
    id: "missing-neighbor",
    title: "The Missing Neighbor",
    cardText: "Your neighbor vanished, but their TV keeps turning on.",
    intro: "Your neighbor disappeared three weeks ago. Their apartment is sealed, but every night their TV turns on at full volume.",
    scene: "Tonight, the TV sound is not a show. It is someone whispering your apartment number.<br><br>What do you do?",
    choices: [
      {
        text: "Call the landlord",
        scene: "You call the landlord...",
        result: "<strong>Landlord Ending.</strong><br>The landlord says the apartment next door has been empty for six years.",
        ending: "Landlord Ending"
      },
      {
        text: "Knock on the wall",
        scene: "You knock on the shared wall...",
        result: "<strong>Neighbor Ending.</strong><br>The TV goes silent. Then someone knocks back from inside your closet.",
        ending: "Neighbor Ending"
      },
      {
        text: "Enter the apartment",
        scene: "You find the spare key under the mat...",
        result: "<strong>Apartment Ending.</strong><br>The living room is empty except for a TV showing a live feed of your bedroom.",
        ending: "Apartment Ending"
      },
      {
        text: "Turn up your own TV",
        scene: "You try to drown out the noise...",
        result: "<strong>Broadcast Ending.</strong><br>Your TV turns on by itself. The same whisper now comes from both sides.",
        ending: "Broadcast Ending"
      }
    ]
  },
  {
    id: "phone-under-bed",
    title: "The Phone Under The Bed",
    cardText: "A phone rings under your bed. It is not yours.",
    intro: "At 2:13 AM, a phone starts ringing under your bed. Your own phone is charging on the desk.",
    scene: "The ringtone is old and slow. When you look down, the glow under the bed pulses like a heartbeat.<br><br>What do you do?",
    choices: [
      {
        text: "Reach under the bed",
        scene: "You slowly reach into the darkness...",
        result: "<strong>Reach Ending.</strong><br>Your hand touches another hand. It is already holding the phone out to you.",
        ending: "Reach Ending"
      },
      {
        text: "Answer the call",
        scene: "You pull the phone out and answer...",
        result: "<strong>Call Ending.</strong><br>A voice under the bed whispers, “Do not look down while we talk.”",
        ending: "Call Ending"
      },
      {
        text: "Kick it away",
        scene: "You kick the phone across the room...",
        result: "<strong>Return Ending.</strong><br>The phone slides back under the bed by itself. This time it is ringing louder.",
        ending: "Return Ending"
      },
      {
        text: "Check your own phone",
        scene: "You grab your phone from the desk...",
        result: "<strong>Mirror Call Ending.</strong><br>Your phone shows one missed call from the number under the bed.",
        ending: "Mirror Call Ending"
      }
    ]
  },
  {
    id: "doorbell-camera",
    title: "The Doorbell Camera",
    cardText: "Your doorbell camera records someone entering your home while you sleep.",
    intro: "In the morning, your doorbell app says there was motion at 2:13 AM. The video shows someone walking up to your door.",
    scene: "The person has their face covered. They unlock the door with a key you have never seen.<br><br>What do you do?",
    choices: [
      {
        text: "Replay the video",
        scene: "You watch the video again...",
        result: "<strong>Replay Ending.</strong><br>On the second viewing, the person stops at the camera and says, “Stop watching.”",
        ending: "Replay Ending"
      },
      {
        text: "Check your locks",
        scene: "You inspect the front door...",
        result: "<strong>Lock Ending.</strong><br>There are no scratches. But inside the lock, you find a small piece of red thread.",
        ending: "Lock Ending"
      },
      {
        text: "Call the police",
        scene: "You send the video to the police...",
        result: "<strong>Evidence Ending.</strong><br>The officer calls back and says the video file is from tomorrow night.",
        ending: "Evidence Ending"
      },
      {
        text: "Wait tonight",
        scene: "You sit by the door at 2:13 AM...",
        result: "<strong>Waiting Ending.</strong><br>The camera notification appears before anything moves: “You are at the door.”",
        ending: "Waiting Ending"
      }
    ]
  },
  {
    id: "staircase-changed",
    title: "The Staircase That Changed",
    cardText: "Your apartment staircase has one extra floor tonight.",
    intro: "You climb the same staircase every night. Your apartment is on the fourth floor. Tonight, the stairs keep going.",
    scene: "After floor four, there is a landing marked 4.5. The light above it flickers red.<br><br>What do you do?",
    choices: [
      {
        text: "Climb to 4.5",
        scene: "You step onto the strange landing...",
        result: "<strong>Half Floor Ending.</strong><br>The hallway is shorter than it should be. Every door is half your height.",
        ending: "Half Floor Ending"
      },
      {
        text: "Go back down",
        scene: "You turn and descend...",
        result: "<strong>Down Ending.</strong><br>The stairs lead down for ten minutes. The ground floor sign now says -4.",
        ending: "Down Ending"
      },
      {
        text: "Open the fire door",
        scene: "You push open the fire door...",
        result: "<strong>Fire Door Ending.</strong><br>Behind it is your apartment, but all the furniture is covered in dust.",
        ending: "Fire Door Ending"
      },
      {
        text: "Call the elevator",
        scene: "You press the elevator button...",
        result: "<strong>Elevator Ending.</strong><br>The elevator arrives from floor 4.5. Inside, someone has written your name on every wall.",
        ending: "Elevator Ending"
      }
    ]
  },
  {
    id: "woman-in-rain",
    title: "The Woman in the Rain",
    cardText: "A woman stands in the rain outside your window every night.",
    intro: "Every night this week, a woman in a dark coat has stood across the street in the rain, looking up at your window.",
    scene: "Tonight she is closer. She holds a cardboard sign that says: “You let me in once.”<br><br>What do you do?",
    choices: [
      {
        text: "Close the blinds",
        scene: "You pull the blinds shut...",
        result: "<strong>Blind Ending.</strong><br>Her shadow appears on the blinds from inside the room.",
        ending: "Blind Ending"
      },
      {
        text: "Take a picture",
        scene: "You take a photo through the glass...",
        result: "<strong>Photo Ending.</strong><br>The picture shows her standing behind you, dry and smiling.",
        ending: "Photo Ending"
      },
      {
        text: "Go outside",
        scene: "You walk downstairs into the rain...",
        result: "<strong>Rain Ending.</strong><br>She is gone. On the pavement where she stood is a key to your apartment.",
        ending: "Rain Ending"
      },
      {
        text: "Ask what she wants",
        scene: "You open the window slightly...",
        result: "<strong>Window Ending.</strong><br>She whispers, “I want back the years I spent in your walls.”",
        ending: "Window Ending"
      }
    ]
  },
  {
    id: "last-bus-stop",
    title: "The Last Bus Stop",
    cardText: "A bus arrives at a stop that was removed years ago.",
    intro: "You are walking home late when you see an old bus stop sign that should not be there. A bus pulls up with no driver.",
    scene: "The destination board reads: “LAST STOP.” The doors open, and every passenger turns to look at you.<br><br>What do you do?",
    choices: [
      {
        text: "Get on the bus",
        scene: "You step onto the bus...",
        result: "<strong>Passenger Ending.</strong><br>The doors close. On the seat beside you is a ticket with your death date printed on it.",
        ending: "Passenger Ending"
      },
      {
        text: "Ask where it goes",
        scene: "You speak toward the driver’s seat...",
        result: "<strong>Route Ending.</strong><br>A speaker crackles: “You already know. You have taken this route before.”",
        ending: "Route Ending"
      },
      {
        text: "Walk away",
        scene: "You walk past the bus stop...",
        result: "<strong>Return Ending.</strong><br>Every street corner now has the same bus stop sign waiting for you.",
        ending: "Return Ending"
      },
      {
        text: "Read the timetable",
        scene: "You check the old timetable...",
        result: "<strong>Schedule Ending.</strong><br>The only listed departure time is the exact minute you were born.",
        ending: "Schedule Ending"
      }
    ]
    },
    {
    id: "mirror-at-the-end",
    title: "The Mirror at the End",
    cardText: "A mirror appears at the end of a hallway that was never there.",
    intro: "You wake up and find a new hallway outside your bedroom. At the end of it stands a tall mirror covered with dust.",
    scene: "The hallway is too long for your apartment. In the mirror, your reflection is already walking toward you.<br><br>What do you do?",
    choices: [
      {
        text: "Walk toward the mirror",
        scene: "You step into the hallway...",
        result: "<strong>Reflection Ending.</strong><br>Your reflection reaches the mirror first and places its hand on the glass from the other side.",
        ending: "Reflection Ending"
      },
      {
        text: "Turn off the lights",
        scene: "You switch off the hallway light...",
        result: "<strong>Dark Mirror Ending.</strong><br>The mirror still shines in the dark. Now it shows your room behind you, empty except for someone under the bed.",
        ending: "Dark Mirror Ending"
      },
      {
        text: "Cover the mirror",
        scene: "You throw a blanket over the mirror...",
        result: "<strong>Covered Ending.</strong><br>The blanket moves like something is breathing beneath it. Then it whispers your name.",
        ending: "Covered Ending"
      },
      {
        text: "Break the mirror",
        scene: "You hit the mirror with a chair...",
        result: "<strong>Shattered Ending.</strong><br>The mirror breaks into hundreds of pieces. Every piece shows you making a different choice.",
        ending: "Shattered Ending"
      }
    ]
  },
  {
    id: "letter-from-basement",
    title: "The Letter From The Basement",
    cardText: "A sealed letter slides out from under a locked basement door.",
    intro: "Your basement has been locked since you moved in. Tonight, a sealed letter slides out from under the door.",
    scene: "The envelope is old and damp. On the front, it says: “Open before you go downstairs.”<br><br>What do you do?",
    choices: [
      {
        text: "Open the letter",
        scene: "You tear the envelope open...",
        result: "<strong>Warning Ending.</strong><br>The letter says: “Whatever calls your name from below already knows your voice.”",
        ending: "Warning Ending"
      },
      {
        text: "Ignore it and unlock the door",
        scene: "You put the key into the basement lock...",
        result: "<strong>Stair Ending.</strong><br>The stairs are wet. At the bottom, someone is reading the same letter aloud.",
        ending: "Stair Ending"
      },
      {
        text: "Slide the letter back",
        scene: "You push the letter under the door...",
        result: "<strong>Return Ending.</strong><br>A hand pushes it back immediately. Now it is covered in fresh fingerprints.",
        ending: "Return Ending"
      },
      {
        text: "Call your landlord",
        scene: "You call the landlord about the basement...",
        result: "<strong>Landlord Ending.</strong><br>He says your house does not have a basement. Then something knocks from below.",
        ending: "Landlord Ending"
      }
    ]
  },
  {
    id: "black-envelope",
    title: "The Black Envelope",
    cardText: "A black envelope appears in your mailbox with no stamp.",
    intro: "You open your mailbox and find a black envelope. There is no stamp, no sender, only your name written in silver ink.",
    scene: "Inside is a photo of your front door taken from inside your house. On the back: “Tonight.”<br><br>What do you do?",
    choices: [
      {
        text: "Check the front door",
        scene: "You walk to your front door...",
        result: "<strong>Door Ending.</strong><br>The door is locked. But the peephole shows someone standing inside your hallway.",
        ending: "Door Ending"
      },
      {
        text: "Burn the envelope",
        scene: "You light the envelope on fire...",
        result: "<strong>Ash Ending.</strong><br>The smoke forms words in the air: “Invitation accepted.”",
        ending: "Ash Ending"
      },
      {
        text: "Keep the photo",
        scene: "You put the photo in your drawer...",
        result: "<strong>Photo Ending.</strong><br>An hour later, the drawer opens by itself. The photo now shows you looking into the drawer.",
        ending: "Photo Ending"
      },
      {
        text: "Throw it away",
        scene: "You throw the envelope into the trash...",
        result: "<strong>Trash Ending.</strong><br>At midnight, your trash can tips over. The envelope is back, heavier than before.",
        ending: "Trash Ending"
      }
    ]
  },
  {
    id: "empty-playground",
    title: "The Empty Playground",
    cardText: "A swing moves by itself in a playground after midnight.",
    intro: "You pass an empty playground at night. One swing is moving slowly, even though there is no wind.",
    scene: "The swing stops when you look at it. Then it starts again when you blink.<br><br>What do you do?",
    choices: [
      {
        text: "Sit on the swing",
        scene: "You sit down carefully...",
        result: "<strong>Swing Ending.</strong><br>The swing moves higher by itself. Behind you, a child whispers, “You took my seat.”",
        ending: "Swing Ending"
      },
      {
        text: "Record a video",
        scene: "You take out your phone and record...",
        result: "<strong>Video Ending.</strong><br>The video shows a child pushing the swing. In real life, you still see no one.",
        ending: "Video Ending"
      },
      {
        text: "Leave quickly",
        scene: "You walk away from the playground...",
        result: "<strong>Follow Ending.</strong><br>The sound of chains follows you all the way home.",
        ending: "Follow Ending"
      },
      {
        text: "Ask who is there",
        scene: "You call into the playground...",
        result: "<strong>Answer Ending.</strong><br>A small voice answers from the slide: “You can see me tomorrow.”",
        ending: "Answer Ending"
      }
    ]
  },
  {
    id: "unknown-password",
    title: "The Unknown Password",
    cardText: "Your laptop unlocks with a password you never created.",
    intro: "Your laptop wakes up by itself. On the screen is a password box, already filled with black dots.",
    scene: "A message appears: “You have one attempt left.” You never set a password.<br><br>What do you do?",
    choices: [
      {
        text: "Press Enter",
        scene: "You press Enter without typing...",
        result: "<strong>Access Ending.</strong><br>The laptop unlocks. The desktop background is a live view of you sitting at the desk.",
        ending: "Access Ending"
      },
      {
        text: "Type your name",
        scene: "You type your name...",
        result: "<strong>Name Ending.</strong><br>The screen says: “Correct user. Wrong body.”",
        ending: "Name Ending"
      },
      {
        text: "Shut the laptop",
        scene: "You close the laptop...",
        result: "<strong>Closed Ending.</strong><br>The screen keeps glowing through the lid. The keyboard starts typing by itself.",
        ending: "Closed Ending"
      },
      {
        text: "Remove the battery",
        scene: "You unplug everything...",
        result: "<strong>Power Ending.</strong><br>The laptop turns on again. Now the webcam light is red.",
        ending: "Power Ending"
      }
    ]
  },
  {
    id: "attic-doll",
    title: "The Doll in the Attic",
    cardText: "A doll in your attic changes positions every night.",
    intro: "You find an old doll in the attic. Every morning, it is facing a different direction.",
    scene: "Tonight, the attic hatch is open. The doll is sitting at the top of the ladder, looking down at you.<br><br>What do you do?",
    choices: [
      {
        text: "Climb into the attic",
        scene: "You climb the ladder...",
        result: "<strong>Attic Ending.</strong><br>The attic is filled with identical dolls. All of them have your eyes.",
        ending: "Attic Ending"
      },
      {
        text: "Move the doll away",
        scene: "You pick up the doll...",
        result: "<strong>Doll Ending.</strong><br>It feels warm. Something inside it beats once, like a small heart.",
        ending: "Doll Ending"
      },
      {
        text: "Close the hatch",
        scene: "You pull the attic hatch shut...",
        result: "<strong>Hatch Ending.</strong><br>After a minute, tiny fingers push the hatch open from above.",
        ending: "Hatch Ending"
      },
      {
        text: "Take a picture",
        scene: "You photograph the doll...",
        result: "<strong>Picture Ending.</strong><br>In the picture, the doll is standing beside you at the bottom of the ladder.",
        ending: "Picture Ending"
      }
    ]
  },
  {
    id: "platform-zero",
    title: "Platform Zero",
    cardText: "A hidden subway platform appears behind a locked service door.",
    intro: "You miss your train and notice a service door slightly open. Behind it, stairs lead down to Platform 0.",
    scene: "There are no passengers. A train waits with its doors open. The sign says: “Boarding only for those already missing.”<br><br>What do you do?",
    choices: [
      {
        text: "Board the train",
        scene: "You step into the train...",
        result: "<strong>Missing Ending.</strong><br>Your phone loses signal. On the seat is a missing person poster with your face on it.",
        ending: "Missing Ending"
      },
      {
        text: "Go back upstairs",
        scene: "You run back up the stairs...",
        result: "<strong>Exit Ending.</strong><br>The service door opens into a different station where every ad has your name on it.",
        ending: "Exit Ending"
      },
      {
        text: "Read the sign",
        scene: "You step closer to the platform sign...",
        result: "<strong>Sign Ending.</strong><br>The sign changes: “Next train arrives after you disappear.”",
        ending: "Sign Ending"
      },
      {
        text: "Call for help",
        scene: "You shout for someone...",
        result: "<strong>Echo Ending.</strong><br>Your echo answers from inside the train: “Too late.”",
        ending: "Echo Ending"
      }
    ]
  },
  {
    id: "hotel-phone",
    title: "The Hotel Phone",
    cardText: "A hotel room phone rings even though it is unplugged.",
    intro: "You check into a cheap hotel for one night. At 2:13 AM, the room phone rings. The cord is not connected.",
    scene: "The phone rings three times, stops, then rings again. The display says: “Room 000.”<br><br>What do you do?",
    choices: [
      {
        text: "Answer the phone",
        scene: "You lift the receiver...",
        result: "<strong>Room 000 Ending.</strong><br>A voice says, “This is the front desk. Please do not look in the bathtub.”",
        ending: "Room 000 Ending"
      },
      {
        text: "Check the bathtub",
        scene: "You walk into the bathroom...",
        result: "<strong>Bathroom Ending.</strong><br>The tub is dry, but there are wet footprints leading out of it.",
        ending: "Bathroom Ending"
      },
      {
        text: "Unplug it again",
        scene: "You pull the cord out completely...",
        result: "<strong>Disconnected Ending.</strong><br>The phone keeps ringing. Now the sound is coming from under your pillow.",
        ending: "Disconnected Ending"
      },
      {
        text: "Call the front desk",
        scene: "You dial the front desk...",
        result: "<strong>Desk Ending.</strong><br>The clerk answers and says, “We have no guests on your floor tonight.”",
        ending: "Desk Ending"
      }
    ]
  },
  {
    id: "shadow-in-photo",
    title: "The Shadow in the Photo",
    cardText: "Every photo you take includes a shadow standing behind you.",
    intro: "You take a selfie in your room and notice a shadow behind you. When you turn around, nothing is there.",
    scene: "You take another photo. The shadow is closer this time, one hand raised near your shoulder.<br><br>What do you do?",
    choices: [
      {
        text: "Take more photos",
        scene: "You keep taking pictures...",
        result: "<strong>Closer Ending.</strong><br>In each photo, the shadow moves closer. In the last one, it is holding the phone.",
        ending: "Closer Ending"
      },
      {
        text: "Turn on all lights",
        scene: "You turn on every light in the room...",
        result: "<strong>Light Ending.</strong><br>The room is bright. Your shadow disappears, but the other one remains.",
        ending: "Light Ending"
      },
      {
        text: "Delete the photos",
        scene: "You delete every picture...",
        result: "<strong>Deleted Ending.</strong><br>Your gallery becomes empty. Then a new album appears: “Behind You.”",
        ending: "Deleted Ending"
      },
      {
        text: "Take a picture of the mirror",
        scene: "You aim the camera at the mirror...",
        result: "<strong>Mirror Ending.</strong><br>The mirror photo shows the shadow sitting on your bed, waiting.",
        ending: "Mirror Ending"
      }
    ]
  },
  {
    id: "last-door-left",
    title: "The Last Door on the Left",
    cardText: "A hallway gains one extra door every night.",
    intro: "Your apartment hallway has five doors. Tonight, there are six. The new one is the last door on the left.",
    scene: "The door has no number, only a small brass plate that says: “Return what you borrowed.”<br><br>What do you do?",
    choices: [
      {
        text: "Open the door",
        scene: "You open it slowly...",
        result: "<strong>Borrowed Ending.</strong><br>Inside is your childhood bedroom. On the bed is every lie you have ever told, written on paper.",
        ending: "Borrowed Ending"
      },
      {
        text: "Knock first",
        scene: "You knock twice...",
        result: "<strong>Knock Ending.</strong><br>Someone knocks back from the inside, then whispers, “You still remember the rules.”",
        ending: "Knock Ending"
      },
      {
        text: "Ignore the door",
        scene: "You walk past it...",
        result: "<strong>Ignored Ending.</strong><br>The next morning, the door is outside your bedroom instead.",
        ending: "Ignored Ending"
      },
      {
        text: "Remove the brass plate",
        scene: "You pry the plate off...",
        result: "<strong>Plate Ending.</strong><br>Behind the plate is a keyhole. An eye blinks from inside.",
        ending: "Plate Ending"
      }
    ]
  },
    {
    id: "black-lake-reflection",
    title: "The Black Lake Reflection",
    cardText: "A lake reflects someone standing behind you, but the shore is empty.",
    intro: "You walk past a black lake after midnight. The water is still, but your reflection is not alone.",
    scene: "In the lake, someone stands behind you with one hand on your shoulder. You feel nothing on your shoulder in real life.<br><br>What do you do?",
    choices: [
      {
        text: "Turn around",
        scene: "You turn away from the lake...",
        result: "<strong>Shore Ending.</strong><br>No one is there. When you look back, your reflection is still facing the opposite direction.",
        ending: "Shore Ending"
      },
      {
        text: "Touch the water",
        scene: "You kneel and touch the lake...",
        result: "<strong>Ripple Ending.</strong><br>The water feels warm. A hand from beneath the surface presses against your palm.",
        ending: "Ripple Ending"
      },
      {
        text: "Walk away",
        scene: "You step away from the lake...",
        result: "<strong>Follow Ending.</strong><br>Your wet footprints appear in front of you, leading home before you take each step.",
        ending: "Follow Ending"
      },
      {
        text: "Throw a stone",
        scene: "You throw a stone into the reflection...",
        result: "<strong>Stone Ending.</strong><br>The stone sinks upward into the reflected sky. Behind you, someone whispers, You missed.",
        ending: "Stone Ending"
      }
    ]
  },
  {
    id: "elevator-b13",
    title: "Elevator B13",
    cardText: "Your office elevator shows a basement level that should not exist.",
    intro: "You work in a building with twelve floors and no basement. Tonight, the elevator panel shows one extra button: B13.",
    scene: "The B13 button is glowing red. The elevator doors are already open, waiting.<br><br>What do you do?",
    choices: [
      {
        text: "Press B13",
        scene: "You press the glowing button...",
        result: "<strong>Basement Ending.</strong><br>The elevator drops for far too long. When it opens, the hallway looks exactly like your childhood home.",
        ending: "Basement Ending"
      },
      {
        text: "Press lobby",
        scene: "You press the lobby button instead...",
        result: "<strong>Lobby Ending.</strong><br>The elevator says Going down. Every floor number on the display changes to B13.",
        ending: "Lobby Ending"
      },
      {
        text: "Step out",
        scene: "You leave the elevator quickly...",
        result: "<strong>Door Ending.</strong><br>The doors close behind you. The elevator indicator shows that you are still inside.",
        ending: "Door Ending"
      },
      {
        text: "Hold the door open",
        scene: "You press the door-open button...",
        result: "<strong>Hold Ending.</strong><br>A hand reaches from the elevator wall and presses the close button.",
        ending: "Hold Ending"
      }
    ]
  },
  {
    id: "room-that-breathes",
    title: "The Room That Breathes",
    cardText: "A locked room in your house expands and contracts like lungs.",
    intro: "There is one locked room in your house you never use. Tonight, you notice the door moving slightly in and out.",
    scene: "The wood creaks like breathing. Warm air leaks from the keyhole.<br><br>What do you do?",
    choices: [
      {
        text: "Look through the keyhole",
        scene: "You lower your eye to the keyhole...",
        result: "<strong>Keyhole Ending.</strong><br>Something on the other side is looking back through another keyhole.",
        ending: "Keyhole Ending"
      },
      {
        text: "Unlock the room",
        scene: "You turn the key slowly...",
        result: "<strong>Breath Ending.</strong><br>The room inhales. The door pulls you inward before you can scream.",
        ending: "Breath Ending"
      },
      {
        text: "Seal the door",
        scene: "You tape the edges of the door shut...",
        result: "<strong>Sealed Ending.</strong><br>The breathing stops. Then every window in the house begins to fog from the inside.",
        ending: "Sealed Ending"
      },
      {
        text: "Call someone over",
        scene: "You call a friend to witness it...",
        result: "<strong>Witness Ending.</strong><br>Your friend arrives and says the room was never locked. Then they step inside and vanish.",
        ending: "Witness Ending"
      }
    ]
  },
  {
    id: "number-station",
    title: "The Number Station",
    cardText: "Your radio picks up a voice reading numbers that match your life.",
    intro: "An old radio in your closet turns on by itself. A calm voice begins reading numbers.",
    scene: "The numbers are your birthday, your apartment number, and the time you will wake up tomorrow. Then the voice says: Next sequence begins now.<br><br>What do you do?",
    choices: [
      {
        text: "Keep listening",
        scene: "You let the radio continue...",
        result: "<strong>Sequence Ending.</strong><br>The next numbers match your heartbeat. With every number, your pulse slows.",
        ending: "Sequence Ending"
      },
      {
        text: "Turn it off",
        scene: "You switch off the radio...",
        result: "<strong>Static Ending.</strong><br>The speaker goes silent, but the numbers continue from inside your walls.",
        ending: "Static Ending"
      },
      {
        text: "Write the numbers down",
        scene: "You grab a pen and paper...",
        result: "<strong>Code Ending.</strong><br>The numbers form coordinates. They point to your bedroom.",
        ending: "Code Ending"
      },
      {
        text: "Answer back",
        scene: "You speak into the radio...",
        result: "<strong>Broadcast Ending.</strong><br>The voice stops. Then it repeats your sentence in a room full of other voices.",
        ending: "Broadcast Ending"
      }
    ]
  },
  {
    id: "forgotten-app",
    title: "The Forgotten App",
    cardText: "An app you never installed appears on your phone.",
    intro: "A black icon appears on your phone. It has no name, only a red eye. You do not remember installing it.",
    scene: "When you open it, the screen shows a live map of your apartment. One red dot is moving behind you.<br><br>What do you do?",
    choices: [
      {
        text: "Delete the app",
        scene: "You hold the icon and delete it...",
        result: "<strong>Deleted Ending.</strong><br>The app disappears. Then your phone receives a message: You cannot uninstall what installed you.",
        ending: "Deleted Ending"
      },
      {
        text: "Follow the red dot",
        scene: "You watch the dot move through the map...",
        result: "<strong>Map Ending.</strong><br>The dot reaches your bedroom. Your bedroom door opens by itself.",
        ending: "Map Ending"
      },
      {
        text: "Turn off your phone",
        scene: "You power down your phone...",
        result: "<strong>Offline Ending.</strong><br>The screen stays black, but the red dot is still visible in the glass reflection.",
        ending: "Offline Ending"
      },
      {
        text: "Tap the red dot",
        scene: "You tap the moving dot...",
        result: "<strong>Contact Ending.</strong><br>Your phone vibrates. Something behind you taps your shoulder at the same time.",
        ending: "Contact Ending"
      }
    ]
  },
  {
    id: "train-window-face",
    title: "The Face in the Train Window",
    cardText: "A face appears in the train window when you pass through a tunnel.",
    intro: "You take the last train home. When the train enters a tunnel, the window becomes a mirror.",
    scene: "In the reflection, a pale face sits beside you. The seat beside you is empty.<br><br>What do you do?",
    choices: [
      {
        text: "Look at the empty seat",
        scene: "You turn to the seat beside you...",
        result: "<strong>Seat Ending.</strong><br>The seat is empty, but it is warm. The window reflection smiles.",
        ending: "Seat Ending"
      },
      {
        text: "Stare at the window",
        scene: "You keep your eyes on the reflection...",
        result: "<strong>Window Ending.</strong><br>The face leans closer until its forehead touches the glass from your side.",
        ending: "Window Ending"
      },
      {
        text: "Move cars",
        scene: "You walk into the next car...",
        result: "<strong>Car Ending.</strong><br>Every passenger in the next car has the same pale face turned toward you.",
        ending: "Car Ending"
      },
      {
        text: "Get off early",
        scene: "You step off at the next station...",
        result: "<strong>Station Ending.</strong><br>The train leaves. In every window, the face is still sitting beside where you were.",
        ending: "Station Ending"
      }
    ]
  },
  {
    id: "red-umbrella",
    title: "The Red Umbrella",
    cardText: "A red umbrella waits outside your door every rainy night.",
    intro: "For three rainy nights, a red umbrella has appeared outside your door. It is always dry.",
    scene: "Tonight, a note is tied to the handle: Take it before the rain remembers you.<br><br>What do you do?",
    choices: [
      {
        text: "Take the umbrella",
        scene: "You pick up the umbrella...",
        result: "<strong>Umbrella Ending.</strong><br>When you open it, the rain stops everywhere except directly above you.",
        ending: "Umbrella Ending"
      },
      {
        text: "Leave it outside",
        scene: "You close the door and ignore it...",
        result: "<strong>Doorstep Ending.</strong><br>At midnight, water starts dripping from your ceiling in the shape of footprints.",
        ending: "Doorstep Ending"
      },
      {
        text: "Read the note again",
        scene: "You untie the wet note...",
        result: "<strong>Note Ending.</strong><br>The back of the note says: Too late. It already remembers.",
        ending: "Note Ending"
      },
      {
        text: "Throw it away",
        scene: "You throw the umbrella into the trash...",
        result: "<strong>Return Ending.</strong><br>The trash can fills with rainwater. The umbrella floats back to the surface.",
        ending: "Return Ending"
      }
    ]
  },
  {
    id: "locked-inbox",
    title: "The Locked Inbox",
    cardText: "Your email inbox receives messages from yourself one year later.",
    intro: "You open your email and find a new folder called LOCKED. Inside are messages sent from your own address.",
    scene: "The newest message is dated one year from now. Subject: Do not reply this time.<br><br>What do you do?",
    choices: [
      {
        text: "Open the message",
        scene: "You open the future email...",
        result: "<strong>Email Ending.</strong><br>The message contains one sentence: If you are reading this, the first loop failed.",
        ending: "Email Ending"
      },
      {
        text: "Reply to yourself",
        scene: "You type a reply...",
        result: "<strong>Reply Ending.</strong><br>Your reply sends instantly. A new message appears: That is exactly what I did.",
        ending: "Reply Ending"
      },
      {
        text: "Delete the folder",
        scene: "You delete the LOCKED folder...",
        result: "<strong>Deleted Ending.</strong><br>Your screen refreshes. The folder returns, now titled OPENED.",
        ending: "Deleted Ending"
      },
      {
        text: "Check sent mail",
        scene: "You open your sent folder...",
        result: "<strong>Sent Ending.</strong><br>There are hundreds of emails you never wrote. All of them are warnings.",
        ending: "Sent Ending"
      }
    ]
  },
  {
    id: "corridor-camera",
    title: "The Corridor Camera",
    cardText: "A security camera records you walking through a corridor you never entered.",
    intro: "Your apartment building sends you a security alert. The video shows you walking through a service corridor at 2:13 AM.",
    scene: "In the footage, you stop, face the camera, and mouth two words: Help me.<br><br>What do you do?",
    choices: [
      {
        text: "Find the corridor",
        scene: "You search the building for the service corridor...",
        result: "<strong>Corridor Ending.</strong><br>You find it behind a door marked Storage. The camera is already pointed at you.",
        ending: "Corridor Ending"
      },
      {
        text: "Call building security",
        scene: "You call the security desk...",
        result: "<strong>Security Ending.</strong><br>The guard says the camera was removed last month. Then he asks why you are on it.",
        ending: "Security Ending"
      },
      {
        text: "Watch the video again",
        scene: "You replay the footage...",
        result: "<strong>Replay Ending.</strong><br>This time, the version of you in the video mouths different words: Behind you.",
        ending: "Replay Ending"
      },
      {
        text: "Delete the alert",
        scene: "You delete the notification...",
        result: "<strong>Alert Ending.</strong><br>A new alert appears immediately: Motion detected inside your apartment.",
        ending: "Alert Ending"
      }
    ]
  },
  {
    id: "birthday-call",
    title: "The Birthday Call",
    cardText: "Every year on your birthday, someone calls and counts down.",
    intro: "At exactly midnight on your birthday, an unknown number calls. It has happened every year since you were ten.",
    scene: "This year, the voice does not say happy birthday. It starts counting backward from ten.<br><br>What do you do?",
    choices: [
      {
        text: "Listen to the countdown",
        scene: "You stay silent and listen...",
        result: "<strong>Countdown Ending.</strong><br>When the voice reaches zero, someone knocks on your door exactly once.",
        ending: "Countdown Ending"
      },
      {
        text: "Hang up",
        scene: "You end the call...",
        result: "<strong>Hang Up Ending.</strong><br>The phone rings again from inside your closed drawer.",
        ending: "Hang Up Ending"
      },
      {
        text: "Ask who is calling",
        scene: "You interrupt the voice...",
        result: "<strong>Caller Ending.</strong><br>The voice says your name, then adds, Not yet, but soon.",
        ending: "Caller Ending"
      },
      {
        text: "Block the number",
        scene: "You block the unknown number...",
        result: "<strong>Blocked Ending.</strong><br>Your screen shows one blocked contact: Future You.",
        ending: "Blocked Ending"
      }
    ]
  }
];

// trigger deploy 41-50

