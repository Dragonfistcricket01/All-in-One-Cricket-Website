/**
 * Cricket Knowledge Base for Rule-Based Chatbot
 * Contains FAQs, rules, player info, statistics, and more
 */

//export const cricketKnowledge = {
//    // Greetings
//    greetings: {
//        patterns: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon', 'greetings', 'namaste'],
//        responses: [
//            "Hello! 👋 I'm your cricket assistant. Ask me anything about cricket rules, players, statistics, or history!",
//            "Hi there! 🏏 Ready to talk cricket? What would you like to know?",
//            "Hey! Welcome to the cricket help desk. How can I assist you today?",
//            "Greetings! I'm here to answer all your cricket questions. Fire away! 🔥"
//        ]
//    },
//
//    // Rules and Regulations
//    rules: {
//        lbw: {
//            patterns: ['lbw', 'leg before wicket', 'what is lbw', 'lbw rule', 'explain lbw'],
//            answer: "🎯 **LBW (Leg Before Wicket)**: A batsman is out LBW if the ball hits their body (usually legs) instead of the bat, and the umpire believes the ball would have hit the stumps. Key conditions:\n\n1. Ball must pitch in line or outside off stump (not outside leg stump)\n2. Point of impact must be in line with stumps (unless no shot played)\n3. Ball trajectory must be hitting the stumps\n\nBatsmen can review LBW decisions using DRS (Decision Review System).",
//            relatedQuestions: ["What is DRS?", "How does ball tracking work?", "Can you be LBW off a no ball?"]
//        },
//
//        powerplay: {
//            patterns: ['powerplay', 'power play', 'what is powerplay', 'powerplay rules', 'powerplay overs'],
//            answer: "⚡ **Powerplay Rules**:\n\n**ODI Cricket:**\n- Overs 1-10: Mandatory powerplay (2 fielders outside 30-yard circle)\n- Overs 11-40: Max 4 fielders outside circle\n- Overs 41-50: Max 5 fielders outside circle\n\n**T20 Cricket:**\n- Overs 1-6: Powerplay (2 fielders outside circle)\n- Overs 7-20: Max 5 fielders outside circle\n\nDuring powerplay, only 2 fielders are allowed outside the 30-yard circle, creating more scoring opportunities!",
//            relatedQuestions: ["What is a free hit?", "What is death overs?", "What are fielding restrictions?"]
//        },
//
//        drs: {
//            patterns: ['drs', 'decision review system', 'what is drs', 'drs rules', 'review system'],
//            answer: "📹 **DRS (Decision Review System)**:\n\nTeams can challenge umpire decisions using technology:\n\n**Technologies Used:**\n- 🎥 Ball Tracking (Hawk-Eye) - predicts ball path\n- 🌡️ Hot Spot - thermal imaging for edges\n- 🔊 Ultra Edge (Snicko) - detects faint edges via sound\n\n**Review Rules:**\n- Each team gets 2 reviews per innings (Tests)\n- 1 review per innings in limited overs\n- Reviews lost if decision stands\n- Reviews retained if decision overturned\n- Must request within 15 seconds\n\nUmpire's Call: If less than 50% of ball hitting stumps, original decision stands.",
//            relatedQuestions: ["What is Hawk-Eye?", "What is Hot Spot?", "What is umpire's call?"]
//        },
//
//        noball: {
//            patterns: ['no ball', 'noball', 'what is no ball', 'no ball rules', 'types of no ball'],
//            answer: "🚫 **No Ball Rules**:\n\nA no ball is called when:\n\n1. **Front Foot No Ball**: Bowler's front foot lands beyond the crease\n2. **Back Foot No Ball**: Back foot touches or crosses return crease\n3. **Height No Ball**: Ball passes above waist height (full toss)\n4. **Bouncer**: More than 2 bouncers per over (above shoulder)\n5. **Fielding Restrictions**: Too many fielders outside circle\n\n**Penalty:**\n- 1 extra run to batting team\n- Ball must be re-bowled\n- Free hit in limited overs (batsman can't be out except run out)\n- Counts in bowler's figures",
//            relatedQuestions: ["What is a free hit?", "What is a wide ball?", "What is a dead ball?"]
//        },
//
//        wide: {
//            patterns: ['wide', 'wide ball', 'what is wide', 'wide rules'],
//            answer: "📏 **Wide Ball**:\n\nCalled when ball is too far from batsman to play a normal shot:\n\n**Wide Criteria:**\n- Passes outside off stump beyond batsman's reach\n- Down leg side (even slightly)\n- Above batsman's head when standing upright\n\n**Penalty:**\n- 1 extra run to batting team\n- Ball must be re-bowled\n- Doesn't count in bowler's over\n- No free hit (unlike no ball)\n\n**Note**: Not wide if batsman moves and misses! Umpire judges based on original batting position.",
//            relatedQuestions: ["What is no ball?", "What is leg bye?", "What is bye?"]
//        },
//
//        followon: {
//            patterns: ['follow on', 'follow-on', 'what is follow on', 'follow on rule'],
//            answer: "🔄 **Follow-On** (Test Cricket):\n\nWhen team batting first leads by:\n- **200+ runs (5-day Test)**: Can enforce follow-on\n- **150+ runs (3/4-day Test)**: Can enforce follow-on\n\nEnforcing team makes opposition bat again immediately, hoping to win without batting twice.\n\n**Strategy:**\n- Used when team wants to win quickly\n- Risky if bowlers are tired\n- Famous example: India vs Australia, Kolkata 2001 (India followed on but won!)",
//            relatedQuestions: ["What is Test cricket?", "What is declaration?", "What is innings?"]
//        }
//    },
//
//    // Players Information
//    players: {
//        sachin: {
//            patterns: ['sachin', 'sachin tendulkar', 'tell me about sachin', 'tendulkar', 'master blaster'],
//            answer: "🏏 **Sachin Tendulkar - The God of Cricket**\n\n**Career Stats:**\n- Tests: 15,921 runs, 51 centuries, Avg 53.78\n- ODIs: 18,426 runs, 49 centuries, Avg 44.83\n- First player to score 100 international centuries\n- Played 200 Tests, 463 ODIs (1989-2013)\n\n**Achievements:**\n- 2011 World Cup winner\n- Only player with 30,000+ international runs\n- Highest run-scorer in both Tests and ODIs\n- Youngest Indian debutant at 16\n- Bharat Ratna (India's highest civilian award)",
//            relatedQuestions: ["Who is Virat Kohli?", "Who has most runs in cricket?", "Who won 2011 World Cup?"]
//        },
//
//        virat: {
//            patterns: ['virat', 'virat kohli', 'kohli', 'tell me about virat', 'king kohli'],
//            answer: "👑 **Virat Kohli - King Kohli**\n\n**Career Stats:**\n- Tests: 8,000+ runs, 29 centuries\n- ODIs: 13,000+ runs, 46 centuries\n- T20Is: 4,000+ runs\n- Known for incredible chasing ability\n\n**Achievements:**\n- Fastest to 8,000, 9,000, 10,000, 11,000, 12,000 ODI runs\n- 70+ international centuries\n- Former Indian captain (2017-2022)\n- ICC ODI Player of the Decade (2010-2020)\n- Exceptional fielder and fitness icon\n- Average 50+ in all formats",
//            relatedQuestions: ["Who is Sachin Tendulkar?", "Who is AB de Villiers?", "Who is Rohit Sharma?"]
//        },
//
//        dhoni: {
//            patterns: ['dhoni', 'ms dhoni', 'mahendra singh dhoni', 'captain cool', 'tell me about dhoni'],
//            answer: "🧘 **MS Dhoni - Captain Cool**\n\n**Career Highlights:**\n- ODIs: 10,773 runs, Avg 50.57\n- T20Is: 1,617 runs\n- Tests: 4,876 runs\n- Most successful Indian captain\n\n**Achievements:**\n- Only captain to win all 3 ICC trophies:\n  - 2007 T20 World Cup\n  - 2011 ODI World Cup\n  - 2013 Champions Trophy\n- World's best finisher\n- Lightning-fast wicketkeeper\n- 195 ODI matches as captain (won 110)\n- Famous for calm demeanor under pressure\n- Helicopter shot innovator 🚁",
//            relatedQuestions: ["Who won 2011 World Cup?", "Who is best captain?", "Who is best finisher?"]
//        },
//
//        bradman: {
//            patterns: ['bradman', 'don bradman', 'donald bradman', 'tell me about bradman'],
//            answer: "🐐 **Sir Donald Bradman - The Greatest**\n\n**Unmatched Stats:**\n- Test Average: **99.94** (no one else above 61!)\n- 6,996 runs in 52 Tests\n- 29 centuries in 80 innings\n- Needed just 4 runs in final innings for 100 avg\n\n**Why He's the GOAT:**\n- Statistically the greatest sportsperson ever\n- Average of 99.94 is considered impossible\n- Dominated in the 1930s-40s\n- Australian cricket legend\n- Knighted in 1949\n\n*\"Bradman is to cricket what Shakespeare is to literature\" - Famous quote*",
//            relatedQuestions: ["Who has highest Test average?", "Who is the best batsman?", "Australian cricket legends"]
//        }
//    },
//
//    // Statistics and Records
//    records: {
//        highestScore: {
//            patterns: ['highest score', 'highest individual score', 'most runs in innings', 'highest runs', 'record score'],
//            answer: "📊 **Highest Individual Scores:**\n\n**Test Cricket:**\n🥇 Brian Lara - **400*** vs England (2004)\n🥈 Matthew Hayden - 380 vs Zimbabwe (2003)\n🥉 Brian Lara - 375 vs England (1994)\n\n**ODI Cricket:**\n🥇 Rohit Sharma - **264** vs Sri Lanka (2014)\n🥈 Martin Guptill - 237* vs West Indies (2015)\n🥉 Virender Sehwag - 219 vs West Indies (2011)\n\n**T20I Cricket:**\n🥇 Aaron Finch - **172** vs Zimbabwe (2018)\n🥈 Glenn Maxwell - 145* vs Sri Lanka (2016)\n🥉 Rohit Sharma - 118 vs Sri Lanka (2017)",
//            relatedQuestions: ["Who has most centuries?", "Who has most runs?", "Highest team score"]
//        },
//
//        mostRuns: {
//            patterns: ['most runs', 'highest run scorer', 'who has most runs', 'run records', 'top run scorer'],
//            answer: "🏆 **All-Time Leading Run Scorers:**\n\n**Test Cricket:**\n1. Sachin Tendulkar - 15,921 runs\n2. Ricky Ponting - 13,378 runs\n3. Jacques Kallis - 13,289 runs\n4. Rahul Dravid - 13,288 runs\n5. Kumar Sangakkara - 12,400 runs\n\n**ODI Cricket:**\n1. Sachin Tendulkar - 18,426 runs\n2. Kumar Sangakkara - 14,234 runs\n3. Ricky Ponting - 13,704 runs\n4. Virat Kohli - 13,000+ runs*\n5. Mahela Jayawardene - 12,650 runs\n\n**T20I Cricket:**\n1. Virat Kohli - 4,000+ runs*\n2. Rohit Sharma - 3,900+ runs*\n3. Babar Azam - 3,800+ runs*\n\n*Still active",
//            relatedQuestions: ["Most centuries", "Highest average", "Fastest to 10000 runs"]
//        },
//
//        mostWickets: {
//            patterns: ['most wickets', 'highest wicket taker', 'who has most wickets', 'wicket records', 'top bowler'],
//            answer: "🎯 **All-Time Leading Wicket Takers:**\n\n**Test Cricket:**\n1. Muttiah Muralitharan - **800 wickets**\n2. Shane Warne - 708 wickets\n3. James Anderson - 690+ wickets\n4. Anil Kumble - 619 wickets\n5. Stuart Broad - 600+ wickets\n\n**ODI Cricket:**\n1. Muttiah Muralitharan - **534 wickets**\n2. Wasim Akram - 502 wickets\n3. Waqar Younis - 416 wickets\n4. Chaminda Vaas - 400 wickets\n5. Shahid Afridi - 395 wickets\n\n**T20I Cricket:**\n1. Tim Southee - 150+ wickets*\n2. Shakib Al Hasan - 140+ wickets*\n3. Rashid Khan - 140+ wickets*\n\n*Still active",
//            relatedQuestions: ["Best bowler", "Most economical bowler", "Fastest to 100 wickets"]
//        },
//
//        fastest100: {
//            patterns: ['fastest 100', 'fastest century', 'quickest 100', 'fastest hundred', 'century record'],
//            answer: "⚡ **Fastest Centuries:**\n\n**ODI Cricket:**\n1. AB de Villiers - **31 balls** vs West Indies (2015)\n2. Corey Anderson - 36 balls vs West Indies (2014)\n3. Shahid Afridi - 37 balls vs Sri Lanka (1996)\n\n**T20I Cricket:**\n1. David Miller - **35 balls** vs Bangladesh (2017)\n2. Rohit Sharma - 35 balls vs Sri Lanka (2017)\n3. Various players - 40-42 balls\n\n**Test Cricket:**\n1. Ben Stokes - **85 balls** vs South Africa (2016)\n2. Brendon McCullum - 54 balls vs Australia (2016) - but in a single session\n3. Misbah-ul-Haq - 56 balls vs Australia (2014)\n\nAB de Villiers' 31-ball century is considered one of the greatest ODI innings ever! 🔥",
//            relatedQuestions: ["Who is AB de Villiers?", "Fastest 50", "Highest strike rate"]
//        }
//    },
//
//    // World Cup
//    worldCup: {
//        winners: {
//            patterns: ['world cup winners', 'who won world cup', 'world cup history', 'cricket world cup', 'wc winners'],
//            answer: "🏆 **Cricket World Cup Winners:**\n\n**ODI World Cup:**\n- 2023: 🇦🇺 Australia (6th title)\n- 2019: 🇬🇧 England (1st title)\n- 2015: 🇦🇺 Australia (5th title)\n- 2011: 🇮🇳 India (2nd title)\n- 2007: 🇦🇺 Australia (4th title)\n- 2003: 🇦🇺 Australia (3rd title)\n- 1999: 🇦🇺 Australia (2nd title)\n- 1996: 🇱🇰 Sri Lanka (1st title)\n- 1992: 🇵🇰 Pakistan (1st title)\n- 1987: 🇦🇺 Australia (1st title)\n- 1983: 🇮🇳 India (1st title)\n- 1979: 🇼🇮 West Indies (2nd title)\n- 1975: 🇼🇮 West Indies (1st title)\n\n**Most Titles:** Australia (6) 🐐",
//            relatedQuestions: ["T20 World Cup winners", "2011 World Cup final", "2023 World Cup"]
//        },
//
//        t20worldcup: {
//            patterns: ['t20 world cup', 't20 wc', 't20 winners', 't20 world cup winners'],
//            answer: "🏆 **T20 World Cup Winners:**\n\n- 2024: 🇮🇳 India (2nd title)\n- 2022: 🇬🇧 England (2nd title)\n- 2021: 🇦🇺 Australia (1st title)\n- 2016: 🇼🇮 West Indies (2nd title)\n- 2014: 🇱🇰 Sri Lanka (1st title)\n- 2012: 🇼🇮 West Indies (1st title)\n- 2010: 🇬🇧 England (1st title)\n- 2009: 🇵🇰 Pakistan (1st title)\n- 2007: 🇮🇳 India (1st title)\n\n**Most Titles:** West Indies & England (2 each)\n\nIndia's 2024 win ended their ICC trophy drought! 🎉",
//            relatedQuestions: ["2024 T20 World Cup", "IPL", "T20 cricket"]
//        }
//    },
//
//    // IPL
//    ipl: {
//        about: {
//            patterns: ['ipl', 'indian premier league', 'what is ipl', 'ipl information', 'about ipl'],
//            answer: "🎪 **Indian Premier League (IPL)**\n\n**Overview:**\n- Started: 2008\n- Format: T20 franchise cricket\n- Teams: 10 franchises\n- Duration: ~2 months (March-May)\n- Most Valuable cricket league globally\n\n**Teams:**\n1. Mumbai Indians (5 titles) 👑\n2. Chennai Super Kings (5 titles) 👑\n3. Kolkata Knight Riders (3 titles)\n4. Rajasthan Royals\n5. Royal Challengers Bangalore\n6. Sunrisers Hyderabad\n7. Delhi Capitals\n8. Punjab Kings\n9. Gujarat Titans (2022 winners)\n10. Lucknow Super Giants\n\n**Highlights:**\n- Richest cricket league\n- Platform for young talent\n- Mix of Indian & international stars\n- Auctions create excitement",
//            relatedQuestions: ["IPL winners", "Most runs in IPL", "IPL records"]
//        }
//    },
//
//    // Formats
//    formats: {
//        test: {
//            patterns: ['test cricket', 'what is test', 'test match', 'test format'],
//            answer: "🏏 **Test Cricket - The Ultimate Format**\n\n**Duration:** 5 days, 6 hours/day\n**Innings:** 2 per team\n**Overs:** Unlimited\n**Ball:** Red (white clothing)\n\n**Results:**\n- Win (team dismisses opposition twice + scores more)\n- Draw (time runs out)\n- Tie (rare - equal scores, both teams all out)\n\n**Special Features:**\n- Lunch, Tea breaks\n- New ball after 80 overs\n- Follow-on rule\n- Test Championship\n\n**Strategy:**\n- Endurance & mental strength\n- Pitch deteriorates over days\n- Weather plays huge role\n\nConsidered the **purest form** of cricket! 👑",
//            relatedQuestions: ["ODI cricket", "T20 cricket", "Cricket formats"]
//        },
//
//        odi: {
//            patterns: ['odi', 'one day', 'what is odi', 'odi cricket', 'one day international'],
//            answer: "🌟 **ODI (One Day International)**\n\n**Format:**\n- 50 overs per side\n- Duration: ~8 hours\n- Colored clothing\n- White ball (2 balls used)\n\n**Rules:**\n- Powerplay: Overs 1-10 (2 fielders outside)\n- Middle overs: Max 4 outside\n- Death overs: Max 5 outside\n- 1 innings per team\n\n**Special Features:**\n- Free hits on no balls\n- DRS (1 review per innings)\n- Strategic timeouts (some series)\n\n**Major Events:**\n- Cricket World Cup (every 4 years)\n- Champions Trophy\n- Asia Cup\n\nPerfect balance between Test & T20! ⚖️",
//            relatedQuestions: ["Test cricket", "T20 cricket", "World Cup"]
//        },
//
//        t20: {
//            patterns: ['t20', 't20 cricket', 'what is t20', 't20 format', 'twenty20'],
//            answer: "⚡ **T20 Cricket - Fast & Furious**\n\n**Format:**\n- 20 overs per side\n- Duration: ~3 hours\n- Colored clothing\n- White ball\n\n**Rules:**\n- Powerplay: Overs 1-6 (2 fielders outside)\n- Max 4 overs per bowler\n- Super Over for ties\n- Strategic timeout\n\n**Special Features:**\n- Fastest format\n- Entertainment-focused\n- High scoring\n- Big hits & innovative shots\n\n**Major Events:**\n- T20 World Cup\n- IPL (India)\n- BBL (Australia)\n- CPL (Caribbean)\n- PSL (Pakistan)\n\nMost popular format globally! 🔥",
//            relatedQuestions: ["IPL", "T20 World Cup", "T20 records"]
//        }
//    },
//
//    // Teams
//    teams: {
//        india: {
//            patterns: ['india', 'indian team', 'team india', 'india cricket', 'indian cricket team'],
//            answer: "🇮🇳 **India National Cricket Team**\n\n**Achievements:**\n- 2️⃣ ODI World Cups (1983, 2011)\n- 2️⃣ T20 World Cups (2007, 2024)\n- 1️⃣ Champions Trophy (2013)\n- World Test Championship Finalists\n\n**Current Stars:**\n- Rohit Sharma (Captain)\n- Virat Kohli\n- Jasprit Bumrah\n- Hardik Pandya\n- Shubman Gill\n\n**Home Grounds:**\n- Wankhede Stadium (Mumbai)\n- Eden Gardens (Kolkata)\n- M. Chinnaswamy Stadium (Bangalore)\n\n**Legacy:**\n- Most passionate fan base\n- Producing legends since 1932\n- BCCI - richest cricket board",
//            relatedQuestions: ["Indian legends", "BCCI", "IPL"]
//        }
//    },
//
//    // General Help
//    help: {
//        patterns: ['help', 'what can you do', 'how to use', 'commands', 'features'],
//        answer: "🤖 **How I Can Help You:**\n\n**I can answer questions about:**\n\n📜 **Rules & Regulations:**\n- LBW, DRS, Powerplay, No Ball, Wide, Follow-on\n\n👥 **Players:**\n- Sachin, Virat, Dhoni, Bradman, and more\n\n📊 **Statistics & Records:**\n- Highest scores, most runs, fastest centuries\n\n🏆 **Tournaments:**\n- World Cup, T20 WC, IPL, Champions Trophy\n\n🏏 **Formats:**\n- Test, ODI, T20 differences\n\n🌍 **Teams:**\n- National teams info\n\n**Just ask me anything! Examples:**\n- \"Explain LBW rule\"\n- \"Who has most runs?\"\n- \"Tell me about Sachin\"\n- \"2011 World Cup winner\"\n- \"What is powerplay?\"",
//        relatedQuestions: ["Cricket rules", "Cricket records", "Cricket players"]
//    },
//
//    // Default fallback
//    fallback: {
//        responses: [
//            "I'm not sure about that specific question. Try asking about cricket rules, players, statistics, or tournaments!",
//            "Hmm, I don't have information on that. Ask me about LBW, powerplay, famous players, or cricket records!",
//            "I couldn't find an answer to that. I know a lot about cricket rules, World Cup, IPL, and player stats. Try those!",
//            "That's outside my knowledge base. I can help with cricket rules, records, players, and tournament information!"
//        ]
//    }
//};
//
//// Quick responses for common intents
//export const quickResponses = {
//    thanks: {
//        patterns: ['thank', 'thanks', 'thank you', 'thx', 'appreciate'],
//        responses: [
//            "You're welcome! Happy to help with cricket questions! 🏏",
//            "Glad I could help! Ask me anything else about cricket!",
//            "My pleasure! Feel free to ask more cricket questions! 😊",
//            "Anytime! I'm here for all your cricket queries!"
//        ]
//    },
//
//    bye: {
//        patterns: ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit'],
//        responses: [
//            "Goodbye! Come back anytime for cricket questions! 👋",
//            "See you later! Keep loving cricket! 🏏",
//            "Bye! May your team always win! 🏆",
//            "Until next time! Happy cricket watching! 👋"
//        ]
//    }
//};


