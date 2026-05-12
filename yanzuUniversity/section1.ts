const section1 = {
    /*                        个人基本信息 Personal Information     */
  //护照上传识别 UPLOAD PASSPORT IMAGE*
  file_Photo: 'input[type="file"][name="file_Photo"]',
  //识别结果 Recognized information
  txtFirstNameNew: 'input[type="text"][id="txtFirstNameNew"]', //Passport Family Name
  txtLastNameNew: 'input[type="text"][id="txtLastNameNew"]',//Given Name
  txtPassportNameNew: 'input[type="text"][id="txtPassportNameNew"]',//护照姓名 Full Name as shown on your passport
  txtBirthdayNew: 'input[type="text"][id="txtBirthdayNew"]',//Date of Birth
  txtBirthPlaceNew: 'input[type="text"][id="txtBirthPlaceNew"]',//Place of Birth
  txtPassportNoNew: 'input[type="text"][id="txtPassportNoNew"]',//Passport No.
  txtPassportExpireatNew: 'input[type="text"][id="txtPassportExpireatNew"]',//Date of Expiry
  txtPassportDateOfIssueNew:
    'input[type="text"][id="txtPassportDateOfIssueNew"]',//Date of Issue
    ddlCountry110: 'select[id="ddlCountry110_ddlCountryID"]',//Nationality
ddlSex110: 'select[id="ddlSex110_ddlSex"]',//Gender
confirmPassportButton: 'a.UpRecognizePassport',// save and continue 
//护照姓 Passport Family Name*
"ctl00$ContentPlaceHolder1$txtFamilyName" : 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtFamilyName"]',
//护照上的姓为空 The family name in the passport is empty (Checkbox)
"FamilyName":'input[type="checkbox"][name="FamilyName"]',
// 护照名 Given Name
"ctl00$ContentPlaceHolder1$txtGivenName": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtGivenName"]',

// 护照上的名为空 The given name in the passport is empty (Checkbox)
"GivenName": 'input[type="checkbox"][name="GivenName"]',
// 护照全名 Full Name as shown on your passport
"ctl00$ContentPlaceHolder1$txtPassportName": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPassportName"]',

// 切换姓名顺序 Switch name order (Hidden field)
"ctl00$ContentPlaceHolder1$Hidchange": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$Hidchange"]',

// 切换图标 Switch icon button
"ChangePassportName": 'a[id="ChangePassportName"]',
// 性别 Gender (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlSex$ddlSex": 'select[name="ctl00$ContentPlaceHolder1$_ddlSex$ddlSex"]',

// 性别 - 女性 Female (Radio)
"rd_sex_female": 'input[type="radio"][name="rd_sex"][value="0"]',

// 性别 - 男性 Male (Radio)
"rd_sex_male": 'input[type="radio"][name="rd_sex"][value="1"]',

// 性别隐藏字段 Hidden field
"ctl00$ContentPlaceHolder1$hidsex": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$hidsex"]',
// 婚姻状态 Marital Status (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlMaritalStatus$ddlMaritalStatus": 'select[name="ctl00$ContentPlaceHolder1$_ddlMaritalStatus$ddlMaritalStatus"]',

// 婚姻状态隐藏字段 Marital Status Hidden field
"ctl00$ContentPlaceHolder1$hidMaritalStatus": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$hidMaritalStatus"]',
// 宗教 Religion (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlReligion$ddlReligion": 'select[name="ctl00$ContentPlaceHolder1$_ddlReligion$ddlReligion"]',

// 宗教其他 Religion Other (Text input - hidden until "Other" selected)
"ctl00$ContentPlaceHolder1$txtReligion": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReligion"]',
// 职业 Occupation (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlOccupation$ddlOccupation": 'select[name="ctl00$ContentPlaceHolder1$_ddlOccupation$ddlOccupation"]',

// 职业其他 Occupation Other (Text input)
"ctl00$ContentPlaceHolder1$txtOccupationOther": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtOccupationOther"]',

// 职业隐藏字段 Occupation Hidden field
"ctl00$ContentPlaceHolder1$txtOccupation": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$txtOccupation"]',
// 工作或学习单位 Employer or Institution Affiliated
"ctl00$ContentPlaceHolder1$txtEorI": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtEorI"]',
// 在本国生活年限 Years of Living in Your Home Country
"ctl00$ContentPlaceHolder1$txtLifeYears": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtLifeYears"]',
// 是否华裔 Are you of Chinese descent? - Yes (Radio)
"rd_IsEthnicChinese_yes": 'input[type="radio"][name="rd_IsEthnicChinese"][value="1"]',

// 是否华裔 Are you of Chinese descent? - No (Radio)
"rd_IsEthnicChinese_no": 'input[type="radio"][name="rd_IsEthnicChinese"][value="0"]',

// 母语 Native Language (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlMotherlang$ddlMotherlang": 'select[name="ctl00$ContentPlaceHolder1$_ddlMotherlang$ddlMotherlang"]',
// 出生地点 Place of Birth
"ctl00$ContentPlaceHolder1$txtPlaceofbirth": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPlaceofbirth"]',
// 出生国家或地区 Country or District of Birth (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry1$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry1$ddlCountryID"]',

// 出生国家隐藏字段 Hidden field
"ctl00$ContentPlaceHolder1$hidCountry": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$hidCountry"]',
// 出生日期 Date of Birth
"ctl00$ContentPlaceHolder1$txtDateofbirth": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtDateofbirth"]',
// 国籍 Nationality (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry$ddlCountryID"]',

// 中国身份证号 Chinese ID number (Hidden field - only shown if China selected)
"ctl00$ContentPlaceHolder1$txtChineseIDcard": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtChineseIDcard"]',
};
const nativeLanguage={// 英语 English
MOTHERLANG_ENGLISH: "12",
// 汉语(中文) Chinese
MOTHERLANG_CHINESE: "23",
// 孟加拉语 Bengali
MOTHERLANG_BENGALI: "82",
// 阿拉伯语 Arabic
MOTHERLANG_ARABIC: "30",
// 俄语 Russian
MOTHERLANG_RUSSIAN: "46",
// 法语 French
MOTHERLANG_FRENCH: "75",
// 西班牙语 Spanish
MOTHERLANG_SPANISH: "21",
// 日语 Japanese
MOTHERLANG_JAPANESE: "55",
// 韩语 Korean
MOTHERLANG_KOREAN: "94",
// 德语 German
MOTHERLANG_GERMAN: "56",
// 葡萄牙语 Portuguese
MOTHERLANG_PORTUGUESE: "17",
// 其他语言 others
MOTHERLANG_OTHER: "1",}
const ddlOccupation={// 职员 Clerk
OCCUPATION_CLERK: "1",
// 学生 Student
OCCUPATION_STUDENT: "2",
// 教师 Teacher
OCCUPATION_TEACHER: "3",
// 医生 Doctor
OCCUPATION_DOCTOR: "4",
// 工人 Worker
OCCUPATION_WORKER: "5",
// 军人 Soldier
OCCUPATION_SOLDIER: "6",
// 工程师 Engineer
OCCUPATION_ENGINEER: "7",
// 学者 Scholar
OCCUPATION_SCHOLAR: "8",
// 家庭主妇 Housewife
OCCUPATION_HOUSEWIFE: "9",
// 退休 Retirement
OCCUPATION_RETIREMENT: "10",
// 经理 Manager
OCCUPATION_MANAGER: "11",
// 政府公务人员 Civil Servants
OCCUPATION_CIVIL_SERVANT: "12",
// 农民 Farmer
OCCUPATION_FARMER: "13",
// 警察 Policemen
OCCUPATION_POLICE: "15",
// 牧民 Herders
OCCUPATION_HERDERS: "16",
// 记者 Journalist
OCCUPATION_JOURNALIST: "17",
// 其他 Other
OCCUPATION_OTHER: "14",}
const ReligionId={// 无宗教信仰 Non-religion
RELIGION_NON: "0",
// 基督教 Christian
RELIGION_CHRISTIAN: "1",
// 伊斯兰教 Islam
RELIGION_ISLAM: "2",
// 佛教 Buddhism
RELIGION_BUDDHISM: "3",
// 天主教 Catholicism
RELIGION_CATHOLICISM: "7",
// 东正教 Orthodox Church
RELIGION_ORTHODOX: "8",
// 印度教 Hinduism
RELIGION_HINDUISM: "9",
// 道教 Taoism
RELIGION_TAOISM: "11",
// 喇嘛教 Lamaism
RELIGION_LAMAISM: "20",
// 其他 Other
RELIGION_OTHER: "10",}
const ddlMaritalStatus={// 未说明的婚姻状况 Others
MARITAL_STATUS_OTHERS: "0",
// 未婚 Single
MARITAL_STATUS_SINGLE: "1",
// 已婚 Married
MARITAL_STATUS_MARRIED: "2",
// 离婚 Divoiced
MARITAL_STATUS_DIVOICED: "5",
// 丧偶 Widowed
MARITAL_STATUS_WIDOWED: "7",}
const ddlSex110Values= {
  Female: "0",
  Male: "1",
}
const ddlCountry110Values= {
  Afghanistan: "8",
  AlandIslands: "23",
  Albania: "6",
  Algeria: "7",
  AmericanSamoa: "140",
  Andorra: "18",
  Angola: "19",
  Anguilla: "20",
  Antarctica: "155",
  AntiguaAndBarbuda: "21",
  Argentina: "9",
  Armenia: "231",
  Aruba: "11",
  Australia: "24",
  Austria: "22",
  AutonomousCountry: "265",
  Azerbaijan: "13",
  Azores: "262",
  Bahrain: "32",
  Bangladesh: "144",
  Barbados: "26",
  Belarus: "35",
  Belgium: "40",
  Belize: "47",
  Benin: "39",
  Bermuda: "36",
  Bhutan: "48",
  Bolivia: "42",
  BosniaAndHerzegovina: "45",
  Botswana: "46",
  BouvetIsland: "51",
  Brazil: "34",
  Britain: "239",
  BritishIndianOceanTerritory: "240",
  Brunei: "217",
  Bulgaria: "37",
  BurkinaFaso: "49",
  Burundi: "50",
  Cambodia: "101",
  Cameroon: "104",
  Canada: "98",
  CanaryIslands: "264",
  CapeVerde: "70",
  CaymanIslands: "106",
  CentralAfricanRepublic: "248",
  Chad: "245",
  Chile: "247",
  China: "249",
  ChristmasIsland: "179",
  CocosIslands: "107",
  Colombia: "75",
  CookIslands: "113",
  Croatia: "111",
  Cuba: "81",
  Curacao: "260",
  Cyprus: "176",
  CzechRepublic: "102",
  Denmark: "54",
  Djibouti: "94",
  Dominica: "58",
  DominicanRepublic: "59",
  DPRKorea: "52",
  DutchCaribbean: "258",
  Ecuador: "61",
  Egypt: "14",
  ElSalvador: "170",
  EquatorialGuinea: "53",
  Eritrea: "62",
  Estonia: "17",
  Ethiopia: "15",
  FalklandIslands: "71",
  FaroeIslands: "64",
  Fiji: "206",
  Finland: "69",
  France: "63",
  FrenchGuiana: "66",
  FrenchPolynesia: "65",
  FrenchSaintMartin: "255",
  FrenchSouthernAndAntarcticLands: "67",
  Gabon: "100",
  Gambian: "72",
  Georgia: "80",
  Germany: "55",
  Ghana: "99",
  Gibraltar: "246",
  Greece: "224",
  Greenland: "79",
  Grenada: "78",
  Guadeloupe: "82",
  Guam: "83",
  Guatemala: "213",
  Guernsey: "77",
  Guinea: "96",
  GuineaBissau: "97",
  Guyana: "84",
  Haiti: "86",
  HeardAndMcdonaldIslands: "90",
  Honduras: "92",
  HongKong: "250",
  Hungary: "228",
  Iceland: "41",
  India: "237",
  Indonesia: "238",
  Iran: "234",
  Iraq: "233",
  Ireland: "16",
  IsleOfMan: "136",
  Israel: "235",
  Italy: "236",
  IvoryCoast: "109",
  Jamaica: "230",
  Japan: "167",
  Jersey: "244",
  Jordan: "241",
  Kazakhstan: "85",
  Kenya: "112",
  Kiribati: "93",
  Kuwait: "110",
  Kyrgyzstan: "95",
  Laos: "116",
  Latvia: "114",
  Lebanon: "117",
  Lesotho: "115",
  Liberia: "118",
  Libya: "119",
  Liechtenstein: "121",
  Lithuania: "120",
  Luxembourg: "123",
  Macau: "25",
  Madagascar: "126",
  Madeira: "263",
  Malawi: "129",
  Malaysia: "130",
  Maldive: "128",
  Mali: "131",
  Malta: "127",
  MarshallIslands: "133",
  Martinique: "134",
  Mauritania: "138",
  Mauritius: "137",
  Mayotte: "135",
  Melanesia: "266",
  Mexico: "152",
  Micronesia: "146",
  Moldova: "148",
  Monaco: "150",
  Mongolia: "142",
  Montserrat: "143",
  Morocco: "149",
  Mozambique: "151",
  Myanmar: "147",
  NagornyKarabakh: "256",
  Namibia: "153",
  Naura: "207",
  Nepal: "157",
  Netherlands: "88",
  NetherlandsAntilles: "89",
  NewCaledonia: "226",
  NewZealand: "227",
  Nicaragua: "158",
  Niger: "159",
  Nigeria: "160",
  Niue: "161",
  NorfolkIsland: "163",
  NorthMacedonia: "132",
  NorthernMarianaIslands: "38",
  Norway: "162",
  Oman: "12",
  Other: "5",
  OutlyingIslets: "141",
  Pakistan: "29",
  PalauIsland: "164",
  Palestine: "253",
  Panama: "33",
  PapauNewGuinea: "27",
  Paraguay: "30",
  Peru: "145",
  Philippines: "68",
  Pitcairn: "165",
  Poland: "44",
  Portugal: "166",
  PuertoRico: "43",
  Qatar: "105",
  RepublicOfKorea: "87",
  RepublicOfTheCongo: "73",
  ReunionIsland: "122",
  Romania: "125",
  Russia: "60",
  Rwanda: "124",
  SaintBarthelemy: "257",
  SaintHelena: "181",
  SaintKittsAndNevis: "182",
  SaintLucia: "183",
  SaintVincentAndGrenadines: "186",
  SaintPierreEtMiquelon: "185",
  Samoa: "171",
  SanMarino: "184",
  SaoTomeAndPrincipe: "180",
  SaudiArabia: "178",
  Senegal: "175",
  Serbia: "172",
  SerbiaAndMontenegro: "173",
  Seychelles: "177",
  SierraLeone: "174",
  Singapore: "225",
  Slovakia: "188",
  Slovenia: "189",
  SolomonIslands: "195",
  Somalia: "194",
  SouthAfrica: "154",
  SouthGeorgiaAndSouthSandwichIsland: "259",
  SouthSudan: "251",
  Spain: "222",
  SriLanka: "187",
  Sudan: "192",
  Surinam: "193",
  SvalbardAndJanMayen: "190",
  Swaziland: "191",
  Sweden: "168",
  Switzerland: "169",
  Syria: "229",
  Taiwan: "197",
  Tajikistan: "196",
  Tanzania: "199",
  Thailand: "198",
  TheBahamas: "28",
  TheDemocraticRepublicOfTheCongo: "74",
  TheRepublicOfCostaRica: "76",
  TimorLeste: "56",
  Togo: "57",
  Tokelau: "210",
  Tonga: "200",
  TrinidadAndTobago: "202",
  Tunisia: "203",
  Turkey: "208",
  Turkmenistan: "209",
  TurksCaicosIslands: "201",
  Tuyalu: "204",
  Uganda: "218",
  Ukraine: "219",
  UnionOfComoros: "108",
  UnitedArabEmirates: "10",
  UnitedStates: "139",
  Uruguay: "220",
  Uzbekistan: "221",
  Vanuatu: "212",
  Vatican: "205",
  Venezuela: "216",
  VirginIslandsBritish: "215",
  VirginIslandsUS: "214",
  Vietnam: "242",
  WallisAndFutuna: "211",
  WesternSahara: "223",
  Yemen: "232",
  Zambia: "243",
  Zimbabwe: "103",
}