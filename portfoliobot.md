🛠️ Mischievous AI Portfolio Bot – Full Project Scope
Project Overview

Name: Mischievous AI Portfolio Bot
Goal: Create a 2D cartoon robot AI character for a portfolio website that is playful, interactive, and engaging while remaining fully hireable. The bot behaves differently on each visit, interacts with content, and respects user control, on both desktop and mobile.

Core Principles:

Autonomous but bounded – Emergent behavior without frustrating randomness.

Hireable and professional – Respects content, user control, and accessibility.

Playable and fun – Steals elements, chats, asks questions, but never insults or blocks functionality.

User control is supreme – Dragging or shutdown always overrides AI behavior.

Memory-informed – Adapts behavior based on past interactions.

Responsive design – Works seamlessly across desktop, tablet, and mobile screens.

Features
1. Bot Presence

Always visible on screen, may peek behind content or sit on top.

2D cartoon robot (SVG or Lottie).

Smooth animations: idle, blink, hop, walk.

Fully responsive: bot scales appropriately based on viewport width and height.

2. States
State	Description
IDLE	Standing or blinking
WANDER	Moves around safe areas of the viewport
ATTACH	Hangs/sits on pre-defined content anchors
STEAL	Temporarily grabs a visual element
RETURN	Returns stolen element
CHAT	Asks questions / responds
HELD_BY_USER	User is dragging (touch or pointer)
RELOCATE	Moves to a new safe zone after drag
PARKED	Shutdown in bottom-right corner
3. Dragging Mechanics

Desktop: Click & drag → bot yields immediately

Mobile / Touch: Touch & drag → bot yields immediately

On release → relocation behavior triggers, avoiding dropped spot

Smooth animations, no snapping unless playful

Optional visual feedback during drag (arms limp, eyes close, small speech bubble)

4. Anchors & Attachments

DOM elements marked with data-ai-anchor

Bot attaches to edges, corners, or safe visual areas

Avoids text-heavy areas, CTAs, forms

CSS transform-based to avoid layout reflows

Anchors dynamically adjust for responsive layouts

5. Stealing / Returning Elements

Can temporarily “borrow” project cards or headers

Clone + move element, hide original, animate with bot

User can click “Give it back” → bot returns element

Lines:

Steal: “I’m just gonna take this for now”

Return: “Fine. You win this round.”

6. Chat / AI Lines

Mini inline chat box

User types → mapped to intents (hiring, curious, engineer, playful)

Bot responds with pre-written + optional LLM-paraphrased lines

Works on mobile (chat box adapts to screen size, keyboard-friendly)

Examples:

“So… what brings you here?”

“Careful, I’m delicate.”

“IM BACK, BABY”

7. Shutdown / Re-enable

Shutdown button → bot parks bottom-right, stops animations

Line: “Oh, my bad. I’ll give you some space.”

Re-enable → bot resumes, line: “IM BACK, BABY. Don’t worry. I’ll behave.”

Persistent via localStorage

Works on both desktop and mobile (button responsive and tappable)

8. Memory & Emergent Behavior

Tracks:

User overrides (drag, shutdown)

AvoidZones (temporary no-go areas)

Interaction history

Adapts behavior:

Avoids previously dragged zones

Reduces interventions if ignored multiple times

Chooses different lines and anchors each visit

9. Personality & Humor Rules

Playful, teasing, self-aware

Short, snappy lines

Never insulting or aggressive

Humor is self-directed or playful, never passive-aggressive

Lines adapt slightly to desktop vs mobile interactions

Behavior Logic

State machine controls behavior

Probabilistic transitions based on:

Curiosity

Confidence

Playfulness

Visitor engagement level

Avoid interfering with active content

Anchors selected with preference weights

Emergent variety ensures each visit feels different

Technical Stack

Frontend / UI

React / Vue / Svelte (for state management and responsiveness)

GSAP / Framer Motion (smooth 2D animations)

Interact.js or pointer/touch events (dragging support for desktop + mobile)

SVG / Lottie (bot graphics)

AI / Chat

Optional: OpenAI API for phrasing + humor

Intent mapping to pre-written responses

State & Memory

BotController + BotMemory (JS objects)

localStorage for persistence of shutdown and avoidZones

Performance Guidelines

Keep bot 2D

Use requestAnimationFrame for animation loops

Limit clones / stolen elements to 1–2 at a time

Cache LLM phrases or use pre-written lines to reduce API calls

Throttle movement updates to 30–60 FPS

Mobile: reduce animation frequency and simplify transforms if needed

Fully responsive sizing for bot and chat UI

Suggested Build Order

Render 2D bot on screen (responsive SVG/Lottie)

Implement drag mechanics (desktop & touch)

Implement shutdown / re-enable flow

Add anchors & attachment behavior

Implement wandering / free-float movement

Add stealing & returning elements

Add chat box + AI lines

Implement memory & emergent behavior

Fine-tune animations, timing, humor

Test responsiveness, edge cases, and performance across devices

Recruiter / Hiring Signals

By implementing this bot, you demonstrate:

Systems thinking (state machine, probabilistic policy, memory)

UX & human-centered design (respecting user control)

Frontend engineering skills (animations, DOM, drag physics)

Controlled playfulness & product sense

Understanding of AI integration without risk

Optional Extra Flair

Bot waves or nods when user reads long sections

Meta-commentary about portfolio projects

Easter eggs:

“You caught me stealing twice!”

Unlock small playful animations

Safety & Hireable Constraints

Never block text or interactive elements

Never interrupt user flows

Shutdown & drag always respected

Emergent behavior is bounded, never chaotic

Humor is friendly and self-directed

Fully responsive and mobile-friendly

✅ Result: A 2D, mischievous, responsive AI bot that runs smoothly on desktop and mobile, is playful but safe, and demonstrates high-level engineering and UX skills — perfect for a memorable portfolio.