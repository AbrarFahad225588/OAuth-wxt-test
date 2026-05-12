
type UploadDocument = {
  attachType: string;
  fileUrl: string;
  fileName?: string;
};
const testDocuments = [
  {
    attachType: "ATTACH_TYPE_passportImage",
    fileUrl: "https://picsum.photos/400/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_159327607",
    fileUrl: "https://picsum.photos/401/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_152256498",
    fileUrl: "https://picsum.photos/402/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_152256505",
    fileUrl: "https://picsum.photos/403/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_154143877",
    fileUrl: "https://picsum.photos/404/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_159326911",
    fileUrl: "https://picsum.photos/405/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_152256527",
    fileUrl: "https://picsum.photos/406/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_2835328231",
    fileUrl: "https://picsum.photos/407/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_7860545788",
    fileUrl: "https://picsum.photos/408/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_159326877",
    fileUrl: "https://picsum.photos/409/600.jpg",
  },

  {
    attachType: "ATTACH_TYPE_159326989",
    fileUrl: "https://picsum.photos/410/600.jpg",
  },
];
export default defineContentScript({
  // matches: ["http://admission.uestc.edu.cn/*"],
  matches: ["<all_urls>"],

  
  main() {
    // ---------- CONSTANTS (countryId, languageId, religionId, etc.) ----------
    // (same as provided in my previous answer – omitted here for brevity)
    // Please reuse the full constant objects from the previous response.
  const restrictPlace={ChineseMainland: "0",
TaiWanChina: "1",
MacauChina: "2",
HongKongChina: "3"}
const residencePurposeId = {family_reunion: "1",
study: "2",
work: "3",
personal_affair: "4",
others: "9"}
const issuePlaceName = {
  Anhui: "PROVINCE_1",
  Beijing: "PROVINCE_2",
  Chongqing: "PROVINCE_3",
  Fujian: "PROVINCE_4",
  Guangdong: "PROVINCE_5",
  Gansu: "PROVINCE_6",
  Guangxi: "PROVINCE_7",
  Guizhou: "PROVINCE_8",
  Hebei: "PROVINCE_9",
  Hubei: "PROVINCE_10",
  Heilongjiang: "PROVINCE_11",
  Hainan: "PROVINCE_12",
  Henan: "PROVINCE_13",
  Hunan: "PROVINCE_14",
  Jilin: "PROVINCE_15",
  Jiangsu: "PROVINCE_16",
  Jiangxi: "PROVINCE_17",
  Liaoning: "PROVINCE_18",
  Neimenggu: "PROVINCE_19",
  Ningxia: "PROVINCE_20",
  Qinghai: "PROVINCE_21",
  Sichuan: "PROVINCE_22",
  Shandong: "PROVINCE_23",
  Shanghai: "PROVINCE_24",
  Shanxi: "PROVINCE_25",
  Shaanxi: "PROVINCE_26",
  Tianjin: "PROVINCE_27",
  Xizang: "PROVINCE_28",
  Xinjiang: "PROVINCE_29",
  Yunnan: "PROVINCE_30",
  Zhejiang: "PROVINCE_31",
  Other: "Other",
};
const visaId = {
  X1VISA: "ff80808140bf5b310140c7cb1acc1178",
  X2VISA: "ff80808140bf5b310140c7cb3e8e117a",
  ResidencePermit: "4",
  StayCertificate: "ff80808140e72a310140e85d6d4d091f",
  Others: "5",
  PermanentResidentID: "2C8EAC33BAF74DCA9164E88E74A15278",
  ZVISA: "ff80808153b231650153bc744cac2893",
  FVISA: "2",
  MVISA: "ff80808144613da50144668f49750e3e",
  LVISA: "1",
  S1VISA: "ff80808140bf5b310140c7ca822e116a",
  S2VISA: "ff80808140bf5b310140c7cae9061177",
  NoVisa: "28",
  Q1VISA: "ff808081518f467601518f657fb90036",
  Q2VISA: "ff808081518f467601518f6655a30039",
  KVISA: "2CBB73B36796458C8A0CC6F67B206A69",
};
const careerId = {
  Employee: "ff80808131d70e210131dadb4ef6000a",
  Student: "3",
  Teacher: "2",
  Doctor: "ff8080812ef58be3012ef5d7efb80004",
  Labourer: "4",
  ArmyService: "ff808081368270a901368a978ec20380",
  Engineers: "6",
  Scholars: "7",
  Housewife: "9",
  Retired: "8",
  Manager: "ff8080812ef58be3012ef5d7aaf20003",
  Officer: "ff80808131d70e210131dadd484a000b",
  Farmer: "5",
  Reporter: "91",
  MonksAndPriests: "92",
  Religious: "93",
  Others: "1",
};
const educationId = {
  ElementarySchool: "9",
  JuniorHigh: "6",
  SeniorHigh: "1",
  TechnicalSecondary: "7F726D3B46BA49B1A325B51A3020B84C",
  VocationalCollege: "2",
  Bachelor: "3",
  Master: "4",
  Dr: "5",
};
const countryId = {
  Afghanistan: "9",
  Albania: "7",
  Algeria: "8",
  AmericanSamoa: "137",
  Andorra: "19",
  Angola: "20",
  Anguilla: "21",
  AntiguaAndBarbuda: "22",
  Argentina: "10",
  Armenia: "221",
  Aruba: "12",
  Australia: "24",
  Austria: "23",
  Azerbaijan: "14",
  Bahamas: "27",
  Bahrain: "31",
  Bangladesh: "141",
  Barbados: "25",
  Belarus: "34",
  Belgium: "39",
  Belize: "46",
  Benin: "38",
  Bermuda: "35",
  Bhutan: "47",
  Bolivia: "41",
  BosniaAndHerzegovina: "44",
  Botswana: "45",
  BouvetIsland: "50",
  Brazil: "33",
  BritishIndianOceanTerritory: "232",
  BritishVirginIslands: "231",
  Brunei: "206",
  Bulgaria: "36",
  Burkinabe: "48",
  Burundi: "49",
  Cambodia: "98",
  Cameroon: "101",
  Canada: "95",
  CapeVerde: "69",
  CentralAfricanRepublic: "239",
  Chad: "236",
  Chile: "238",
  ChristmasIsland: "174",
  CocosKeelingIslands: "104",
  Colombia: "73",
  Comoros: "105",
  Congo: "71",
  CongoKinshasa: "72",
  CookIslands: "110",
  CostaRica: "74",
  CotedIvoire: "106",
  Croatia: "108",
  Cuba: "78",
  Cyprus: "171",
  DPRKCorea: "51",
  Denmark: "53",
  Djibouti: "91",
  Dominica: "58",
  DominicanRepublic: "57",
  Ecuador: "60",
  Egypt: "15",
  ElSalvador: "166",
  EquatorialGuinea: "52",
  Eritrea: "61",
  Estonia: "18",
  Ethiopia: "16",
  FaroeIslands: "63",
  Fiji: "242",
  Finland: "68",
  France: "62",
  FrenchGuiana: "65",
  FrenchPolynesia: "64",
  FrenchSouthernTerritories: "66",
  Gabon: "97",
  Gambia: "70",
  Georgia: "77",
  Germany: "54",
  Ghana: "96",
  Gibraltar: "237",
  Greece: "214",
  Greenland: "76",
  Grenada: "75",
  Guadeloupe: "79",
  Guam: "80",
  Guatemala: "204",
  Guinea: "93",
  GuineaBissau: "94",
  Guyana: "81",
  Haiti: "83",
  HeardIslandMcdonaldIslands: "87",
  Honduras: "89",
  Hungary: "218",
  Iceland: "40",
  India: "228",
  Indonesia: "229",
  Iran: "225",
  Iraq: "224",
  Ireland: "17",
  IslandsOfStPierreMiquelon: "180",
  IslasMalvinas: "126",
  Israel: "226",
  Italy: "227",
  Jamaica: "220",
  JanMayen: "222",
  Japan: "163",
  Jordan: "233",
  Kazakhstan: "82",
  Kenya: "109",
  Kiribati: "90",
  Kuwait: "107",
  Kyrgyzstan: "92",
  Laos: "113",
  Latvia: "111",
  Lebanon: "114",
  Lesotho: "112",
  Liberia: "115",
  Libya: "116",
  Liechtenstein: "118",
  Lithuania: "117",
  Luxembourg: "120",
  Madagascar: "123",
  Malawi: "127",
  Malaysia: "128",
  Maldives: "125",
  Mali: "129",
  Malta: "124",
  MarshallIslands: "131",
  Martinique: "132",
  Mauritania: "134",
  Mauritius: "133",
  Mexico: "149",
  Micronesia: "143",
  Moldova: "145",
  Monaco: "147",
  Mongolia: "139",
  Montenegro: "88",
  Montserrat: "140",
  Morocco: "146",
  Mozambique: "148",
  Myanmar: "144",
  Namibia: "150",
  Nauru: "240",
  Nepal: "153",
  Netherlands: "85",
  NetherlandsAntilles: "86",
  NewCaledonia: "216",
  NewZealand: "217",
  Nicaragua: "154",
  Niger: "155",
  Nigeria: "156",
  Niue: "157",
  NorfolkIsland: "159",
  NorthMacedonia: "130",
  NorthernMarianaIslands: "37",
  Norway: "158",
  Oman: "13",
  Pakistan: "28",
  Palau: "160",
  Palestine: "30",
  Panama: "32",
  PapuaNewGuinea: "26",
  Paraguay: "29",
  Peru: "142",
  Philippines: "67",
  PitcairnIslands: "161",
  Poland: "43",
  PortoRico: "42",
  Portugal: "162",
  Qatar: "102",
  RepublicOfKorea: "84",
  Reunion: "119",
  Romania: "122",
  RussianFederation: "59",
  Rwanda: "121",
  SaintKittsAndNevis: "177",
  SaintLucia: "178",
  Samoa: "167",
  SanMarino: "179",
  SaoTomeAndPrincipe: "175",
  SaudiArabia: "173",
  Senegal: "170",
  Serbia: "168",
  Seychelles: "172",
  SierraLeone: "169",
  Singapore: "215",
  Slovakia: "183",
  Slovenia: "184",
  SolomonIslands: "190",
  Somalia: "189",
  SouthAfrica: "151",
  SouthGeorgiaSouthSandwichIslands: "152",
  SouthSudan: "ff8080813736ea6901373b160b380125",
  Spain: "211",
  SriLanka: "182",
  StHelena: "176",
  StVincentGrenadines: "181",
  Sudan: "187",
  Suriname: "188",
  SvalbardArchipelago: "185",
  Swaziland: "186",
  Sweden: "164",
  Switzerland: "165",
  Syria: "219",
  Tajikistan: "191",
  Tanzania: "193",
  Thailand: "192",
  TheCaymanIslands: "103",
  TheCzechRepublic: "99",
  TimorLeste: "55",
  Togo: "56",
  Tokelau: "201",
  Tonga: "194",
  TrinidadAndTobago: "301",
  Tunisia: "197",
  Turkey: "199",
  Turkmenistan: "200",
  TurksAndCaicosIslands: "196",
  Tuvalu: "198",
  Uganda: "207",
  Ukraine: "208",
  UnitedArabEmirates: "11",
  UnitedKingdom: "230",
  UnitedStatesVirginIslands: "138",
  UnitedStatesOfAmerica: "135",
  Uruguay: "209",
  Uzbekistan: "210",
  Vanuatu: "203",
  Vatican: "241",
  Venezuela: "205",
  Vietnam: "234",
  WallisAndFutuna: "202",
  WesternSahara: "212",
  Yemen: "223",
  Zambia: "235",
  Zimbabwe: "100",
};
const languageId = {
  Chinese: "3",
  English: "2",
  Croatian: "4",
  Bulgarian: "5",
  German: "6",
  latvian: "7",
  Czech: "8",
  French: "9",
  Slovak: "10",
  Italian: "11",
  Dutch: "12",
  Macedonian: "13",
  Maltese: "14",
  Latin: "15",
  Finnish: "16",
  Albanian: "17",
  Irish: "18",
  Catalan: "19",
  Belarussian: "20",
  Icelandic: "21",
  SerbiaCroatian: "22",
  Romanian: "23",
  Portuguese: "24",
  Swedish: "25",
  Slovenian: "26",
  Ukrainian: "27",
  Spanish: "28",
  Greek: "29",
  Creole: "30",
  Danish: "33",
  Greenlandic: "34",
  Uzbek: "35",
  Arabic: "36",
  Persian: "37",
  Kyrgyz: "38",
  Georgian: "40",
  Burmese: "41",
  Lao: "42",
  Azerbaijani: "43",
  Pashto: "44",
  Filipino: "47",
  Armenian: "48",
  Kazak: "49",
  Russian: "50",
  Khmer: "51",
  Bhutanese: "53",
  Malay: "54",
  Nepali: "55",
  Turkish: "56",
  Thai: "57",
  Hebrew: "58",
  Japanese: "59",
  Vietnamese: "60",
  Swahili: "61",
  Somali: "62",
  Amharic: "63",
  Tswana: "64",
  Burundi: "66",
  Ewe: "67",
  Tigrinya: "68",
  Korean: "39",
  Comoros: "69",
  Sesotho: "71",
  Rwanda: "72",
  Afrikaans: "74",
  Sango: "75",
  Urdu: "80",
  Hindi: "81",
  Fula: "20233E7AF4E641E992128C5FB698D58A",
  Mongolian: "82",
  Ganda: "233F2FC29389441D99191F1B07BBE3D4",
  Indonesian: "83",
  Bengali: "84",
  Tamil: "86",
  Norwegian: "85",
  Hun: "87",
  Tajiki: "88",
  Polish: "90",
  others: "0",
  Sinhala: "91",
  Turkmen: "DBBB83DC61DC414AB55B153BB87B79D3",
  Malagasy: "CF5476201DC542AC9AF221A241880F21",
};
const religionId = {
  Anglican: "ff8080813f09a886013f0d0fe8920d11",
  Atheism: "ff808081311878ac01311c1b00560014",
  Mormon: "ff808081311878ac01311c1e0ca20015",
  Christianity: "1",
  Judaism: "2",
  Catholicism: "3",
  EasternOrthodoxy: "4",
  Hinduism: "6",
  Islam: "7",
  Buddhism: "8",
  Taoism: "A70358890C2849BEB22852EB68AC8E20",
  None: "13",
  Lutheranism: "7ABFF77AD46F42E0923CCF7C1B930759",
  Other: "12",
};

    // ---------- TEST DATA (Object 1) ----------
   const step1 = {
  // Photo
 photo: "https://picsum.photos/300/420.jpg",

  // Name
  lastName: "Rahman",
  noLastName: false,

  name: "Fahad",
  noName: false,
  noGivenName: false,

  // Gender
  genderMale: true,
  genderFemale: false,

  // Marital Status
  marryStatusuNMARRIED: true,
  marryStatusMARRIED: false,

  // Nationality
  countryId: countryId.Bangladesh,

  // Birth
  birthDate: "2004-01-01",
  placeOfBirth: "Dhaka",
  bornedCountryId: countryId.Bangladesh,

  // Language
  languageId: languageId.Bengali,

  // Religion
  religionId: religionId.Hinduism,
  otherReligion: "",

  // Education
  educationId: educationId.Bachelor,
  lastSchool: "HSTU",

  // Employer / Institute
  currentEmployer: "HSTU",

  // Health
  healthStatus: "Good",

  // Career
  careerId: careerId.Student,
  careerName: "",

  // Hobby
  hobby: "Programming",

  // Passport
  passportNo: "A12345678",
  passportExpire: "2030-01-01",

  // Ethnic Chinese
  applisOverseaTrue: false,
  appliOverseaFalse: true,

  // =========================
  // IMPORTANT PART
  // =========================
  // Whether in Chinese mainland now?
  inChinaOnApplyYES: true,
  inChinaOnApplyNO: false,

  // Current School / Organisation
  chinaPlaceOnApply: "UESTC",

  // Visa
  visaId: visaId.X1VISA,
  visaNo: "X1-123456",
  visaExpire: "2027-01-01",

  // Issue Place
  issuePlace: issuePlaceName.Other,
  otherIssuePlace: "this is my country",

  // Residence Purpose
  residencePurpose: residencePurposeId.others,
  residenceOther: "i love you",

  // Emigrant from China
  isYiMinYes: false,
  isYiMinNo: true,

  // Place of Origin in China
  restrict: restrictPlace.ChineseMainland,

  // Citizenship Start Date
  gainCountryDate: "2004-01-01",
};

    // ---------- SELECTORS (matching the actual form) ----------
    const selectors = {
      photo: 'input[type="file"][name="photo"]',
      familyName: 'input[type="text"][name="apply.lastName"]',
      givenName: 'input[type="text"][name="apply.name"]',
      birthDate: 'input[type="text"][name="apply.bornedDate"]',
      placeOfBirth: 'input[type="text"][name="apply.bornedAddress"]',
      highestSchool: 'input[type="text"][name="applyEx.lastSchool"]',
      currentEmployer: 'input[type="text"][name="apply.workplace"]',
      healthStatus: 'input[type="text"][name="apply.healthStatus"]',
      hobby: 'input[type="text"][name="apply.hobby"]',
      passportNo: 'input[type="text"][name="apply.passportNo"]',
      passportExpire: 'input[type="text"][name="apply.passportExpire"]',
      careerName: 'input[type="text"][name="apply.careerName"]',
      chinaPlaceOnApply: 'input[type="text"][name="applyEx.chinaPlaceOnApply"]',
      visaNo: 'input[type="text"][name="apply.visaNo"]',
      visaExpire: 'input[type="text"][name="apply.visaExpire"]',
      otherIssuePlace: 'input[type="text"][name="otherIssuePlace"]',
      residenceOther: 'input[type="text"][name="applyEx.residenceOther"]',
      otherReligion: 'input[type="text"][name="apply.otherReligion"]',
      gainCountryDate: 'input[type="text"][name="apply.gainCountryDate"]',
      genderMale: 'input[type="radio"][name="apply.sex"][value="0"]',
      genderFemale: 'input[type="radio"][name="apply.sex"][value="1"]',
      maritalUnmarried: 'input[type="radio"][name="apply.marryStatus"][value="0"]',
      maritalMarried: 'input[type="radio"][name="apply.marryStatus"][value="1"]',
      isOverseaTrue: 'input[type="radio"][name="apply.isOversea"][value="true"]',
      isOverseaFalse: 'input[type="radio"][name="apply.isOversea"][value="false"]',
      inChinaOnApplyYES: 'input[type="radio"][name="applyEx.inChinaOnApply"][value="true"]',
      inChinaOnApplyNO: 'input[type="radio"][name="applyEx.inChinaOnApply"][value="false"]',
      isYiMinYes: 'input[type="radio"][name="applyEx.isYiMin"][value="true"]',
      isYiMinNo: 'input[type="radio"][name="applyEx.isYiMin"][value="false"]',
      noLastName: 'input[type="checkbox"][name="noLastName"]',
      noName: 'input[type="checkbox"][name="noName"]',
      noGivenName: 'input[type="checkbox"][name="noGivenName"]',
      countryId: 'select[name="apply.countryId"]',
      bornedCountryId: 'select[name="apply.bornedCountryId"]',
      languageId: 'select[name="apply.languageId"]',
      religionId: 'select[name="apply.religionId"]',
      educationId: 'select[name="apply.educationId"]',
      careerId: 'select[name="apply.careerId"]',
      visaId: 'select[name="apply.visaId"]',
      issuePlace: 'select[name="applyEx.issuePlace"]',
      residencePurpose: 'select[name="applyEx.residencePurpose"]',
      restrict: 'select[name="apply.restrict"]',
    };

    // Helper: trigger input/change events
    // function triggerEvents(el: HTMLElement) {
    //   el.dispatchEvent(new Event("input", { bubbles: true }));
    //   el.dispatchEvent(new Event("change", { bubbles: true }));
    // }
   function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function randomDelay(min = 50, max = 150) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function simulateMouse(el: HTMLElement) {
  el.dispatchEvent(new MouseEvent("mouseover", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));

  el.dispatchEvent(new MouseEvent("mouseenter", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));

  el.dispatchEvent(new MouseEvent("mousemove", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));

  el.dispatchEvent(new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));

  await wait(randomDelay(20, 80));

  el.dispatchEvent(new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));

  el.dispatchEvent(new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  }));
}
function setNativeValue(
  el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string
) {
  let prototype: any;

  if (el instanceof HTMLTextAreaElement) {
    prototype = HTMLTextAreaElement.prototype;
  } else if (el instanceof HTMLSelectElement) {
    prototype = HTMLSelectElement.prototype;
  } else {
    prototype = HTMLInputElement.prototype;
  }

  const descriptor = Object.getOwnPropertyDescriptor(
    prototype,
    "value"
  );

  const setter = descriptor?.set;

  if (setter) {
    setter.call(el, value);
  } else {
    el.value = value;
  }
}
async function humanType(
  el: HTMLInputElement | HTMLTextAreaElement,
  text: string
) {
  el.focus();

  await simulateMouse(el);

  setNativeValue(el, "");

  for (const char of text) {
    const currentValue = el.value + char;

    el.dispatchEvent(new KeyboardEvent("keydown", {
      key: char,
      bubbles: true,
    }));

    el.dispatchEvent(new InputEvent("beforeinput", {
      bubbles: true,
      cancelable: true,
      inputType: "insertText",
      data: char,
    }));

    setNativeValue(el, currentValue);

    el.dispatchEvent(new InputEvent("input", {
      bubbles: true,
      inputType: "insertText",
      data: char,
    }));

    el.dispatchEvent(new KeyboardEvent("keyup", {
      key: char,
      bubbles: true,
    }));

    await wait(randomDelay(40, 120));
  }

  el.dispatchEvent(new Event("change", {
    bubbles: true,
  }));

  el.blur();
} 
// upload document 
async function waitForElement<T extends Element>(
  selector: string,
  timeout = 10000
): Promise<T> { 
  return new Promise((resolve, reject) => {
    const interval = 100;

    let elapsed = 0;

    const timer = setInterval(() => {
      const el = document.querySelector(selector);

      if (el) {
        clearInterval(timer);
        resolve(el);
      }

      elapsed += interval;

      if (elapsed >= timeout) {
        clearInterval(timer);
        reject(
          new Error(
            `Timeout: ${selector}`
          )
        );
      }
    }, interval);
  });
}
async function uploadAllDocuments() {
  for (const doc of testDocuments) {
    await uploadDocument(
      doc.attachType,
      doc.fileUrl
    );

    await wait(randomDelay(1500, 3000));
  }

  console.log("🎉 All documents uploaded");
}
async function uploadDocument(
  attachType: string,
  fileUrl: string
) {
  try {
    console.log("📤 Uploading:", attachType);

    // 1. Find upload section
    const section = document.querySelector(
      `.attach-item-list[attachtypeid="${attachType}"]`
    );

    if (!section) {
      console.warn("❌ Section not found:", attachType);
      return;
    }

    // 2. Find Add Document button
  const container =
  section.closest("td") ||
  section.parentElement;

    const addButton = container?.querySelector(
      'input[value="Add Document"]'
    ) as HTMLInputElement;

    if (!addButton) {
      console.warn("❌ Add button not found");
      return;
    }

    // 3. Open modal
    await simulateMouse(addButton);
    
    // await wait(1200);

    // 4. Find dynamic file input
    // const fileInput = document.querySelector(
    //   `input[type="file"][attachtype="${attachType}"]`
    // ) as HTMLInputElement;
    const fileInput = await waitForElement(
  `input[type="file"][attachtype="${attachType}"]`
) as HTMLInputElement;

    if (!fileInput) {
      console.warn("❌ File input not found:", attachType);
      return;
    }

    // 5. Fetch file
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const blob = await response.blob();

    // 6. Create real File object
    const fileName =
      fileUrl.split("/").pop() || "document.pdf";

    const file = new File(
      [blob],
      fileName,
      {
        type:
          blob.type ||
          "application/pdf",
      }
    );

    // 7. Inject into input
    const dt = new DataTransfer();

    dt.items.add(file);

    fileInput.files = dt.files;

    // 8. Trigger upload
    fileInput.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );

    console.log("✅ Upload started:", attachType);

    // 9. Wait for OSS upload finish
    await wait(4000);

    console.log("🎉 Upload complete:", attachType);

  } catch (err) {
    console.error(
      "❌ Upload failed:",
      attachType,
      err
    );
  }
}
    // Helper: fill text input
   async function setInput(
  selector: string,
  value: string | number | undefined
) {
  if (value === undefined || value === "") return;

  const input = document.querySelector(selector) as HTMLInputElement;

  if (!input) {
    console.warn("❌ Input not found:", selector);
    return;
  }

  input.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  await wait(randomDelay(100, 300));

  await humanType(input, String(value));

  console.log("✅ Filled:", selector, value);
}
    // Helper: click radio or checkbox
   async function setCheckOrRadio(
  selector: string,
  shouldCheck: boolean
) {
  if (!shouldCheck) return;

  const el = document.querySelector(selector) as HTMLInputElement;

  if (!el) {
    console.warn("❌ Element not found:", selector);
    return;
  }

  if (el.checked) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  await wait(randomDelay(100, 200));

  await simulateMouse(el);
await simulateMouse(el);

el.dispatchEvent(new Event("input", {
  bubbles: true,
}));

el.dispatchEvent(new Event("change", {
  bubbles: true,
}));
  // el.click();

  el.dispatchEvent(new Event("input", {
    bubbles: true,
  }));

  el.dispatchEvent(new Event("change", {
    bubbles: true,
  }));

  console.log("✅ Checked:", selector);
}

    // Helper: set select dropdown value
  async function setSelect(
  selector: string,
  value: string | undefined
) {
  if (!value) return;

  const select = document.querySelector(selector) as HTMLSelectElement;

  if (!select) {
    console.warn("❌ Select not found:", selector);
    return;
  }

  select.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  await simulateMouse(select);

  await wait(randomDelay(50, 150));

  select.focus();

  setNativeValue(select, value);

  select.dispatchEvent(new Event("input", {
    bubbles: true,
  }));

  select.dispatchEvent(new Event("change", {
    bubbles: true,
  }));

  select.blur();

  console.log("✅ Select set:", selector, value);
}
    // ---------- PHOTO UPLOAD USING DataTransfer ----------
    // async function setPhotoFromUrl(url: string, selector: string) {
    //   const fileInput = document.querySelector(selector) as HTMLInputElement;
    //   if (!fileInput) {
    //     console.warn("❌ File input not found:", selector);
    //     return;
    //   }

    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) throw new Error(`HTTP ${response.status}`);
    //     const blob = await response.blob();
    //     const fileName = url.split("/").pop() || "photo.jpg";
    //     const file = new File([blob], fileName, { type: blob.type || "image/jpeg" });

    //     // Use DataTransfer to set files
    //     const dataTransfer = new DataTransfer();
    //     dataTransfer.items.add(file);
    //     fileInput.files = dataTransfer.files;

    //     triggerEvents(fileInput);
    //     console.log("✅ Photo uploaded via DataTransfer:", fileName);
    //   } catch (err) {
    //     console.error("❌ Photo upload failed:", err);
    //   }
    // }
