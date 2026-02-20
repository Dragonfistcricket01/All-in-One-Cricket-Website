// Import player profile images
import vk18 from '../assets/player_profile/vk18.png';
import ss49 from '../assets/player_profile/ss49.png';
import kw22 from '../assets/player_profile/kw22.png';
import ba56 from '../assets/player_profile/ba56.png';
import jr03 from '../assets/player_profile/jr03.png';
import rs45 from '../assets/player_profile/rs45.png';
import sah75 from '../assets/player_profile/sah75.png';
import ssa40 from '../assets/player_profile/ssa40.png';
import mdr16 from '../assets/player_profile/mdr16.png';
import mdn7 from '../assets/player_profile/mdn7.png';
import dm75 from '../assets/player_profile/dm75.png';
import gm32 from '../assets/player_profile/gm32.png';
import yj63 from '../assets/player_profile/yj63.png';
import pc30 from '../assets/player_profile/pc30.png';
import rk19 from '../assets/player_profile/rk19.png';
import ml33 from '../assets/player_profile/ml33.png';
import ra99 from '../assets/player_profile/ra99.png';
import jh38 from '../assets/player_profile/jh38.png';
import az88 from '../assets/player_profile/az88.png';
import af5 from '../assets/player_profile/af5.png';
import ar95 from '../assets/player_profile/ar95.png';
import fz39 from '../assets/player_profile/fz39.png';
import hr97 from '../assets/player_profile/hr97.png';
import ms73 from '../assets/player_profile/ms73.png';
import sg77 from '../assets/player_profile/sg77.png';
import kr25 from '../assets/player_profile/kr25.png';
import ky23 from '../assets/player_profile/ky23.png';
import sky63 from '../assets/player_profile/sky63.png';
import ps61 from '../assets/player_profile/ps61.png';
import mm8 from '../assets/player_profile/mm8.png';
import hp33 from '../assets/player_profile/hp33.png';
import ms17 from '../assets/player_profile/ms17.png';
import wh49 from '../assets/player_profile/wh49.png';
import th62 from '../assets/player_profile/th62.png';
import tb18 from '../assets/player_profile/tb18.png';
import rj8 from '../assets/player_profile/rj8.png';
import qdk12 from '../assets/player_profile/qdk12.png';
import jb63 from '../assets/player_profile/jb63.png';
import ja09 from '../assets/player_profile/ja09.png';
import bs55 from '../assets/player_profile/bs55.png';
import hb88 from '../assets/player_profile/hb88.png';
import an20 from '../assets/player_profile/an20.png';
import jb93 from '../assets/player_profile/jb93.png';
import dw31 from '../assets/player_profile/dw31.png';
import ms56 from '../assets/player_profile/ms56.png';
import nl67 from '../assets/player_profile/nl67.png';

// Import flag images
import indFlag from '../assets/flag/ind.png';
import ausFlag from '../assets/flag/aus.png';
import nzFlag from '../assets/flag/nz.png';
import pakFlag from '../assets/flag/pak.png';
import engFlag from '../assets/flag/eng.png';
import banFlag from '../assets/flag/ban.png';
import afgFlag from '../assets/flag/afg.png';
import saFlag from '../assets/flag/sa.png';
import slFlag from '../assets/flag/sl.png';


