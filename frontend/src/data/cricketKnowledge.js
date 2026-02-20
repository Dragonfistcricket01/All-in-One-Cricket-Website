/**
 * Cricket Knowledge Base for Rule-Based Chatbot
 * Enhanced with Bangladesh, Pakistan, Afghanistan, and global cricket coverage
 */

export const cricketKnowledge = {
    // Greetings
    greetings: {
        patterns: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon', 'greetings', 'namaste', 'salaam', 'assalamu alaikum'],
        responses: [
            "Hello! 👋 I'm your cricket assistant. Ask me anything about cricket rules, players, statistics, or history from around the world!",
            "Hi there! 🏏 Ready to talk cricket? From Bangladesh to Australia, I know it all!",
            "Hey! Welcome to the cricket help desk. Ask about any team, player, or tournament!",
            "Greetings! I'm here to answer all your cricket questions from Test to T20! 🔥"
        ]
    },

    // Rules and Regulations
    rules: {
        lbw: {
            patterns: ['lbw', 'leg before wicket', 'what is lbw', 'lbw rule', 'explain lbw'],
            answer: "🎯 **LBW (Leg Before Wicket)**: A batsman is out LBW if the ball hits their body (usually legs) instead of the bat, and the umpire believes the ball would have hit the stumps. Key conditions:\n\n1. Ball must pitch in line or outside off stump (not outside leg stump)\n2. Point of impact must be in line with stumps (unless no shot played)\n3. Ball trajectory must be hitting the stumps\n\nBatsmen can review LBW decisions using DRS (Decision Review System).",
            relatedQuestions: ["What is DRS?", "How does ball tracking work?", "Can you be LBW off a no ball?"]
        },

        powerplay: {
            patterns: ['powerplay', 'power play', 'what is powerplay', 'powerplay rules', 'powerplay overs'],
            answer: "⚡ **Powerplay Rules**:\n\n**ODI Cricket:**\n- Overs 1-10: Mandatory powerplay (2 fielders outside 30-yard circle)\n- Overs 11-40: Max 4 fielders outside circle\n- Overs 41-50: Max 5 fielders outside circle\n\n**T20 Cricket:**\n- Overs 1-6: Powerplay (2 fielders outside circle)\n- Overs 7-20: Max 5 fielders outside circle\n\nDuring powerplay, only 2 fielders are allowed outside the 30-yard circle, creating more scoring opportunities!",
            relatedQuestions: ["What is a free hit?", "What is death overs?", "What are fielding restrictions?"]
        },

        drs: {
            patterns: ['drs', 'decision review system', 'what is drs', 'drs rules', 'review system'],
            answer: "📹 **DRS (Decision Review System)**:\n\nTeams can challenge umpire decisions using technology:\n\n**Technologies Used:**\n- 🎥 Ball Tracking (Hawk-Eye) - predicts ball path\n- 🌡️ Hot Spot - thermal imaging for edges\n- 🔊 Ultra Edge (Snicko) - detects faint edges via sound\n\n**Review Rules:**\n- Each team gets 2 reviews per innings (Tests)\n- 1 review per innings in limited overs\n- Reviews lost if decision stands\n- Reviews retained if decision overturned\n- Must request within 15 seconds\n\nUmpire's Call: If less than 50% of ball hitting stumps, original decision stands.",
            relatedQuestions: ["What is Hawk-Eye?", "What is Hot Spot?", "What is umpire's call?"]
        },

        noball: {
            patterns: ['no ball', 'noball', 'what is no ball', 'no ball rules', 'types of no ball'],
            answer: "🚫 **No Ball Rules**:\n\nA no ball is called when:\n\n1. **Front Foot No Ball**: Bowler's front foot lands beyond the crease\n2. **Back Foot No Ball**: Back foot touches or crosses return crease\n3. **Height No Ball**: Ball passes above waist height (full toss)\n4. **Bouncer**: More than 2 bouncers per over (above shoulder)\n5. **Fielding Restrictions**: Too many fielders outside circle\n\n**Penalty:**\n- 1 extra run to batting team\n- Ball must be re-bowled\n- Free hit in limited overs (batsman can't be out except run out)\n- Counts in bowler's figures",
            relatedQuestions: ["What is a free hit?", "What is a wide ball?", "What is a dead ball?"]
        },

        wide: {
            patterns: ['wide', 'wide ball', 'what is wide', 'wide rules'],
            answer: "📏 **Wide Ball**:\n\nCalled when ball is too far from batsman to play a normal shot:\n\n**Wide Criteria:**\n- Passes outside off stump beyond batsman's reach\n- Down leg side (even slightly)\n- Above batsman's head when standing upright\n\n**Penalty:**\n- 1 extra run to batting team\n- Ball must be re-bowled\n- Doesn't count in bowler's over\n- No free hit (unlike no ball)\n\n**Note**: Not wide if batsman moves and misses! Umpire judges based on original batting position.",
            relatedQuestions: ["What is no ball?", "What is leg bye?", "What is bye?"]
        },

        followon: {
            patterns: ['follow on', 'follow-on', 'what is follow on', 'follow on rule'],
            answer: "🔄 **Follow-On** (Test Cricket):\n\nWhen team batting first leads by:\n- **200+ runs (5-day Test)**: Can enforce follow-on\n- **150+ runs (3/4-day Test)**: Can enforce follow-on\n\nEnforcing team makes opposition bat again immediately, hoping to win without batting twice.\n\n**Strategy:**\n- Used when team wants to win quickly\n- Risky if bowlers are tired\n- Famous example: India vs Australia, Kolkata 2001 (India followed on but won!)",
            relatedQuestions: ["What is Test cricket?", "What is declaration?", "What is innings?"]
        }
    },

    // Players Information - GLOBAL COVERAGE
    players: {
        // Bangladesh Players
        shakib: {
            patterns: ['shakib', 'shakib al hasan', 'tell me about shakib', 'shakib hasan', 'bangladesh captain'],
            answer: "🇧🇩 **Shakib Al Hasan - Bangladesh's Greatest**\n\n**Career Stats:**\n- Tests: 4,500+ runs, 230+ wickets\n- ODIs: 7,500+ runs, 300+ wickets\n- T20Is: 2,500+ runs, 130+ wickets\n- Only player with 7,000 runs & 300 wickets in ODIs\n\n**Achievements:**\n- ICC ODI Player of the Year (2009)\n- World's #1 all-rounder multiple times\n- Led Bangladesh to historic wins\n- First Bangladesh cricketer in IPL\n- Captain of Bangladesh national team\n\nConsidered one of the greatest all-rounders of all time! 🌟",
            relatedQuestions: ["Bangladesh cricket team", "Best all-rounders", "BPL league"]
        },

        mushfiqur: {
            patterns: ['mushfiqur', 'mushfiqur rahim', 'tell me about mushfiqur', 'bangladesh wicketkeeper'],
            answer: "🇧🇩 **Mushfiqur Rahim - Bangladesh Legend**\n\n**Career Stats:**\n- Tests: 5,800+ runs, Avg 38+\n- ODIs: 7,500+ runs, Avg 36+\n- T20Is: 1,700+ runs\n- Most runs for Bangladesh\n\n**Achievements:**\n- First Bangladesh double century (Test)\n- Longest serving captain (2011-2017)\n- Exceptional wicketkeeper-batsman\n- 10+ Test centuries\n- ICC World XI selection\n\nBangladesh's most experienced cricketer! 👑",
            relatedQuestions: ["Shakib Al Hasan", "Bangladesh cricket", "Best wicketkeepers"]
        },

        // Pakistan Players
        babar: {
            patterns: ['babar', 'babar azam', 'tell me about babar', 'pakistan captain', 'babar stats'],
            answer: "🇵🇰 **Babar Azam - King of Pakistan Cricket**\n\n**Career Stats:**\n- Tests: 3,800+ runs, Avg 45+\n- ODIs: 5,500+ runs, Avg 56+\n- T20Is: 3,600+ runs, Avg 41+\n- 30+ international centuries\n\n**Achievements:**\n- Fastest to 1,000, 2,000, 3,000 T20I runs\n- ICC ODI Cricketer of the Year (2022)\n- Captain of Pakistan (all formats)\n- Ranked #1 ODI batsman\n- Compared to Virat Kohli for consistency\n\nPakistan's modern-day legend! 👑",
            relatedQuestions: ["Shaheen Afridi", "Pakistan cricket", "PSL league"]
        },

        shaheen: {
            patterns: ['shaheen', 'shaheen afridi', 'tell me about shaheen', 'pakistan bowler'],
            answer: "🇵🇰 **Shaheen Shah Afridi - Pakistani Pace Sensation**\n\n**Career Stats:**\n- Tests: 100+ wickets, Avg 25\n- ODIs: 100+ wickets, Avg 23\n- T20Is: 100+ wickets\n- Left-arm fast bowler\n\n**Achievements:**\n- Youngest to take 5-wicket haul in all formats\n- 2021 T20 World Cup Player of Tournament\n- ICC Men's Cricketer of the Year (2021)\n- Key player in 2022 T20 WC Final\n- PSL Lahore Qalandars captain\n\nOne of the best fast bowlers today! ⚡",
            relatedQuestions: ["Babar Azam", "Best fast bowlers", "Pakistan cricket"]
        },

        // Afghanistan Players
        rashid: {
            patterns: ['rashid', 'rashid khan', 'tell me about rashid', 'afghanistan bowler', 'rashid stats'],
            answer: "🇦🇫 **Rashid Khan - Afghanistan's Spin Wizard**\n\n**Career Stats:**\n- Tests: 34 wickets in 5 matches\n- ODIs: 170+ wickets, Avg 18\n- T20Is: 140+ wickets, Economy 6.2\n- Youngest to reach 100 ODI wickets (18y)\n\n**Achievements:**\n- ICC ODI Team of the Year (multiple times)\n- Youngest captain in international cricket\n- IPL, BBL, CPL superstar\n- World's #1 T20I bowler\n- Led Afghanistan to historic wins\n\nGlobal T20 legend! 🌟",
            relatedQuestions: ["Afghanistan cricket", "Best spinners", "Mujeeb Ur Rahman"]
        },

        nabi: {
            patterns: ['nabi', 'mohammad nabi', 'tell me about nabi', 'afghanistan all-rounder'],
            answer: "🇦🇫 **Mohammad Nabi - Afghanistan's Pioneer**\n\n**Career Stats:**\n- ODIs: 3,500+ runs, 155+ wickets\n- T20Is: 1,900+ runs, 90+ wickets\n- Off-spin all-rounder\n\n**Achievements:**\n- First Afghanistan ODI centurion\n- Captain of Afghanistan (2013-2017)\n- IPL, PSL, BBL veteran\n- Key in Afghanistan's rise\n- 15+ years international cricket\n\nAfghanistan cricket's founding father! 🎖️",
            relatedQuestions: ["Rashid Khan", "Afghanistan cricket team", "Best all-rounders"]
        },

        // India Players
        sachin: {
            patterns: ['sachin', 'sachin tendulkar', 'tell me about sachin', 'tendulkar', 'master blaster'],
            answer: "🏏 **Sachin Tendulkar - The God of Cricket**\n\n**Career Stats:**\n- Tests: 15,921 runs, 51 centuries, Avg 53.78\n- ODIs: 18,426 runs, 49 centuries, Avg 44.83\n- First player to score 100 international centuries\n- Played 200 Tests, 463 ODIs (1989-2013)\n\n**Achievements:**\n- 2011 World Cup winner\n- Only player with 30,000+ international runs\n- Highest run-scorer in both Tests and ODIs\n- Youngest Indian debutant at 16\n- Bharat Ratna (India's highest civilian award)",
            relatedQuestions: ["Who is Virat Kohli?", "Who has most runs in cricket?", "Who won 2011 World Cup?"]
        },

        virat: {
            patterns: ['virat', 'virat kohli', 'kohli', 'tell me about virat', 'king kohli'],
            answer: "👑 **Virat Kohli - King Kohli**\n\n**Career Stats:**\n- Tests: 8,900+ runs, 29 centuries\n- ODIs: 13,900+ runs, 50 centuries\n- T20Is: 4,000+ runs\n- Known for incredible chasing ability\n\n**Achievements:**\n- Fastest to 8,000, 9,000, 10,000, 11,000, 12,000 ODI runs\n- 80+ international centuries\n- Former Indian captain (2017-2022)\n- ICC ODI Player of the Decade (2010-2020)\n- Exceptional fielder and fitness icon\n- Average 50+ in all formats",
            relatedQuestions: ["Who is Sachin Tendulkar?", "Who is AB de Villiers?", "Who is Rohit Sharma?"]
        },

        dhoni: {
            patterns: ['dhoni', 'ms dhoni', 'mahendra singh dhoni', 'captain cool', 'tell me about dhoni'],
            answer: "🧘 **MS Dhoni - Captain Cool**\n\n**Career Highlights:**\n- ODIs: 10,773 runs, Avg 50.57\n- T20Is: 1,617 runs\n- Tests: 4,876 runs\n- Most successful Indian captain\n\n**Achievements:**\n- Only captain to win all 3 ICC trophies:\n  - 2007 T20 World Cup\n  - 2011 ODI World Cup\n  - 2013 Champions Trophy\n- World's best finisher\n- Lightning-fast wicketkeeper\n- 195 ODI matches as captain (won 110)\n- Famous for calm demeanor under pressure\n- Helicopter shot innovator 🚁",
            relatedQuestions: ["Who won 2011 World Cup?", "Who is best captain?", "Who is best finisher?"]
        },

        bumrah: {
            patterns: ['bumrah', 'jasprit bumrah', 'tell me about bumrah', 'bumrah stats'],
            answer: "⚡ **Jasprit Bumrah - India's Yorker King**\n\n**Career Stats:**\n- Tests: 150+ wickets, Avg 20\n- ODIs: 140+ wickets, Avg 24\n- T20Is: 85+ wickets, Economy 6.5\n- Unique bowling action\n\n**Achievements:**\n- Fastest Indian to 100 ODI wickets\n- ICC Test Team of the Year (multiple)\n- Best death-over bowler\n- Hat-tricks in Tests & T20Is\n- India's pace spearhead\n\nWorld's best fast bowler! 🔥",
            relatedQuestions: ["Best fast bowlers", "India bowling", "Yorker specialists"]
        },

        // Australia Players
        smith: {
            patterns: ['steve smith', 'smith', 'tell me about smith', 'australian batsman'],
            answer: "🇦🇺 **Steve Smith - The Modern Master**\n\n**Career Stats:**\n- Tests: 9,600+ runs, Avg 58+\n- ODIs: 5,200+ runs, Avg 44\n- 32 Test centuries\n\n**Achievements:**\n- 3rd highest Test average (after Bradman)\n- Australian captain (2015-2018)\n- 2015 World Cup winner\n- ICC Test Player of the Decade\n- Unique batting technique\n\nModern-day batting genius! 🎯",
            relatedQuestions: ["Don Bradman", "Best Test batsmen", "Australia cricket"]
        },

        cummins: {
            patterns: ['cummins', 'pat cummins', 'tell me about cummins', 'australia captain'],
            answer: "🇦🇺 **Pat Cummins - Australia's Leader**\n\n**Career Stats:**\n- Tests: 250+ wickets, Avg 22\n- ODIs: 200+ wickets\n- Fast bowler & captain\n\n**Achievements:**\n- Australian Test captain\n- 2023 World Cup winning captain\n- ICC Test Cricketer of the Year (2023)\n- World's #1 Test bowler\n- Excellent all-format player\n\nAustralia's modern-day great! 👑",
            relatedQuestions: ["Mitchell Starc", "Australia cricket", "Best captains"]
        },

        // South Africa
        devilliers: {
            patterns: ['ab', 'ab de villiers', 'de villiers', 'tell me about ab', 'mr 360'],
            answer: "🇿🇦 **AB de Villiers - Mr. 360**\n\n**Career Stats:**\n- Tests: 8,765 runs, Avg 50.66\n- ODIs: 9,577 runs, Avg 53.50\n- T20Is: 1,672 runs, SR 135\n- Fastest ODI century (31 balls)\n\n**Achievements:**\n- Fastest to 8,000, 9,000 ODI runs\n- 3 ODI Player of the Year awards\n- Incredible 360° shot-making\n- Wicketkeeper, fielder, explosive batsman\n- IPL legend (RCB)\n\nMost innovative batsman ever! 🌟",
            relatedQuestions: ["Fastest 100", "South Africa cricket", "Best finishers"]
        },

        rabada: {
            patterns: ['rabada', 'kagiso rabada', 'tell me about rabada', 'south africa bowler'],
            answer: "🇿🇦 **Kagiso Rabada - South African Speedster**\n\n**Career Stats:**\n- Tests: 280+ wickets, Avg 22\n- ODIs: 140+ wickets\n- T20Is: 60+ wickets\n- Fast bowler\n\n**Achievements:**\n- Youngest to 200 Test wickets\n- ICC Test Cricketer of the Year (2018)\n- Multiple 5-wicket hauls\n- South Africa's pace leader\n- IPL Purple Cap winner\n\nWorld-class fast bowler! ⚡",
            relatedQuestions: ["Best fast bowlers", "South Africa cricket", "Anrich Nortje"]
        },

        // England
        root: {
            patterns: ['root', 'joe root', 'tell me about root', 'england batsman'],
            answer: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 **Joe Root - England's Run Machine**\n\n**Career Stats:**\n- Tests: 12,000+ runs, Avg 50+\n- ODIs: 6,200+ runs\n- 32+ Test centuries\n\n**Achievements:**\n- England Test captain (2017-2022)\n- Most Test runs for England\n- ICC Test Team of the Year (multiple)\n- 2019 World Cup winner\n- Consistent across all conditions\n\nEngland's batting maestro! 🎯",
            relatedQuestions: ["Best Test batsmen", "England cricket", "Ben Stokes"]
        },

        stokes: {
            patterns: ['stokes', 'ben stokes', 'tell me about stokes', 'england all-rounder'],
            answer: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 **Ben Stokes - England's Hero**\n\n**Career Stats:**\n- Tests: 6,500+ runs, 200+ wickets\n- ODIs: 3,000+ runs, 70+ wickets\n- All-rounder extraordinaire\n\n**Achievements:**\n- 2019 World Cup final hero (84* off 89)\n- Headingley 2019 miracle (135* vs Australia)\n- England Test captain\n- ICC Player of the Year (2019)\n- Multiple match-winning performances\n\nModern-day all-rounder legend! 🔥",
            relatedQuestions: ["Best all-rounders", "2019 World Cup", "England cricket"]
        },

        // New Zealand
        williamson: {
            patterns: ['williamson', 'kane williamson', 'tell me about williamson', 'new zealand captain'],
            answer: "🇳🇿 **Kane Williamson - The Gentleman**\n\n**Career Stats:**\n- Tests: 8,700+ runs, Avg 54+\n- ODIs: 6,500+ runs, Avg 47\n- T20Is: 2,200+ runs\n- 32+ Test centuries\n\n**Achievements:**\n- New Zealand captain\n- 2019 WC final (lost on boundary count)\n- 2021 WTC winner\n- ICC Spirit of Cricket award\n- One of Fab 4 (with Kohli, Root, Smith)\n\nMost respected cricketer! 🎖️",
            relatedQuestions: ["Fab Four", "New Zealand cricket", "Best Test batsmen"]
        },

        // West Indies
        gayle: {
            patterns: ['gayle', 'chris gayle', 'tell me about gayle', 'universe boss'],
            answer: "🇯🇲 **Chris Gayle - Universe Boss**\n\n**Career Stats:**\n- Tests: 7,214 runs, Avg 42\n- ODIs: 10,480 runs, 25 centuries\n- T20Is: 1,899 runs, 2 centuries\n- Most T20 runs ever (14,000+)\n\n**Achievements:**\n- Fastest T20 century (30 balls)\n- Only batsman with T20I triple century (175*)\n- Most sixes in international cricket (550+)\n- 2× T20 World Cup winner\n- IPL legend\n\nGreatest T20 batsman ever! 💥",
            relatedQuestions: ["T20 cricket", "Biggest hitters", "West Indies cricket"]
        },

        // Sri Lanka
        sangakkara: {
            patterns: ['sangakkara', 'kumar sangakkara', 'tell me about sangakkara', 'sri lanka wicketkeeper'],
            answer: "🇱🇰 **Kumar Sangakkara - Sri Lankan Legend**\n\n**Career Stats:**\n- Tests: 12,400 runs, Avg 57.40\n- ODIs: 14,234 runs, 25 centuries\n- Wicketkeeper-batsman\n\n**Achievements:**\n- 2nd highest ODI run-scorer\n- 4 consecutive ODI centuries (2015 WC)\n- Most runs in single World Cup (2015)\n- Sri Lankan captain\n- ICC Hall of Fame\n\nOne of the greatest wicketkeepers! 👑",
            relatedQuestions: ["Best wicketkeepers", "Sri Lanka cricket", "Mahela Jayawardene"]
        },

        // Zimbabwe
        raza: {
            patterns: ['raza', 'sikandar raza', 'tell me about raza', 'zimbabwe all-rounder'],
            answer: "🇿🇼 **Sikandar Raza - Zimbabwe's Star**\n\n**Career Stats:**\n- Tests: 2,500+ runs, 60+ wickets\n- ODIs: 3,500+ runs, 100+ wickets\n- T20Is: 2,200+ runs, 80+ wickets\n\n**Achievements:**\n- ICC Men's Player of the Month (2022)\n- Zimbabwe's best all-rounder\n- Captain of Zimbabwe T20 team\n- Consistent match-winner\n- Spin bowling all-rounder\n\nZimbabwe cricket's hope! 🌟",
            relatedQuestions: ["Zimbabwe cricket", "Best all-rounders", "African cricket"]
        }
    },

    // Statistics and Records
    records: {
        highestScore: {
            patterns: ['highest score', 'highest individual score', 'most runs in innings', 'highest runs', 'record score'],
            answer: "📊 **Highest Individual Scores:**\n\n**Test Cricket:**\n🥇 Brian Lara - **400*** vs England (2004)\n🥈 Matthew Hayden - 380 vs Zimbabwe (2003)\n🥉 Brian Lara - 375 vs England (1994)\n\n**ODI Cricket:**\n🥇 Rohit Sharma - **264** vs Sri Lanka (2014)\n🥈 Martin Guptill - 237* vs West Indies (2015)\n🥉 Virender Sehwag - 219 vs West Indies (2011)\n\n**T20I Cricket:**\n🥇 Aaron Finch - **172** vs Zimbabwe (2018)\n🥈 Glenn Maxwell - 145* vs Sri Lanka (2016)\n🥉 Rohit Sharma - 118 vs Sri Lanka (2017)",
            relatedQuestions: ["Who has most centuries?", "Who has most runs?", "Highest team score"]
        },

        mostRuns: {
            patterns: ['most runs', 'highest run scorer', 'who has most runs', 'run records', 'top run scorer'],
            answer: "🏆 **All-Time Leading Run Scorers:**\n\n**Test Cricket:**\n1. Sachin Tendulkar - 15,921 runs\n2. Ricky Ponting - 13,378 runs\n3. Jacques Kallis - 13,289 runs\n4. Rahul Dravid - 13,288 runs\n5. Kumar Sangakkara - 12,400 runs\n\n**ODI Cricket:**\n1. Sachin Tendulkar - 18,426 runs\n2. Kumar Sangakkara - 14,234 runs\n3. Ricky Ponting - 13,704 runs\n4. Virat Kohli - 13,900+ runs*\n5. Mahela Jayawardene - 12,650 runs\n\n**T20I Cricket:**\n1. Virat Kohli - 4,000+ runs*\n2. Rohit Sharma - 3,900+ runs*\n3. Babar Azam - 3,800+ runs*\n\n*Still active",
            relatedQuestions: ["Most centuries", "Highest average", "Fastest to 10000 runs"]
        },

        mostWickets: {
            patterns: ['most wickets', 'highest wicket taker', 'who has most wickets', 'wicket records', 'top bowler'],
            answer: "🎯 **All-Time Leading Wicket Takers:**\n\n**Test Cricket:**\n1. Muttiah Muralitharan - **800 wickets**\n2. Shane Warne - 708 wickets\n3. James Anderson - 690+ wickets\n4. Anil Kumble - 619 wickets\n5. Stuart Broad - 600+ wickets\n\n**ODI Cricket:**\n1. Muttiah Muralitharan - **534 wickets**\n2. Wasim Akram - 502 wickets\n3. Waqar Younis - 416 wickets\n4. Chaminda Vaas - 400 wickets\n5. Shahid Afridi - 395 wickets\n\n**T20I Cricket:**\n1. Tim Southee - 150+ wickets*\n2. Shakib Al Hasan - 140+ wickets*\n3. Rashid Khan - 140+ wickets*\n\n*Still active",
            relatedQuestions: ["Best bowler", "Most economical bowler", "Fastest to 100 wickets"]
        },

        fastest100: {
            patterns: ['fastest 100', 'fastest century', 'quickest 100', 'fastest hundred', 'century record'],
            answer: "⚡ **Fastest Centuries:**\n\n**ODI Cricket:**\n1. AB de Villiers - **31 balls** vs West Indies (2015)\n2. Corey Anderson - 36 balls vs West Indies (2014)\n3. Shahid Afridi - 37 balls vs Sri Lanka (1996)\n\n**T20I Cricket:**\n1. David Miller - **35 balls** vs Bangladesh (2017)\n2. Rohit Sharma - 35 balls vs Sri Lanka (2017)\n3. Various players - 40-42 balls\n\n**Test Cricket:**\n1. Ben Stokes - **85 balls** vs South Africa (2016)\n2. Brendon McCullum - 54 balls vs Australia (2016) - single session\n3. Misbah-ul-Haq - 56 balls vs Australia (2014)\n\nAB de Villiers' 31-ball century is legendary! 🔥",
            relatedQuestions: ["Who is AB de Villiers?", "Fastest 50", "Highest strike rate"]
        }
    },

    // World Cup
    worldCup: {
        winners: {
            patterns: ['world cup winners', 'who won world cup', 'world cup history', 'cricket world cup', 'wc winners'],
            answer: "🏆 **Cricket World Cup Winners:**\n\n**ODI World Cup:**\n- 2023: 🇦🇺 Australia (6th title)\n- 2019: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England (1st title)\n- 2015: 🇦🇺 Australia (5th title)\n- 2011: 🇮🇳 India (2nd title)\n- 2007: 🇦🇺 Australia (4th title)\n- 2003: 🇦🇺 Australia (3rd title)\n- 1999: 🇦🇺 Australia (2nd title)\n- 1996: 🇱🇰 Sri Lanka (1st title)\n- 1992: 🇵🇰 Pakistan (1st title)\n- 1987: 🇦🇺 Australia (1st title)\n- 1983: 🇮🇳 India (1st title)\n- 1979: 🇯🇲 West Indies (2nd title)\n- 1975: 🇯🇲 West Indies (1st title)\n\n**Most Titles:** Australia (6) 🐐",
            relatedQuestions: ["T20 World Cup winners", "2011 World Cup final", "2023 World Cup"]
        },

        t20worldcup: {
            patterns: ['t20 world cup', 't20 wc', 't20 winners', 't20 world cup winners'],
            answer: "🏆 **T20 World Cup Winners:**\n\n- 2024: 🇮🇳 India (2nd title)\n- 2022: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England (2nd title)\n- 2021: 🇦🇺 Australia (1st title)\n- 2016: 🇯🇲 West Indies (2nd title)\n- 2014: 🇱🇰 Sri Lanka (1st title)\n- 2012: 🇯🇲 West Indies (1st title)\n- 2010: 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England (1st title)\n- 2009: 🇵🇰 Pakistan (1st title)\n- 2007: 🇮🇳 India (1st title)\n\n**Most Titles:** West Indies & England (2 each)\n\nIndia's 2024 win ended their ICC trophy drought! 🎉",
            relatedQuestions: ["2024 T20 World Cup", "IPL", "T20 cricket"]
        }
    },

    // IPL & Leagues
    ipl: {
        about: {
            patterns: ['ipl', 'indian premier league', 'what is ipl', 'ipl information', 'about ipl'],
            answer: "🎪 **Indian Premier League (IPL)**\n\n**Overview:**\n- Started: 2008\n- Format: T20 franchise cricket\n- Teams: 10 franchises\n- Duration: ~2 months (March-May)\n- Most valuable cricket league globally\n\n**Teams:**\n1. Mumbai Indians (5 titles) 👑\n2. Chennai Super Kings (5 titles) 👑\n3. Kolkata Knight Riders (3 titles)\n4. Rajasthan Royals\n5. Royal Challengers Bangalore\n6. Sunrisers Hyderabad\n7. Delhi Capitals\n8. Punjab Kings\n9. Gujarat Titans (2022 winners)\n10. Lucknow Super Giants\n\n**Highlights:**\n- Richest cricket league\n- Platform for young talent\n- Mix of Indian & international stars",
            relatedQuestions: ["IPL winners", "Most runs in IPL", "IPL records"]
        },

        bpl: {
            patterns: ['bpl', 'bangladesh premier league', 'what is bpl', 'bpl cricket'],
            answer: "🇧🇩 **Bangladesh Premier League (BPL)**\n\n**Overview:**\n- Started: 2012\n- Format: T20 franchise cricket\n- Teams: 7 franchises\n- Season: November-January\n\n**Teams:**\n- Comilla Victorians (4 titles) 👑\n- Dhaka Dynamites\n- Chittagong Vikings\n- Rangpur Riders\n- Sylhet Strikers\n- Khulna Tigers\n- Fortune Barishal\n\n**Features:**\n- Showcases Bangladesh talent\n- International players participate\n- Growing in popularity",
            relatedQuestions: ["IPL", "PSL", "Bangladesh cricket"]
        },

        psl: {
            patterns: ['psl', 'pakistan super league', 'what is psl', 'psl cricket'],
            answer: "🇵🇰 **Pakistan Super League (PSL)**\n\n**Overview:**\n- Started: 2016\n- Format: T20 franchise cricket\n- Teams: 6 franchises\n- Season: February-March\n\n**Teams:**\n- Islamabad United (3 titles) 👑\n- Lahore Qalandars (2 titles)\n- Karachi Kings\n- Multan Sultans\n- Peshawar Zalmi\n- Quetta Gladiators\n\n**Features:**\n- High quality cricket\n- Passionate Pakistani crowds\n- Platform for emerging talent",
            relatedQuestions: ["IPL", "BPL", "Pakistan cricket"]
        }
    },

    // Formats
    formats: {
        test: {
            patterns: ['test cricket', 'what is test', 'test match', 'test format'],
            answer: "🏏 **Test Cricket - The Ultimate Format**\n\n**Duration:** 5 days, 6 hours/day\n**Innings:** 2 per team\n**Overs:** Unlimited\n**Ball:** Red (white clothing)\n\n**Results:**\n- Win (team dismisses opposition twice + scores more)\n- Draw (time runs out)\n- Tie (rare - equal scores, both teams all out)\n\n**Special Features:**\n- Lunch, Tea breaks\n- New ball after 80 overs\n- Follow-on rule\n- Test Championship\n\n**Strategy:**\n- Endurance & mental strength\n- Pitch deteriorates over days\n- Weather plays huge role\n\nConsidered the **purest form** of cricket! 👑",
            relatedQuestions: ["ODI cricket", "T20 cricket", "Cricket formats"]
        },

        odi: {
            patterns: ['odi', 'one day', 'what is odi', 'odi cricket', 'one day international'],
            answer: "🌟 **ODI (One Day International)**\n\n**Format:**\n- 50 overs per side\n- Duration: ~8 hours\n- Colored clothing\n- White ball (2 balls used)\n\n**Rules:**\n- Powerplay: Overs 1-10 (2 fielders outside)\n- Middle overs: Max 4 outside\n- Death overs: Max 5 outside\n- 1 innings per team\n\n**Special Features:**\n- Free hits on no balls\n- DRS (1 review per innings)\n- Strategic timeouts (some series)\n\n**Major Events:**\n- Cricket World Cup (every 4 years)\n- Champions Trophy\n- Asia Cup\n\nPerfect balance between Test & T20! ⚖️",
            relatedQuestions: ["Test cricket", "T20 cricket", "World Cup"]
        },

        t20: {
            patterns: ['t20', 't20 cricket', 'what is t20', 't20 format', 'twenty20'],
            answer: "⚡ **T20 Cricket - Fast & Furious**\n\n**Format:**\n- 20 overs per side\n- Duration: ~3 hours\n- Colored clothing\n- White ball\n\n**Rules:**\n- Powerplay: Overs 1-6 (2 fielders outside)\n- Max 4 overs per bowler\n- Super Over for ties\n- Strategic timeout\n\n**Special Features:**\n- Fastest format\n- Entertainment-focused\n- High scoring\n- Big hits & innovative shots\n\n**Major Events:**\n- T20 World Cup\n- IPL (India)\n- BBL (Australia)\n- CPL (Caribbean)\n- PSL (Pakistan)\n- BPL (Bangladesh)\n\nMost popular format globally! 🔥",
            relatedQuestions: ["IPL", "T20 World Cup", "T20 records"]
        }
    },

    // Teams - GLOBAL COVERAGE
    teams: {
        bangladesh: {
            patterns: ['bangladesh', 'bangladesh team', 'team bangladesh', 'bangladesh cricket', 'tigers'],
            answer: "🇧🇩 **Bangladesh National Cricket Team**\n\n**Nickname:** Tigers 🐯\n\n**Achievements:**\n- Asia Cup Finalists (2012, 2016, 2018)\n- ICC Champions Trophy QF (2017)\n- Historic wins vs India, Pakistan, Australia\n- Test status since 2000\n\n**Current Stars:**\n- Shakib Al Hasan (All-rounder)\n- Mushfiqur Rahim (WK-Batsman)\n- Najmul Hossain Shanto (Captain)\n- Taskin Ahmed (Fast bowler)\n- Mehidy Hasan Miraz (Spinner)\n\n**Home Grounds:**\n- Shere Bangla Stadium (Mirpur)\n- Zahur Ahmed Chowdhury Stadium (Chittagong)\n- Sylhet International Cricket Stadium\n\nRising force in world cricket! 🌟",
            relatedQuestions: ["Shakib Al Hasan", "BPL", "Asia Cup"]
        },

        pakistan: {
            patterns: ['pakistan', 'pakistani team', 'team pakistan', 'pakistan cricket', 'green shirts'],
            answer: "🇵🇰 **Pakistan National Cricket Team**\n\n**Nickname:** Green Shirts / Shaheens 🦅\n\n**Achievements:**\n- 1️⃣ ODI World Cup (1992)\n- 1️⃣ T20 World Cup (2009)\n- 1️⃣ Champions Trophy (2017)\n- Unpredictable & exciting team\n\n**Current Stars:**\n- Babar Azam (Captain, Batsman)\n- Shaheen Afridi (Fast bowler)\n- Mohammad Rizwan (WK-Batsman)\n- Shadab Khan (All-rounder)\n- Haris Rauf (Fast bowler)\n\n**Home Grounds:**\n- National Stadium (Karachi)\n- Gaddafi Stadium (Lahore)\n- Rawalpindi Cricket Stadium\n\n**Legacy:**\n- Legendary fast bowlers\n- Exciting batting talent\n- Passionate cricket culture",
            relatedQuestions: ["Babar Azam", "PSL", "Pakistan legends"]
        },

        afghanistan: {
            patterns: ['afghanistan', 'afghan team', 'team afghanistan', 'afghanistan cricket', 'afghans'],
            answer: "🇦🇫 **Afghanistan National Cricket Team**\n\n**Rise to Glory:**\n- Test status: 2017\n- Fastest rise in cricket history\n- From refugee camps to World Cup\n\n**Achievements:**\n- Multiple wins vs top teams\n- T20 World Cup semi-finalists (potential)\n- Beat England, Sri Lanka, Bangladesh\n\n**Current Stars:**\n- Rashid Khan (Spin wizard)\n- Mohammad Nabi (All-rounder)\n- Rahmanullah Gurbaz (WK-Batsman)\n- Mujeeb Ur Rahman (Spinner)\n- Naveen-ul-Haq (Fast bowler)\n\n**Strengths:**\n- World's best spinners\n- Fearless batting\n- Inspirational story\n\nCricket's greatest underdog story! 🌟",
            relatedQuestions: ["Rashid Khan", "Afghan cricket rise", "Best spinners"]
        },

        india: {
            patterns: ['india', 'indian team', 'team india', 'india cricket', 'men in blue'],
            answer: "🇮🇳 **India National Cricket Team**\n\n**Achievements:**\n- 2️⃣ ODI World Cups (1983, 2011)\n- 2️⃣ T20 World Cups (2007, 2024)\n- 1️⃣ Champions Trophy (2013)\n- World Test Championship Finalists\n\n**Current Stars:**\n- Rohit Sharma (Captain)\n- Virat Kohli\n- Jasprit Bumrah\n- Hardik Pandya\n- Shubman Gill\n\n**Home Grounds:**\n- Wankhede Stadium (Mumbai)\n- Eden Gardens (Kolkata)\n- M. Chinnaswamy Stadium (Bangalore)\n\n**Legacy:**\n- Most passionate fan base\n- Producing legends since 1932\n- BCCI - richest cricket board",
            relatedQuestions: ["Indian legends", "BCCI", "IPL"]
        },

        australia: {
            patterns: ['australia', 'australian team', 'team australia', 'australia cricket', 'aussies'],
            answer: "🇦🇺 **Australia National Cricket Team**\n\n**Achievements:**\n- 6️⃣ ODI World Cups (Most)\n- 1️⃣ T20 World Cup (2021)\n- 2️⃣ Champions Trophies\n- World Test Champions (2023)\n\n**Current Stars:**\n- Pat Cummins (Captain)\n- Steve Smith\n- David Warner\n- Mitchell Starc\n- Travis Head\n\n**Legacy:**\n- Most dominant cricket team\n- Home of Don Bradman\n- Aggressive, competitive style\n\nCricket's most successful nation! 🏆",
            relatedQuestions: ["Don Bradman", "Australia cricket", "BBL"]
        },

        zimbabwe: {
            patterns: ['zimbabwe', 'zimbabwe team', 'team zimbabwe', 'zimbabwe cricket', 'zim cricket'],
            answer: "🇿🇼 **Zimbabwe National Cricket Team**\n\n**History:**\n- Test status: 1992-2005, 2011-present\n- Former powerhouse (1990s-2000s)\n- Rebuilding phase currently\n\n**Notable Players:**\n- Sikandar Raza (Current star)\n- Sean Williams (All-rounder)\n- Andy Flower (Legend)\n- Heath Streak (Legend)\n- Brendan Taylor (Legend)\n\n**Achievements:**\n- Beat Australia (1983 upset)\n- Multiple wins vs top teams\n- T20 World Cup qualifiers\n\nWorking towards former glory! 💪",
            relatedQuestions: ["Sikandar Raza", "African cricket", "Zimbabwe cricket history"]
        },

        southafrica: {
            patterns: ['south africa', 'south african team', 'team south africa', 'south africa cricket', 'proteas'],
            answer: "🇿🇦 **South Africa National Cricket Team**\n\n**Nickname:** Proteas 🌸\n\n**Achievements:**\n- Never won World Cup (chokers tag)\n- Consistently ranked in top 5\n- Excellent Test record\n\n**Current Stars:**\n- Temba Bavuma (Captain)\n- Quinton de Kock\n- Kagiso Rabada\n- Aiden Markram\n- Anrich Nortje\n\n**Legacy:**\n- Producing world-class players\n- Strong pace bowling tradition\n- AB de Villiers, Kallis legends\n\nStrong cricket nation! 🦁",
            relatedQuestions: ["AB de Villiers", "Best fast bowlers", "South Africa cricket"]
        }
    },

    // General Help
    help: {
        patterns: ['help', 'what can you do', 'how to use', 'commands', 'features'],
        answer: "🤖 **How I Can Help You:**\n\n**I can answer questions about:**\n\n📜 **Rules & Regulations:**\n- LBW, DRS, Powerplay, No Ball, Wide, Follow-on\n\n👥 **Players (Global):**\n- Shakib, Babar, Rashid, Virat, Smith, and more!\n\n📊 **Statistics & Records:**\n- Highest scores, most runs, fastest centuries\n\n🏆 **Tournaments:**\n- World Cup, T20 WC, IPL, BPL, PSL, Champions Trophy\n\n🏏 **Formats:**\n- Test, ODI, T20 differences\n\n🌍 **Teams:**\n- Bangladesh, Pakistan, Afghanistan, India, all nations\n\n**Just ask me anything! Examples:**\n- \"Explain LBW rule\"\n- \"Who is Shakib Al Hasan?\"\n- \"Tell me about BPL\"\n- \"2024 T20 World Cup winner\"\n- \"What is powerplay?\"",
        relatedQuestions: ["Cricket rules", "Cricket records", "Cricket players"]
    },

    // Default fallback
    fallback: {
        responses: [
            "I'm not sure about that specific question. Try asking about cricket rules, players from any nation, statistics, or tournaments!",
            "Hmm, I don't have information on that. Ask me about LBW, powerplay, famous players like Shakib or Babar, or cricket records!",
            "I couldn't find an answer to that. I know a lot about cricket rules, World Cup, IPL, BPL, PSL, and player stats from all nations. Try those!",
            "That's outside my knowledge base. I can help with cricket rules, records, players from Bangladesh to Australia, and tournament information!"
        ]
    }
};

// Quick responses for common intents
export const quickResponses = {
    thanks: {
        patterns: ['thank', 'thanks', 'thank you', 'thx', 'appreciate', 'dhonnobad', 'shukriya'],
        responses: [
            "You're welcome! Happy to help with cricket questions from around the world! 🏏",
            "Glad I could help! Ask me anything else about cricket!",
            "My pleasure! Feel free to ask more cricket questions! 😊",
            "Anytime! I'm here for all your cricket queries - from Bangladesh to Australia!"
        ]
    },

    bye: {
        patterns: ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit', 'khoda hafez', 'allah hafez'],
        responses: [
            "Goodbye! Come back anytime for cricket questions! 👋",
            "See you later! Keep loving cricket! 🏏",
            "Bye! May your team always win! 🏆",
            "Until next time! Happy cricket watching! 👋"
        ]
    }
};