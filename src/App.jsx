import React from 'react';
import { motion } from 'framer-motion';

// --- CONFIG & DATA ---

// Custom colours based on the uploaded image analysis
const customColors = {
  // Deep Ocean Teal Background: #00707a (Used in Hero, Story, and new Tributes sections)
  background: '#016074',
  // Lighter Teal Marker Colour: #0096a0 for contrast
  marker: '#207f93', 
  // Salmon/Peach Button Background: #FFB8A5 (Used in Hero section)
  button: '#FFB8A5',
  // Dark Indigo Background for Gallery & Memories: #252841 
  darkIndigo: '#252841',
  // Dark Red Background for Impact Section: #B2353A 
  darkRed: '#B2353A',
  // Blue/Teal for the pyramid blocks & Memory Cards: #008496 
  pyramidTeal: '#008496',
  // Light Grey/White for the timeline line and text
  text: 'white',
};

// Data for the 'Her Story' section
const storyItems = [
  {
    number: 1,
    title: "Early Life",
    content: "Born on June 5, 1958, in Ibadan, at the heart of Oyo state, Nigeria into the family of Pa Olukayode Olajugbe and Mummy Alice Olajugbe (of blessed memory), of Ajale Compound in Igbajo, Boluwaduro Local Government Area, Osun State. Felicia's journey began in a warm and loving household that instilled in her profound values and an infectious passion for life. Her childhood narrative was woven with threads of hard work and unwavering commitment.",
  },
  {
    number: 2,
    title: "Family & Marriage",
    content: "She married her soulmate 46 years ago(1979), building a beautiful family and home filled with love and laughter. She was selfless and went the extra mile to support her five boys until they all emerged as successful young men who love God and live on purpose. She was a gift to her husband who loved her passionately - They were practically inseparable.",
  },
  {
    number: 3,
    title: "Career & Passions",
    content: "With little education terminating in Primary school, Felicia took an interest in photography, the career that connected her to her husband. They were both photographers for many years after which she began to engage in trading activities as the demand of child raising set in. She was a dedicated trader who was always at her duty post. Outside work, she found interest in prison outreach, visitation to her local church members, and her beloved church choir. She learnt to play the violin until she could play with the church's central choir, this is one passion she pursed to the peak.",
  },
];

// Data for the 'Her Impact and Legacy' section (Pyramid)
const impactItems = [
    { title: "Unconditional Love", description: "The foundation of everything she did", icon: "❤️" },
    { title: "Community Building", description: "She was always looking out for the steadfastness and growth of the people around her", icon: "⚡" },
    { title: "Music Artistry", description: "She stirred up the choir in our local church and ensured that the choir in our jurisdiction was dutiful and committed. She excelled with the violin", icon: "🎼" },
    { title: "Family Values", description: "Raised a family rooted in integrity, compassion, and resilience. She was a dutiful home keeper that rose early consistently to give meat to her house", icon: "🌱" },
];

// Data for the 'Favourite Memories' section
const memoryItems = [
    { 
        title: "“Rising up early to nurture her household”", 
        content: "Before dawn broke each day, while her children were in primary and secondary school, she would quietly rise and fill the home with delicious aromas from the kitchen. Despite the early hours, her radiant smile never faded as she lovingly prepared meals. With remarkable foresight, she taught all her sons the art of cooking, ensuring they would never lack this essential life skill." 
    },
    { 
        title: "“Unwavering Entrepreneurial Spirit”", 
        content: "Her business journey was a testament to her determination—evolving from a modest petty trader, to a water factory manager and later on a versatile cement supplier. Through her example, she instilled in us the values of perseverance and commitment to enterprise. It’s no wonder that entrepreneurship flows naturally through the veins of all her children today." 
    },
    { 
        title: "“Her Guiding Philosophy”", 
        content: "“It is well.” These simple yet powerful words formed the cornerstone of her approach to life. Whether facing triumph or tribulation, she embodied serene confidence and unshakable faith. Through her example, she taught us that life’s most formidable challenges yield to the gentle strength of persistent kindness and unwavering hope." 
    },
];

