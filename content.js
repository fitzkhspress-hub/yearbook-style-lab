// Publication rules are source material, never application instructions.
const choice = (id, prompt, options, answer, why, section, page) => ({id, type:'choice', prompt, options, answer, why, section, page});
const edit = (id, prompt, original, answers, why, section, page) => ({id, type:'edit', prompt, original, answers, why, section, page});
export const modules = [
 {id:'students', title:'Names that belong', subtitle:'Students & first references', icon:'01', minutes:4, color:'blue',
  goal:'Identify students correctly in stories and captions, then use the right later reference.',
  rules:[['Story copy','First reference: grade word + full name. Later: first name only.'],['Captions & photo IDs','First reference: full name + grade in parentheses. Later: first name only.'],['Verify, then write','Use Skyward legal names, no nicknames. For a preferred name, the guide specifies the legal first initial + last name. First reference means first on the spread.'],['One student or several?','Freshman means one student or one team. Freshmen means two or more students.']],
  example:['Story: senior Maya Chen → Maya','Caption: Maya Chen (12) → Maya'],
  questions:[
   choice('s1','Maya is a senior. This is her first mention in story copy, in the middle of a sentence. Choose the ID.', ['Maya Chen (12)','senior Maya Chen','Senior Maya Chen','senior Maya “May” Chen'],1,'Story copy uses a lowercase grade word and full legal name. Grade numbers belong in captions and photo IDs.','1 · Students',1),
   edit('s2','Fix only the student ID for a first-reference caption. Maya is in grade 12.','senior Maya Chen',['Maya Chen (12)'],'A caption introduces the student with full name and grade number in parentheses.','1 · Students',1),
   choice('s3','Sofia Ramirez has already been identified on this spread. Which attribution follows our guide?', ['Ramirez said.','Ms. Ramirez said.','Sofia said.','senior Sofia Ramirez said.'],2,'Use a student’s first name on later references. This publication rule takes priority over a general last-name convention.','1 · Students',1),
   edit('s4','Two ninth-grade students joined the club. Fix the one word.','freshman',['freshmen'],'Freshman is one person or one team; freshmen means two or more people.','1 · Students',1),
   choice('s5','A student prefers another first name. Their legal first name begins with J and their last name is Fraga. Which first-reference story ID follows the guide?', ['senior JJ Fraga','senior J. Fraga','senior Fraga','J. Fraga (12)'],1,'The guide specifies the first initial of the legal first name + last name for a preferred name. Use the grade word in story copy.','1 · Students',1)
  ]},
 {id:'adults',title:'Get the grown-ups right',subtitle:'Titles & adult references',icon:'02',minutes:3,color:'orange',
  goal:'Introduce adults with accurate titles and distinguish their later references from students’ references.',
  rules:[['First reference','Use title + full name everywhere. Lowercase titles even before a name.'],['Later reference','Use the adult’s last name only.'],['Credentials matter','No Mr., Mrs. or Ms. Use Dr. only for a doctorate. Check names in the staff directory.']],
  example:['band director Paul Reyes → Reyes','principal Angela Price · Dr. only with a doctorate'],
  questions:[
   choice('a1','Choose a first-reference adult ID in the middle of a sentence.', ['Mr. Paul Reyes','Band Director Paul Reyes','band director Paul Reyes','Reyes'],2,'Adult first references use a lowercase title and full name. The guide prohibits Mr., Mrs. and Ms.','2 · Adults',1),
   edit('a2','Paul Reyes has already been introduced. Replace the name in the later-reference attribution.','Paul said.',['Reyes said.'],'Adults use their last name on later references. Students use their first name.','2 · Adults',1),
   choice('a3','You want to use Dr. before an adult’s name. What must you verify?', ['That the adult is a teacher','That the adult has a doctorate','That the adult prefers a formal title','That it is a first reference'],1,'The publication allows Dr. only for a doctorate. Verify rather than assume.','2 · Adults',1),
   edit('a4','Fix the title in this mid-sentence ID. Retain the full name.','Head Coach Elena Cruz',['head coach Elena Cruz'],'The guide lowercases head coach and other adult titles even before names.','2 · Adults',1),
   choice('a5','Which source does the guide specify for adult name spelling?', ['A social media username','The school staff directory','A nickname used by students','Your memory'],1,'Check the staff directory for adults and Skyward for students.','2 · Adults',1)
  ]},
 {id:'numbers',title:'Make every number count',subtitle:'Figures, ages & time',icon:'03',minutes:4,color:'green',
  goal:'Apply the general number rule and recognize common exceptions.',
  rules:[['The starting point','Spell out one through nine; use figures for 10 and above. Spell out a number that starts a sentence.'],['Exceptions','Ages, percentages, money and measurements use figures: 5 years old, 3%, $5, 6 feet.'],['Time & decades','Use 7 p.m., 7:30 a.m., noon and midnight. Write 1980s or ’90s; no apostrophe before the s.']],
  example:['nine students · 10 players · a 16-year-old junior','7 p.m. · $5 · 45%'],
  questions:[
   choice('n1','Choose the sentence with the correct general number style.', ['The club has 9 artists and twelve photographers.','The club has nine artists and 12 photographers.','The club has nine artists and twelve photographers.'],1,'Spell out one through nine and use figures for 10 or more when no exception applies.','3 · Numbers',2),
   edit('n2','Fix only the age expression.','a sixteen-year-old junior',['a 16-year-old junior'],'Ages use figures. Hyphenate the age when it modifies junior.','3 · Numbers',2),
   choice('n3','Which time is ready for copy?', ['7:00 PM','7 p.m.','7 pm','7 P.M.'],1,'Drop :00 for an exact hour and use lowercase p.m. with periods.','3 · Numbers',2),
   edit('n4','Fix only this percentage.','forty-five percent',['45%'],'The guide uses a figure and the % sign.','3 · Numbers',2),
   choice('n5','Choose the correct opening of a sentence.', ['800 students attended.','Eight hundred students attended.','eight hundred students attended.'],1,'Spell out a number at the beginning of a sentence and capitalize its first word.','3 · Numbers',2)
  ]},
 {id:'dates',title:'A date with the deadline',subtitle:'Months, dates & days',icon:'04',minutes:3,color:'purple',
  goal:'Format calendar references without ordinal endings or unnecessary abbreviations.',
  rules:[['With a date','Abbreviate Jan., Feb., Aug., Sept., Oct., Nov. and Dec.'],['Always spelled out','March, April, May, June and July. Also spell out any month used alone.'],['Dates & days','Use plain figures for dates: Oct. 15. Capitalize and spell out weekdays.']],
  example:['March 10 · Sept. 8 · in November','Monday · Oct. 15, never Oct. 15th'],
  questions:[
   edit('d1','Fix the full date expression.','Sept. 8th',['Sept. 8'],'Dates use plain figures without st, nd, rd or th. September is abbreviated with a specific date.','4 · Dates & days',2),
   choice('d2','Which date follows the guide?', ['Mar. 10','March 10','March 10th','mar. 10'],1,'March is never abbreviated; dates do not take ordinal endings.','4 · Dates & days',2),
   edit('d3','The month appears alone: “Rehearsals began in ___.” Fix the month.','Nov.',['November'],'Spell out a month when it appears without a specific date.','4 · Dates & days',2),
   choice('d4','Choose the weekday style for story copy.', ['Mon.','monday','Monday','MON'],2,'Capitalize and spell out weekday names.','4 · Dates & days',2),
   choice('d5','Which month may be abbreviated with a specific date?', ['June','July','April','August'],3,'Use Aug. with a date. April, June and July remain spelled out.','4 · Dates & days',2)
  ]},
 {id:'caps',title:'Keep your caps in check',subtitle:'Courses, clubs & events',icon:'05',minutes:3,color:'blue',
  goal:'Separate official names and course titles from general references.',
  rules:[['Names & courses','Capitalize full club names, languages and exact course titles: National Honor Society, English, Algebra I.'],['Publication choice','Capitalize Homecoming every time. Lowercase prom, pep rally, spring break and class of 2027.'],['General references','Lowercase general subjects, departments (except languages), seasons and team names.']],
  example:['AP Biology, but biology · English department','Homecoming, but prom · varsity girls soccer'],
  questions:[
   edit('c1','Fix this event name wherever it appears in our yearbook.','homecoming',['Homecoming'],'The publication explicitly requires Homecoming to be capitalized every time.','5 · Capitalization',2),
   choice('c2','Which sentence distinguishes the subject from the exact course title?', ['She likes Biology and takes AP biology.','She likes biology and takes AP Biology.','She likes Biology and takes AP Biology.'],1,'Lowercase a general subject; capitalize an exact course title.','5 · Capitalization',2),
   choice('c3','Choose the department name that follows the guide.', ['Math Department','english department','English department','English Department'],2,'Department is lowercase. English is capitalized because it is a language.','5 · Capitalization',2),
   edit('c4','Fix this phrase in the middle of a sentence.','Class of 2027',['class of 2027'],'The guide lists class of 2027 among expressions that stay lowercase.','5 · Capitalization',2),
   choice('c5','Choose the correct pair.', ['National Honor Society → the club','national honor society → the Club','National honor Society → the Club'],0,'Capitalize the full organization name. Keep a general later reference, such as the club, lowercase.','5 · Capitalization',2)
  ]},
 {id:'punctuation',title:'Small marks. Big difference.',subtitle:'Commas, quotes & attribution',icon:'06',minutes:4,color:'orange',
  goal:'Edit punctuation and attribution using the publication’s specific limits.',
  rules:[['Lists & ownership','In a simple list, omit the comma before and/or. Use apostrophes for possession, not ordinary number or acronym plurals.'],['Quotes','Put commas and periods inside quotation marks. A new speaker gets a new paragraph.'],['House limits','Use said, with the name first, after the first sentence of a quote. No exclamation points, semicolons or dramatic ellipses.']],
  example:['red, white and blue · students’ notebooks','“We practiced,” Maya said.'],
  questions:[
   edit('p1','Edit only the simple list.','red, white, and blue',['red, white and blue'],'The guide omits the comma before and/or in a list.','6 · Punctuation',3),
   choice('p2','Which attribution and punctuation follow the guide? Maya has already been identified.', ['“We practiced”, Maya stated.','“We practiced,” said Maya.','“We practiced,” Maya said.','“We practiced!” Maya exclaimed.'],2,'The comma goes inside the quotation marks. Use name + said and avoid exclamation points.','6 · Punctuation; 7 · Words A to Z',3),
   edit('p3','Fix the plural acronym.','PDF’s',['PDFs'],'Do not add apostrophes to make acronyms or numbers plural.','6 · Punctuation',3),
   choice('p4','A new speaker begins talking in your story. What should you do?', ['Continue the same paragraph','Start a new paragraph','Add a semicolon','Use an ellipsis'],1,'A change of speaker requires a new paragraph.','6 · Punctuation',3),
   choice('p5','You find a semicolon joining two complete sentences. What does our guide tell you to do?', ['Keep it for variety','Replace it with an exclamation point','Write two sentences','Replace it with a dramatic ellipsis'],2,'The guide prohibits semicolons and directs writers to use two sentences. This is a publication requirement.','6 · Punctuation',3)
  ]},
 {id:'words',title:'Choose the sharper word',subtitle:'Word choice & house spellings',icon:'07',minutes:4,color:'purple',
  goal:'Catch common word mix-ups and apply the staff’s preferred forms.',
  rules:[['Our preferred forms','adviser, because of, more than for numbers, toward and off.'],['Meaning matters','Affect changes something; an effect is a result. Farther is distance; further is more or deeper.'],['People & groups','Principal is a school leader; principle is a belief. Use a group’s full name first, then its short name, without parenthetical initials.']],
  example:['fewer students · less money','The loss affected the team. The effect was silence.'],
  questions:[
   edit('w1','Use our preferred spelling for the yearbook staff role.','advisor',['adviser'],'The publication’s preferred spelling is adviser.','7 · Words A to Z',3),
   choice('w2','Choose the sentence our guide prefers for a number.', ['Over 200 fans attended.','More than 200 fans attended.','Above 200 fans attended.'],1,'Our guide reserves over for above and uses more than with numbers. Treat this as house style.','7 · Words A to Z',3),
   choice('w3','Which sentence uses affect and effect correctly?', ['The delay effected the team. Its affect was frustration.','The delay affected the team. Its effect was frustration.'],1,'Affect is the verb meaning to change; effect is the noun meaning a result.','7 · Words A to Z',3),
   edit('w4','Complete “___ than 10 students attended.” Enter only the first word.','Less',['Fewer'],'Students can be counted, so use fewer. Use less for amounts.','7 · Words A to Z',3),
   choice('w5','Which first reference follows the group-name rule?', ['National Honor Society (NHS)','N.H.S.','National Honor Society','NHS'],2,'Use the full name first. Do not add initials in parentheses. A later short name has no periods.','7 · Words A to Z',3)
  ]},
 {id:'sports',title:'Call the score correctly',subtitle:'Teams, matches & scorelines',icon:'08',minutes:4,color:'green',
  goal:'Write team names and scores in the form the sports section needs.',
  rules:[['Team names','Lowercase level + gender + sport. No possessive apostrophe: varsity boys basketball. Write junior varsity first, JV later.'],['Scores','Put the winner’s score first, including losses. A 55-54 loss means the opponent scored 55.'],['Sports vocabulary','Soccer, volleyball and tennis play matches. Volleyball and tennis win sets. Use figures and hyphens for stats.']],
  example:['a 55-54 loss · a 35-yard pass','junior varsity girls soccer → JV girls soccer'],
  questions:[
   edit('sp1','Fix this mid-sentence team name.','Varsity Boys’ Basketball',['varsity boys basketball'],'Team names are lowercase and do not use a possessive apostrophe.','8 · Sports',4),
   choice('sp2','Our team scored 54; Clements scored 55. Which phrase follows our score rule?', ['a 54-55 loss to Clements','a 55-54 loss to Clements','a 55-54 win over Clements'],1,'The winner’s score comes first even when our team loses. Retain loss so readers know the outcome.','8 · Sports',4),
   choice('sp3','The volleyball team beat an opponent. Which wording follows the guide?', ['The team won the game.','The team won the match.','The team won the inning.'],1,'Volleyball, soccer and tennis play matches. Volleyball and tennis also win sets.','8 · Sports',4),
   edit('sp4','Expand the team level for a first reference. Enter only the level.','JV',['junior varsity'],'Write junior varsity on first reference and JV on later references.','8 · Sports',4),
   choice('sp5','Choose the correct stat phrase.', ['a thirty-five yard pass','a 35 yard pass','a 35-yard pass'],2,'Sports stats use figures and hyphens in modifiers.','8 · Sports',4)
  ]},
 {id:'cuts',title:'Report. Then cut.',subtitle:'Specifics, quotes & clean copy',icon:'09',minutes:3,color:'blue',
  goal:'Replace filler with reporting and recognize what a story still needs.',
  rules:[['Delete filler','Cut very, really, awesome, fun-filled, seems and feels from staff-written copy. Avoid the guide’s listed clichés.'],['Get specific','Replace many students with a named example. Avoid this year, next year and unnecessary school or mascot references.'],['Report responsibly','Stories and captions need real quotes from real people. Report instead of congratulating. Do not invent reporting or rewrite a speaker’s words to fit a drill.']],
  example:['“Many students” → name a verified example','Missing a quote? Interview someone before publishing.'],
  questions:[
   choice('cu1','Which action makes a vague claim more useful?', ['Add “really” before it','Write “everyone agreed”','Report a specific, named student’s experience','Add “hard work and dedication”'],2,'Specific people and verified details replace vague generalizations and clichés.','9 · Words to cut',4),
   edit('cu2','Delete the filler word from this staff-written phrase.','a really close match',['a close match'],'Really is on the guide’s always-delete list. This is staff-written copy, not a direct quote.','9 · Words to cut',4),
   choice('cu3','A caption has a name and action but no direct quote. What should happen next?', ['Invent a likely quote','Copy an unrelated quote','Interview a person involved and verify the quote','Publish because captions do not need quotes'],2,'The guide requires a real quote from a real person in every story and caption. Gather the missing reporting.','9 · Words to cut',4),
   choice('cu4','Which opening avoids the guide’s banned opening patterns?', ['Have you ever wondered how a show begins?','Imagine stepping onto the stage.','No matter the challenge, the cast worked hard.','At 6 a.m., junior Maya Chen checked the stage lights.'],3,'A concrete reported moment avoids the listed formula openings. All scenarios in this app are fictional practice material.','9 · Words to cut',4),
   edit('cu5','Remove the unnecessary year reference. Preserve the rest.','The team practiced this year.',['The team practiced.'],'The guide lists this year as unnecessary in a yearbook.','9 · Words to cut',4)
  ]},
 {id:'ap',title:'When the guide is silent',subtitle:'AP fallback & source judgment',icon:'10',minutes:3,color:'orange',
  goal:'Use the style hierarchy and consult AP for a detail the house guide does not cover.',
  rules:[['The order','Publication guide first → AP Stylebook second → Merriam-Webster for spelling and meaning.'],['AP extension: month + year','When only a month and year appear, spell out the month and do not separate them with a comma.'],['Scope matters','The AP extension below covers month-year dates. Other drills are governed by the supplied publication guide; do not assume every house restriction is universal AP style.']],
  example:['January 2027','AP fallback is for gaps, not overrides.'],
  questions:[
   choice('ap1','The house guide and another style source disagree. Which should govern your yearbook?', ['The publication guide','Whichever is shorter','A search snippet','The other source'],0,'The publication’s stated style order gives its guide first priority.','The style order',1),
   edit('ap2','The house guide does not specify month + year punctuation. Apply the AP fallback and fix this expression.','January, 2027',['January 2027'],'AP’s months entry uses no comma between a month and year alone. The month is spelled out.','AP · Months',null),
   choice('ap3','Neither the publication guide nor AP settles a spelling or meaning question. What is the next source named by the guide?', ['A random social post','Merriam-Webster','The loudest staff member','An old draft'],1,'The guide names Merriam-Webster as the third source for spelling and meaning.','The style order',1)
  ]}
];
export const questions = modules.flatMap(m => m.questions.map(q => ({...q,moduleId:m.id,moduleTitle:m.title})));
export const questionById = Object.fromEntries(questions.map(q => [q.id,q]));
export const apSource='https://www.apstylebook.com/ask_the_editors/style_guidance';
export function normalize(value) { return String(value).normalize('NFKC').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[‐‑–—]/g,'-').replace(/\s+/g,' ').trim(); }
export function isCorrect(q, value) { return q.type==='choice' ? Number(value)===q.answer : q.answers.some(a=>normalize(a)===normalize(value)); }
export function correctAnswer(q) { return q.type==='choice' ? q.options[q.answer] : q.answers[0]; }
