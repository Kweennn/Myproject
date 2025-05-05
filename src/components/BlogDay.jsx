import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Rizal_Monument from '../assets/Rizal_Monument.jpg';
import Fort_Santiago from '../assets/Fort_Santiago.jpg';
import Moa from '../assets/Moa.jpg';import rizal2 from '../assets/rizal2.jpg';
import gomburza from '../assets/gomburza.jpg';
import classrizal from '../assets/classrizal.jpg';
import "../Blog.css";
import rizall from '../assets/rizall.jpg';
import forte from '../assets/forte.jpg';
import F1 from '../assets/F1.jpg';
import F2 from '../assets/F2.jpg';
import F3 from '../assets/F3.jpg';
import F4 from '../assets/F4.jpg';
import F5 from '../assets/F5.jpg';
import F6 from '../assets/F6.jpg';
import F7 from '../assets/F7.jpg';
import Manila from '../assets/Manila.jpg';
import Bay from '../assets/Bay.jpg';
import moa1 from '../assets/moa1.jpg';
import moa2 from '../assets/moa2.jpg';
import moa3 from '../assets/moa3.jpg';
import ferris from '../assets/ferris.jpg';
import national from '../assets/national.jpg';
import exhib from '../assets/exhib.jpg';
import sea from '../assets/sea.jpg';
import law from '../assets/law.jpg';
import center from '../assets/center.jpg';
import port from '../assets/port.jpg';
import center1 from '../assets/center1.jpg';
import center2 from '../assets/center2.jpg';
import center3 from '../assets/center3.jpg';
import center4 from '../assets/center4.jpg';
import center5 from '../assets/center5.jpg';
import center6 from '../assets/center6.jpg';
import center7 from '../assets/center7.jpg';
import sea1 from '../assets/sea1.jpg';
import sea2 from '../assets/sea2.jpg';
import sea3 from '../assets/sea3.jpg';
import riz from '../assets/riz.jpg';
import fort5 from '../assets/fort5.jpg';
import Rizal from '../assets/Rizal.jpg';
import quezon from '../assets/quezon.jpg';
import quezon1 from '../assets/quezon1.jpg';
import q5 from '../assets/q5.jpg';
import national_museo from '../assets/national_museo.jpg';
import trinoma from '../assets/trinoma.jpg';
import q2 from '../assets/q2.jpg';
import q3 from '../assets/q3.jpg';
import q4 from '../assets/q4.jpg';
import p1 from '../assets/p1.jpg';
import p6 from '../assets/p6.jpg';
import p10 from '../assets/p10.jpg';
import q9 from '../assets/q9.jpg';
import q8 from '../assets/q8.jpg';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a4 from '../assets/a4.jpg';
import a6 from '../assets/a6.jpg';
import t1 from '../assets/t1.jpg';
import t4 from '../assets/t4.jpg';
import t5 from '../assets/t5.jpg';
import t6 from '../assets/t6.jpg';
import BSP from '../assets/BSP.jpg';
import h1 from '../assets/h1.jpg';
import h4 from '../assets/h4.jpg';
import h5 from '../assets/h5.jpg';
import h2 from '../assets/h2.jpg';
import h7 from '../assets/h7.jpg';
import h8 from '../assets/h8.jpg';
import h3 from '../assets/h3.jpg';
import hytecc from '../assets/hytecc.jpg';
import l1 from '../assets/l1.jpg';
import l2 from  '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import l4 from '../assets/l4.jpg';
import l5 from '../assets/l5.jpg';
import l6 from '../assets/l6.jpg';
import l7 from '../assets/l7.jpg';
import l8 from '../assets/l8.jpg';
import l9 from '../assets/l9.jpg';
import farm from '../assets/farm.jpg';
import farm2 from '../assets/farm2.jpg';
import bell from '../assets/bell.jpg';
import bell2 from '../assets/bell2.jpg';
import pmaa from '../assets/pmaa.jpg';
import pma from '../assets/pma.jpg';
import m from '../assets/m.jpg';
import mansion from '../assets/mansion.jpg';
import mines from '../assets/mines.jpg';
import j1 from '../assets/j1.jpg';
import sou from '../assets/sou.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';