// Data for Tributes and Service Details
const tributesData = [
  "From Mrs. Johnson: Felicia wasn't just a lifeforce but a guiding light.",
  "From The Choir: We will miss her beautiful voice in the alto section.",
  "From Pastor Dave: Her legacy of service will endure."
];

const serviceDetails = {
  serviceOfSongs: {
    title: "Service of Songs",
    date: "Wednesday, July 23, 2025",
    time: "4:00 PM",
    venue: "Life Bible Church, Raufu Okeke, Yaba, Lagos.",
    fullVenue: "Life Bible Church, Raufu Okeke, Yaba, 2A, Raufu Okeke, behind Choisue Park, Yaba, Lagos.",
  },
  burialService: {
    title: "Burial Service",
    date: "Thursday, July 24, 2025",
    time: "09:00 AM",
    venue: "Life Bible Church, Raufu Okeke, Yaba, Lagos.",
    fullVenue: "Life Bible Church, Raufu Okeke, Yaba, 2A, Raufu Okeke, behind Choisue Park, Yaba, Lagos.",
  },
  interment: {
    title: "Interment",
    venue: "KICC Memorial Garden",
  },
};

// --- Custom SVG Icons for Final Section (Matching the look of the uploaded image) ---

const IconThanks = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1M4 8h16"></path>
    </svg>
);

const IconMemories = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>
);

const IconLove = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>
);

const IconLegacy = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
);

// Data for the Final Words Section (using new icons)
const finalWordsData = [
  {
    title: "Heartfelt Thanks",
    content: "Words cannot express our gratitude for your love, support, and presence during this difficult time.",
    icon: <IconThanks />,
    position: 'top-right',
  },
  {
    title: "Keeping Memories Alive",
    content: "We invite you to continue **sharing** stories that keep Mom's spirit and teachings present in our lives.",
    icon: <IconMemories />,
    position: 'bottom-right',
  },
  {
    title: "Her Everlasting Love",
    content: "Though she is no longer physically with us, Mom's love continues to guide and sustain us through each day.",
    icon: <IconLove />,
    position: 'bottom-left',
  },
  {
    title: "Legacy Continues",
    content: "We honour her memory by living the values she instilled: kindness, strength, faith, and unwavering love.",
    icon: <IconLegacy />,
    position: 'top-left',
  },
];

// Service Detail Icons
const IconCalendar = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>);
const IconClock = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>);
const IconLocation = () => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>);
const IconPlay = () => (<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>);


// --- COMPONENTS ---

