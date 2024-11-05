
export const CODE_TABLE = {
  32 : [ " " , " " ],
  48 : [ "0" , ""  ],
  49 : [ "1" , "!" ],
  50 : [ "2" , '"' ],
  51 : [ "3" , "#" ],
  52 : [ "4" , "$" ],
  53 : [ "5" , "%" ],
  54 : [ "6" , "&" ],
  55 : [ "7" , "'" ],
  56 : [ "8" , "(" ],
  57 : [ "9" , ")" ],
  59 : [ ":" , "+" ], // ブラウザ差異あり
  65 : [ "A" , "A" ],
  66 : [ "B" , "B" ],
  67 : [ "C" , "C" ],
  68 : [ "D" , "D" ],
  69 : [ "E" , "E" ],
  70 : [ "F" , "F" ],
  71 : [ "G" , "G" ],
  72 : [ "H" , "H" ],
  73 : [ "I" , "I" ],
  74 : [ "J" , "J" ],
  75 : [ "K" , "K" ],
  76 : [ "L" , "L" ],
  77 : [ "M" , "M" ],
  78 : [ "N" , "N" ],
  79 : [ "O" , "O" ],
  80 : [ "P" , "P" ],
  81 : [ "Q" , "Q" ],
  82 : [ "R" , "R" ],
  83 : [ "S" , "S" ],
  84 : [ "T" , "I" ],
  85 : [ "U" , "U" ],
  86 : [ "V" , "V" ],
  87 : [ "W" , "W" ],
  88 : [ "X" , "X" ],
  89 : [ "Y" , "Y" ],
  90 : [ "Z" , "Z" ],
  107 : [ ";" , "+" ], // ブラウザ差異あり
  109 : [ "-" , "=" ], // ブラウザ差異あり
  186 : [ ":" , "*" ], // ブラウザ差異あり
  187 : [ ";" , "+" ], // ブラウザ差異あり
  188 : [ "," , "<" ],
  189 : [ "-" , "=" ], // chorme
  173 : [ "-" , "=" ], // Firefox
  190 : [ "." , ">" ],
  191 : [ "/" , "?" ],
  192 : [ "@" , "`" ],
  219 : [ "[" , "{" ],
  220 : [ "\\", "|" ],
  221 : [ "]" , "}" ],
  222 : [ "^" , "~" ],
  226 : [ "\\", "_" ]
}