async function setPhotoFromUrl(url: string, selector: string) {
  const fileInput = document.querySelector(selector) as HTMLInputElement;
  if (!fileInput) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();

    // ১. ইমেজ লোড করা রেজোলিউশন চেক ও রিসাইজ করার জন্য
    const img = new Image();
    const objectUrl = URL.createObjectURL(blob);
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = objectUrl;
    });

    // ২. ক্যানভাস ব্যবহার করে রিসাইজ করা (৩০০ x ৪২০ পিক্সেল সেট করছি সেফটির জন্য)
    const targetWidth = 300;
    const targetHeight = 420;
    
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // ছবিটিকে ক্যানভাসে ড্র করা (স্ট্রেচ করে রেজোলিউশন বাড়ানো)
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    }

    // ৩. ক্যানভাস থেকে নতুন Blob তৈরি করা
    const resizedBlob = await new Promise<Blob | null>((resolve) => 
      canvas.toBlob((b) => resolve(b), "image/jpeg", 0.95)
    );

    if (!resizedBlob) throw new Error("Canvas to Blob conversion failed");

    // ৪. ফাইল ইনজেক্ট করা
    const fileName = "passport_photo.jpg";
    const file = new File([resizedBlob], fileName, { type: "image/jpeg" });

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;

    // ৫. ইভেন্ট ফায়ার করা
    fileInput.dispatchEvent(new Event('change', { bubbles: true }));
    
    // ক্লিনআপ
    URL.revokeObjectURL(objectUrl);

    console.log(`✅ Resized to ${targetWidth}x${targetHeight} and uploaded.`);
  } catch (err) {
    console.error("❌ Error in resizing/uploading:", err);
  }
}

    // ---------- MAIN FILL FUNCTION ----------
    async function fillForm() {
      console.log("🚀 Starting autofill with Object 1");

      // Text inputs
      await setInput(selectors.familyName, step1.lastName);
      await setInput(selectors.givenName, step1.name);
      await setInput(selectors.birthDate, step1.birthDate);
      await setInput(selectors.placeOfBirth, step1.placeOfBirth);
      await setInput(selectors.highestSchool, step1.lastSchool);
      await setInput(selectors.currentEmployer, step1.currentEmployer);
      await setInput(selectors.healthStatus, step1.healthStatus);
      await setInput(selectors.hobby, step1.hobby);
      await setInput(selectors.passportNo, step1.passportNo);
      await setInput(selectors.passportExpire, step1.passportExpire);
      await setInput(selectors.careerName, step1.careerName);
      await setInput(selectors.chinaPlaceOnApply, step1.chinaPlaceOnApply);
      await setInput(selectors.visaNo, step1.visaNo);
      await setInput(selectors.visaExpire, step1.visaExpire);
      await setInput(selectors.otherIssuePlace, step1.otherIssuePlace);
      await setInput(selectors.residenceOther, step1.residenceOther);
      await setInput(selectors.otherReligion, step1.otherReligion);
      await setInput(selectors.gainCountryDate, step1.gainCountryDate);

      // Radios
      await setCheckOrRadio(selectors.genderMale, step1.genderMale);
      await setCheckOrRadio(selectors.genderFemale, step1.genderFemale);
      await setCheckOrRadio(selectors.maritalUnmarried, step1.marryStatusuNMARRIED);
      await setCheckOrRadio(selectors.maritalMarried, step1.marryStatusMARRIED);
      await setCheckOrRadio(selectors.isOverseaTrue, step1.applisOverseaTrue);
      await setCheckOrRadio(selectors.isOverseaFalse, step1.appliOverseaFalse);
      await setCheckOrRadio(selectors.inChinaOnApplyYES, step1.inChinaOnApplyYES);
      await setCheckOrRadio(selectors.inChinaOnApplyNO, step1.inChinaOnApplyNO);
      await setCheckOrRadio(selectors.isYiMinYes, step1.isYiMinYes);
      await setCheckOrRadio(selectors.isYiMinNo, step1.isYiMinNo);

      // Checkboxes
      await setCheckOrRadio(selectors.noLastName, step1.noLastName);
      await setCheckOrRadio(selectors.noName, step1.noName);
      await setCheckOrRadio(selectors.noGivenName, step1.noGivenName);

      // Selects
      await setSelect(selectors.countryId, step1.countryId);
      await setSelect(selectors.bornedCountryId, step1.bornedCountryId);
      await setSelect(selectors.languageId, step1.languageId);
      await setSelect(selectors.religionId, step1.religionId);
      await setSelect(selectors.educationId, step1.educationId);
      await setSelect(selectors.careerId, step1.careerId);
      await setSelect(selectors.visaId, step1.visaId);
      await setSelect(selectors.issuePlace, step1.issuePlace);
      await setSelect(selectors.residencePurpose, step1.residencePurpose);
      await setSelect(selectors.restrict, step1.restrict);
       await uploadAllDocuments();
      // File upload using DataTransfer
      if (step1.photo) {
        await setPhotoFromUrl(step1.photo, selectors.photo);
      }

      console.log("🎉 Form filling complete!");
    }
   
    // Listen for message from extension popup/background
    chrome.runtime.onMessage.addListener((message) => {
      console.log("📩 Message received:", message);
      if (message.type === "FILL_FORM") {
        fillForm();
      }
    });
  },
});