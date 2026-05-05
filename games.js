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
];