export const CHAR_TABLE = {
  "１"		: ["1"],
  "２"		: ["2"],
  "３"		: ["3"],
  "４"		: ["4"],
  "５"		: ["5"],
  "６"		: ["6"],
  "７"		: ["7"],
  "８"		: ["8"],
  "９"		: ["9"],
  "０"		: ["0"],
  "Ａ"		: ["A"],
  "Ｂ"		: ["B"],
  "Ｃ"		: ["C"],
  "Ｄ"		: ["D"],
  "Ｅ"		: ["E"],
  "Ｆ"		: ["F"],
  "Ｇ"		: ["G"],
  "Ｈ"		: ["H"],
  "Ｉ"		: ["I"],
  "Ｊ"		: ["J"],
  "Ｋ"		: ["K"],
  "Ｌ"		: ["L"],
  "Ｍ"		: ["M"],
  "Ｎ"		: ["N"],
  "Ｏ"		: ["O"],
  "Ｐ"		: ["P"],
  "Ｑ"		: ["Q"],
  "Ｒ"		: ["R"],
  "Ｓ"		: ["S"],
  "Ｔ"		: ["T"],
  "Ｕ"		: ["U"],
  "Ｖ"		: ["V"],
  "Ｗ"		: ["W"],
  "Ｘ"		: ["X"],
  "Ｙ"		: ["Y"],
  "Ｚ"		: ["Z"],
  "あ"		: ["A"],
  "い"		: ["I"],
  "う"		: ["U", "WU"],
  "え"		: ["E"],
  "お"		: ["O"],
  "か"		: ["KA", "CA"],
  "き"		: ["KI"],
  "く"		: ["KU", "CU", "QU"],
  "け"		: ["KE"],
  "こ"		: ["KO", "CO"],
  "さ"		: ["SA"],
  "し"		: ["SHI", "CI", "SI"],
  "す"		: ["SU"],
  "せ"		: ["SE", "CE"],
  "そ"		: ["SO"],
  "た"		: ["TA"],
  "ち"		: ["CHI", "TI"],
  "つ"		: ["TSU", "TU"],
  "て"		: ["TE"],
  "と"		: ["TO"],
  "な"		: ["NA"],
  "に"		: ["NI"],
  "ぬ"		: ["NU"],
  "ね"		: ["NE"],
  "の"		: ["NO"],
  "は"		: ["HA"],
  "ひ"		: ["HI"],
  "ふ"		: ["HU", "FU"],
  "へ"		: ["HE"],
  "ほ"		: ["HO"],
  "ま"		: ["MA"],
  "み"		: ["MI"],
  "む"		: ["MU"],
  "め"		: ["ME"],
  "も"		: ["MO"],
  "や"		: ["YA"],
  "ゆ"		: ["YU"],
  "よ"		: ["YO"],
  "ら"		: ["RA", "LA"],
  "り"		: ["RI", "LI"],
  "る"		: ["RU", "LU"],
  "れ"		: ["RE", "LE"],
  "ろ"		: ["RO", "LO"],
  "わ"		: ["WA"],
  "を"		: ["WO"],
  "ん"		: ["NN"],
  "ン" : ["N"],
  "が"		: ["GA"],
  "ぎ"		: ["GI"],
  "ぐ"		: ["GU"],
  "げ"		: ["GE"],
  "ご"		: ["GO"],
  "ざ"		: ["ZA"],
  "じ"		: ["ZI", "JI"],
  "ず"		: ["ZU"],
  "ぜ"		: ["ZE"],
  "ぞ"		: ["ZO"],
  "だ"		: ["DA"],
  "ぢ"		: ["DI"],
  "づ"		: ["DU"],
  "で"		: ["DE"],
  "ど"		: ["DO"],
  "ば"		: ["BA"],
  "び"		: ["BI"],
  "ぶ"		: ["BU"],
  "べ"		: ["BE"],
  "ぼ"		: ["BO"],
  "ぱ"		: ["PA"],
  "ぴ"		: ["PI"],
  "ぷ"		: ["PU"],
  "ぺ"		: ["PE"],
  "ぽ"		: ["PO"],
  "ゔぁ"		: ["VA"],
  "ゔぃ"		: ["VI"],
  "ゔ"		: ["VU"],
  "ゔぇ"		: ["VE"],
  "ゔぉ"		: ["VO"],
  "ぁ"		: ["XA", "LA"],
  "ぃ"		: ["XI", "XYI", "LI", "LYI"],
  "ぅ"		: ["XU", "LU"],
  "ぇ"		: ["XE", "XYE", "LE", "LYE"],
  "ぉ"		: ["XO", "LO"],
  "ゃ"		: ["XYA", "LYA"],
  "ゅ"		: ["XYU", "LYU"],
  "ょ"		: ["XYO", "LYO"],
  "ヶ"		: ["XKE", "LKE"],
  "ッ"		: ["XTU", "LTU", "XTSU", "LTSU"],
  "うぃ"	: ["WI"],
  "うぇ"	: ["WE"],
  "きゃ"	: ["KYA"],
  "きぃ"	: ["KYI"],
  "きぇ"	: ["KYE"],
  "きゅ"	: ["KYU"],
  "きょ"	: ["KYO"],
  "くぁ"	: ["KWA", "QA"],
  "くぃ"	: ["QYI", "QI"],
  "くぇ"	: ["QE"],
  "くぉ"	: ["QO"],
  "くゃ"	: ["QYA"],
  "くゅ"	: ["QYU"],
  "くょ"	: ["QYO"],
  "しゃ"	: ["SYA", "SHA"],
  "しぃ"	: ["SYI"],
  "しゅ"	: ["SYU", "SHU"],
  "しぇ"	: ["SYE", "SHE"],
  "しょ"	: ["SYO", "SHO"],
  "ちゃ"	: ["TYA", "CHA", "CYA"],
  "っちゃ" : ["TTYA", "CCHA", "CCYA"],
  "ちぃ"	: ["TYI", "CYI"],
  "っちぃ" : ["TTYI", "CCYI"],
  "ちゅ"	: ["TYU", "CHU", "CYU"],
  "っちゅ"	: ["TTYU", "CCHU", "CCYU"],
  "ちぇ"	: ["TYE", "CHE", "CYE"],
  "っちぇ"	: ["TTYE", "CCHE", "CCYE"],
  "ちょ"	: ["TYO", "CHO", "CYO"],
  "っちょ"	: ["TTYO", "CCHO", "CCYO"],
  "つぁ"	: ["TSA"],
  "っつぁ" : ["TTSA"],
  "つぃ"	: ["TSI"],
  "つぇ"	: ["TSE"],
  "つぉ"	: ["TSO"],
  "てゃ"	: ["THA"],
  "てぃ"	: ["THI"],
  "てゅ"	: ["THU"],
  "てぇ"	: ["THE"],
  "てょ"	: ["THO"],
  "とぁ"	: ["TWA"],
  "とぃ"	: ["TWI"],
  "とぅ"	: ["TWU"],
  "とぇ"	: ["TWE"],
  "とぉ"	: ["TWO"],
  "にゃ"	: ["NYA"],
  "にぃ"	: ["NYI"],
  "にゅ"	: ["NYU"],
  "にぇ"	: ["NYE"],
  "にょ"	: ["NYO"],
  "ひゃ"	: ["HYA"],
  "ひぃ"	: ["HYI"],
  "ひゅ"	: ["HYU"],
  "ひぇ"	: ["HYE"],
  "ひょ"	: ["HYO"],
  "ふぁ"	: ["FA"],
  "ふぃ"	: ["FYI", "FI"],
  "ふぇ"	: ["FYE", "FE"],
  "ふぉ"	: ["FO"],
  "ふゃ"	: ["FYA"],
  "ふゅ"	: ["FYU"],
  "ふょ"	: ["FYO"],
  "みゃ"	: ["MYA"],
  "みぃ"	: ["MYI"],
  "みゅ"	: ["MYU"],
  "みぇ"	: ["MYE"],
  "みょ"		: ["MYO"],
  "りゃ"	: ["RYA"],
  "りぃ"	: ["RYI"],
  "りゅ"	: ["RYU"],
  "りぇ"	: ["RYE"],
  "りょ"		: ["RYO"],
  "ぎゃ"	: ["GYA"],
  "ぎぃ"	: ["GYI"],
  "ぎゅ"	: ["GYU"],
  "ぎぇ"	: ["GYE"],
  "ぎょ"	: ["GYO"],
  "じゃ"	: ["ZYA", "JA", "JYA"],
  "じぃ"	: ["ZYI", "JYI"],
  "じゅ"	: ["ZYU", "JU", "JYU"],
  "じぇ"	: ["ZYE", "JE", "JYE"],
  "じょ"	: ["ZYO", "JO", "JYO"],
  "ぢゃ"	: ["DYA"],
  "ぢぃ"	: ["DYI"],
  "ぢゅ"	: ["DYU"],
  "ぢぇ"	: ["DYE"],
  "ぢょ"	: ["DYO"],
  "でゃ"	: ["DHA"],
  "でぃ"	: ["DHI"],
  "でゅ"	: ["DHU"],
  "でぇ"	: ["DHE"],
  "でょ"	: ["DHO"],
  "どぁ"	: ["DWA"],
  "どぃ"	: ["DWI"],
  "どぅ"	: ["DWU"],
  "どぇ"	: ["DWE"],
  "どぉ"	: ["DWO"],
  "びゃ"	: ["BYA"],
  "びぃ"	: ["BYI"],
  "びゅ"	: ["BYU"],
  "びぇ"	: ["BYE"],
  "びょ"	: ["BYO"],
  "ぴゃ"	: ["PYA"],
  "ぴぃ"	: ["PYI"],
  "ぴゅ"	: ["PYU"],
  "ぴぇ"	: ["PYE"],
  "ぴょ"	: ["PYO"],
  "！"		: ["!"],
  "”"		: ["\""],
  "＃"		: ["#"],
  "％"		: ["%"],
  "＆"		: ["&"],
  "’"		: ["'"],
  "（"		: ["("],
  "）"		: [")"],
  "ー"		: ["-"],
  "＝"		: ["="],
  "＾"		: ["^"],
  "～"		: ["~"],
  "￥"		: ["\\"],
  "|"		: ["|"],
  "＠"		: ["@"],
  "‘"		: ["`"],
  "「"		: ["["],
  "｛"		: ["{"],
  "＋"		: ["+"],
  "＊"		: ["*"],
  "」"		: ["]"],
  "｝"		: ["}"],
  "、"		: [","],
  "＜"		: ["<"],
  "。"		: ["."],
  "＞"		: [">"],
  "・"		: ["/"],
  "？"		: ["?"],
  "￥"		: ["\\"],
  "＿"		: ["_"],
  "　"		: [" "],
  " "		: [""],
  "っか": ["KKA"],
  "っき": ["KKI"],
  "っく": ["KKU"],
  "っけ": ["KKE"],
  "っこ": ["KKO"],
  "っさ": ["SSA"],
  "っし": ["SSI"],
  "っす": ["SSU"],
  "っせ": ["SSE"],
  "っそ": ["SSO"],
  "った": ["TTA"],
  "っち": ["CCHI", "TTI"],
  "っつ": ["TTU", "TTSU"],
  "って": ["TTE"],
  "っと": ["TTO"],
  "っは": ["HHA"],
  "っひ": ["HHI"],
  "っふ": ["FFU", "HHU"],
  "っへ": ["HHE"],
  "っほ": ["HHO"],
  "っや": ["YYA"],
  "っゆ": ["YYU"],
  "っよ": ["YYO"],
  "っわ": ["WWA"],
  "っを": ["WWO"],
  "っふぇ": ["FFE"],
}