function BlogDay() {
const { dayId } = useParams();
const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
const [activeSection, setActiveSection] = useState("");

const blogBottom2Ref = useRef(null);
const blogBottom3Ref = useRef(null);
const blogBottom4Ref = useRef(null);

const toggleMenu = () => setMenuOpen(!menuOpen);
const blogPosts = [
{
id: 1,
sections: {
bottom2: {
title: "A Walk Through Courage – Honoring Rizal and GOMBURZA at Luneta",
date: "April 08, 2025",
description:`<p>Our Day-1 in Manila was full of learning, reflection, and national pride. We started our journey at Rizal Park, also known as Luneta, one of the most important historical sites in the country. This place holds great meaning because it is where Dr. José Rizal, our national hero, was executed. We visited the very spot where he was shot and followed the trail that marked his final steps. Standing there, imagining his last moments, was both a sad and inspiring experience. It reminded us of the great sacrifices made for our freedom, and it made us feel proud to be Filipinos.</p>

<p>As we continued exploring Rizal Park, we visited the GOMBURZA monument, dedicated to Fathers Gómez, Burgos, and Zamora. These three priests were wrongly accused and executed during the Spanish rule for defending Filipino rights. Seeing their names engraved in stone made us reflect on how their courage helped spark a sense of nationalism in our people.</p>
<p>Being in Rizal Park surrounded by these powerful landmarks allowed us to connect deeply with our country’s history. It was a meaningful experience that made us appreciate the bravery of those who fought for justice and freedom.</p>`,

extraImages:[
{ src: rizal2, alt: "Intramuros View" },
{ src: classrizal, alt: "Rizal Monument" },
{ src: gomburza, alt: "Gomburza" }
]
},
bottom3: {
title: "A Journey Through Fort Santiago: Reliving History",
date: "April 07, 2025",
description: `<p>We went to Intramuros, the “Walled City.” Walking through the old streets and stone buildings felt like traveling back in time. We saw churches, old walls, and Spanish-style houses that showed us how life looked during the Spanish period. We took many photos and learned a lot about our history.</p> <p>Then we explored Fort Santiago, which is inside Intramuros. A place filled with deep history, silent strength, and a lasting reminder of our fight for freedom. Located within the walled city of Intramuros, Fort Santiago was once a military fortress used by the Spanish colonial government. As we walked through its gates and along its stone paths, we couldn’t help but feel the weight of the stories it holds.</p> <p>Seeing Dr. José Rizal’s prison cell, where he spent his final days, gave us a deep respect for his bravery and love for the country.
The dungeons, once sites of suffering during Spanish and Japanese rule, reminded us of the sacrifices made for our freedom.
Standing atop Fort Santiago’s walls, we reflected on how this former place of oppression now stands as a symbol of Filipino strength and resilience.

</p>`,
extraImages: [
            { src: F6, alt: "Intramuros View" },
            { src: F1, alt: "Rizal Monument" },
            { src: fort5, alt: "Gomburza" },
            { src: F3, alt: "Gomburza" }

      ]
    },
    bottom4: {
      title: "A Stroll Through Sunset and Skylines",
      date: "April 07, 2025",
      description: `<p>Our visit to Manila Bay gave us a peaceful yet meaningful moment by the sea. We walked along the iconic baywalk as the sunset painted the sky in hues of orange and gold. The calming sound of the waves and the cool breeze gave us a chance to pause, breathe, and appreciate the simple beauty of our surroundings. It was a refreshing break after a full day of exploration, and the view of the skyline reflecting on the water was truly unforgettable.</p>
      <p>Just a few minutes away, we headed to the Mall of Asia, one of the largest malls in Asia. The vibrant energy, towering structures, and diverse mix of people captured the spirit of modern Manila. We strolled through shops, enjoyed local snacks, and marveled at the giant MOA globe taking plenty of photos along the way. Some of us even tried fun indoor rides and attractions inside the mall, adding excitement to our evening. The lively atmosphere, music, and lights gave us a taste of the city’s dynamic lifestyle.</p>
      <p>This part of our trip offered a perfect balance soaking in the natural charm of Manila Bay and enjoying the modern, urban vibe at MOA. It reminded us that learning, bonding, and leisure can go hand in hand, making the experience even more meaningful and memorable.</p>`,
                extraImages: [
                  { src: moa2, alt: "Intramuros View" },
                  { src: Bay, alt: "Rizal Monument" },
                  { src: moa3, alt: "Gomburza" }
      ]
    }
  },
  images: [
    { src: riz, title: "Rizal Park" },
    { src: Fort_Santiago, title: "Intramuros - Fort Santiago" },
    { src: Moa, title: "Mall of Asia" }
  ],
},
{
  id: 2,
  sections: {
    bottom2: {
      title: "Catalysts of Change: A Formal Encounter with Filipino Innovation at SBECC",
      date: "April 08, 2025",

description: `<p>Day 2 brought us to the Subic Bay Exhibition and Convention Center (SBECC), where we witnessed innovation and collaboration come to life. Our journey to Subic was filled with anticipation, knowing we were heading to one of the country's premier venues for showcasing Filipino excellence. Located in the heart of the Subic Bay Freeport Zone, SBECC greeted us with its modern facilities and energetic atmosphere.</p>

<p>As we stepped inside, we were surrounded by exhibits, paintings, and displays that celebrated Filipino creativity, entrepreneurship, and regional pride. We admired vibrant artworks, and engaged with cultural showcases each one telling a powerful story of progress and potential. I was especially impressed by the sustainable products, local crafts, and innovative solutions shared by passionate individuals from various sectors. It wasn’t just an exhibition; it was a reminder of how far we’ve come as a nation.</p>
<p>One of the highlights of the day was listening to Mr. Marlon E. Montello, whose insights and experiences as a speaker added depth to the event. His words encouraged us to embrace innovation and contribute meaningfully to our communities.</p>`,

extraImages: [
{ src: center7, alt: "Intramuros View" },
{ src: center2, alt: "Rizal Monument" },
{ src: center5, alt: "Gomburza" },
{ src: center3, alt: "Gomburza" }
]
},
bottom3: {
title: "Wired for Safety: Behind Subic Bay’s Law Enforcement Network",
date: "April 08, 2025",
description: `<p>One of the highlights of our visit to the SBMA Law Enforcement Department-Communication Branch was hearing from Lieutenant Derek Grueso. He shared valuable insights about the department's operations, and his firsthand knowledge and experience in law enforcement added depth to our understanding of how vital the communication branch is in supporting Subic Bay’s security efforts.</p>

<p>Our journey took us through the facility, where we were introduced to the backbone of Subic Bay's security and operations. As we walked through, we learned how the department works tirelessly to ensure the safety and smooth functioning of the Freeport Zone. The high-tech communication systems and equipment used by the team stood as a testament to the modern advancements in law enforcement and security operations.</p>
<p>We were given a behind-the-scenes look at how the department coordinates with other agencies to maintain peace and order within Subic Bay. The communication center was a hub of activity, constantly monitoring various situations and ensuring timely responses. It was incredible to see how the department’s dedication and efficiency are key in keeping Subic Bay safe and secure.</p>`,   
extraImages: [

      ]
    },
    bottom4: {
      title: "A Stroll Through Sunset and Skylines",
      date: "April 08, 2025",
      description: `<p>Our visit to the SBMA Seaport Department gave us a fascinating look into the intricate operations of Subic Bay’s maritime activities. We walked through the facility, where we were introduced to the advanced Vessel Traffic Management System, a crucial component in ensuring the smooth flow of vessel traffic in the bay. The high-tech communication systems and monitoring tools used by the department were impressive, showcasing modern innovations in maritime safety.</p>

<p>Engr. Jerome D. Saddi, ECE, was our guide, and his insights into the system's operations brought everything to life. He explained how the department coordinates with various agencies to keep Subic Bay’s waters safe and efficient. As we toured the facility, we learned about the system's ability to manage real-time data, monitor vessel movements, and prevent accidents in one of the busiest seaports in the country.</p>
<p>This part of our trip offered a perfect balance of learning about the importance of maritime safety and experiencing the seamless integration of technology and human coordination. It was a memorable opportunity to see how the SBMA Seaport Department plays a vital role in maintaining order on the waters of Subic Bay.</p>
</p>`,
                    extraImages: [
                      { src: sea3, alt: "Intramuros View" },
                      { src: sea2, alt: "Rizal Monument" },
                      { src: sea1, alt: "Gomburza" }
          ]
        }
      },
      images: [
        { src: center, title: "Subic Bay Exhibition & Convention Center (SBECC)" },
        { src: law, title: "SBMA Law Enforcement Department Communication Branch" },
        { src: port, title: "SBMA Seaport Department (Vessel Traffic Management System)" }


  ],
  
},
{
  id: 3,
  sections: {
  bottom2: {
  title: "Quezon’s Legacy: A Beacon of Filipino Pride",
  date: "April 09, 2025",
  description:`On the 3rd day of our tour, we had the chance to explore the Museo ni Manuel Quezon, located at the heart of Quezon Memorial Circle. The museum gave us a deeper understanding of President Manuel L. Quezon’s life not only as the first president of the Philippine Commonwealth but also as a visionary who laid the groundwork for our national identity. Through photographs, personal belongings, and historical records, we saw how deeply he cared for the Filipino people and championed causes like the national language, social justice, and independence.
<p>Right beside it, we entered the Presidential Car Museum, a unique gallery of presidential vehicles that served as time capsules of different leadership eras. Each car, preserved in excellent condition, stood as a symbol of authority and transition, allowing us to imagine the journeys made during critical moments in Philippine history.
<p>Both museums offered an immersive experience that brought history to life. They reminded us of the strength of leadership guided by purpose and the importance of remembering those who paved the way for the nation we know today.</p>`,

  extraImages:[
  { src: q8, alt: "Intramuros View" },
  { src: q9, alt: "Rizal Monument" },
  { src: p6, alt: "Gomburza" },
  { src: p10, alt: "Gomburza" }

  ]
  },
  bottom3: {
  title: "Life in Layers: Discovering the Depths of Nature",
  date: "April 09, 2025",
  description: `<p>We visited the National Museum of Natural History, a place that opened our eyes to the incredible biodiversity and natural wonders of the Philippines. From the moment we entered the building, we were amazed by its modern architecture especially the Tree of Life structure at the center, which symbolized growth, connection, and nature’s importance to our lives.</p>
<p>As we walked through the galleries, we discovered a wide variety of exhibits from preserved animals and marine life to the lush forests and unique ecosystems found across the country. Each section gave us a deeper understanding of how rich and diverse our natural environment is. We saw skeletons of large animals, models of deep-sea creatures, and even interactive displays that made learning more engaging and fun.</p>
<p>One of the highlights was seeing Lolong, the world’s largest crocodile ever recorded, whose massive size reminded us of how powerful and mysterious nature can be. Learning about endangered species, climate change, and conservation efforts also made us more aware of our role in protecting the environment.</p>`,
extraImages: [
              { src: a1, alt: "Intramuros View" },
              { src: a2, alt: "Rizal Monument" },
              { src: a6, alt: "Gomburza" },
              { src: a4, alt: "Gomburza" }
        ]
      },
      bottom4: {
        title: "Mall Moments with Classmates",
        date: "April 09, 2025",
        description: `<p>After our educational trip to the museum, we spent our free time at Trinoma, one of Quezon City’s most popular shopping malls. It was the perfect place to relax, unwind, and enjoy some leisure time with our classmates. As we entered the mall, we were welcomed by its spacious layout, lively ambiance, and a wide variety of stores and food spots.</p>
<p>Some of us explored the shops, browsing through clothes, souvenirs, and accessories, while others headed straight to the food court to grab snacks and meals. From local favorites to international fast food, Trinoma offered something for everyone’s taste. We shared laughs over milk tea, fries, and rice meals, enjoying each other's company after a long day of learning.</p>
<p>The mall’s rooftop garden was a peaceful spot for those who wanted to take photos or simply relax with a view of the city. The combination of modern architecture and relaxing spaces made Trinoma an enjoyable stop that balanced out our busy day. It was a great way to bond, recharge, and create more fun memories during our tour.</p>`,
                  extraImages: [
                    { src: t1, alt: "Intramuros View" },
                    { src: t4, alt: "Rizal Monument" },
                    { src: t5, alt: "Gomburza" },
                    { src: t6, alt: "Gomburza" }

        ]
      },
      bottom5: {
        title: "Quezon’s Legacy: A Beacon of Filipino Pride",
        date: "April 09, 2025",
        description:`  <p>Our 3rd day of the tour brought us to the Museo ni Manuel Quezon, an educational and inspiring stop located within the historic Quezon Memorial Circle. The museum is dedicated to the life and legacy of President Manuel L. Quezon, the first president of the Philippine Commonwealth. As we stepped inside, we were welcomed by exhibits that told the story of his leadership, vision, and lasting contributions to the nation.</p>
        <p>One of the most moving parts of the museum was seeing the personal artifacts and historical documents that belonged to President Quezon. These items offered a glimpse into his life not just as a great leader, but as someone who truly cared for the Filipino people. We also learned about his advocacy for the national language, his fight for social justice, and his push for Philippine independence during the American occupation.</p>
      <p>Walking through the museum helped us connect with our nation's past and appreciate the foundations of modern Filipino governance. It was a powerful experience that reminded us of the values of patriotism, leadership, and public service.</p>`,
      
        extraImages:[
        { src: q2, alt: "Intramuros View" },
        { src: q3, alt: "Rizal Monument" },
        { src: q4, alt: "Gomburza" }
        ]
        },
    },
    images: [
      { src: q5, title: "Museo ni Manuel Quezon" },
      { src: national_museo, title: "National Museum of Natural History" },
      { src: trinoma, title: "Trinoma" }
    ],
  },
  {
    id: 4,
    sections: {
    bottom2: {
    title: "Behind the Currency: A Closer Look at the Bangko Sentral ng Pilipinas",
    date: "April 10, 2025",
    description:` <p>One of the highlights of our tour was our visit to the Bangko Sentral ng Pilipinas (BSP), where we were given an exclusive look into how the country’s currency is made and safeguarded. The experience was both educational and eye-opening, as we got to witness the intricate process behind the money we use every day.</p>
<p>We were guided through various parts of the facility and introduced to the technology and systems involved in producing banknotes and coins. From design to printing, the level of precision and security involved at every stage was impressive. We also learned about the advanced measures taken to prevent counterfeiting and ensure the integrity of the Philippine currency.</p>
<p>Throughout the tour, BSP representatives explained the institution’s broader role in maintaining monetary stability and managing inflation. Their dedication to protecting the financial system gave us a deeper appreciation for the unseen efforts behind the economic order we often take for granted. It was an unforgettable experience that highlighted the importance of financial literacy and the vital role the Bangko Sentral ng Pilipinas plays in our daily lives.`,
  
    extraImages:[
    { src: BSP, alt: "Gomburza" }
    ]
    },
    bottom3: {
    title: "The Heart of Robotics and Automation: Inside Hytec Power Inc.",
    date: "April 10, 2025",
    description: `<p>Our tour brought us to Hytec Power Inc., located in Novaliches, Manila. A company at the forefront of robotics, automation, and innovative technology in the Philippines. This visit was an exciting dive into the world of modern engineering and smart solutions designed to drive industries forward.</p>
    <p>Inside the facility, we were introduced to cutting-edge equipment and training systems used to develop skills in robotics, automation, and industrial control. The staff gave engaging demonstrations, showing how their technologies are used in education and industry to improve productivity and promote technological advancement.</p>
<p>What stood out most was Hytec’s role in shaping the future workforce through innovation-driven training programs. Their commitment to empowering both students and professionals with hands-on experience in robotics and smart technologies was truly inspiring.</p>
<p>Our visit to Hytec Power Inc. opened our eyes to the endless possibilities of innovation. It reminded us that with creativity and technology, we can build smarter, more efficient, and more sustainable communities.</p>`,
  extraImages: [
                { src: h1, alt: "Intramuros View" },
                { src: h7, alt: "Rizal Monument" },
                { src: h8, alt: "Gomburza" },
                { src: h2, alt: "Gomburza" }
          ]
        },
        bottom4: {
          title: "🤖 Innovating the Future: What We Learned at Hytec Power Inc.",
          description: `<p> - Innovation is hands-on. We learned that understanding robotics and automation isn’t just about reading manuals — it's about actively working with the machines to solve real-world challenges.
<p> - Technology empowers education. Hytec Power’s training systems are not only industry-ready but are also tailored to equip students with future-ready skills.</p>
<p> - Bridging education and industry. The visit emphasized the importance of industry-academia collaboration in preparing the next generation of engineers, technicians, and innovators.</p>
<p> - Hands-on learning drives creativity. By giving students and professionals access to real equipment, Hytec encourages innovative thinking and problem-solving in real-world scenarios.
<p> - Engineering meets sustainability. We learned how automation and robotics are helping companies reduce waste, enhance efficiency, and adopt more sustainable practices.`,                    extraImages: [
                      { src: h2, alt: "Intramuros View" },
                      { src: h3, alt: "Rizal Monument" },
                      { src: h4, alt: "Gomburza" },
                      { src: h5, alt: "Gomburza" }

  
          ]
        },
  
      },
      images: [
        { src: BSP, title: "Bangko Sentral ng Pilipinas" },
        { src: hytecc, title: "Hytec Power Inc." },
        { src: h4, title: "Insights" }

      ],
    },  
    
{
  id: 5,
  sections: {
    bottom2: {
      title: "Future on Rails: A Glimpse into Modern Urban Transport",
      date: "April 11, 2025",
description: `<p>Day 5 of our educational journey took us to the Light Rail Transit Authority – Line 2, where we got an exciting firsthand look into one of Metro Manila’s major transport systems.</p>
<p>We explored the operations hub, observed how trains are monitored and maintained, and saw the incredible teamwork of engineers, technicians, and controllers working behind the scenes to ensure safety and efficiency.</p>
<p>A highlight was the train simulator, used to train operators for real-life scenarios. We also learned about track maintenance, electrical systems, signaling, and modern ticketing technologies that help keep the system reliable and commuter-friendly.</p>
<p>We were happy and excited to be out in the actual field, seeing classroom lessons come to life. Walking through the control rooms and maintenance areas gave us a new level of appreciation for public transport operations. The visit not only sparked our curiosity, but also motivated us to contribute to smart and sustainable transportation solutions in the future.</p>`,

extraImages: [
{ src: l1, alt: "Intramuros View" },
{ src: l2, alt: "Rizal Monument" },
{ src: l3, alt: "Gomburza" },
{ src: l4, alt: "Gomburza" }
]
},
bottom3: {
title: "Efficient Mobility: Behind the Scenes at MMDA’s Traffic Engineering Center",
date: "April 11, 2025",
description: `<p> We are led to the Traffic Engineering Center of the Metropolitan Manila Development Authority (MMDA), where we explored the intricate systems that manage and optimize Metro Manila’s traffic flow.
<p>In the afternoon, we were introduced to the cutting-edge technologies and strategies used by MMDA to ensure smooth traffic operations across the city. We observed how the traffic management system functions in real-time, monitoring vehicles, managing traffic signals, and providing rapid responses to traffic incidents.
<p>A highlight of our visit was seeing the centralized traffic control system, which integrates data from various sensors and cameras across Metro Manila. We also learned about the implementation of smart traffic lights, and the coordination required to handle the city’s complex traffic patterns.
<p>Our visit was not only an eye-opener into the challenges of urban mobility but also an inspiration. It highlighted the role of technology and data in making cities safer and more efficient. We left with a deeper appreciation for the MMDA's efforts in shaping the future of public transport and urban planning in Metro Manila.`,   
extraImages: [
  { src: l6, alt: "Intramuros View" },
  { src: l7, alt: "Rizal Monument" },
  { src: l8, alt: "Gomburza" },
  { src: l9, alt: "Gomburza" }

]
    },
    bottom4: {
      title: "Facts About LRT-2 and MMDA",
      description: `
    <p> 🚆 Light Rail Transit Authority – Line 2 </p>
      <p>
<p> - The LRT Line 2 is the only line in Metro Manila that uses electric multiple units (EMUs) with air-conditioning in every coach—making it one of the most comfortable rides among all rail lines.
<p> - It has a driver’s cab at both ends of the train, allowing it to quickly reverse direction without needing to turn around.
<p> - LRT Line 2 passes through 11 stations, making travel across busy metro hubs faster and more convenient than road-based transport during peak hours.

<p>🛣️ MMDA Traffic Engineering Center</p>
 <p> - The MMDA’s Metrobase Command Center operates 24/7 and monitors over 400 CCTV cameras across Metro Manila.</p>
<p> - The MMDA uses artificial intelligence (AI) and adaptive traffic signals in key intersections to automatically adjust light timings based on vehicle volume.</p>
<p> - The MMDA also has drone units for monitoring heavy traffic zones and disaster areas—giving them a bird’s-eye view of real-time conditions.</p>
<p> - Traffic enforcers are equipped with the Body-Worn Camera (BWC) system to promote transparency and accountability during apprehensions.</p>`,

                    extraImages: [
                      { src: l5, alt: "Intramuros View" },
                      { src: l6, alt: "Rizal Monument" },
                      { src: l7, alt: "Gomburza" },
          ]
        }
      },
      images: [
        { src: l3, title: "Light Rail Transit Authority (LRTA) - Line 2" },
        { src: l9, title: "Traffic Engineering Center" },
        { src: l8, title: "Facts" }


  ],
  
},

{
  id: 6,
  sections: {
  bottom2: {
  title: "Berry Fresh Experience",
  date: "April 12, 2025",
  description: `<p> We began Day 6 with an early visit to the Strawberry Farm in La Trinidad, Benguet, arriving around 6 AM. The crisp, chilly Baguio air instantly energized us as we explored the vibrant surroundings. We were thrilled to witness fresh strawberries being harvested and couldn’t resist taking plenty of photos to capture the moment. The lively stalls around the farm were filled with affordable snacks and souvenirs from sweet strawberry treats to local trinkets. Making it a fun and memorable shopping experience. It was a great way to start the day, immersing ourselves in the charm of local agriculture and enjoying everything the market had to offer.</p>
  <p>Later that morning, we visited the Chinese Bell Church in Baguio. A peaceful and beautifully designed place that left a strong impression on us. The colorful pagodas, intricately carved statues, and iconic bell tower reflected the rich Chinese heritage of the city. We enjoyed strolling through the serene grounds, taking in the cultural symbolism and snapping pictures in such a calm and spiritual setting. The church gave us a chance to reflect, relax, and appreciate the diversity found in Baguio, offering a quiet yet enriching highlight to our day.</p>`,

  extraImages:[
  { src: farm, alt: "Gomburza" },
  { src: farm2, alt: "Gomburza" },
  { src: bell, alt: "Gomburza" },
  { src: bell2, alt: "Gomburza" },
  ]
  },
  bottom3: {
  title: "Calm Amid the Pines",
  date: "April 12, 2025",
  description: `<p>After checking in and enjoying a delicious lunch at Prince Plaza Hotel, we headed to the Philippine Military Academy for a relaxing hour to appreciate the stunning views and the rich history of the academy. The peaceful surroundings gave us a refreshing break, and we took time to reflect on the significance of this prestigious institution in shaping the country’s military leaders. The vast landscape, dotted with training facilities and the academy's iconic structures, added to the experience, leaving us in awe of its role in the nation's defense.</p>
<p>Before continuing to our next destination, we made a quick stop at The Mansion, a historical site known for its beautiful architecture and ties to the Philippine presidency. As the official summer residence of the President of the Philippines, The Mansion holds both historical and political importance. We spent about 5–10 minutes there, taking photos and marveling at the grandeur of the place. Its elegant design, expansive lawn, and lush gardens made it a perfect spot for pictures and a brief moment of rest. It was a short but memorable stop that added a touch of national pride to our afternoon in Baguio!</p>`,

extraImages: [
              { src: pmaa, alt: "Intramuros View" },
              { src: pma, alt: "Rizal Monument" },
              { src: m, alt: "Gomburza" },
              { src: mansion, alt: "Gomburza" }
        ]
      },
      bottom4: {
        title: "Baguio ",
        date: "April 12, 2025",
        description: `<p> We ended our day with a visit to Mines View Park, one of Baguio’s most iconic and scenic spots. As we arrived, the cool mountain breeze greeted us, offering a refreshing escape from the usual hustle and bustle. The panoramic view of the Benguet mountain ranges stretched endlessly before us, providing the perfect backdrop to unwind and appreciate the natural beauty of the region. The lush greenery and breathtaking scenery made it the ideal place to take a break and enjoy the tranquil atmosphere.</p>
  <p>Many of us took the opportunity to dress in traditional Igorot attire, donning colorful woven garments and headdresses for souvenir photos. The cultural experience added a unique and fun twist to our visit, and we had a blast capturing the moments in front of the stunning views. As we wandered around, we noticed the park was also home to various stalls offering affordable local products, from intricately woven crafts and wooden carvings to delicious snacks like strawberry jams, fresh produce, and keychains. The wide selection made it an excellent place to pick up pasalubong (souvenirs) for our family and friends back home.</p>
  <p>The atmosphere was lively yet peaceful, with locals and tourists alike enjoying the views, shopping for keepsakes, and taking in the fresh mountain air. We spent time browsing through the market, engaging with friendly vendors, and immersing ourselves in the local culture. Whether it was the perfect photo opportunity, buying a hand-carved souvenir, or simply enjoying the peaceful surroundings, it was a fun and memorable way to close another exciting day of our trip to Baguio. The experience left us feeling both relaxed and deeply connected to the rich heritage and beauty of this beloved destination.</p>`,                    
        extraImages: [
                    { src: mines, alt: "Intramuros View" },
                    { src: j1, alt: "Rizal Monument" },
                    { src: sou, alt: "Gomburza" },
                    { src: b1, alt: "Gomburza" }
        ]
      },

    },
    images: [
      { src: farm, title: "Strawberry  Farm and Chinese Bell Church" },
      { src: pma, title: "Philppine Military Academy and The Mansion." },
      { src: mines, title: "Mines View Park" }

    ],
  },  

  
{
  id: 7,
  sections: {
  bottom2: {
  title: "Berry Fresh Experience",
  date: "April 13, 2025",
  description: `<p>Before heading back to Manila, we were given a few hours to explore on our own—and of course, we made the most out of it! After our visit to the Chinese Bell Church, we headed straight to Burnham Park, enjoying a leisurely walk while soaking in the cool Baguio breeze—something we knew we’d surely miss once we return home. The peaceful surroundings, fresh air, and relaxing vibe made it the perfect place to unwind and take it all in.</p>
<p>We also couldn’t resist dressing up in traditional Igorot costumes—only ₱75 with a photo included! It was a fun and memorable cultural experience, and we made sure to take plenty of pictures to capture every moment. From solo shots to group poses, our cameras and phones were working overtime as we tried to document every bit of our last day in the City of Pines.</p>
<p>Not wanting to waste a second, we then made our way to SM Baguio, where we grabbed some snacks and did some last-minute shopping. The open-air setup of the mall, with its view of the mountains, added a unique touch to the usual shopping experience. We truly tried to savor every bit of our time in this city, making the most of the chilly weather, the laid-back atmosphere, and the little joys Baguio has to offer. After our short adventure, we returned to the hotel to check out—grateful, refreshed, and a bit sentimental knowing we’d soon leave behind this premium “aircon” climate we came to love.</p>`,

  extraImages:[
  { src: b2, alt: "Gomburza" },
  { src: b3, alt: "Gomburza" },
  { src: bell, alt: "Gomburza" },
  { src: bell2, alt: "Gomburza" },
  ]
  },
  bottom3: {
  title: "Calm Amid the Pines",
  date: "April 12, 2025",
  description: `<p>After checking in and enjoying a delicious lunch at Prince Plaza Hotel, we headed to the Philippine Military Academy for a relaxing hour to appreciate the stunning views and the rich history of the academy. The peaceful surroundings gave us a refreshing break, and we took time to reflect on the significance of this prestigious institution in shaping the country’s military leaders. The vast landscape, dotted with training facilities and the academy's iconic structures, added to the experience, leaving us in awe of its role in the nation's defense.</p>
<p>Before continuing to our next destination, we made a quick stop at The Mansion, a historical site known for its beautiful architecture and ties to the Philippine presidency. As the official summer residence of the President of the Philippines, The Mansion holds both historical and political importance. We spent about 5–10 minutes there, taking photos and marveling at the grandeur of the place. Its elegant design, expansive lawn, and lush gardens made it a perfect spot for pictures and a brief moment of rest. It was a short but memorable stop that added a touch of national pride to our afternoon in Baguio!</p>`,

extraImages: [
              { src: pmaa, alt: "Intramuros View" },
              { src: pma, alt: "Rizal Monument" },
              { src: m, alt: "Gomburza" },
              { src: mansion, alt: "Gomburza" }
        ]
      },
      bottom4: {
        title: "Baguio ",
        date: "April 12, 2025",
        description: `<p> We ended our day with a visit to Mines View Park, one of Baguio’s most iconic and scenic spots. As we arrived, the cool mountain breeze greeted us, offering a refreshing escape from the usual hustle and bustle. The panoramic view of the Benguet mountain ranges stretched endlessly before us, providing the perfect backdrop to unwind and appreciate the natural beauty of the region. The lush greenery and breathtaking scenery made it the ideal place to take a break and enjoy the tranquil atmosphere.</p>
  <p>Many of us took the opportunity to dress in traditional Igorot attire, donning colorful woven garments and headdresses for souvenir photos. The cultural experience added a unique and fun twist to our visit, and we had a blast capturing the moments in front of the stunning views. As we wandered around, we noticed the park was also home to various stalls offering affordable local products, from intricately woven crafts and wooden carvings to delicious snacks like strawberry jams, fresh produce, and keychains. The wide selection made it an excellent place to pick up pasalubong (souvenirs) for our family and friends back home.</p>
  <p>The atmosphere was lively yet peaceful, with locals and tourists alike enjoying the views, shopping for keepsakes, and taking in the fresh mountain air. We spent time browsing through the market, engaging with friendly vendors, and immersing ourselves in the local culture. Whether it was the perfect photo opportunity, buying a hand-carved souvenir, or simply enjoying the peaceful surroundings, it was a fun and memorable way to close another exciting day of our trip to Baguio. The experience left us feeling both relaxed and deeply connected to the rich heritage and beauty of this beloved destination.</p>`,                    
        extraImages: [
                    { src: mines, alt: "Intramuros View" },
                    { src: j1, alt: "Rizal Monument" },
                    { src: sou, alt: "Gomburza" },
                    { src: b1, alt: "Gomburza" }
        ]
      },

    },
    images: [
      { src: BSP, title: "Bangko Sentral ng Pilipinas" },
      { src: hytecc, title: "Hytec Power Inc." },
      { src: h4, title: "Insights" }

    ],
  },  

];

const selectedDay = blogPosts.find(post => post.id === parseInt(dayId, 10));
if (!selectedDay) return <p>Sorry, the selected day was not found!</p>;

const openModal = (index, section) => {
setCurrentIndex(index);
setActiveSection(section);
setModalOpen(true);
};

const closeModal = () => setModalOpen(false);

const showPrev = () => {
const images = selectedDay.sections[activeSection].extraImages;
setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const showNext = () => {
const images = selectedDay.sections[activeSection].extraImages;
setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

const scrollToSection = (title) => {
if (
title === "Subic Bay Exhibition & Convention Center (SBECC)" ||
title === "Rizal Park"||
title === "Museo ni Manuel Quezon" ||
title === "Bangko Sentral ng Pilipinas" ||
title === "Bangko Sentral ng Pilipinas" ||
title === "Light Rail Transit Authority (LRTA) - Line 2"||
title === "Strawberry Farm and Chinese Bell Church"
)
{
blogBottom2Ref.current?.scrollIntoView({ behavior: "smooth" });
} else if (
title === "SBMA Law Enforcement Department Communication Branch" ||
title === "Intramuros - Fort Santiago"||
title === "National Museum of Natural History" ||
title === "Hytec Power Inc."||
title === "Traffic Engineering Center"||
title === "Philppine Military Academy and The Mansion."


) {
  blogBottom3Ref.current?.scrollIntoView({ behavior: "smooth" });
}
else if (
title === "SBMA Seaport Department (Vessel Traffic Management System)" ||
title === "Mall of Asia"||
title === "Trinoma" ||
title === "Insights" ||
title === "Facts" 
) {
blogBottom4Ref.current?.scrollIntoView({ behavior: "smooth" });
}
};
return ( <div className="blog-page2"> 

<header className="about-header"> 
  <div className="about-logo">QJC</div> 
  <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">☰</button>
  <nav className={`nav-menu ${menuOpen ? "menu-active" : ""}`}> 
    <ul className="about-nav-links">
      <li onClick={() => { navigate("/"); toggleMenu(); }}>Home</li>
      <li onClick={() => { navigate("/about"); toggleMenu(); }}>About</li>
      <li onClick={() => { navigate("/experience"); toggleMenu(); }}>Projects</li>
      <li onClick={() => { navigate("/blog"); toggleMenu(); }}>Blog</li>
      <li onClick={() => { navigate("/contact"); toggleMenu(); }}>Contact</li> 
    </ul> 
  </nav> 
</header>

  <div className="blog-top2"
    style={{
      backgroundImage: `url(${national})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '550px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '200px 300px',
    }}>
  </div>

  <div className="blog-header" style={{
    position: 'relative',
    top: '-150px',
    zIndex: 2,
    padding: '20px 40px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
  }}>
    <h1 className="blog-title">Our 7-Day of Adventure and Learning</h1>
    <p className="blog-description">
      This exploration takes us beyond the classroom into dynamic environments where <br />
      industry insights, technology, and professional expertise come to life.
    </p>
  </div>

  <div className="blog-bottom1">
    <section className="featured-attractions">
    <h3>More about Day {dayId} of the tour</h3>
      <div className="gallery-grid">
        {selectedDay.images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image.src}
              alt={image.title}
              className="day-image"
              onClick={() => scrollToSection(image.title)}
              style={{ cursor: "pointer" }}
            />
            <p className="image-title" style={{ textAlign: 'center', marginTop: '8px' }}>
              {image.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>  {["bottom2", "bottom3", "bottom4"].map((sectionKey, i) => {
const sectionRef = sectionKey === "bottom2" ? blogBottom2Ref : sectionKey === "bottom3" ? blogBottom3Ref : blogBottom4Ref;
const section = selectedDay.sections[sectionKey];
const getHeaderImageForSection = (dayId, sectionKey) => {
  // Day 1 images
  if (dayId === 1) {
    if (sectionKey === "bottom2") return Rizal;
    if (sectionKey === "bottom3") return forte;
    if (sectionKey === "bottom4") return Bay;
  }
  // Day 2 images
  else if (dayId === 2) {
    if (sectionKey === "bottom2") return center;
    if (sectionKey === "bottom3") return law;
    if (sectionKey === "bottom4") return port;
  }
  // Day 3 images
  else if (dayId === 3) {
    if (sectionKey === "bottom2") return quezon;
    if (sectionKey === "bottom3") return national_museo;
    if (sectionKey === "bottom4") return trinoma;
  }
  // Day 4 images
  else if (dayId === 4) {
    if (sectionKey === "bottom2") return BSP;
    if (sectionKey === "bottom3") return hytecc;
    if (sectionKey === "bottom4") return h4;
  }
  // Day 5 images
  else if (dayId === 5) {
    if (sectionKey === "bottom2") return l3;
    if (sectionKey === "bottom3") return l9;
    if (sectionKey === "bottom4") return l8;
  }
  // Day 6 images
  else if (dayId === 6) {
    if (sectionKey === "bottom2") return farm;
    if (sectionKey === "bottom3") return pma;
    if (sectionKey === "bottom4") return mines;
  }
  // Day 7 images
  else if (dayId === 7) {
    if (sectionKey === "bottom2") return b2;
    if (sectionKey === "bottom3") return pmaa;
    if (sectionKey === "bottom4") return j1;
  }
  
  // Default fallback images
  return sectionKey === "bottom2" ? rizall :
         sectionKey === "bottom3" ? forte :
         sectionKey === "bottom4" ? moa1 : rizall;
};

const headerImageSrc = getHeaderImageForSection(parseInt(dayId, 10), sectionKey);
return (
<div className={`blog-${sectionKey}`} ref={sectionRef} key={sectionKey}> <div className="blog-day"> <header className="day-header1"> <div className="header-image-container"> <img src={headerImageSrc} alt="Custom header" className="header-image" /> </div> <div className="header-content"> <h2 className="day-title">{section.title}</h2> <p className="day-date">{section.date}</p>

<div
  className={`blog-section-${sectionKey}`}  
  dangerouslySetInnerHTML={{ __html: section.description }}
  style={{
    textAlign: "justify",
    fontSize: "1.1rem",
    color: "#ffffff",
    lineHeight: "1.9",
    padding: "0 15px",
    marginBottom: "30px"
  }}
/>
      </div>
    </header>
    <h2 style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px", color: "#ffffff" }}>
      Gallery
    </h2>
    <div className="clickable-images">
      {section.extraImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt || `Image ${index + 1}`}
          className="thumbnail"
          onClick={() => openModal(index, sectionKey)}
          style={{
            cursor: "pointer",
            width: "20%",
            height: "170px",
            objectFit: "cover",
            margin: "10px 5px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
          }}
        />
      ))}
    </div>
  </div>
</div>

);
})}

```
  {/* Image Modal */}
  {modalOpen && (
    <div className="image-modal" onClick={closeModal} style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      flexDirection: "column"
    }}>
      <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="modal-nav-button prev-button">‹</button>
      <img
        src={selectedDay.sections[activeSection].extraImages[currentIndex].src}
        alt={selectedDay.sections[activeSection].extraImages[currentIndex].alt}
        className="modal-image"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="modal-nav-button next-button">›</button>
      <button onClick={(e) => { e.stopPropagation(); closeModal(); }} className="modal-close-button">✖</button>
    </div>
  )}
</div>
);
}

export default BlogDay;

