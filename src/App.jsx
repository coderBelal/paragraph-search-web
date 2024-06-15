import React, { useState } from "react";
import "./App.css";

const paragraphs = [
  {
    name: "Traffic Jam",
    detail:
      "Traffic jams are a widespread issue in urban areas, often characterized by stagnant or slow-moving vehicles on roads and highways. These congestions stem from a variety of factors that collectively contribute to gridlock situations. Firstly, the sheer volume of vehicles on the road during peak hours overwhelms the available infrastructure. Roads designed to handle a certain capacity become saturated, leading to delays and backups. This situation is exacerbated by inadequate road design, such as narrow lanes or poorly planned intersections, which hinder smooth traffic flow. Accidents are another major cause of traffic jams. When collisions occur, lanes may be blocked or reduced, causing a bottleneck effect as vehicles are forced to merge or slow down to navigate around the incident. Even after the accident is cleared, residual delays can persist due to the backlog of vehicles.",
  },
  {
    name: "Rainy Day",
    detail:
      "A rainy day brings a distinct atmosphere, transforming the ordinary into something serene yet dynamic. As raindrops patter softly against surfaces, they create a rhythmic soundtrack that accompanies the day. The air feels fresher, cool and invigorating, washing away the dust and heat of preceding days. Rain alters the landscape, painting it with shimmering reflections and enhancing the vibrant colors of nature. Leaves glisten with raindrops, flowers appear more vivid, and the world seems to be rejuvenated. Puddles form, becoming temporary mirrors that reflect the sky above and the surroundings around. On a rainy day, activities shift. Indoor spaces offer comfort and coziness, with the sound of rain against windows providing a soothing background melody. It's a time for reflection and introspection, a moment to pause and appreciate the simple pleasures of life. However, rain also presents challenges. Outdoor plans may be postponed, and commuting becomes slower and more cautious as roads become slick and visibility diminishes. Yet, rain fosters resilience and adaptability, encouraging creativity in finding alternate ways to enjoy the day. Ultimately, a rainy day is a reminder of nature's power and beauty, offering a chance to slow down, refresh, and find beauty in the moments that unfold amidst the gentle cascade of rain.",
  },
  {
    name: "Tree Plantation",
    detail:
      "Tree plantation is a vital practice for environmental sustainability and ecosystem health. It involves planting and nurturing trees in various locations, ranging from urban areas to rural landscapes, with the goal of improving air quality, conserving biodiversity, and mitigating climate change. One of the primary benefits of tree plantation is its role in combating climate change. Trees absorb carbon dioxide (CO2) from the atmosphere through photosynthesis, thereby reducing greenhouse gas levels and mitigating the effects of global warming. They also release oxygen, essential for human and animal respiration, contributing significantly to cleaner air. Moreover, trees play a crucial role in biodiversity conservation. They provide habitats and food sources for numerous species of birds, insects, and other wildlife. By preserving and expanding forests through tree plantation initiatives, we protect these ecosystems and support biodiversity conservation efforts. In urban areas, tree plantation helps mitigate the urban heat island effect by providing shade and cooling the environment. Trees reduce energy consumption by shading buildings and reducing the need for air conditioning during hot weather, thereby lowering carbon emissions associated with energy production. Additionally, tree plantation enhances soil stability and prevents erosion by anchoring soil with their roots and reducing runoff. This helps maintain water quality in rivers, lakes, and underground aquifers by filtering pollutants and reducing sedimentation. Community involvement in tree plantation initiatives fosters environmental awareness and promotes sustainable practices. Through education and collaboration, individuals and organizations can contribute to greener, healthier communities and ensure a more sustainable future for generations to come. In conclusion, tree plantation is a powerful tool for environmental conservation, offering a multitude of benefits such as climate change mitigation, biodiversity conservation, improved air quality, and enhanced urban resilience. By supporting tree plantation efforts, we can contribute to a healthier planet and create a more sustainable environment for all living beings.",
  },
  {
    name: "Healthy Eating",
    detail:
      "Healthy eating is essential for maintaining overall well-being and preventing chronic diseases. A balanced diet provides the necessary nutrients that the body needs to function effectively. It includes a variety of foods from different food groups: fruits, vegetables, whole grains, proteins, and dairy. Consuming a diverse range of foods ensures that you get a broad spectrum of nutrients, including vitamins, minerals, fiber, and antioxidants. Eating healthily helps maintain a healthy weight, reduces the risk of developing heart disease, diabetes, and certain cancers, and promotes good mental health. It is important to limit the intake of processed foods, sugary drinks, and high-fat foods, which can lead to obesity and other health issues. Instead, focus on incorporating more plant-based foods and lean proteins into your diet. Hydration is also a key component of healthy eating. Drinking plenty of water helps maintain the body's fluid balance, supports digestion, and aids in nutrient absorption. By making conscious food choices and adopting healthy eating habits, you can enhance your quality of life and ensure long-term health benefits.",
  },
  {
    name: "Space Exploration",
    detail:
      "Space exploration represents humanity's quest to understand the universe beyond our planet. It involves the use of astronomy and space technologies to explore outer space, including the physical and biological conditions on celestial bodies. Space missions have led to numerous discoveries, such as the understanding of planetary systems, the potential for extraterrestrial life, and insights into the origins of the universe. The Apollo moon landings, the Mars rover missions, and the Hubble Space Telescope are notable achievements that have expanded our knowledge of space. Space exploration also drives technological advancements that have practical applications on Earth, such as satellite communications, GPS, and medical technologies. Moreover, it inspires curiosity and innovation, encouraging new generations to pursue careers in science, technology, engineering, and mathematics (STEM). The future of space exploration holds promise with plans for human missions to Mars, the search for habitable exoplanets, and the development of space tourism. As we continue to explore space, we not only seek to answer fundamental questions about our place in the universe but also strive to push the boundaries of what is possible.",
  },
  {
    name: "Artificial Intelligence",
    detail:
      "Artificial Intelligence (AI) is a branch of computer science focused on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding. AI technologies have become integral to various industries, including healthcare, finance, transportation, and entertainment. Machine learning, a subset of AI, enables systems to learn and improve from experience without being explicitly programmed. AI applications range from virtual assistants like Siri and Alexa to autonomous vehicles and advanced medical diagnostic tools. The benefits of AI include increased efficiency, accuracy, and the ability to process vast amounts of data quickly. However, the rise of AI also poses challenges, such as ethical concerns regarding privacy, job displacement due to automation, and the potential for biased decision-making. Ensuring the responsible development and deployment of AI is crucial to maximizing its benefits while mitigating its risks. As AI continues to evolve, it has the potential to transform society and solve complex problems, making it one of the most significant technological advancements of our time.",
  },
  {
    name: "Climate Change",
    detail:
      "Climate change refers to long-term alterations in temperature, precipitation, wind patterns, and other aspects of the Earth's climate system. It is primarily driven by human activities, particularly the burning of fossil fuels, deforestation, and industrial processes that release greenhouse gases such as carbon dioxide and methane into the atmosphere. These gases trap heat, leading to a warming effect known as the greenhouse effect. The consequences of climate change are widespread and severe, including more frequent and intense heatwaves, storms, droughts, and rising sea levels. These changes pose significant threats to ecosystems, biodiversity, and human societies, affecting food security, water resources, and public health. Addressing climate change requires global cooperation and immediate action to reduce greenhouse gas emissions, transition to renewable energy sources, and implement sustainable practices. Mitigation strategies include reforestation, energy efficiency improvements, and the adoption of clean technologies. Adaptation measures, such as building resilient infrastructure and developing early warning systems, are also essential to cope with the impacts of climate change. Public awareness and education play a crucial role in driving policy changes and encouraging individual actions to combat climate change.",
  },
  {
    name: "Mental Health",
    detail:
      "Mental health encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing our ability to handle stress, relate to others, and make decisions. Good mental health is essential for overall well-being and quality of life. Mental health conditions, such as depression, anxiety, bipolar disorder, and schizophrenia, are common and can affect anyone regardless of age, gender, or background. These conditions can be caused by a combination of genetic, biological, environmental, and psychological factors. It is important to recognize the signs and symptoms of mental health issues and seek help when needed. Treatment options include therapy, medication, lifestyle changes, and support from family and friends. Promoting mental health involves creating supportive environments, reducing stigma, and increasing access to mental health services. Self-care practices, such as regular exercise, healthy eating, adequate sleep, and mindfulness, can also enhance mental well-being. By prioritizing mental health and addressing mental health challenges, we can improve individual lives and build healthier, more supportive communities.",
  },
  {
    name: "Renewable Energy",
    detail:
      "Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, water, and geothermal heat. Unlike fossil fuels, renewable energy sources produce little to no greenhouse gas emissions, making them environmentally friendly and sustainable. Solar energy harnesses sunlight using photovoltaic cells to generate electricity or solar thermal systems to provide heat. Wind energy utilizes wind turbines to convert kinetic energy into electrical power. Hydropower generates electricity by using the energy of moving water, typically from dams. Geothermal energy exploits the heat from the Earth's interior to produce electricity and provide heating. Biomass energy is derived from organic materials such as plant and animal waste. The adoption of renewable energy is crucial for reducing our reliance on fossil fuels, decreasing carbon emissions, and combating climate change. Advances in technology and decreasing costs have made renewable energy more accessible and viable. Governments, businesses, and individuals play a key role in supporting the transition to renewable energy through investments, policies, and practices that promote sustainability and energy efficiency.",
  },
  {
    name: "Online Learning",
    detail:
      "Online learning, also known as e-learning or distance education, involves the use of digital platforms and technologies to deliver educational content remotely. It has become increasingly popular due to its flexibility, accessibility, and convenience. Online learning allows students to access a wide range of courses and programs from anywhere in the world, making education more inclusive and diverse. It supports various learning styles through multimedia content, interactive activities, and self-paced study. The COVID-19 pandemic accelerated the adoption of online learning, highlighting its potential and challenges. While online learning offers numerous benefits, such as personalized learning experiences and the ability to balance education with other commitments, it also requires self-discipline, motivation, and reliable internet access. Educators must adapt their teaching methods to engage students effectively in a virtual environment. The future of education is likely to involve a hybrid approach, combining traditional in-person learning with online components to provide a comprehensive and adaptable learning experience.",
  },
  {
    name: "Cybersecurity",
    detail:
      "Cybersecurity involves protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage. With the increasing reliance on technology in all aspects of life, cybersecurity has become a critical concern for individuals, businesses, and governments. Cyber threats include viruses, malware, ransomware, phishing, and hacking, which can lead to data breaches, financial loss, and disruption of services. Effective cybersecurity measures include using strong passwords, enabling two-factor authentication, regularly updating software, and educating users about potential threats. Organizations must implement robust security protocols, conduct regular security assessments, and have incident response plans in place. The field of cybersecurity is continuously evolving to address new and emerging threats. Advances in artificial intelligence and machine learning are being leveraged to enhance threat detection and response capabilities. As cyber threats become more sophisticated, the importance of cybersecurity will continue to grow, necessitating ongoing vigilance, innovation, and collaboration to protect our digital world.",
  },
  {
    name: "A Tea Stall",
    detail:
      "A tea stall is a small, often bustling establishment that serves as a popular social hub for many people. Typically found in urban streets, market corners, and rural areas alike, tea stalls offer a simple yet comforting array of beverages and snacks. The aroma of freshly brewed tea mixed with spices like cardamom and ginger is inviting, drawing in a diverse crowd of students, workers, and passersby. Patrons often gather at these stalls to enjoy a quick cup of tea, exchange news, engage in lively conversations, or simply take a momentary break from their daily routines. Despite their modest setup, tea stalls play a significant role in the community by providing an affordable and accessible spot for relaxation and social interaction. The clinking of cups, the chatter of customers, and the occasional laughter create a vibrant and welcoming atmosphere, making tea stalls an enduring and cherished part of the local culture.",
  },
  {
    name: "About Programming",
    detail:
      "Programming is the cornerstone of modern technology and innovation, enabling humans to communicate effectively with computers through specialized languages. These languages, such as Python, Java, C++, and many others, provide developers with the tools to create software, applications, websites, and systems that power our digital world.At its core, programming involves writing and organizing code, which are sets of instructions that computers can understand and execute to perform specific tasks or solve problems. Learning to program goes beyond mastering syntax; it cultivates problem-solving skills and encourages logical thinking.In today's interconnected world, programming is integral to nearly every industry, from finance and healthcare to entertainment and manufacturing. It drives innovation by enabling automation, artificial intelligence, and machine learning. Businesses leverage programming to streamline operations, enhance customer experiences, and gain competitive advantages.Moreover, programming empowers individuals to create solutions to real-world challenges, fostering creativity and entrepreneurship. As technology continues to evolve, so too does the demand for skilled programmers who can adapt to new tools and frameworks, ensuring that programming remains a dynamic and indispensable skill in the digital age.",
  },
  {
    name: "A Book Fair",
    detail:
      "A book fair is a vibrant event that brings together publishers, authors, readers, and book enthusiasts in a celebration of literature and learning. These fairs are typically held in large venues such as convention centers or outdoor spaces, showcasing a wide range of books across genres and subjects.At a book fair, visitors can explore bookstalls and displays featuring new releases, bestsellers, and niche publications. Publishers use the fair as a platform to launch their latest titles and connect directly with readers. Authors often participate in book signings, readings, and discussions, offering readers insights into their works and the writing process.Beyond books, book fairs may include seminars, workshops, and panel discussions on literary themes, publishing trends, and educational topics. These activities enrich the experience for attendees, fostering a community of book lovers who share a passion for reading and knowledge.Book fairs also play a crucial role in promoting literacy and education by making books accessible and engaging. They encourage reading habits among all age groups, from children discovering picture books to adults exploring literature, non-fiction, and academic texts.Overall, a book fair is not just a marketplace for books but a cultural event that celebrates creativity, knowledge, and the joy of reading, making it a cherished gathering for bibliophiles and learners alike.",
  },
  {
    name: "A Day Laborers",
    detail:
      "Day laborers are individuals who engage in temporary, often physical, work assignments typically hired on a daily or hourly basis. They perform a variety of tasks such as construction, landscaping, moving, and general labor, depending on the needs of employers ranging from individuals to larger companies. Day laborers can be found at designated spots like street corners or home improvement stores, waiting to be hired for immediate work. This type of work offers flexibility but comes with challenges like job instability and uncertain income, as well as the absence of benefits associated with regular employment. Despite these challenges, day labor provides crucial income opportunities for those in need of immediate work or seeking flexible employment arrangements. It serves as a vital support system in industries where labor needs fluctuate, contributing essential manpower to sectors like construction, agriculture, and service industries. Day laborers play a significant role in the economy by filling short-term labor gaps and providing necessary services to meet diverse employer demands.",
  },
  {
    name: "A Computer",
    detail:
      "The computer is a ubiquitous device that has revolutionized nearly every aspect of modern life. It operates on principles of binary code, processing vast amounts of data through its central processing unit (CPU), memory, and storage. Computers enable tasks ranging from basic calculations to complex simulations, communication through the internet, and automation in various industries. They come in various forms, including desktops, laptops, tablets, and smartphones, each tailored to different needs and environments. Software programs run on computers, allowing users to perform tasks such as word processing, graphic design, video editing, and gaming. The evolution of computers has seen exponential growth in speed, storage capacity, and connectivity, paving the way for advancements like artificial intelligence, machine learning, and virtual reality. As integral tools in education, business, healthcare, and entertainment, computers continue to shape our global society, driving innovation and enhancing productivity while connecting people worldwide in ways unimaginable just a few decades ago.",
  },
  {
    name: "My Village",
    detail:
      "My village is a quaint community nestled amidst rolling hills and lush greenery, offering a serene and close-knit atmosphere. Located away from the bustling city life, it embodies a sense of tranquility and simplicity that is characteristic of rural living. The village is dotted with traditional homes, each with its own charm and history, often passed down through generations. Agriculture is central to our livelihoods, with fields of crops stretching out under the open sky, providing sustenance and a connection to the land.Community life thrives here, with neighbors gathering for festivals, celebrations, and daily interactions that foster a strong sense of belonging. The village center is a focal point, bustling with small shops, a local market, and perhaps a village square where elders gather to share stories and wisdom. Children play freely outdoors, exploring the natural surroundings and learning from the environment around them.While the pace of life may be slower compared to urban areas, the village is not devoid of progress. Modern amenities like electricity, telecommunications, and transportation have gradually made their way here, blending with our traditional way of life. Yet, amidst these changes, the village retains its cultural heritage and close community bonds, making it a cherished place where generations have grown up and continue to call home.",
  },
  {
    name: "The Victory Day",
    detail:
      "Victory Day is a significant historical event commemorated in various countries to mark the triumphs of their armed forces in conflicts or wars. It symbolizes the celebration of national unity, resilience, and the sacrifices made by soldiers and civilians. For instance, Victory Day in Russia commemorates the Soviet Union's victory over Nazi Germany in World War II, while in Bangladesh, it marks the country's liberation from Pakistan in 1971. The day typically includes ceremonies, parades, and cultural events honoring veterans and fallen heroes. It serves as a poignant reminder of the price of freedom and the importance of peace, reflecting on the collective strength and spirit of a nation in times of adversity. Victory Day is not only a tribute to past achievements but also a reaffirmation of national identity and solidarity, ensuring that the lessons of history are remembered and cherished by future generations",
  },
  {
    name: "Computer Science",
    detail:
      "Computer science is a dynamic field that explores the theoretical foundations of information and computation and their application in computer systems. It encompasses the study of algorithms, data structures, programming languages, software engineering, artificial intelligence, and more. Computer scientists innovate and create technologies that drive modern society, from developing secure networks and advancing medical technology to designing user-friendly software and exploring the frontiers of machine learning. The field continues to evolve rapidly, shaping how we interact with technology and transforming industries worldwide.",
  },
  {
    name: "Student Life",
    detail:
      "Student life is a vibrant period characterized by academic pursuits, personal growth, and social interactions. It typically revolves around attending classes, studying, and engaging in extracurricular activities such as clubs, sports, and volunteer work. For many students, this phase involves developing independence, managing responsibilities, and navigating new friendships and relationships. Challenges like academic pressure, time management, and financial constraints are common, but so are opportunities for learning, exploration, and self-discovery. Student life is a formative experience that shapes individuals' future careers, values, and lifelong connections, making it a crucial and memorable time in one's journey toward adulthood.",
  },
  {
    name: "City Life",
    detail:
      "City life embodies a dynamic and diverse environment characterized by bustling streets, cultural richness, and economic opportunities. It offers a multitude of amenities such as restaurants, theaters, museums, and parks, fostering a vibrant social and recreational scene. However, it also presents challenges such as congestion, noise, and higher living costs. City dwellers often experience a fast-paced lifestyle, with access to advanced infrastructure and public services. The urban setting promotes cultural exchange, innovation, and career opportunities across various industries. Ultimately, city life represents a complex blend of opportunities and challenges, shaping diverse experiences and lifestyles for its inhabitants.",
  },
  {
    name: "Cyclone",
    detail:
      "A cyclone, also known as a hurricane or typhoon depending on its location, is a powerful and destructive weather phenomenon characterized by strong rotating winds around a low-pressure center. Cyclones form over warm ocean waters when atmospheric conditions are conducive to their development, typically during the warmer months. They can bring heavy rainfall, storm surges, and high winds, causing widespread damage to coastal areas and inland regions. Cyclones are categorized based on their wind speed and intensity, with the strongest ones capable of causing catastrophic devastation to infrastructure, communities, and ecosystems. Effective early warning systems and preparedness are crucial for minimizing the impact of cyclones on vulnerable populations.",
  },
  {
    name: "Friend Ship",
    detail:
      "Friendship is a cherished bond between individuals characterized by mutual affection, trust, and support. It involves sharing experiences, emotions, and interests, fostering a sense of belonging and companionship. True friendship is built on empathy, respect, and understanding, transcending differences and enriching lives through shared laughter, encouragement, and comfort during challenging times. Friends provide emotional support, celebrate achievements, and offer valuable perspectives, contributing to personal growth and well-being. Cultivating and maintaining friendships requires effort and communication, but the rewards include lifelong connections that bring joy, resilience, and a sense of community to our lives.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredParagraphs, setFilteredParagraphs] = useState(paragraphs); // Initialize with all paragraphs

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = paragraphs.filter(
      (paragraph) =>
        paragraph.name.toLowerCase().includes(value.toLowerCase()) ||
        paragraph.detail.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredParagraphs(filtered);
  };
  const getBackgroundClass = (name) => {
    switch (name) {
      case "Traffic Jam":
        return "trafficJam";
      case "Rainy Day":
        return "rainyDay";
      case "Tree Plantation":
        return "treePlantation";
      case "Healthy Eating":
        return "healthyEating";
      case "Space Exploration":
        return "spaceExploration";
      case "Artificial Intelligence":
        return "artificialIntelligence";
      case "Climate Change":
        return "climateChange";
      case "Mental Health":
        return "mentalHealth";
      case "Renewable Energy":
        return "renewableEnergy";
      case "Online Learning":
        return "onlineLearning";
      case "Cybersecurity":
        return "cybersecurity";
      case "A Tea Stall":
        return "teastall";
      case "About Programming":
        return "aboutProgramming";
      case "A Book Fair":
        return "aBookFair";
      case "A Day Laborers":
        return "aDayLaborers";
      case "A Computer":
        return "aComputer";
      case "My Village":
        return "myVillage";
      case "The Victory Day":
        return "theVictoryDay";
      case "Friend Ship":
        return "friendship";
      case "Cyclone":
        return "cyclone";
      case "City Life":
        return "cityLife";
      case "Student Life":
        return "studentLife";
      case "Computer Science":
        return "computerScience ";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Your paragraphs..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchInput"
      />
      <div className="paragraphsContainer">
        {searchTerm === "" && (
          <p className="instructionText">
            Start typing to search paragraphs...
          </p>
        )}
        {filteredParagraphs.length === 0 && searchTerm !== "" && (
          <p className="noResultsText">
            No paragraphs found matching your search. We added soon
          </p>
        )}
        {filteredParagraphs.map((paragraph, index) => (
          <div
            key={index}
            className={`paragraphItem ${getBackgroundClass(paragraph.name)}`}
          >
            <h3>{paragraph.name}</h3>
            <p>{paragraph.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
