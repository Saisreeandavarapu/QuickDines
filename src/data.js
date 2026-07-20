// Centralized copy and configurations for the QuickDines landing page
// Modify this file to update the text, statistics, FAQs, or contact details.

export const companyData = {
  name: "QuickDines",
  tagline: "Smart Dining.",
  logoUrl: "/logo.svg", // SVG component will be used, fallback to this
  
  hero: {
    headline: "Order Before You Arrive. Dine Instantly.",
    subtitle: "Save Time. Skip Waiting. Travel Smarter. Experience seamless food pre-ordering on your long-distance journeys.",
    ctaPrimary: "Download App",
    ctaSecondary: "Partner With Us",
  },

  stats: [
    { value: 1000, suffix: "+", label: "Daily Travelers", subtext: "Satisfied commuters" },
    { value: 250, suffix: "+", label: "Restaurants", subtext: "Highway dining options" },
    { value: 150, suffix: "+", label: "Bus Partners", subtext: "Intercity route coverage" },
    { value: 10, suffix: "K+", label: "Orders Served", subtext: "Delivered fresh & hot" },
  ],

  about: {
    title: "Why QuickDines?",
    subtitle: "The Highway Dining Revolution",
    problem: {
      title: "The Problem",
      description: "When buses stop at highway restaurants during long journeys, passengers waste valuable time. Waiting in lines, slow food preparation, ordering delays, and payment bottlenecks eat up the 30-minute stop time, leading to rushed meals or missed journeys.",
      tag: "The Journey Struggle",
      icon: "TrendingDown"
    },
    solution: {
      title: "The QuickDines Solution",
      description: "QuickDines integrates travelers, bus operators, and restaurants into one synchronized platform. Browse menus and place your order 1 hour before arrival. By the time your bus pulls in, your food is hot, ready, and waiting. Dine instantly and relax.",
      tag: "Smart Dining Solution",
      icon: "Zap"
    }
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "Your journey to instant dining in 7 simple steps",
    steps: [
      {
        step: "01",
        title: "Book your bus journey",
        description: "Choose a QuickDines partner bus service for your travel.",
        icon: "Ticket"
      },
      {
        step: "02",
        title: "Browse restaurant menu",
        description: "Explore top-rated restaurants along your route directly in the app.",
        icon: "BookOpen"
      },
      {
        step: "03",
        title: "Order 1 hour before arrival",
        description: "Place your order and make a secure checkout while on the move.",
        icon: "Clock"
      },
      {
        step: "04",
        title: "Food gets prepared",
        description: "The kitchen receives your order and prepares it fresh for your arrival.",
        icon: "ChefHat"
      },
      {
        step: "05",
        title: "Bus arrives",
        description: "Your bus pulls into the designated restaurant stop right on schedule.",
        icon: "Bus"
      },
      {
        step: "06",
        title: "Enjoy your meal instantly",
        description: "Walk straight to your reserved table; your hot food is served immediately.",
        icon: "Utensils"
      },
      {
        step: "07",
        title: "Continue your journey",
        description: "Board your bus refreshed, without rushing or waiting for bills.",
        icon: "Compass"
      }
    ]
  },

  features: {
    title: "Designed For Modern Travel",
    subtitle: "Loaded with smart features to make your long journeys pleasant, efficient, and delicious.",
    items: [
      {
        title: "Pre-order Food",
        description: "Browse menu items, customize meals, and place your order ahead of arrival.",
        icon: "ShoppingBag"
      },
      {
        title: "Live Order Tracking",
        description: "Monitor the preparation status of your meal in real-time.",
        icon: "Activity"
      },
      {
        title: "Secure Payments",
        description: "Pay seamlessly with cards, UPI, net banking, or digital wallets.",
        icon: "CreditCard"
      },
      {
        title: "Partner Restaurants",
        description: "Dine at handpicked, top-rated restaurants known for high hygiene standards.",
        icon: "Award"
      },
      {
        title: "Bus Tracking",
        description: "Synchronized GPS syncs restaurant prep timing with the real-time location of your bus.",
        icon: "Map"
      },
      {
        title: "Digital Bills",
        description: "Get instant digital receipts for expense tracking and quick checkouts.",
        icon: "FileText"
      },
      {
        title: "Fast Checkout",
        description: "Skip the cash counter completely with pre-paid online transactions.",
        icon: "Zap"
      },
      {
        title: "Time Saving",
        description: "Save an average of 25 minutes per stop, giving you time to stretch and relax.",
        icon: "Hourglass"
      },
      {
        title: "GPS Integration",
        description: "Get smart suggestions for restaurants based on your exact route coordinates.",
        icon: "Navigation"
      },
      {
        title: "Easy Ordering",
        description: "User-friendly interface optimized for low network conditions on highways.",
        icon: "Smile"
      }
    ]
  },

  benefits: {
    title: "Value For Everyone",
    subtitle: "A win-win-win ecosystem connecting travelers, restaurants, and bus fleets.",
    travelers: {
      title: "For Travelers",
      icon: "User",
      points: [
        { title: "Save Time", desc: "No more standing in queues; eat the moment you step off the bus." },
        { title: "No Waiting", desc: "Your stop is for resting, not stressfully waiting for your meal." },
        { title: "Fresh Food", desc: "Meals are timed to match your arrival, served piping hot and fresh." },
        { title: "Cashless Payment", desc: "Safe, contact-free online transactions directly from your seat." }
      ]
    },
    restaurants: {
      title: "For Restaurants",
      icon: "Store",
      points: [
        { title: "Increase Sales", desc: "Capture more orders from bus passengers who otherwise skip eating." },
        { title: "Better Planning", desc: "Predict kitchen load in advance and optimize food inventory." },
        { title: "More Customers", desc: "Gain visibility and repeat business from regular highway commuters." }
      ]
    },
    operators: {
      title: "For Bus Operators",
      icon: "Shield",
      points: [
        { title: "Happy Passengers", desc: "Provide a premium travel perk that sets your bus service apart." },
        { title: "Quick Stops", desc: "Keep stops strictly on schedule without delays from stranded eaters." },
        { title: "Better Experience", desc: "Improve overall customer satisfaction scores for your journeys." }
      ]
    }
  },

  partners: {
    title: "Trusted By Industry Leaders",
    subtitle: "We collaborate with the region's finest dining options and transit organizations.",
    categories: [
      {
        name: "Partner Restaurants",
        logos: ["Highway Delight", "Spicy Route", "Grand Trunk Dine", "Food Oasis", "Pure Veg Junction"]
      },
      {
        name: "Bus Fleet Operators",
        logos: ["Royal Travels", "InterCity Express", "Express Lines", "Swift Cruiser", "National Trans"]
      },
      {
        name: "Travel & Tech Partners",
        logos: ["GoRoute", "TravelMap", "PaySafe", "TrackFast", "GeoLocation API"]
      }
    ]
  },

  testimonials: [
    {
      quote: "QuickDines completely changed my weekend travel. I used to survive on packaged chips because restaurant queues were so long. Now I step out of the bus, eat a hot plate of Biryani, and board the bus relaxed!",
      author: "Aditya Verma",
      role: "Frequent IT Professional Traveler",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      quote: "As a restaurant owner, managing 50 customers suddenly entering the kitchen area within 10 minutes was a nightmare. QuickDines alerts us 1 hour earlier. We prepare in advance, and the feedback has been amazing.",
      author: "Meenakshi Sundaram",
      role: "Owner, Saravana Highway Inn",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      quote: "Our bus company's delay ratings dropped by 40% after partnering with QuickDines. Passengers order beforehand, eat on time, and we leave the stop exactly on schedule. It's a game-changer.",
      author: "Rajesh K. Mehta",
      role: "Operations Manager, Orange Fleet Travels",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ],

  faqs: [
    {
      question: "How does QuickDines know when my bus will arrive?",
      answer: "We integrate with the bus's live GPS system. If your bus is delayed due to traffic, the app automatically adjusts the preparation instructions sent to the restaurant so your food remains fresh and hot when you arrive."
    },
    {
      question: "What happens if I miss the bus or cancel my ticket?",
      answer: "You can cancel or modify your food order up to 45 minutes before the scheduled arrival. Refunds are processed instantly to your original payment method in accordance with our flexible policy."
    },
    {
      question: "How high are the food safety standards of partner restaurants?",
      answer: "Extremely high. QuickDines only partners with restaurants that have valid food safety certifications (FSSAI in India) and maintain a minimum rating of 4+ stars. We conduct regular hygiene inspections."
    },
    {
      question: "Is there any extra fee for pre-ordering?",
      answer: "No, there are no markup charges. You pay the exact same menu prices as you would if you ordered in person at the restaurant. We make food pre-ordering transparent and affordable."
    },
    {
      question: "Can I place a single order for my entire family traveling together?",
      answer: "Yes, you can add multiple meals, specify custom preferences (like less spicy or vegan), and make a single unified payment for everyone in your group."
    }
  ],

  contact: {
    email: "info@quickdines.com",
    phone: "7815815794",
    address: "21-519/1/A/48P, KRISHICOLONY, SAIBABANAGAR, IDA Jeedimetla, Tirumalagiri, Hyderabad - 500055, Telangana, India",
    workingHours: "24/7 Helpline Support",
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
};
