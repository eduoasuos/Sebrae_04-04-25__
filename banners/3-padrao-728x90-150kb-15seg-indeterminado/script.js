var animations = [
  [
   {
     id: '#i01',
     duration: 750,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1}
   }, 
   {
     id: '#i02',
     duration: 650,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0}
   },                                     
   {
     id: '#i03',
     duration: 650,
     delayBefore: 550,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0}
   },                                     
   {
     id: '#i04',
     duration: 650,
     delayBefore: 650,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0}
   },                                     
   {
     id: '#i05',
     duration: 650,
     delayBefore: 850,
     delayAfter: 3000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0}
   },                                     
  ],
  [
    {
      id: '#i02',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
    {
      id: '#i03',
      duration: 250,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
    {
      id: '#i05',
      duration: 250,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
    {
      id: '#i04',
      duration: 250,
      delayBefore: 300,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
  ],
  [
    {
      id: '#i06',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    }, 
    {
      id: '#i07',
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },     
    {
      id: '#i08',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },                                   
    {
      id: '#i09',
      duration: 650,
      delayBefore: 550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },                                   
  ],
  [
    {
      id: '#i10',
      duration: 750,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1}
    }, 
    {
      id: '#i11',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i12',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i13',
      duration: 650,
      delayBefore: 750,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
  ]
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      