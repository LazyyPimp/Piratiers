    const Discord = require("discord.js");


    module.exports.run = async (bot, message, args) => {


        let factsuseless = 
        [
            "Most American car horns honk in the key of F.",

            "The name Wendy was made up for the book <<Peter Pan>>.",
            
            "Barbie's full name is Barbara Millicent Roberts.",
            
            "Every time you lick a stamp, you consume 1/10 of a calorie.",
            
            "The average person falls asleep in seven minutes.",
            
            "Studies show that if a cat falls off the seventh floor of a building it has about thirty percent less chance of surviving than a cat that falls off the twentieth floor. It supposedly takes about eight floors for the cat to realize what is occurring, relax and correct itself.",
            
            "Your stomach has to produce a new layer of mucus every 2 weeks otherwise it will digest itself.",
            
            "The citrus soda 7-UP was created in 1929; '7' was selected after the original 7-ounce containers and 'UP' for the direction of the bubbles.",
            
            "101 Dalmatians, Peter Pan, Lady and the Tramp, and Mulan are the only Disney cartoons where both parents are present and don't die throughout the movie.",
            
            "A pig's orgasm lasts for 30 minutes.",
            
            "'Stewardesses' is the longest word that is typed with only the left hand.",
            
            "To escape the grip of a crocodile's jaws, push your thumbs into its eyeballs - it will let you go instantly.",
            
            "Reindeer like to eat bananas.",
            
            "No word in the English language rhymes with month, orange, silver and purple.",
            
            "The word 'samba' means 'to rub navels together.'",
            
            "Mel Blanc (the voice of Bugs Bunny) was allergic to carrots.",
            
            "The electric chair was invented by a dentist.",
            
            "The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.",
            
            "More people are killed annually by donkeys than airplane crashes.",
            
            "A 'jiffy' is a unit of time for 1/100th of a second.",
            
            "A whale's penis is called a dork.",
            
            "Because of the rotation of the earth, an object can be thrown farther if it is thrown west.",
            
            "The average person spends 6 months of their life sitting at red lights.",
            
            "In 1912 a law passed in Nebraska where drivers in the country at night were required to stop every 150 yards, send up a skyrocket, wait eight minutes for the road to clear before proceeding cautiously, all the while blowing their horn and shooting off flares.",
            
            "More Monopoly money is printed in a year, than real money throughout the world.",
            
            "Caesar salad has nothing to do with any of the Caesars. It was first concocted in a bar in Tijuana, Mexico, in the 1920's.",
            
            "One quarter of the bones in your body are in your feet.",
            
            "Crocodiles and alligators are surprisingly fast on land.  Although they are rapid, they are not agile.  So, if being chased by one, run in a zigzag line to lose him or her.",
            
            "Seattle’s Fremont Bridge rises up and down more than any drawbridge in the world.",
            
            "Right-handed people live, on average; nine years longer than left handed people.",
            
            "Ten percent of the Russian government's income comes from the sale of vodka.",
            
            "In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.  ",
            
            "A giraffe can go without water longer than a camel.",
            
            "A person cannot taste food unless it is mixed with saliva. For example, if a strong-tasting substance like salt is placed on a dry tongue, the taste buds will not be able to taste it. As soon as a drop of saliva is added and the salt is dissolved, however, a definite taste sensation results. This is true for all foods.",
            
            "Nearly 80% of all animals on earth have six legs.",
            
            "In the marriage ceremony of the ancient Inca Indians of Peru, the couple was considered officially wed when they took off their sandals and handed them to each other.",
            
            "Ninety percent of all species that have become extinct have been birds.",
            
            "There is approximately one chicken for every human being in the world.",
            
            "Most collect calls are made on father's day.",
            
            "The first automobile race ever seen in the United States was held in Chicago in 1895. The track ran from Chicago to Evanston, Illinois. The winner was J. Frank Duryea, whose average speed was 71/2 miles per hour.",
            
            "Each of us generates about 3.5 pounds of rubbish a day, most of it paper.",
            
            "Women manage the money and pay the bills in  75% of all Americans households.",
            
            "A rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.",
            
            "It has NEVER rained in Calama, a town in the Atacama Desert of Chile.",
            
            "It costs more to buy a new car today in the United States than it cost Christopher Columbus to equip and undertake three voyages to and from the New World.",
            
            "The plastic things on the end of shoelaces are called aglets.",
            
            "An eighteenth-century German named Matthew Birchinger, known as the little man of Nuremberg, played four musical instruments including the bagpipes, was an expert calligrapher, and was the most famous stage magician of his day. He performed tricks with the cup and balls that have never been explained. Yet Birchinger had no hands, legs, or thighs, and was less than 29 inches tall.",
            
            "Daylight Saving Time is not observed in most of the state of Arizona and parts of Indiana.",
            
            "Ants closely resemble human manners:  When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.",
            
            "Bees have 5 eyes. There are 3 small eyes on the top of a bee's head and 2 larger ones in front.",
            
            "Count the number of cricket chirps in a 15-second period, add 37 to the total, and your result will be very close to the actual outdoor Fahrenheit temperature.",
            
            "One-fourth of the world's population lives on less than $200 a year.  Ninety million people survive on less than $75 a year.",
            
            "Butterflies taste with their hind feet.",
            
            "Only female mosquito’s' bite and most are attracted to the color blue twice as much as to any other color.",
            
            "If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.",
            
            "It is illegal to hunt camels in the state of Arizona.",
            
            "In eighteenth-century English gambling dens, there was an employee whose only job was to swallow the dice if there was a police raid.",
            
            "There are no clocks in Las Vegas gambling casinos.",
            
            "The human tongue tastes bitter things with the taste buds toward the back. Salty and pungent flavors are tasted in the middle of the tongue, sweet flavors at the tip!",
            
            "The first product to have a bar code was Wrigley’s gum. ",
            
            "When you sneeze, air and particles travel through the nostrils at speeds over100 mph.  During this time, all bodily functions stop, including your heart, contributing to the impossibility of keeping one's eyes open during a sneeze.",
            
            "Annual growth of WWW traffic is 314,000%",
            
            "60% of all people using the Internet, use it for pornography.",
            
            "In 1778, fashionable women of Paris never went out in blustery weather without a lightning rod attached to their hats.",
            
            "Sex burns 360 calories per hour.",
            
            "A raisin dropped in a glass of fresh champagne will bounce up and down continually from the bottom of the glass to the top.",
            
            "Celery has negative calories! It takes more calories to eat a piece of celery than the celery has in it.",
            
            "The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words.  More than 2 billion pencils are manufactured each year in the United States. If these were laid end to end they would circle the world nine times.",
            
            "The pop you hear when you crack your knuckles is actually a bubble of gas burning.",
            
            "A literal translation of a standard traffic sign in China: Give large space to the festive dog that makes sport in the roadway.",
            
            "You burn more calories sleeping than you do watching TV.",
            
            "Larry Lewis ran the 100-yard dash in 17.8 seconds in 1969, thereby setting a new world's record for runners in the 100-years-or-older class. He was 101.",
            
            "In a lifetime the average human produces enough quarts of spit to fill 2 swimming pools.",
            
            "It's against the law to doze off under a hair dryer in Florida/against the law to slap an old friend on the back in Georgia/against the law to Play hopscotch on a Sunday in Missouri.",
            
            "Barbie's measurements, if she were life-size, would be 39-29-33.",
            
            "The human heart creates enough pressure to squirt blood 30ft.",
            
            "One third of all cancers are sun related.",
            
            "THE MOST UNUSUAL CANNONBALL: On two occasions, Miss 'Rita Thunderbird' remained inside the cannon despite a lot of gunpowder encouragement to do otherwise. She performed in a gold lamé bikini and on one of the two occasions (1977) Miss Thunderbird remained lodged in the cannon, while her bra was shot across the Thames River.",
            
            "It has been estimated that humans use only 10% of their brain.",
            
            "Valentine Tapley from Pike County, Missouri  grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln's election to the presidency.",
            
            "Most Egyptians died by the time they were 30 about 300 years ago,",
            
            "For some time Frederic Chopin, the composer and pianist, wore a beard on only one side of his face, explaining: It does not matter, my audience sees only my right side.",
            
            "1 in every 4 Americans has appeared someway or another on television.",
            
            "1 in 8 Americans has worked at a McDonalds restaurant.",
            
            "70% of all boats sold are used for fishing.",
            
            "Studies have shown that children laugh an average of 300 times/day and adults 17 times/day, making the average child more optimistic, curious, and creative than the adult.",
            
            "A pregnant goldfish is called a twit.",
            
            "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.",
            
            "You were born with 300 bones, but by the time you are an adult you will only have 206.",
            
            "If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.",
            
            "Women blink nearly twice as much as men.",
            
            "The strongest muscle (Relative to size) in the body is the tongue.",
            
            "A Boeing 747's wingspan is longer than the Wright brother's first flight.",
            
            "American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class.",
            
            "Average life span of a major league baseball: 7 pitches.",
            
            "A palindrome is a sentence or group of sentences that reads the same backwards as it does forward: Ex:  'Red rum, sir, is murder.' 'Ma is as selfless as I am.' 'Nurse, I spy gypsies. Run!'  'A man, a plan, a canal - Panama.' 'He lived as a devil, eh?'",
            
            "The first CD pressed in the US was Bruce Springsteen's 'Born in the USA'",
            
            "In 1986 Congress & President Ronald Reagan signed Public Law 99-359, which changed Daylight Saving Time from the last Sunday in April to the first Sunday in April.  It was estimated to save the nation about 300,000 barrels of oil each year by adding most of the month April to D.S.T.",
            
            "The thumbnail grows the slowest, the middle nail the fastest, nearly 4 times faster than toenails.",
            
            "The Human eyes never grow, but nose and ears never stop growing.",
            
            "The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had. ",
            
            "Tom Sawyer was the first novel written on a typewriter.",
            
            "If Texas were a country, its GNP would be the fifth largest of any country in the world.",
            
            "There are 1 million ants for every human in the world.",
            
            "Odds of being killed by lightening? 1 in 2million/killed in a car crash? 1 in 5,000/killed by falling out of bed? 1 in 2million/killed in a plane crash? 1 in 25 million.",
            
            "Since 1978, 37 people have died by Vending Machine's falling on them.  13 people are killed annually.  All this while trying to shake merchandise out of them. 113 people have been injured.",
            
            "Half the foods eaten throughout the world today were developed by farmers in the Andes Mountains (including potatoes, maize, sweet potatoes, squash, all varieties of beans, peanuts, manioc, papayas, strawberries, mulberries and many others).",
            
            "The 'Golden Arches' of fast food chain McDonalds is more recognized worldwide than the religious cross of Christianity.",
            
            "Former basketball superstar Michael Jordan is the most recognized face in the world, more than the pope himself.",
            
            "The average talker sprays about 300 microscopic saliva droplets per minute, about 2.5 droplets per word.",
            
            "The Earth experiences 50,000 Earth quakes per year and is hit by Lightning 100 times a second.",
            
            "Every year 11,000 Americans injure themselves while trying out bizarre sexual positions.",
            
            "If we had the same mortality rate now as in 1900, more than half the people in the world today would not be alive.",
            
            "On average, Americans eat 18 acres of pizza everyday.",
            
            "Researchers at the Texas Department of Highways in Fort Worth determined the cow population of the U.S. burps some 50 million tons of valuable hydrocarbons into the atmosphere each year.  The accumulated burps of ten average cows could keep a small house adequately heated and its stove operating for a year.",
            
            "During a severe windstorm or rainstorm the Empire State Building sways several feet to either side.",
            
            "In the last 3,500 years, there have been approximately 230 years of peace throughout the civilized world.",
            
            "The Black Death reduced the population of Europe by one third in the period from 1347 to 1351.",
            
            "The average person spends about two years on the phone in a lifetime.",
            
            "Length of beard an average man would grow if he never shaved 27.5 feet",
            
            "Over 60% of all those who marry get divorced.",
            
            "400-quarter pounders can be made from 1 cow.",
            
            "A full-loaded supertanker traveling at normal speed takes at least 20 minutes to stop.",
            
            "Coca-Cola was originally green.",
            
            "Men can read smaller print than women; women can hear better.",
            
            "Hong Kong holds the most Rolls Royce’s per capita.",
            
            "Average number of days a West German goes without washing his underwear: 7",
            
            "WWII fighter pilots in the South Pacific armed their airplanes while stationed with .50 caliber machine gun ammo belts measuring 27 feet before being loaded into the fuselage. If the pilots fired all their ammo at a target, he went through `the whole 9 yards`, hence the term.",
            
            "Average number of people airborne over the US any given hour: 61,000.",
            
            "Intelligent people have more zinc and copper in their hair.",
            
            "Iceland consumes more Coca-Cola per capita than any other nation.",
            
            "In the early 1940s, the FCC assigned television's Channel 1 to mobile services (like two-way radios in taxis) but did not re-number the other channel assignments.",
            
            "The San Francisco Cable cars are the only mobile National Monuments.",
            
            "Firehouses have circular stairways originating from the old days when the engines were pulled by horses. The horses were stabled on the ground floor and figured out how to walk up straight staircases.",
            
            "The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.",
            
            "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
            
            "Statues in parks: If the horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.",
            
            "The expression 'to get fired' comes from long ago Clans that wanted to get rid of unwanted people, so they would burn their houses instead of killing them, creating the term 'Got fired'.",
            
            "'I am.' is the shortest complete sentence in the English language.",
            
            "Hershey's Kisses are called that because the machine that makes them looks like it's kissing the conveyor belt.",
            
            "The phrase `rule of thumb` is derived from an old English law, which stated that you couldn't beat your wife with anything wider than your thumb.",
            
            "The longest recorded flight of a chicken is thirteen seconds.",
            
            "The Eisenhower interstate system requires that one mile in every five must be straight in case of war or emergency, they could be used as airstrips.",
            
            "The name Jeep came from the abbreviation used in the army. G.P. for 'General Purpose' vehicle.",
            
            "The Pentagon, in Arlington, Virginia, has twice as many bathrooms as is necessary, because when it was built in the 1940s, the state of Virginia still had segregation laws requiring separate toilet facilities for blacks and whites.",
            
            "The cruise liner, Queen Elizabeth II, moves only six inches for each gallon of diesel that it burns.",
            
            "If you have three quarters, four dimes, and four pennies, you have $1.19, the largest amount of money in coins without being able to make change for a dollar.",
            
            "In Aspen Colorado, you can have a maximum income of $104,000 and still receive government subsidized housing.",
            
            /*Honking of car horns for a couple that just got married is an old superstition to insure great sex.
            
            Dr. Kellogg introduced Kellogg's Corn Flakes in hopes that it would reduce masturbation. [link]
            
            The sperm of a mouse is actually longer than the sperm of an elephant.
            
            In medieval France, unfaithful wives were made to chase a chicken through town naked.
            
            The Black Widow spider eats her mate during or after sex.
            
            Napoleon's penis was sold to an American Urologist for $40,000. [link]
            
            Eating the heart of a male Partridge was the cure for impotence in ancient Babylon.
            
            A bull can inseminate 300 cows from one single ejaculation.
            
            When a Hawaiian woman wears a flower over her left ear, it means that she is not available.
            
            The "save" icon on Microsoft Word shows a floppy disk with the shutter on backwards.
            
            The only nation whose name begins with an "A", but doesn't end in an "A" is Afghanistan.
            
            The following sentence: 'A rough-coated, dough-faced, thoughtful ploughman strode through the streets of Scarborough; after falling into a slough, he coughed and hiccoughed.' Contains the nine different pronunciations of "ough" in the English Language.
            
            The verb "cleave" is the only English word with two synonyms which are antonyms of each other: adhere and separate.
            
            The only 15-letter word that can be spelled without repeating a letter is uncopyrightable. [link]
            
            The shape of plant collenchyma’s cells and the shape of the bubbles in beer foam are the same - they are orthotetrachidecahedrons.
            
            Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.
            
            Cats have over one hundred vocal sounds, while dogs only have about ten.
            
            Blueberry Jelly Bellies were created especially for Ronald Reagan. [link]
            
            PEZ candy even comes in a Coffee flavor.
            
            The first song played on Armed Forces Radio during operation Desert Shield was "Rock the Casba" by the Clash. [link]
            
            Non-dairy creamer is flammable. [link]
            
            The airplane Buddy Holly died in was the "American Pie." (Thus the name of the Don McLean song.)
            
            Each king in a deck of playing cards represents a great king from history. Spades - King David, Clubs - Alexander the Great, Hearts - Charlemagne, and Diamonds - Julius Caesar.
            
            Golf courses cover 4% of North America.
            
            The average person will accidentally eat just under a pound of insects every year.
            
            Until 1994, world maps and globes sold in Albania only had Albania on them.
            
            The value of Pi will be officially "rounded down" to 3.14 from 3.14159265359 on December 31, 1999.
            
            The Great Wall of China is the only man-made structure visible from space.
            
            A piece of paper can be folded no more then 9 times.
            
            The amount of computer Memory required to run WordPerfect for Win95 is 8 times the amount needed aboard the space shuttle.
            
            The average North American will eat 35,000 cookies during their life span.
            
            Between 25% and 33% of the population sneeze when exposed to light.
            
            The most common name in world is Mohammed.
            
            Mount Olympus Mons on Mars is three times the size of Mount Everest.
            
            Most toilets flush in E flat.
            
            2,000 pounds of space dust and other space debris fall on the Earth every day.
            
            Each month, there is at least one report of UFOs from each province of Canada.
            
            40,000 Americans are injured by toilets each year.
            
            You can be fined up to $1,000 for whistling on Sunday in Salt Lake City, Utah.
            
            It takes about 142.18 licks to reach the center of a Tootsie pop.
            
            The serial number of the first MAC ever produced was 2001.
            
            It is illegal to eat oranges while bathing in California.
            
            If done perfectly, a rubix cube combination can be solved in 17 turns.
            
            The average American butt is 14.9 inches long.
            
            More bullets were fired in 'Starship Troopers' than any other movie ever made.
            
            60% of electrocutions occur while talking on the telephone during a thunderstorm.
            
            The name of the girl on the statue of liberty is Mother of Exiles. [link]
            
            3.6 cans of Spam are consumed each second.
            
            There's a systematic lull in conversation every 7 minutes.
            
            The buzz from an electric razor in America plays in the key of B flat; Key of G in England.
            
            There are 1,575 steps from the ground floor to the top of the Empire State building. [link]
            
            The world's record for keeping a Lifesaver in the mouth with the hole intact is 7 hrs 10 min.
            
            There are 293 ways to make change for a dollar.
            
            The world record for spitting a watermelon seed is 65 feet 4 inches.
            
            In the Philippine jungle, the yo-yo was first used as a weapon.
            
            Dueling is legal in Paraguay as long as both parties are registered blood donors.
            
            Texas is also the only state that is allowed to fly its state flag at the same height as the U.S. flag.
            
            The three most recognized Western names in China are Jesus Christ, Richard Nixon, & Elvis Presley.
            
            There is a town in Newfoundland, Canada called Dildo. [link]
            
            The Boston University Bridge (on Commonwealth Avenue, Boston, Massachusetts) is the only place in the world where a boat can sail under a train driving under a car driving under an airplane.
            
            All 50 states are listed across the top of the Lincoln Memorial on the back of the $5 bill.
            
            In space, astronauts are unable to cry, because there is no gravity and the tears won't flow.
            
            Chewing gum while peeling onions will keep you from crying.
            
            There are more plastic flamingos in the U.S that there are real ones.
            
            The crack of a whip is actually a tiny sonic boom, since the tip breaks the sound barrier.
            
            Jupiter is bigger than all the other planets in our solar system combined.
            
            Hot water is heavier than cold.
            
            The common idea that only 10% of the brain is used it not true as it is impossible to determine the actual percentage because of the complexity of the brain.
            
            Lawn darts are illegal in Canada.
            
            There are more psychoanalysts per capita in Buenos Aires than any other place in the world.
            
            Between 2 and 3 jockeys are killed each year in horse racing.
            
            5,840 people with pillow related injuries checked into U.S. emergency rooms in 1992.
            
            The average woman consumes 6 lbs of lipstick in her lifetime.
            
            Some individuals express concern sharing their soap, rightly so, considering 75% of all people wash from top to bottom.
            
            Conception occurs most in the month of December.
            
            CBS' "60 Minutes" is the only TV show without a theme song/music.
            
            Half of all Americans live within 50 miles of their birthplace.
            
            'Obsession' is the most popular boat name.
            
            On average, Americans' favorite smell is banana.
            
            If one spells out numbers, they would have to count to One Thousand before coming across the letter "A".
            
            Honey is the only food which does not spoil.
            
            3.9% of all women do not wear underwear.
            
            This common everyday occurrence composed of 59% nitrogen, 21% hydrogen, and 9% dioxide is called a 'fart'.
            
            "Evaluation and Parameterization of Stability and Safety Performance Characteristics of Two and Three Wheeled Vehicular Toys for Riding." Title of a $230,000 research project proposed by the Department of Health, Education and Welfare, to study the various ways children fall off bicycles.
            
            Babies are born without kneecaps. They don't appear until the child reaches 2-6 years of age.
            
            Meteorologists claim they're right 85% of the time (think about that one!)
            
            In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.
            
            Los Angeles' full name 'El Pueblo de Nuestra Senora la Reina de Los Angeles de Porciuncula' is reduced to 3.63% of its size in the abbreviation 'L.A.'.
            
            If you went out into space, you would explode before you suffocated because there's no air pressure.
            
            The only real person to ever to appear on a pez dispenser was Betsy Ross.
            
            Mike Nesmith's (the guitarist of The Monkeys) mom invented White Out. [link]
            
            Only 6 people in the whole world have died from moshing.
            
            241.     In a test performed by Canadian scientists, using various different styles of music, it was determined that chickens lay the most eggs when pop music was played.
            
            The storage capacity of human brain exceeds 4 Terabytes.
            
            In Vermont, the ratio of cows to people is 10:1
            
            Any free-moving liquid in outer space will form itself into a sphere, because of its surface tension.
            
            The average American looks at eight houses before buying one.
            
            In the average lifetime, a person will walk the equivalent of 5 times around the equator.
            
            Koala is Aboriginal for "no drink".
            
            Shakespeare spelled his OWN name several different ways.
            
            The first contraceptive was crocodile dung used by the ancient Egyptians.
            
            A signature is called a John Hancock because he signed the Declaration of Independence. Only 2 people signed the declaration of independence on July 4. The Last person signed 2 years later.
            
            Arnold Schonberg suffered from triskaidecaphobia, the fear of the number 13.  He died at 13 minutes from midnight on Friday the 13th.
            
            Mozart wrote the nursery rhyme 'twinkle, twinkle, little star' at the age of 5.
            
            Weatherman Willard Scott was the first original Ronald McDonald. [link]
            
            Virginia Woolf wrote all her books standing.
            
            Einstein couldn't speak fluently until after his ninth birthday. His parents thought he was mentally retarded.
            
            Al Capone's business card said he was a used furniture dealer.
            
            Deborah Winger did the voice of E.T.
            
            Kelsey Grammar sings and plays the piano for the theme song of Fraiser.
            
            Thomas Edison, acclaimed inventor of the light bulb, was afraid of the dark.
            
            In England, the Speaker of the House is not allowed to speak.
            
            You can sail all the way around the world at latitude 60 degrees south.
            
            The earth weighs around 6,588,000,000,000,000,000,000,000,000 tons.
            
            Peanuts are one of the ingredients of dynamite.
            
            Porcupines can float in water.
            
            The average person's left hand does 56% of the typing.
            
            A shark is the only fish that can blink with both eyes.
            
            The longest one-syllable word in the English language is "screeched."
            
            All of the clocks in the movie "Pulp Fiction" are stuck on 4:20, a national pot-smokers hour.
            
            "Dreamt" is the only English word that ends in the letters "mt."
            
            Almonds are a member of the peach family.
            
            Winston Churchill was born in a ladies' room during a dance.
            
            Maine is the only state whose name is just one syllable.
            
            There are only four words in the English language which end in "dous": tremendous, horrendous, stupendous, and  hazardous.
            
            Tigers not only have striped fur, they have striped skin!
            
            In most advertisements, including newspapers, the time displayed on a watch is 10:10.
            
            On the ground, a group of geese is a gaggle, in the sky it is a skein.
            
            To Ensure Promptness, one is expected to pay beyond the value of service – hence the later abbreviation: T.I.P.
            
            When the University of Nebraska Cornhuskers play football at home, the stadium becomes the state's third largest city.
            
            The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra's "Its A Wonderful Life."
            
            A dragonfly has a lifespan of 24 hours.
            
            A dime has 118 ridges around the edge.
            
            On an American one-dollar bill, there is an owl in the upper left-hand corner of the "1"encased in the "shield" and a spider hidden in the front upper right-hand corner.
            
            The name for Oz in the "Wizard of Oz" was thought up when the creator, Frank Baum, looked at his filing cabinet and saw A-N, and O-Z; hence the name "OZ."
            
            The microwave was invented after a researcher walked by a radar tube and a chocolate bar melted in his pocket.
            
            Mr. Rogers is an ordained minister.
            
            John Lennon's first girlfriend was named Thelma Pickles.
            
            There are 336 dimples on a regulation golf ball.
            
            The scene where Indiana Jones shoots the swordsman in Raider’s of the Lost Ark was Harrison Ford's idea so that he could take a bathroom break.
            
            A crocodile cannot stick its tongue out.
            
            A snail can sleep for three years.
            
            All polar bears are left-handed.
            
            China has more English speakers than the United States.
            
            Elephants are the only animals that can't jump.
            
            February 1865 is the only month in recorded history not to have a full moon.
            
            If the population of China walked past you in single file, the line would never end because of the rate of reproduction.
            
            If you yelled for 8 years, 7 months and 6 days, you will have produced enough sound energy to heat one cup of coffee.
            
            In the last 4000 years, no new animals have been domesticated.
            
            Leonardo Da Vinci invented the scissors.
            
            The word "set" has more definitions than any other word in the English language.
            
            Nutmeg is extremely poisonous if injected intravenously.
            
            On average, people fear spiders more than they do death.
            
            One of the reasons marijuana is illegal today is because cotton growers in the 1930s lobbied against hemp farmers they saw it as competition.
            
            Shakespeare invented the word 'assassination' and 'bump'.
            
            Some lions mate over 50 times a day.
            
            Starfish haven't got brains.
            
            The ant always falls over on its right side when intoxicated.
            
            The name of all continents in the world end with the same letter that they start with.
            
            There are two credit cards for every person in the United States.
            
            The longest word comprised of one row on the keyboard is: TYPEWRITER
            
            You can't kill yourself by holding your breath.  
            
            The average person spends 12 weeks a year 'looking for things'.
            
            The symbol on the "pound" key (#) is called an octothorpe..  
            
            The dot over the letter 'i' is called a tittle.  
            
            Ingrown toenails are hereditary.  
            
            "Underground" is the only word in the English language that begins and ends with the letters "und"
            
            The longest word in the English language, according to the Oxford English Dictionary, is: pneumonoultramicroscopicsilicovolcanoconiosis..  
            
            The longest place-name still in use is: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiakitnatahu, a New Zealand hill.  
            
            An ostrich's eye is bigger than its brain.  
            
            Alfred Hitchcock didn't have a belly button. It was eliminated when he was sewn up after surgery.
            
            Telly Savalas and Louis Armstrong died on their birthdays.  
            
            Donald Duck's middle name is Fauntleroy.  
            
            The muzzle of a lion is like a fingerprint - no two lions have the same pattern of whiskers.  
            
            Steely Dan got their name from a sexual device depicted in the book 'The Naked Lunch'.  
            
            The Ramses brand condom is named after the great pharoh Ramses II who fathered over 160 children.
            
            There is a seven letter word in the English language that contains ten words without rearranging any of its letters, "therein": the, there, he, in, rein, her, here, ere, therein, herein.  
            
            A goldfish has a memory span of three seconds.  
            
            Cranberries are sorted for ripeness by bouncing them; a fully ripened cranberry can be dribbled like a basketball.  
            
            The male gypsy moth can "smell" the virgin female gypsy moth from 1.8 miles away.  
            
            The letters KGB stand for Komitet Gosudarstvennoy Bezopasnosti.  
            
            The word "dexter" whose meaning refers to the right hand is typed with only the left hand.  
            
            To "testify" was based on men in the Roman court swearing to a statement made by swearing on their testicles.  
            
            Facetious and abstemious contain all the vowels in the correct order, as does arsenious, meaning "containing arsenic."  
            
            The word "Checkmate" in chess comes from the Persian phrase "Shah Mat," which means "the king is dead."
            
            The first episode of "Joanie Loves Chachi" was the highest rated American program in the history of Korean television, a country where "Chachi" translates to "penis".  
            
            Rubber bands last longer when refrigerated.  
            
            The national anthem of Greece has 158 verses. No one in Greece has memorized all 158 verses.  
            
            Two-thirds of the world's eggplant is grown in New Jersey.  
            
            The giant squid has the largest eyes in the world.
            
            Giraffes have no vocal cords.
            
            The pupils of a goat's eyes are square.
            
            Van Gogh only sold one painting when he was alive.
            
            A standard slinky measures 87 feet when stretched out.
            
            The highest per capita Jell-O comsumption in the US is Des Moines.
            
            If a rooster can't fully extend its neck, it can't crow.
            
            There were always 56 curls in Shirley Temple's hair.
            
            The eyes of a donkey are positioned so that it can see all four feet at all times.
            
            Worcestershire sauce in essentially an Anchovy Ketchup.
            
            Rhode Island is the only state which the hammer throw is a legal high school sport.
            
            The average lifespan of an eyelash is five months.
            
            A spider has transparent blood.
            
            Every acre of American crops harvested contains 100 pounds of insects.
            
            Prince Charles is an avid collecter of toilet seats.
            
            The most common street name in the U.S. is Second Street.
            
            Tehran is the most expensive city on earth.
            
            The sweat drops drawn in cartoon comic strips are called pleuts.
            
            Babies are most likely to be born on Tuesdays.
            
            The HyperMart outside of Garland Texas has 58 check-outs.
            
            The Minneapolis phone book has 21 pages of Andersons.
            
            In the 1980's American migraines increased by 60%.
            
            Poland is the "stolen car capital of the world".
            
            Jefferson invented the dumbwaiter, the monetary system, and the folding attic ladder.
            
            The S in Harry S. Truman did not stand for anything.
            
            In Miconesia, coins are 12 feet across.
            
            A horse can look forward with one eye and back with the other.
            
            Shakespeare is quoted 33,150 times in the Oxford English dictionary.
            
            The word Pennsylvania is misspelled on the Liberty Bell.
            
            NBA superstar Michael Jordan was originally cut from his high school basketball team.
            
            You spend 7 years of your life in the bathroom.
            
            A family of 26 could go to the movies in Mexico city for the price of one in Tokyo.
            
            10,000 Dutch cows pass through the Amsterdam airport each year.
            
            Approximately every seven minutes of every day, someone in an aerobics class pulls their hamstring.
            
            Simplistic passwords contribute to over 80% of all computer password break-ins.
            
            The top 3 health-related searches on the Internet are (in this order): Depression, Allergies, & Cancer.
            
            Dentists have recommended that a toothbrush be kept at least 6 feet away from a toilet to avoid airborne particles resulting from the flush.
            
            Most dust particles in your house are made from dead skin.
            
            Venus is the only planet that rotates clockwise.
            
            Oak trees do not produce acorns until they are fifty years of age or older.
            
            The first owner of the Marlboro company died of lung cancer.
            
            All US Presidents have worn glasses; some just didn't like being seen wearing them in public.
            
            Mosquito repellents don't repel. They hide you. The spray blocks the mosquito's sensors so they don't know you're there.
            
            Walt Disney was afraid of mice.
            
            The site with the highest number of women visitors between the age of 35 and 44 years old: Alka-Seltzer.com
            
            The king of hearts is the only king without a mustache.
            
            Pearls melt in vinegar.
            
            It takes 3,000 cows to supply the NFL with enough leather for a year's supply of footballs.
            
            Thirty-five percent of people who use personal ads for dating are already married.
            
            The 3 most valuable brand names on earth are Marlboro, Coca-Cola, and Budweiser (in that order).
            
            Humans are the only primates that don't have pigment in the palms of their hands.
            
            Months that begin on a Sunday will always have a 'Friday the 13th'.
            
            The fingerprints of koala bears are virtually indistinguishable from those of humans, so much so that they can be easily confused at a crime scene.
            
            The mask worn by Michael Myers in the original "Halloween" was actually a Captain Kirk mask painted white.
            
            The only two days of the year in which there are no professional sports games--MLB, NBA, NHL, or NFL--are the day before and the day after the Major League All-Star Game.
            
            Only one person in two billion will live to be 116 or older.
            
            When the French Academy was preparing its first dictionary, it defined "crab" as, "A small red fish, which walks backwards." This definition was sent with a number of others to the naturalist Cuvier for his approval.  The scientist wrote back, "Your definition, gentlemen, would be perfect, only for three exceptions. The crab is not a fish, it is not red and it does not walk backwards."
            
            Dr. Jack Kevorkian first patient has Alzheimer's disease.
            
            Fictional/horror writer Stephen King sleeps with a nearby light on to calm his fear of the dark. 
            
            It's possible to lead a cow upstairs but not downstairs.
            
            It was discovered on a space mission that a frog can throw up. The frog throws up its stomach first, so the stomach is dangling out of its mouth. Then the frog uses its forearms to dig out all of the stomach's contents and then swallows the stomach back down.
            
            The very first song played on MTV was 'Video Killed The Radio Star' by the Buggles.
            
            William Marston engineered one of the earliest forms of the polygraph in the early 1900's. Later he went on to create the comic strip Wonder Woman, a story about a displaced Amazon princess who forces anyone caught in her magic lasso to tell the truth
            
            Americans travel 1,144,721,000 miles by air every day
            
            The the U.S. you dial '911'. In Stockholm, Sweden you dial 90000
            
            38% of American men say they love their cars more than women
            
            The U.S. military operates 234 golf courses
            
            100% of lottery winners do gain weight
            
            Bullet proof vests, fire escapes, windshield wipers, and laser printers were all invented by women
            
            A cat has 32 muscles in each ear.
            
            A duck's quack doesn't echo, and no one knows why.
            
            Cats urine glows under a black light.
            
            In every episode of Seinfeld there is a Superman somewhere.
            
            Lorne Greene had one of his nipples bitten off by an alligator while he was host of "Lorne Greene's Wild Kingdom."
            
            Pamela Anderson Lee is Canada's Centennial Baby, being the first baby born on the centennial anniversary of Canada's independence.
            
            Pinocchio is Italian for "pine head."
            
            When possums are playing 'possum', they are not "playing." They actually pass out from sheer terror.
            
            Who's that playing the piano on the "Mad About You" theme? Paul Reiser himself.
            
            Winston Churchill was born in a ladies' room during a dance.
            
            Most lipstick contains fish scales!
            
            Donald Duck comics were banned from Finland because he doesn't wear pants!
            
            There are more than 10 million bricks in the Empire State Building!
            
            Camels have three eyelids to protect themselves from blowing sand!
            
            The placement of a donkey's eyes in its' heads enables it to see all four feet at all times!
            
            The average American/Canadian will eat about 11.9 pounds of cereal per year!
            
            Over 1000 birds a year die from smashing into windows!
            
            The state of Florida is bigger than England!
            
            Dolphins sleep with one eye open!
            
            In the White House, there are 13,092 knives, forks and spoons!
            
            Recycling one glass jar, saves enough energy to watch T.V for 3 hours!
            
            Owls are one of the only birds who can see the color blue!
            
            Honeybees have a type of hair on their eyes!
            
            A jellyfish is 95 percent water!
            
            In Bangladesh, kids as young as 15 can be jailed for cheating on their finals!
            
            The katydid bug hears through holes in its hind legs!
            
            Q is the only letter in the alphabet that does not appear in the name of any of the United States!
            
            166,875,000,000 pieces of mail are delivered each year in the US
            
            Bats always turn left when exiting a cave
            
            The praying mantis is the only insect that can turn its head
            
            Daffy Duck's middle name is "Dumas"
            
            In Disney's Fantasia, the Sorcerer's name is "Yensid" (Disney backwards.)
            
            In The Empire Strikes Back there is a potato hidden in the asteroid field
            
            Walt Disney holds the world record for the most Academy Awards won by one person, he has won twenty statuettes, and twelve other plaques and certificates
            
            James Bond's car had three different license plates in Goldfinger
            
            Canada makes up 6.67 percent of the Earth's land area
            
            South Dakota is the only U.S state which shares no letters with the name of it's capital
            
            The KGB is headquartered at No. 2 Felix Dzerzhinsky Square, Moscow
            
            The Vatican city registered 0 births in 1983
            
            Spain leads the world in cork production
            
            There are 1,792 steps in the Eiffel Tower
            
            There are 269 steps to the top of the Leaning Tower of Pisa*/
            
            "Leonardo da Vinci could write with one hand while drawing with the other"
        ];

        let factnum = Math.floor((Math.random() * factsuseless.length));

        let factembed = new Discord.RichEmbed()
        //.setAuthor(message.author.tag)
        .setColor("#CC22E2")
        .addField("Useless Fact", factsuseless[factnum])
        .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);


        message.channel.send(factembed);
    }
    
    module.exports.help = {
        name: "uselessfact"
    }