/**
 * Chatbot Matcher Utility
 * Helper functions for rule-based chatbot pattern matching
 */

import { cricketKnowledge, quickResponses } from '../data/cricketKnowledge';

/**
 * Get starter questions from knowledge base
 */
export const getStarterQuestions = () => {
    const questions = [];

    // Collect questions from rules
    Object.values(cricketKnowledge.rules).forEach(rule => {
        if (rule.relatedQuestions) {
            questions.push(...rule.relatedQuestions);
        }
    });

    // Collect from records
    Object.values(cricketKnowledge.records).forEach(record => {
        if (record.relatedQuestions) {
            questions.push(...record.relatedQuestions);
        }
    });

    // Add some default questions
    const defaultQuestions = [
        "What is LBW?",
        "Explain powerplay rules",
        "Who won 2011 World Cup?",
        "Tell me about Sachin Tendulkar",
        "What is DRS?",
        "Highest individual score in ODI?",
        "What is IPL?",
        "Test cricket vs ODI"
    ];

    return [...new Set([...questions, ...defaultQuestions])].slice(0, 12);
};

/**
 * Find best matching response for user query
 */
export const findBestMatch = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    // Check greetings
    if (matchesPattern(message, cricketKnowledge.greetings.patterns)) {
        return {
            type: 'greeting',
            answer: getRandomResponse(cricketKnowledge.greetings.responses),
            relatedQuestions: getStarterQuestions().slice(0, 4)
        };
    }

    // Check quick responses (thanks, bye)
    for (const [key, value] of Object.entries(quickResponses)) {
        if (matchesPattern(message, value.patterns)) {
            return {
                type: 'quick',
                answer: getRandomResponse(value.responses),
                relatedQuestions: []
            };
        }
    }

    // Check help
    if (matchesPattern(message, cricketKnowledge.help.patterns)) {
        return {
            type: 'help',
            answer: cricketKnowledge.help.answer,
            relatedQuestions: cricketKnowledge.help.relatedQuestions || []
        };
    }

    // Search in all categories
    const categories = [
        { name: 'rules', data: cricketKnowledge.rules },
        { name: 'players', data: cricketKnowledge.players },
        { name: 'records', data: cricketKnowledge.records },
        { name: 'worldCup', data: cricketKnowledge.worldCup },
        { name: 'ipl', data: cricketKnowledge.ipl },
        { name: 'formats', data: cricketKnowledge.formats },
        { name: 'teams', data: cricketKnowledge.teams }
    ];

    for (const category of categories) {
        for (const [key, item] of Object.entries(category.data)) {
            if (item.patterns && matchesPattern(message, item.patterns)) {
                return {
                    type: category.name,
                    answer: item.answer,
                    relatedQuestions: item.relatedQuestions || []
                };
            }
        }
    }

    // No match found - return fallback
    return {
        type: 'fallback',
        answer: getRandomResponse(cricketKnowledge.fallback.responses),
        relatedQuestions: getStarterQuestions().slice(0, 4)
    };
};