const mockRankings = {
    "testBatsmen": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Joe Root",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 899,
            "previousRating": 895,
            "image": jr03
        },
        {
            "rank": 2,
            "previousRank": 3,
            "player": "Kane Williamson",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "rating": 883,
            "previousRating": 870,
            "image": kw22
        },
        {
            "rank": 3,
            "previousRank": 2,
            "player": "Steve Smith",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 874,
            "previousRating": 876,
            "image": ss49
        },
        {
            "rank": 4,
            "previousRank": 4,
            "player": "Virat Kohli",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 857,
            "previousRating": 858,
            "image": vk18
        },
        {
            "rank": 5,
            "previousRank": 6,
            "player": "Babar Azam",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 845,
            "previousRating": 832,
            "image": ba56
        },
        {
            "rank": 6,
            "previousRank": 5,
            "player": "Rohit Sharma",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 839,
            "previousRating": 841,
            "image": rs45
        },
        {
            "rank": 7,
            "previousRank": 7,
            "player": "Marnus Labuschagne",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 825,
            "previousRating": 823,
            "image": ml33
        },
        {
            "rank": 8,
            "previousRank": 9,
            "player": "Daryl Mitchell",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "rating": 812,
            "previousRating": 798,
            "image": dm75
        },
        {
            "rank": 9,
            "previousRank": 8,
            "player": "Yashasvi Jaiswal",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 807,
            "previousRating": 809,
            "image": yj63
        },
        {
            "rank": 10,
            "previousRank": 10,
            "player": "Harry Brook",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 795,
            "previousRating": 794,
            "image": hb88
        }
    ],
    "testBowlers": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Jasprit Bumrah",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 892,
            "previousRating": 890,
            "image": jb93
        },
        {
            "rank": 2,
            "previousRank": 3,
            "player": "Pat Cummins",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 871,
            "previousRating": 858,
            "image": pc30
        },
        {
            "rank": 3,
            "previousRank": 2,
            "player": "Ravichandran Ashwin",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 865,
            "previousRating": 867,
            "image": ra99
        },
        {
            "rank": 4,
            "previousRank": 4,
            "player": "Josh Hazlewood",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 854,
            "previousRating": 853,
            "image": jh38
        },
        {
            "rank": 5,
            "previousRank": 6,
            "player": "Kagiso Rabada",
            "country": "South Africa",
            "flag": saFlag,
            "flagEmoji": "🇿🇦",
            "rating": 843,
            "previousRating": 831,
            "image": kr25
        },
        {
            "rank": 6,
            "previousRank": 5,
            "player": "James Anderson",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 837,
            "previousRating": 839,
            "image": ja09
        },
        {
            "rank": 7,
            "previousRank": 7,
            "player": "Nathan Lyon",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 828,
            "previousRating": 827,
            "image": nl67
        },
        {
            "rank": 8,
            "previousRank": 9,
            "player": "Mohammed Siraj",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 815,
            "previousRating": 803,
            "image": ms73
        },
        {
            "rank": 9,
            "previousRank": 8,
            "player": "Mitchell Starc",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 809,
            "previousRating": 811,
            "image": ms56
        },
        {
            "rank": 10,
            "previousRank": 10,
            "player": "Ravindra Jadeja",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 798,
            "previousRating": 797,
            "image": rj8
        }
    ],
    "testAllRounders": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Ravindra Jadeja",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 425,
            "previousRating": 423,
            "image": rj8
        },
        {
            "rank": 2,
            "previousRank": 2,
            "player": "Ravichandran Ashwin",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 401,
            "previousRating": 400,
            "image": ra99
        },
        {
            "rank": 3,
            "previousRank": 4,
            "player": "Ben Stokes",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 387,
            "previousRating": 374,
            "image": bs55
        },
        {
            "rank": 4,
            "previousRank": 3,
            "player": "Mitchell Marsh",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 378,
            "previousRating": 381,
            "image": mm8
        },
        {
            "rank": 5,
            "previousRank": 5,
            "player": "Shakib Al Hasan",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "rating": 365,
            "previousRating": 364,
            "image": sah75
        }
    ],
    "odiBatsmen": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Babar Azam",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 887,
            "previousRating": 885,
            "image": ba56
        },
        {
            "rank": 2,
            "previousRank": 2,
            "player": "Virat Kohli",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 875,
            "previousRating": 873,
            "image": vk18
        },
        {
            "rank": 3,
            "previousRank": 4,
            "player": "Rohit Sharma",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 862,
            "previousRating": 848,
            "image": rs45
        },
        {
            "rank": 4,
            "previousRank": 3,
            "player": "Shubman Gill",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 856,
            "previousRating": 859,
            "image": sg77
        },
        {
            "rank": 5,
            "previousRank": 5,
            "player": "Kane Williamson",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "rating": 843,
            "previousRating": 842,
            "image": kw22
        },
        {
            "rank": 6,
            "previousRank": 7,
            "player": "David Warner",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 831,
            "previousRating": 819,
            "image": dw31
        },
        {
            "rank": 7,
            "previousRank": 6,
            "player": "Quinton de Kock",
            "country": "South Africa",
            "flag": saFlag,
            "flagEmoji": "🇿🇦",
            "rating": 824,
            "previousRating": 827,
            "image": qdk12
        },
        {
            "rank": 8,
            "previousRank": 8,
            "player": "Joe Root",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 812,
            "previousRating": 811,
            "image": jr03
        },
        {
            "rank": 9,
            "previousRank": 10,
            "player": "Daryl Mitchell",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "rating": 805,
            "previousRating": 792,
            "image": dm75
        },
        {
            "rank": 10,
            "previousRank": 9,
            "player": "Fakhar Zaman",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 798,
            "previousRating": 801,
            "image": fz39
        }
    ],
    "odiBowlers": [
        {
            "rank": 1,
            "previousRank": 2,
            "player": "Jasprit Bumrah",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 726,
            "previousRating": 712,
            "image": jb93
        },
        {
            "rank": 2,
            "previousRank": 1,
            "player": "Mohammed Siraj",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 718,
            "previousRating": 720,
            "image": ms73
        },
        {
            "rank": 3,
            "previousRank": 3,
            "player": "Rashid Khan",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "rating": 709,
            "previousRating": 707,
            "image": rk19
        },
        {
            "rank": 4,
            "previousRank": 5,
            "player": "Trent Boult",
            "country": "New Zealand",
            "flag": nzFlag,
            "flagEmoji": "🇳🇿",
            "rating": 695,
            "previousRating": 681,
            "image": tb18
        },
        {
            "rank": 5,
            "previousRank": 4,
            "player": "Josh Hazlewood",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 688,
            "previousRating": 690,
            "image": jh38
        },
        {
            "rank": 6,
            "previousRank": 6,
            "player": "Shaheen Afridi",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 679,
            "previousRating": 677,
            "image": ssa40
        },
        {
            "rank": 7,
            "previousRank": 8,
            "player": "Mitchell Starc",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 665,
            "previousRating": 653,
            "image": ms56
        },
        {
            "rank": 8,
            "previousRank": 7,
            "player": "Kuldeep Yadav",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 658,
            "previousRating": 661,
            "image": ky23
        },
        {
            "rank": 9,
            "previousRank": 9,
            "player": "Adam Zampa",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 645,
            "previousRating": 644,
            "image": az88
        },
        {
            "rank": 10,
            "previousRank": 11,
            "player": "Kagiso Rabada",
            "country": "South Africa",
            "flag": saFlag,
            "flagEmoji": "🇿🇦",
            "rating": 637,
            "previousRating": 625,
            "image": kr25
        }
    ],
    "odiAllRounders": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Shakib Al Hasan",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "rating": 365,
            "previousRating": 363,
            "image": sah75
        },
        {
            "rank": 2,
            "previousRank": 3,
            "player": "Glenn Maxwell",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 321,
            "previousRating": 308,
            "image": gm32
        },
        {
            "rank": 3,
            "previousRank": 2,
            "player": "Mohammad Nabi",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "rating": 314,
            "previousRating": 318,
            "image": mdn7
        },
        {
            "rank": 4,
            "previousRank": 4,
            "player": "Hardik Pandya",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 298,
            "previousRating": 297,
            "image": hp33
        },
        {
            "rank": 5,
            "previousRank": 5,
            "player": "Mitchell Marsh",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 285,
            "previousRating": 284,
            "image": mm8
        }
    ],
    "t20iBatsmen": [
        {
            "rank": 1,
            "previousRank": 2,
            "player": "Suryakumar Yadav",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 851,
            "previousRating": 838,
            "image": sky63
        },
        {
            "rank": 2,
            "previousRank": 1,
            "player": "Mohammad Rizwan",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 845,
            "previousRating": 847,
            "image": mdr16
        },
        {
            "rank": 3,
            "previousRank": 3,
            "player": "Babar Azam",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 832,
            "previousRating": 831,
            "image": ba56
        },
        {
            "rank": 4,
            "previousRank": 5,
            "player": "Travis Head",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 818,
            "previousRating": 804,
            "image": th62
        },
        {
            "rank": 5,
            "previousRank": 4,
            "player": "Phil Salt",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 812,
            "previousRating": 815,
            "image": ps61
        },
        {
            "rank": 6,
            "previousRank": 6,
            "player": "Yashasvi Jaiswal",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 799,
            "previousRating": 798,
            "image": yj63
        },
        {
            "rank": 7,
            "previousRank": 8,
            "player": "Jos Buttler",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 785,
            "previousRating": 772,
            "image": jb63
        },
        {
            "rank": 8,
            "previousRank": 7,
            "player": "Glenn Maxwell",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 778,
            "previousRating": 781,
            "image": gm32
        },
        {
            "rank": 9,
            "previousRank": 9,
            "player": "Aaron Finch",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 765,
            "previousRating": 764,
            "image": af5
        },
        {
            "rank": 10,
            "previousRank": 11,
            "player": "Rohit Sharma",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 758,
            "previousRating": 745,
            "image": rs45
        }
    ],
    "t20iBowlers": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Rashid Khan",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "rating": 792,
            "previousRating": 790,
            "image": rk19
        },
        {
            "rank": 2,
            "previousRank": 3,
            "player": "Adil Rashid",
            "country": "England",
            "flag": engFlag,
            "flagEmoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "rating": 765,
            "previousRating": 752,
            "image": ar95
        },
        {
            "rank": 3,
            "previousRank": 2,
            "player": "Wanindu Hasaranga",
            "country": "Sri Lanka",
            "flag": slFlag,
            "flagEmoji": "🇱🇰",
            "rating": 758,
            "previousRating": 761,
            "image": wh49
        },
        {
            "rank": 4,
            "previousRank": 4,
            "player": "Josh Hazlewood",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 741,
            "previousRating": 739,
            "image": jh38
        },
        {
            "rank": 5,
            "previousRank": 6,
            "player": "Jasprit Bumrah",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 728,
            "previousRating": 715,
            "image": jb93
        },
        {
            "rank": 6,
            "previousRank": 5,
            "player": "Shaheen Afridi",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 722,
            "previousRating": 725,
            "image": ssa40
        },
        {
            "rank": 7,
            "previousRank": 7,
            "player": "Anrich Nortje",
            "country": "South Africa",
            "flag": saFlag,
            "flagEmoji": "🇿🇦",
            "rating": 709,
            "previousRating": 707,
            "image": an20
        },
        {
            "rank": 8,
            "previousRank": 9,
            "player": "Haris Rauf",
            "country": "Pakistan",
            "flag": pakFlag,
            "flagEmoji": "🇵🇰",
            "rating": 695,
            "previousRating": 682,
            "image": hr97
        },
        {
            "rank": 9,
            "previousRank": 8,
            "player": "Adam Zampa",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 688,
            "previousRating": 691,
            "image": az88
        },
        {
            "rank": 10,
            "previousRank": 10,
            "player": "Mitchell Starc",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 675,
            "previousRating": 674,
            "image": ms56
        }
    ],
    "t20iAllRounders": [
        {
            "rank": 1,
            "previousRank": 1,
            "player": "Hardik Pandya",
            "country": "India",
            "flag": indFlag,
            "flagEmoji": "🇮🇳",
            "rating": 279,
            "previousRating": 277,
            "image": hp33
        },
        {
            "rank": 2,
            "previousRank": 3,
            "player": "Marcus Stoinis",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 256,
            "previousRating": 243,
            "image": ms17
        },
        {
            "rank": 3,
            "previousRank": 2,
            "player": "Shakib Al Hasan",
            "country": "Bangladesh",
            "flag": banFlag,
            "flagEmoji": "🇧🇩",
            "rating": 251,
            "previousRating": 254,
            "image": sah75
        },
        {
            "rank": 4,
            "previousRank": 4,
            "player": "Mohammad Nabi",
            "country": "Afghanistan",
            "flag": afgFlag,
            "flagEmoji": "🇦🇫",
            "rating": 238,
            "previousRating": 237,
            "image": mdn7
        },
        {
            "rank": 5,
            "previousRank": 5,
            "player": "Glenn Maxwell",
            "country": "Australia",
            "flag": ausFlag,
            "flagEmoji": "🇦🇺",
            "rating": 225,
            "previousRating": 224,
            "image": gm32
        }
    ]
};

export default mockRankings;