// Hero Section (Confirmed no SVGs)
const HeroSection = () => {
  const imageUrl = "https://placehold.co/400x550/00707a/ffffff?text=Felicia";

  return (
    <div
      style={{ backgroundColor: customColors.background }}
      className="w-full py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-3/5 lg:w-2/3 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 tracking-wide eading">
            In Loving Memory of FELICIA OLUWAYEMISI BAMIGBAYAN
          </h1>

          <p className="text-lg font-light max-w-xl mb-10 opacity-90 ">
            A cherished wife, mother, grandmother, sister, friend, and pillar of 
            strength who touched countless lives with her boundless love and 
            service. Though she left us on May 25, 2025, her works live on and 
            we know that we shall meet again in heaven.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            
            <button
              style={{ backgroundColor: customColors.button }}
              className="px-6 py-3 text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] active:scale-95 text-sm sm:text-base "
              onClick={() => console.log('Share Memory Clicked')}
              aria-label="Share your memory of Felicia"
            >
              Share Your Memory
            </button>

            <button
              style={{ 
                backgroundColor: customColors.button,
                borderColor: '#e79780',
                borderWidth: '2px',
              }}
              className="px-6 py-3 text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] active:scale-95 text-sm sm:text-base "
              onClick={() => console.log('View Details Clicked')}
              aria-label="View memorial service details"
            >
              View Memorial Service Details
            </button>
          </div>
        </div>

        <div className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-64 sm:w-80 md:w-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt="Portrait of Felicia Oluwayemisi Bamigbayan, wearing a yellow head wrap and a colourful patterned dress."
              className="w-full h-auto object-cover rounded-lg"
              style={{ aspectRatio: '4/5' }}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src="https://placehold.co/400x550/00707a/ffffff?text=Image+Not+Available";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


// Her Story Timeline Section
const TimelineItem = ({ number, title, content, isLast }) => {
  return (
    <motion.div
      className="flex mb-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      
      <div className="flex flex-col items-center mr-6">
        <div 
          className="w-12 h-12 flex items-center justify-center text-xl rounded-none text-white shadow-md z-10 flex-shrink-0 eading"
          style={{ backgroundColor: customColors.marker }}
        >
          {number}
        </div>
      </div>

      <div className="flex-1 pb-4 relative mt-2">
        
        <div 
          className="absolute h-0.5 w-6 -left-6 z-10"
          style={{ 
            backgroundColor: customColors.marker, 
            top: '1rem',
          }}
        ></div>
        
        <h3 className="text-2xl font-semibold mb-2 mt-[-4px] eading">{title}</h3>
        <p className="text-base font-light opacity-90 leading-relaxed ">{content}</p>
      </div>
    </motion.div>
  );
};

const HerStorySection = () => {
  return (
    <div
      style={{ backgroundColor: customColors.background, color: customColors.text }}
      className="w-full py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        
        <h2 
          className="text-4xl sm:text-5xl  mb-16 pl-14 tracking-wide eading"
        >
          Her Story
        </h2>

        <div className="relative">
          {/* Vertical connector line behind the markers */}
          <motion.div
            className="absolute"
            style={{
              left: '20px',       // aligns with marker column (w-8 + mr-6 ≈ 56px)
              top: '1rem',        // start a little below the section title
              bottom: '1rem',
              width: '2px',
              backgroundColor: customColors.marker,
              opacity: 0.95,
              zIndex: 0,
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <div className="relative z-10">
            {storyItems.map((item, index) => (
              <TimelineItem
                key={item.number}
                {...item}
                isLast={index === storyItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// Photo Gallery Section
const PhotoGallerySection = () => {
    const galleryImage1 = "https://placehold.co/400x300/e0e0e0/000000?text=Photo+1";
    const galleryImage2 = "https://placehold.co/400x300/e0e0e0/000000?text=Photo+2";

    return (
        <div 
            style={{ backgroundColor: customColors.darkIndigo, color: customColors.text }}
            className="w-full py-20 px-4 sm:px-8 lg:px-16 flex justify-center"
        >
            <div className="max-w-4xl mx-auto w-full">
                
                <h2 className="text-4xl sm:text-5xl  mb-12 tracking-wide text-white eading">
                    Photo Gallery
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 mb-4">
                    
                    <div className="flex-1 min-w-0">
                        <img
                            src={galleryImage1}
                            alt="A beautiful life moment"
                            className="w-full h-auto object-cover rounded-md shadow-xl"
                            style={{ aspectRatio: '4/3' }}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src="https://placehold.co/400x300/e0e0e0/000000?text=Image+Not+Found";
                            }}
                        />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <img
                            src={galleryImage2}
                            alt="Another beautiful life moment"
                            className="w-full h-auto object-cover rounded-md shadow-xl"
                            style={{ aspectRatio: '4/3' }}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src="https://placehold.co/400x300/e0e0e0/000000?text=Image+Not+Found";
                            }}
                        />
                    </div>
                </div>

                <p className="text-center text-lg font-light opacity-90 italic pt-4 ">
                    A life beautifully lived through moments big and small
                </p>

            </div>
        </div>
    );
};


// Favourite Memories Section (UK Spelling applied)
const FavouriteMemoryCard = ({ title, content }) => (
    <div 
        className="p-6 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.03] flex-1 min-w-[280px]"
        style={{ backgroundColor: customColors.pyramidTeal, color: customColors.text }}
    >
        <h3 className="text-xl  mb-4 leading-snug eading">{title}</h3>
        <p className="text-sm font-light leading-relaxed opacity-90 ">{content}</p>
    </div>
);

const FavouriteMemoriesSection = () => {
    return (
        <div 
            style={{ backgroundColor: customColors.darkIndigo, color: customColors.text }}
            className="w-full py-20 px-4 sm:px-8 lg:px-16 flex justify-center"
        >
            <div className="max-w-7xl mx-auto w-full">
                
                <h2 className="text-4xl sm:text-5xl  mb-12 tracking-wide text-white text-center sm:text-left eading">
                    Favourite Memories
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
                    {memoryItems.map((item, index) => (
                        <FavouriteMemoryCard key={index} {...item} />
                    ))}
                </div>

            </div>
        </div>
    );
};


// Impact and Legacy Section (Pyramid)
const PyramidItem = ({ title, description, icon, index }) => {
    const widthClasses = ['w-full', 'w-5/6', 'w-4/6', 'w-3/6'];
    const widthClass = widthClasses[index];
    const trapezoidPoints = "5,0 95,0 100,100 0,100";

    return (
        <div 
            className={`relative flex justify-center h-28`}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className={`absolute ${widthClass} h-full z-10 shadow-lg`}
            >
                <polygon 
                    points={trapezoidPoints} 
                    style={{ fill: customColors.pyramidTeal }}
                />
            </svg>
            
            <div className={`absolute ${widthClass} h-full z-20 flex items-center justify-between text-white p-4 sm:p-6`}>
                <div className="flex items-center space-x-4">
                    <div className="text-3xl sm:text-4xl">{icon}</div>
                    
                    <div className="flex flex-col text-left">
                        <h3 className="text-lg  tracking-wide eading">{title}</h3>
                        <p className="text-sm font-light opacity-90 ">{description}</p>
                    </div>
                </div>
                {index > 0 && (
                    <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-px"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                    ></div>
                )}
            </div>
        </div>
    );
};

const ImpactLegacySection = () => {
    return (
        <div
            style={{ backgroundColor: customColors.darkRed, color: customColors.text }}
            className="w-full py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center"
        >
            <div className="max-w-4xl mx-auto w-full text-center">
                
                <h2 className="text-4xl sm:text-5xl  mb-16 tracking-wide text-white eading">
                    Her Impact and Legacy
                </h2>

                <div className="flex flex-col items-center mb-10">
                    {impactItems.slice().reverse().map((item, index) => (
                        <PyramidItem
                            key={item.title}
                            {...item}
                            index={index}
                        />
                    ))}
                </div>

                <p className="text-lg font-light opacity-90 italic max-w-2xl mx-auto ">
                    Felicia's impact extends far beyond her immediate circle. Her dedication to uplifting others created ripples that continue to transform lives in our community and beyond.
                </p>

            </div>
        </div>
    );
};


// Tributes and Service Details Section
const ServiceItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-3 text-lg" style={{ color: customColors.button }}>
            <Icon />
        </div>
        <div>
            <p className=" text-sm text-gray-200 ">{label}</p>
            <p className="text-base text-white ">{value}</p>
        </div>
    </div>
);

const TributesAndDetailsSection = () => {
  return (
    <div
      style={{ backgroundColor: customColors.background, color: customColors.text }}
      className="w-full py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl  mb-12 tracking-wide eading">
              Tributes and Condolences
            </h2>

            <div className="space-y-4 mb-8">
              {tributesData.map((tribute, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-xl mr-3" style={{ color: customColors.button }}>
                    &triangleright;
                  </div>
                  <p className="text-lg font-light leading-relaxed opacity-95 ">{tribute}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            style={{ 
              backgroundColor: customColors.button,
              borderColor: '#e79780',
              borderWidth: '2px',
            }}
            className="w-48 px-6 py-3 text-gray-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] active:scale-95 text-sm sm:text-base mt-8 "
            onClick={() => console.log('Drop a Tribute Clicked')}
            aria-label="Drop a Tribute"
          >
            Drop a Tribute
          </button>
        </div>

        <div className="lg:w-1/2 flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-0">
          
          <div className="md:w-1/2 lg:w-full lg:mb-10 flex justify-center lg:justify-end">
            <div className="w-64 h-80 rounded-lg overflow-hidden relative shadow-2xl">
                <img
                    src="https://placehold.co/400x500/00707a/ffffff?text=Memorial+Programme"
                    alt="A memorial programme booklet sitting among flowers"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/400x500/00707a/ffffff?text=Programme+Image";
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                    <span className="text-2xl  p-2 bg-white text-gray-800 rounded shadow-md opacity-80 eading">
                        Memorial Programme
                    </span>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 lg:w-full lg:mt-0 pt-4">
            <h3 className="text-3xl  mb-8 eading" style={{ color: customColors.button }}>
              Celebration of Life Details
            </h3>

            <h4 className="text-xl font-semibold mb-3 eading">{serviceDetails.serviceOfSongs.title}</h4>
            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: customColors.marker }}>
              <ServiceItem icon={IconCalendar} label="Date" value={serviceDetails.serviceOfSongs.date} />
              <ServiceItem icon={IconClock} label="Time" value={serviceDetails.serviceOfSongs.time} />
              <ServiceItem icon={IconLocation} label="Venue" value={serviceDetails.serviceOfSongs.fullVenue} />
            </div>

            <h4 className="text-xl font-semibold mb-3 eading">{serviceDetails.burialService.title}</h4>
            <div className="pl-4 border-l-2 mb-6" style={{ borderColor: customColors.marker }}>
              <ServiceItem icon={IconCalendar} label="Date" value={serviceDetails.burialService.date} />
              <ServiceItem icon={IconClock} label="Time" value={serviceDetails.burialService.time} />
              <ServiceItem icon={IconLocation} label="Venue" value={serviceDetails.burialService.fullVenue} />
            </div>

            <h4 className="text-xl font-semibold mb-3 eading">{serviceDetails.interment.title}</h4>
            <div className="pl-4 border-l-2 mb-10" style={{ borderColor: customColors.marker }}>
              <ServiceItem icon={IconLocation} label="Venue" value={serviceDetails.interment.venue} />
            </div>

            <p className="text-sm text-gray-300 mb-2 ">Virtual Attendance</p>
            <div className="space-y-3">
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white font-semibold rounded-full shadow-md hover:bg-gray-600 transition duration-300 "
                    onClick={() => console.log('View Service of Songs Clicked')}
                >
                    <IconPlay />
                    <span>Click to view Service of Songs</span>
                </button>
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white font-semibold rounded-full shadow-md hover:bg-gray-600 transition duration-300 "
                    onClick={() => console.log('View Funeral Service Clicked')}
                >
                    <IconPlay />
                    <span>Click to view Funeral Service</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Final Words Section (Circular Diagram)
const FinalWordsSection = () => {
    const innerCircleColor = customColors.marker;

    // Component for each text block around the circle
    const WordBlock = ({ title, content, position }) => {
        let alignmentClass = '';
        if (position === 'top-left') alignmentClass = 'text-right -translate-x-12';
        if (position === 'top-right') alignmentClass = 'text-left translate-x-12';
        if (position === 'bottom-left') alignmentClass = 'text-right -translate-x-12';
        if (position === 'bottom-right') alignmentClass = 'text-left translate-x-12';

        return (
            <div className={`absolute w-40 text-sm font-light leading-relaxed ${alignmentClass} `} style={{ color: customColors.text }}>
                <h3 className="font-semibold text-lg mb-1 eading" style={{ color: customColors.text }}>{title}</h3>
                <p>{content}</p>
            </div>
        );
    };

    return (
        <div 
            style={{ backgroundColor: customColors.background }}
            className="w-full py-20 px-4 sm:px-8 lg:px-16"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                <h2 className="text-4xl sm:text-5xl  mb-12 tracking-wide text-white eading">
                    Thank You & Final Words
                </h2>

                <div className="relative w-full max-w-lg mx-auto py-10">
                    
                    <svg viewBox="0 0 100 100" className="w-full h-auto">
                        
                        {/* Outer Ring */}
                        <circle cx="50" cy="50" r="40" stroke={innerCircleColor} strokeWidth="2" fill="none" opacity="0.4" />
                        
                        {/* Inner Circle */}
                        <circle cx="50" cy="50" r="20" fill={customColors.background} />
                        
                        {/* Center Dot (The core of her being) */}
                        <circle cx="50" cy="50" r="4" fill={innerCircleColor} />

                        {/* Quadrant Lines (From center dot to outer ring) */}
                        <line x1="50" y1="50" x2="50" y2="10" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="50" y2="90" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="10" y2="50" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="90" y2="50" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        
                        {/* Diagonal Lines (From inner circle to corner markers) */}
                        <line x1="50" y1="50" x2="30" y2="30" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="70" y2="30" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="70" y2="70" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />
                        <line x1="50" y1="50" x2="30" y2="70" stroke={innerCircleColor} strokeWidth="1.5" opacity="0.6" />

                        {/* Corner Marker Circles (Visual anchors for the icons) */}
                        <circle cx="30" cy="30" r="4" fill={innerCircleColor} />
                        <circle cx="70" cy="30" r="4" fill={innerCircleColor} />
                        <circle cx="70" cy="70" r="4" fill={innerCircleColor} />
                        <circle cx="30" cy="70" r="4" fill={innerCircleColor} />

                    </svg>

                    {/* Text Blocks placed absolutely around the circle */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        {/* Top Left - Legacy Continues */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-full -translate-y-1/2">
                            <WordBlock {...finalWordsData.find(d => d.position === 'top-left')} />
                        </div>
                        {/* Top Right - Heartfelt Thanks */}
                        <div className="absolute top-1/4 right-1/4 transform translate-x-full -translate-y-1/2">
                            <WordBlock {...finalWordsData.find(d => d.position === 'top-right')} />
                        </div>
                        {/* Bottom Left - Her Everlasting Love */}
                        <div className="absolute bottom-1/4 left-1/4 transform -translate-x-full translate-y-1/2">
                            <WordBlock {...finalWordsData.find(d => d.position === 'bottom-left')} />
                        </div>
                        {/* Bottom Right - Keeping Memories Alive */}
                        <div className="absolute bottom-1/4 right-1/4 transform translate-x-full translate-y-1/2">
                            <WordBlock {...finalWordsData.find(d => d.position === 'bottom-right')} />
                        </div>
                    </div>
                </div>

                {/* Icons placed absolutely within the circle's quadrants for visual effect */}
                <div className="absolute w-full max-w-lg mx-auto py-10 inset-0 pointer-events-none">
                    <div className="relative w-full h-full">
                        <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-white" style={{ color: innerCircleColor }}>
                            {finalWordsData.find(d => d.position === 'top-left').icon}
                        </div>
                        <div className="absolute top-[25%] right-[25%] translate-x-1/2 -translate-y-1/2 text-white" style={{ color: innerCircleColor }}>
                            {finalWordsData.find(d => d.position === 'top-right').icon}
                        </div>
                        <div className="absolute bottom-[25%] right-[25%] translate-x-1/2 translate-y-1/2 text-white" style={{ color: innerCircleColor }}>
                            {finalWordsData.find(d => d.position === 'bottom-right').icon}
                        </div>
                        <div className="absolute bottom-[25%] left-[25%] -translate-x-1/2 translate-y-1/2 text-white" style={{ color: innerCircleColor }}>
                            {finalWordsData.find(d => d.position === 'bottom-left').icon}
                        </div>
                    </div>
                </div>

                {/* Final Quote */}
                <p className="text-xl font-light italic max-w-3xl pt-10 px-4 " style={{ color: customColors.text }}>
                    "A life that touches others goes on forever." Thank you for helping us celebrate the beautiful life and lasting legacy of our beloved Felicia.
                </p>

            </div>
        </div>
    );
};


// The main App component combining all sections
const App = () => {
  return (
    <div className="font-sans">
      
      {/* Font & Tailwind Configuration for Kanit (Headings) and Martel Sans (Body) */}
      <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700;800&family=Martel+Sans:wght@300;400;600&display=swap');
          `}
      </style>
      <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  // Kanit for Headings
                  heading: ['Kanit', 'sans-serif'], 
                  // Martel Sans for Body text
                  body: ['Martel Sans', 'sans-serif'], 
                },
              },
            }
          }
      `}} />

      <HeroSection />
      <HerStorySection />
      
      {/* REORDERED: Photo Gallery now appears here */}
      <PhotoGallerySection />
      
      {/* REORDERED: Favourite Memories section */}
      <FavouriteMemoriesSection />
      
      <ImpactLegacySection /> 
      <TributesAndDetailsSection />
      <FinalWordsSection />
    </div>
  );
};

export default App;