/**
 * Check if message matches any pattern
 */
const matchesPattern = (message, patterns) => {
    return patterns.some(pattern => {
        const regex = new RegExp(`\\b${pattern}\\b`, 'i');
        return regex.test(message);
    });
};

/**
 * Get random response from array
 */
const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
};

/**
 * Get random cricket fact
 */
export const getRandomFact = () => {
    const facts = [
        "🏏 The fastest ball ever bowled was 161.3 km/h (100.2 mph) by Shoaib Akhtar!",
        "🎯 Brian Lara holds the record for highest Test score: 400 not out!",
        "⚡ AB de Villiers scored the fastest ODI century in just 31 balls!",
        "🏆 Australia has won the most Cricket World Cups (6 titles)!",
        "👑 Don Bradman's Test average of 99.94 is considered the greatest achievement in any sport!",
        "🌟 Sachin Tendulkar is the only player to score 100 international centuries!",
        "🎪 The IPL is the richest cricket league in the world!",
        "🏏 Cricket was played at the Olympics only once, in 1900!",
        "⏱️ The shortest completed Test match lasted only 2 days!",
        "🎯 Muttiah Muralitharan has the most Test wickets ever: 800!",
        "💪 MS Dhoni is the only captain to win all three ICC trophies!",
        "🔥 Chris Gayle has hit the most sixes in international cricket!",
        "📊 Virat Kohli was the fastest to reach 12,000 ODI runs!",
        "🏟️ The MCG in Melbourne is the largest cricket stadium (capacity: 100,000)!",
        "⚡ T20 cricket was invented in 2003 to attract younger audiences!"
    ];

    return facts[Math.floor(Math.random() * facts.length)];
};

/**
 * Extract keywords from user message
 */
export const extractKeywords = (message) => {
    const stopWords = ['what', 'is', 'the', 'a', 'an', 'tell', 'me', 'about', 'how', 'when', 'where', 'who', 'why'];
    const words = message.toLowerCase().split(/\s+/);
    return words.filter(word => !stopWords.includes(word) && word.length > 2);
};

/**
 * Calculate similarity score between two strings
 */
export const calculateSimilarity = (str1, str2) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
};

/**
 * Levenshtein distance algorithm
 */
const levenshteinDistance = (str1, str2) => {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
};