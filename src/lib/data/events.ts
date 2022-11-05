import aceclutchers from '$lib/assets/events/aceclutchers.png';
import autocoders from '$lib/assets/events/autocoders.png';
import binarybishops from '$lib/assets/events/binarybishops.png';
import communix from '$lib/assets/events/communix.png';
import bountyhunt from '$lib/assets/events/bountyhunt.png';
import harddrive from '$lib/assets/events/harddrive.png'


export interface Event {
  id: string;
  name: string;
  desc: string;
  long_desc: string;
  image: string;
  icon: string;
  amount: number[];
  date: string;
  players: number[];
  type: string[];
  payment_links: string[];
  hide: boolean;
}


export const events: Event[] = [
  {
    hide: false,
    id: "events-1",
    name: "Autocoders",
    long_desc:
      "Coding is becoming an important tool one should have in their arsenal for a smooth sailing career in today's corporate world. Test your fingers in this exhilarating mind bending coding event. SO AUTOBOTS  READY, SET, CODING!",
    desc: "Finger-bots, type out…",
    amount: [50_00, 80_00, 120_00], // 100.00
    image: autocoders,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ Nov 2022",
    players: [1, 2, 3],
    type:["", "", ""],
    payment_links: [
      'https://rzp.io/l/0l3VB4xMnc',
      'https://rzp.io/l/8bn4CfyBU',
      'https://rzp.io/l/8K50JlbU',
    ]
  },
  {
    hide: false,
    id: "events-0",
    name: "Communix 4.0",
    long_desc:
      "Verbal expression is an important aspect of our life and a strong communicator is always   articulate with the words. So here we are with an event that will provide you an opportunity to link your thoughts and show your caliber.",
    desc: "You can talk but, can you communix!?",
    amount: [40_00], // 100.00
    image: communix,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ Nov 2022",
    players: [1],
    type: [""],
    payment_links: [
      "https://rzp.io/l/t13epeW",
    ]
  },
  {
    hide: false,
    id: "events-2",
    name: "Binary Bishops",
    long_desc:
      "Hello check-mates! We have a perfect platform for the ones competent enough to solve questions. But wait, here the crux is to show off your chess moves. So, get your pieces ready and Sygrayem;",
    desc: "When you see a good move, look for better one",
    amount: [60_00, 100_00], // 100.00
    image: binarybishops,
    icon: "clarity:bar-code-line",
    date: "13ᵗʰ Nov 2022",
    players: [1, 2],
    type:["", ""],
    payment_links: [
      'https://rzp.io/l/LPNQeJ1zt',
      'https://rzp.io/l/IPGVIAOl2U',
    ]
  },
  {
    hide: false,
    id: "events-3",
    name: "Bounty Hunt",
    long_desc:
      "Jake and The NeverLand Pirates or Jack Sparrow we’ve been pretty curious about those ‘treasure hunting games’ isn’t it? We present to you the most exciting event packed with exhilarating activities. Bring on your squad and unravel the mysteries hidden in the entangling hallways of GCOEN. You may register with a team of 2 - 4 members.",
    desc: "Let the hunt begin… !!!",
    amount: [200_00], // 100.00
    image: bountyhunt,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ & 13ᵗʰ Nov 2022",
    players: [4],
    type:[""],
    payment_links: [
      // 'https://rzp.io/l/C7ZnM1j',
      "about:blank"
    ]
  },
  {
    hide: false,
    id: "events-4",
    name: "Ace Clutchers",
    long_desc:
      "Hey gamers! We are here with a great opportunity for you to beat others and be the best in the field of gaming. So fasten your seat belts, clutch your moves, race in the ultimate automotive playground and conquer your rivals.",
    desc: "One life, one chance",
    amount: [200_00, 150_00], // 100.00
    image: aceclutchers,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ & 13ᵗʰ Nov 2022",
    players: [5, 5],
    type:["VALORANT", 'COD MOBILE'],
    payment_links: [
      'https://rzp.io/l/u5LTH9kE5',
      'https://rzp.io/l/aDRCQH9',
    ]
  },
  {
    hide: false,
    id: "events-5",
    name: "Hard Drive",
    long_desc:
      "Bots overpower humans or is it vice-versa? We’ve got a way to figure this out. We present ‘Hard-Drive’ which tests your ability to swiftly maneuver the bot. Get the grip on and exhibit your skills.",
    desc: "Don’t Rush But be Expeditious!?",
    amount: [40_00], // 100.00
    image: harddrive,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ Nov 2022",
    players: [1],
    type:[""],
    payment_links: [
      'https://rzp.io/l/3ELT4ABmn',
    ]
  },
  // {
  //   id: "events-6",
  //   name: "Seminar",
  //   long_desc:
  //     "Coming Soon...",
  //   desc: "Coming Soon",
  //   amount: [0], // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "clarity:bar-code-line",
  //   date: "12 Nov 2022",
  //   players: [1],
  //   type:[""],
  //   payment_links: [
  //     '/register/events-6',
  //   ]
  // },
  // {
  //   id: "events-1",
  //   name: "CoderCut v6.1",
  //   long_desc: "Longer CoderCut v6.9",
  //   desc: "CoderCut v6.9",
    // amount: [50_00, 80_00, 120_00], // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "simple-icons:codereview",
  //   date: "2021-09-01",
  //   players: [1, 2, 3],
  // },
  // {
  //   id: "events-2",
  //   name: "CoderCut v6.2",
  //   long_desc: "Longer CoderCut v6.9",
  //   desc: "CoderCut v6.9",
  //   amount: 102_00, // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "bx:code-block",
  //   date: "2021-09-01",
  //   players: 1,
  // },
];

/* {
    id: "events-3",
    name: "CoderCut v6.3",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 103_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "ci:qr-code-1",
    date: "2021-09-01",
    players: 5,
  },
  {
    id: "events-4",
    name: "CoderCut v6.4",
    desc: "CoderCut v6.9",
    long_desc: "Longer CoderCut v6.9",
    amount: 104_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "cib:code-climate",
    date: "2021-09-01",
    players: 1,
  },
  {
    id: "events-5",
    name: "CoderCut v6.5",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 105_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "carbon:repo-source-code",
    date: "2021-09-01",
    players: 4,
  },
  {
    id: "events-6",
    long_desc: "Longer CoderCut v6.9",
    name: "CoderCut v6.6",
    desc: "CoderCut v6.9",
    amount: 106_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "ant-design:code-sandbox-outlined",
    date: "2021-09-01",
    players: 1,
  },
  {
    id: "events-7",
    name: "CoderCut v6.7",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 107_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "dashicons:code-standards",
    date: "2021-09-01",
    players: 2,
  }, */
