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

/*                                           通讯地址 Correspondence Address  */

        /* 家庭地址 Home Address */
 // 详细地址 Detailed Address
"ctl00$ContentPlaceHolder1$txtHomeaddr": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtHomeaddr"]',       
// 省/城市 Province/City
"ctl00$ContentPlaceHolder1$txtHomeCity": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtHomeCity"]',
// 国家 Country (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry2$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry2$ddlCountryID"]',
// 邮编 Zipcode
"ctl00$ContentPlaceHolder1$txtHomeZipCode": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtHomeZipCode"]',
// 电话/手机 Phone or Mobile
"ctl00$ContentPlaceHolder1$txtHometel": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtHometel"]',
// 常用邮箱 Main Email
"ctl00$ContentPlaceHolder1$txtStuEmail2": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtStuEmail2"]',
    /*          当前地址 Current Address*/
    // 与本国家庭通讯地址相同 The same as home address (Radio)
"radio-current-info": 'input[type="radio"][id="radio-current-info"]',
// 现住址 Current Address
"ctl00$ContentPlaceHolder1$txtCurrentAddr": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtCurrentAddr"]',
// 省/城市 Province/City
"ctl00$ContentPlaceHolder1$txtCurrentCity": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtCurrentCity"]',
// 国家 Country (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry4$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry4$ddlCountryID"]',
// 邮编 Zipcode
"ctl00$ContentPlaceHolder1$txtMobile": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtMobile"]',
// 电话/手机 Phone or Mobile
"ctl00$ContentPlaceHolder1$txtTel": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtTel"]',
// 学生邮箱 Email
"ctl00$ContentPlaceHolder1$txtStuEmail": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtStuEmail"]',
                 /*  Mailing Address for Admission Notice  */
// 与本国家庭通讯地址相同 The same as home address (Radio)
"radio-Admission-cerrent": 'input[type="radio"][name="radio-Admission"][value="1"]',                 
// 与申请人当前联系方式相同 The same as the current postal address (Radio)
"radio-Admission-apply": 'input[type="radio"][name="radio-Admission"][value="2"]',
// 自取 I will pick up by myself (Radio)
"radio-Student-Office": 'input[type="radio"][name="radio-Admission"][value="3"]',
// 收件人姓名 Receiver's Name if The same as home address (Radio)
"ctl00$ContentPlaceHolder1$txtReceiverName": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverName"]',
// 收件人省/城市 Province/City
"ctl00$ContentPlaceHolder1$txtReceiverCity": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverCity"]',
// 收件人地址 Detailed Address
"ctl00$ContentPlaceHolder1$txtReceiverAddr": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverAddr"]',
// 收件人手机 Phone or Mobile
"ctl00$ContentPlaceHolder1$txtReceiverMobile": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverMobile"]',
// 收件人国家 Country (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry5$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry5$ddlCountryID"]',
// 邮编 Zipcode
"ctl00$ContentPlaceHolder1$txtReceiverZipCode": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverZipCode"]',
// 收件人地址 Detailed Address if option  I will pick up by myself (Radio)
// "ctl00$ContentPlaceHolder1$txtReceiverAddr": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReceiverAddr"]', // need only for option 3 
                                        /*                  Passport and Visa Information*/
    // 有护照 I have passport (Radio)
"havepassport_yes": 'input[type="radio"][name="havepassport"][value="1"]',
// 暂未办理护照 I don't have passport (Radio)
"havepassport_no": 'input[type="radio"][name="havepassport"][value="0"]',

       // if have a passport must fill this input 
// 护照号码 Passport No. 
"ctl00$ContentPlaceHolder1$txtPassportNo": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPassportNo"]',

// 默认护照号码隐藏字段 Default Passport No. (Hidden)    ata dekha lagbe 
// "ctl00$ContentPlaceHolder1$hdDefaultPassportNo": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$hdDefaultPassportNo"]',
// 旧护照号码 Old Passport No.
"ctl00$ContentPlaceHolder1$txtOldPassportNo": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtOldPassportNo"]', 
// 护照签发日期 Passport start date
"ctl00$ContentPlaceHolder1$txtPassportDateOfIssue": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPassportDateOfIssue"]',

// 护照有效期至 Passport Expire at
"ctl00$ContentPlaceHolder1$txtExpireat": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtExpireat"]',
// 旧护照到期时间 Expiration of Old Passport
"ctl00$ContentPlaceHolder1$txtOldExpireat": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtOldExpireat"]',
// 签证申请所在国家 Country for visa application (Select dropdown)
"ctl00$ContentPlaceHolder1$ddlCountry3$ddlCountryID": 'select[name="ctl00$ContentPlaceHolder1$ddlCountry3$ddlCountryID"]',

// 签证申请所在大使馆或领事馆 Embassy or Consulate (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlApplyVisaAt$ddlApplyVisaAt": 'select[name="ctl00$ContentPlaceHolder1$_ddlApplyVisaAt$ddlApplyVisaAt"]',

// 签证申请所在大使馆或领事馆隐藏字段 Hidden field
"ctl00$ContentPlaceHolder1$txtApplyVisaAt": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$txtApplyVisaAt"]',
                                         /*               在华学习经历 Learning Experience In China */
                                         
                  //      是否曾经或当前在中国学习 Have you studied or whether studying in China currently? 
 // 是否曾经或当前在中国学习 - Yes (Have you studied or whether studying in China currently?)
     'rd_StudyChina_yes' : 'input[type="radio"][name="rd_StudyChina"][value="1"]',             
   // 是否曾经或当前在中国学习 - No (Have you studied or whether studying in China currently?)
"rd_StudyChina_no": 'input[type="radio"][name="rd_StudyChina"][value="0"]',
// 签证类型 Visa Type (Select dropdown)
"ctl00$ContentPlaceHolder1$_ddlStuVisaType$ddlStuVisaType": 'select[name="ctl00$ContentPlaceHolder1$_ddlStuVisaType$ddlStuVisaType"]',

// 签证类型隐藏字段 Visa Type Hidden
// "ctl00$ContentPlaceHolder1$hidddlStuVisaType": 'input[type="hidden"][name="ctl00$ContentPlaceHolder1$hidddlStuVisaType"]',

// 签证类型 - 其他 Other (Text input)
"ctl00$ContentPlaceHolder1$txtVisaTypeOther": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtVisaTypeOther"]',
// 在华学习开始时间 Start of study in China
"ctl00$ContentPlaceHolder1$txtStartOfStudyInChina": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtStartOfStudyInChina"]',

// 在华学习结束时间 Deadline to study in China
"ctl00$ContentPlaceHolder1$txtDeadlineToStudyInChina": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtDeadlineToStudyInChina"]',
// 当前是否在中国 - Yes (Whether in China now?)
"rd_Territory_yes": 'input[type="radio"][name="rd_Territory"][value="1"]',

// 当前是否在中国 - No (Whether in China now?)
"rd_Territory_no": 'input[type="radio"][name="rd_Territory"][value="0"]',

// 当前是否在中国隐藏字段 (Hidden select)
// "ctl00$ContentPlaceHolder1$ddlTerritory": 'select[name="ctl00$ContentPlaceHolder1$ddlTerritory"]',
// 签证到期时间 Expiry Date
"ctl00$ContentPlaceHolder1$txtVisaExpireat": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtVisaExpireat"]',
// 在华学习院校 The institution in China that you have studied in
"ctl00$ContentPlaceHolder1$txtLearningInstitutions": 'input[type="text"][name="ctl00$ContentPlaceHolder1$txtLearningInstitutions"]',
/*                                             经济担保人信息 Financial Sponsor's Information **/
// 添加经济担保人按钮 Add Financial Sponsor Button
"add_tr": 'i[id="add_tr"].add_tr',
// 姓名 Name
"txtname": 'input[id="txtname"].input-text.size-S',
// 单位名称 Work Place
"txtemployer": 'input[id="txtemployer"].input-text.size-S',

// 职业 Occupation (Select dropdown)
"select-Occupation": 'select.select-Occupation',

// 职业其他 Occupation Others (Text input)
"txtOccupationOthers": 'input[id="txtOccupationOthers"].input-text.size-S',
// 邮箱 Email
"ContactEmail": 'input[id="ContactEmail"].input-text.size-S.FormVailBlur',
// 关系 Relationship with the student (Select dropdown)
"select-Family": 'select.select-Family',

// 关系 - 其他 Other (Text input)
"txtMemberOther": 'input[id="txtMemberOther"].input-text.size-S',
// 国籍 Nationality (Select dropdown)
"ddlCountryID": 'select[id="ddlCountryID"]',
// 行业类型 Industry Type (Select dropdown)
"select-CompanyType": 'select.select-CompanyType',

// 行业类型 - 其他 Other (Text input)
"txtCompanyTypeOther": 'input[id="txtCompanyTypeOther"].input-text.size-S',
// 电话 Phone or Mobile
"txtContactTel": 'input[id="txtContactTel"].input-text.size-S.FormVailBlur',
// 保存 Save button
"btn_FamilyMemberInformation": 'a[id="btn_FamilyMemberInformation"].btn.btn-primary.radius.btn_conceal.size-X',
                                    /*  事务担保人信息 Guarantor's Information **/
     // 添加事务担保人按钮 Add Guarantor Button
"add_tr_ger": 'i[id="add_tr_ger"].add_tr',
 // 姓名 Name
// "txtname": 'input[id="txtname"].input-text.size-S',                              
};
const CompanyType={// 无 None
INDUSTRY_TYPE_NONE: "0",
// 政府机构 Government and Public Administration
INDUSTRY_TYPE_GOVERNMENT: "1",
// 教育 Education and Training
INDUSTRY_TYPE_EDUCATION: "2",
// 金融保险 Financial/Insurance Services
INDUSTRY_TYPE_FINANCIAL: "3",
// 通信 Communications
INDUSTRY_TYPE_COMMUNICATIONS: "4",
// 计算机服务业 Information Technology and Computers
INDUSTRY_TYPE_IT: "5",
// 医药 Healthcare and Health Sciences
INDUSTRY_TYPE_HEALTHCARE: "6",
// 科学研究 Research Institute
INDUSTRY_TYPE_RESEARCH: "7",
// 制造业 Manufacturing
INDUSTRY_TYPE_MANUFACTURING: "8",
// 建筑房地产 Construction/Real Estate
INDUSTRY_TYPE_CONSTRUCTION: "9",
// 文娱 Sports and Recreation
INDUSTRY_TYPE_SPORTS: "10",
// 住宿餐饮 Hospitality
INDUSTRY_TYPE_HOSPITALITY: "11",
// 农林牧渔 Agriculture
INDUSTRY_TYPE_AGRICULTURE: "12",
// 社会工作 Community-based Organization
INDUSTRY_TYPE_COMMUNITY: "13",
// 批发零售 Wholesale/Retail Services
INDUSTRY_TYPE_RETAIL: "14",
// 交通运输 Transportation
INDUSTRY_TYPE_TRANSPORTATION: "16",
// 其它 Others
INDUSTRY_TYPE_OTHER: "15",}
const selectFamily={// 无 None
RELATIONSHIP_NONE: "0",
// 父亲 Father
RELATIONSHIP_FATHER: "1",
// 母亲 Mother
RELATIONSHIP_MOTHER: "2",
// 配偶 Spouse
RELATIONSHIP_SPOUSE: "3",
// 叔伯 Uncle
RELATIONSHIP_UNCLE: "4",
// 兄弟 Brother
RELATIONSHIP_BROTHER: "5",
// 姐妹 Sister
RELATIONSHIP_SISTER: "6",
// 子女 Children
RELATIONSHIP_CHILDREN: "7",
// 老师 Teacher
RELATIONSHIP_TEACHER: "9",
// 雇主 Employer
RELATIONSHIP_EMPLOYER: "10",
// 其他 Others
RELATIONSHIP_OTHERS: "8",}
const occupation={// 职员 Clerk
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
const visaType={// X1长期 X1 Visa
VISA_TYPE_X1: "1",
// X2短期 X2 Visa
VISA_TYPE_X2: "2",
// F字签证 F Visa
VISA_TYPE_F: "4",
// L字签证 L Visa
VISA_TYPE_L: "5",
// 居留许可 Residence Permit
VISA_TYPE_RESIDENCE_PERMIT: "8",
// Q字签证 Q Visa
VISA_TYPE_Q: "14",
// Z字签证 Z Visa
VISA_TYPE_Z: "16",
// 免签 Visa free
VISA_TYPE_VISA_FREE: "18",
// 其它 Other
VISA_TYPE_OTHER: "7",}
// 签证申请所在大使馆或领事馆 Embassy or Consulate
const _ddlApplyVisaAt$ddlApplyVisaAt = {
  "驻阿尔巴尼亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Albania": "1",
  "驻阿尔及利亚民主人民共和国大使馆 Embassy of the People's Repeblic of China in the Democratic People's Republic of Algeria": "2",
  "驻阿富汗伊斯兰共和国大使馆 Embassy of the People's Republic of China in the Islamic Republic of Afghanistan": "3",
  "驻阿根廷共和国大使馆 Embassy of the People's Republic of China in Argentina": "4",
  "驻阿拉伯联合酋长国大使馆 Embassy of the People's Republic of China in United Arab Emirates": "5",
  "驻迪拜总领事馆 Consulate-General of the People's Republic of China in Dubai": "6",
  "驻阿曼苏丹国大使馆 Embassy of the People's Republic of China in the Sultanate of Oman": "7",
  "驻阿塞拜疆共和国大使馆 Embassy of the People's Republic of China in the Republic of Azerbaijan": "8",
  "驻阿拉伯埃及共和国大使馆 Embassy of the People's Republic of China in the Arab Republic of Egypt": "9",
  "驻亚历山大总领事馆 Consulate-General of the People's Republic of China in Alexandria": "10",
  "驻埃塞俄比亚联邦民主共和国大使馆 Embassy of the People's Republic of China in the Federal Democratic Republic of Ethiopia": "11",
  "驻爱尔兰大使馆 Embassy of the People's Republic of China in Ireland": "12",
  "驻贝尔法斯特总领馆 Consulate-General of the People's Republic of China in Belfast": "13",
  "驻爱沙尼亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Estonia": "14",
  "驻安哥拉共和国大使馆 Embassy of the People's Republic of China in the Republic of Angola": "15",
  "驻安提瓜和巴布达大使馆 Embassy of the People's Republic of China in Antigua And Barbuda": "16",
  "驻奥地利共和国大使馆 Embassy of the People's Republic of China in the Republic of Austria": "17",
  "驻阿德莱德总领事馆 Consulate-General of the People's Republic of China in Adelaide": "18",
  "驻澳大利亚联邦大使馆 Embassy of the People's Republic of China in Australia": "19",
  "驻布里斯班总领事馆 Consulate-General of the People's Republic of China in Brisbane": "20",
  "驻墨尔本总领事馆 Consulate-General of the People's Republic of China in Melbourne": "21",
  "驻珀斯总领事馆 Consulate-General of the People's Republic of China in Perth": "22",
  "驻悉尼总领事馆 Consulate-General of the People's Republic of China in Sydney": "23",
  "驻巴巴多斯大使馆 Embassy of the People's Republic of China in Barbados": "24",
  "驻巴布亚新几内亚独立国大使馆 Embassy of the People's Republic of China in Papua New Guinea": "25",
  "驻巴哈马国大使馆 Embassy of the People's Republic of China in the Commonwealth of the Bahamas": "26",
  "驻巴基斯坦伊斯兰共和国大使馆 Embassy of the People's Republic of China in the Islamic Republic of Pakistan": "27",
  "驻卡拉奇总领事馆 Consulate-General of the People's Republic of China in Karachi": "28",
  "驻拉合尔总领事馆 Consulate-General of the People's Republic of China in Lahore": "29",
  "驻巴勒斯坦国办事处 Office of the People's Republic of China to the State of Palestine": "30",
  "驻巴林王国大使馆 Embassy of the People's Republic of China in the Kingdom of Bahrain": "31",
  "驻巴拿马共和国大使馆 Embassy of The People's Republic of China in the Republic of Panama": "32",
  "驻巴西联邦共和国大使馆 Embassy of the People's Republic of China in the Federative Republic of Brazil": "33",
  "驻累西腓总领事馆 Consulate-General of the People's Republic of China in Recife": "34",
  "驻里约热内卢总领事馆 Consulate-General of the People's Republic of China in Rio De Janeiro": "35",
  "驻圣保罗总领事馆 Consulate-General of the People's Republic of China in Sao Paulo": "36",
  "驻白俄罗斯共和国大使馆 Embassy of the People's Republic of China in the Republic of Belarus": "37",
  "驻保加利亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Bulgaria": "38",
  "驻贝宁共和国大使馆 Embassy of the People's Republic of China in the Republic of Benin": "39",
  "驻比利时王国大使馆 Embassy of the People's Republic of China in the Kingdom of Belgium": "40",
  "驻冰岛共和国大使馆 Embassy of the People's Republic of China in the Republic of Iceland": "41",
  "驻波斯尼亚和黑塞哥维那大使馆 Embassy of The People's Republic of China in Bosnia And Herzegovina": "42",
  "驻波兰共和国大使馆 Embassy of the People's Republic of China in the Republic of Poland": "43",
  "驻革但斯克总领事馆 Consulate-General of the People's Republic of China in Gdan'sk": "44",
  "驻多民族玻利维亚国大使馆 Embassy of the People's Republic of China in the Multinational States of Bolivia": "45",
  "驻圣克鲁斯总领事馆 Consulate-General of the People's Republic of China in Santa Cruz": "46",
  "驻博茨瓦纳共和国大使馆 Embassy of the People's Republic of China in the Republic of Botswana": "47",
  "驻布隆迪共和国大使馆 Embassy of the People's Republic of China in the Republic of Burundi": "48",
  "驻朝鲜民主主义人民共和国大使馆 Embassy of the People's Republic of China in the Democratic People's Republic of Korea": "49",
  "驻清津总领事馆 Consulate-General of the People's Republic of China in Chongjin，D.P.R of Korea": "50",
  "驻巴塔总领事馆 Consulate-General of the People's Republic of China in Bata": "51",
  "驻赤道几内亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Equatorial Guinea": "52",
  "驻丹麦王国大使馆 Embassy of the People's Republic of China in the Kingdom of Denmark": "53",
  "驻德意志联邦共和国大使馆 Embassy of the People's Republic of China in the Federal Republic of Germany": "54",
  "驻杜塞尔多夫总领事馆 Consulate-General of the People's Republic of China in Dusseldorf": "55",
  "驻法兰克福总领事馆 Consulate-General of the People's Republic of China in Frankfurt": "56",
  "驻汉堡总领事馆 Consulate-General of the People's Republic of China in Hamburg": "57",
  "驻慕尼黑总领事馆 Consulate-General of the People's Republic of China in Munich": "58",
  "驻东帝汶民主共和国大使馆 Embassy of the People’s Republic of China in the Democratic Republic of Timor-Leste": "59",
  "驻多哥共和国大使馆 Embassy of the People's Republic of China in the Republic of Togo": "60",
  "驻多米尼加共和国大使馆 Embassy of the People's Republic of China in Dominican Republic": "61",
  "驻多米尼克国大使馆 Embassy of the People's Republic of China in the Commonwealth of Dominica": "62",
  "驻俄罗斯联邦大使馆 Embassy of the People's Republic of China in Russian Federation": "63",
  "驻符拉迪沃斯托克总领馆 Consulate-General of the People's Republic of China in Vladivostok": "64",
  "驻哈巴罗夫斯克总领事馆 Consulate-General of the People's Republic of China in Khabarovsk": "65",
  "驻圣彼得堡总领事馆 Consulate-General of the People's Republic of China in St.Petersburg": "66",
  "驻叶卡捷琳堡总领事馆 Consulate-General of the People's Republic of China in Yekaterinburg": "67",
  "驻喀山总领事馆 Consulate-General of the People's Republic of China in Kazan": "68",
  "驻厄瓜多尔共和国大使馆 Embassy of the People's Republic of China in the Republic of Ecuador": "69",
  "驻瓜亚基尔总领事馆 Consulate-General of the People's Republic of China in Guayaquil": "70",
  "驻厄立特里亚国大使馆 Embassy of the People's Republic of China in the State of Eritrea": "71",
  "驻法兰西共和国大使馆 Embassy of the People's Republic of China in the Republic of France": "72",
  "驻里昂总领事馆 Consulate-General of the People's Republic of China in Lyon": "73",
  "驻马赛总领事馆 Consulate-General of the People's Republic of China in Marseille": "74",
  "驻斯特拉斯堡总领事馆 Consulate-General of the People's Republic of China in Strasbourg": "75",
  "驻帕皮提领事馆 Consulate-General of the People's Republic of China in Papeete": "76",
  "驻圣但尼总领事馆 Consulate-General of the People's Republic of China in Saint-Denis": "77",
  "驻达沃总领事馆 Consulate-General of the People's Republic of China in Davao": "78",
  "驻菲律宾共和国大使馆 Embassy of the People's Republic of China in the Republic of the Philippines": "79",
  "驻拉瓦格领事馆 Consulate-General of the People's Republic of China in Laoag": "80",
  "驻宿务总领事馆 Consulate-General of the People's Republic of China in Cebu": "81",
  "驻斐济共和国大使馆 Embassy of the People's Republic of China in the Republic of Fiji": "82",
  "驻芬兰共和国大使馆 Embassy of the People's Republic of China in the Republic of Finland": "83",
  "驻佛得角共和国大使馆 Embassy of the People's Republic of China in the Republic of Cape Verde": "84",
  "驻刚果共和国大使馆 Embassy of the People's Republic of China in the Republic of Congo": "85",
  "驻刚果民主共和国大使馆 Embassy of the People's Republic of China in the Democratic Republic of Congo": "86",
  "驻哥伦比亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Colombia": "87",
  "驻哥斯达黎加共和国大使馆 Embassy of the People's Republic of China in Costa Rica": "88",
  "驻格林纳达大使馆 Embassy of the People's Republic of China in Grenada": "89",
  "驻格鲁吉亚大使馆 Embassy of the People's Republic of China in Georgia": "90",
  "驻古巴共和国大使馆 Embassy of the People's Republic of China in the Republic of Cuba": "91",
  "驻圭亚那合作共和国大使馆 Embassy of the People's Republic of China in the Cooperative Republic of Guyana": "92",
  "驻阿拉木图总领事馆 Consulate-General of the People's Republic of China in Almaty": "93",
  "驻哈萨克斯坦共和国大使馆 Embassy of the People's Republic of China in the Republic of Kazakhstan": "94",
  "驻海地贸易发展办事处 Office of Commercial Development of China in Haiti": "95",
  "驻釜山总领事馆 Consulate-General of the People's Republic of China in Pusan": "96",
  "驻光州总领事馆 Consulate-General of the People's Republic of China in Gwangju": "97",
  "驻大韩民国大使馆 Embassy of the People's Republic of China in the Republic of Korea": "98",
  "驻济州总领事馆 Consulate-General of the People's Republic of China in Jeju": "99",
  "驻荷兰王国大使馆 Embassy of the People's Republic of China in the Kingdom of the Netherlands": "100",
  "驻威廉斯塔德总领馆 Consulate-General of the People's Republic of China in Willemstad": "101",
  "驻黑山大使馆 Embassy of the People's Republic of China in Montenegro": "102",
  "驻吉布提共和国大使馆 Embassy of the People's Republic of China in the Republic of Djibouti": "103",
  "驻吉尔吉斯共和国大使馆 Embassy of the People's Republic of China in the Kyrgyz Republic": "104",
  "驻几内亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Guinea": "105",
  "驻几内亚比绍共和国大使馆 Embassy of the People's Republic of China in the Republic of Guinea-Bissau": "106",
  "驻多伦多总领事馆 Consulate-General of the People's Republic of China in Toronto": "107",
  "驻加拿大大使馆 Embassy of the People's Republic of China in Canada": "108",
  "驻卡尔加里总领事馆 Consulate-General of the People's Republic of China in Calgary": "109",
  "驻蒙特利尔总领事馆 Consulate-General of the People's Republic of China in Montreal": "110",
  "驻温哥华总领事馆 Consulate-General of the People's Republic of China in Vancouver": "111",
  "驻加纳共和国大使馆 Embassy of the People's Republic of China in the Republic of Ghana": "112",
  "驻加蓬共和国大使馆 Embassy of the People's Republic of China in the Republic of Gabon": "113",
  "驻柬埔寨王国大使馆 Embassy of the People’s Republic of China in the Kingdom of Cambodia": "114",
  "驻柬埔寨使馆驻暹粒领事办公室 Consular Office in Siem Reap Embassy of the People’s Republic of China in the Kingdom of Cambodia": "115",
  "驻捷克共和国大使馆 Embassy of the People's Republic of China in the Czech Republic": "116",
  "驻津巴布韦使馆 Embassy of the People's Republic of China in the Republic of Zimbabwe": "117",
  "驻喀麦隆共和国大使馆 Embassy of the People's Republic of China in the Republic of Cameroon": "118",
  "驻卡塔尔国大使馆 Embassy of the People's Republic of China in the State of Qatar": "119",
  "驻科摩罗联盟大使馆 Embassy of the People's Republic of China in the Union of Comores": "120",
  "驻科特迪瓦共和国大使馆 Embassy of the People's Republic of China in the Republic of Cote D'ivoire": "121",
  "驻科威特国大使馆 Embassy of the People's Republic of China in the State of Kuwait": "122",
  "驻克罗地亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Croatia": "123",
  "驻肯尼亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Kenya": "124",
  "驻拉脱维亚共和国大使馆 Embassy of the People's Republic of China in the Republic Latvia": "125",
  "驻莱索托王国大使馆 Embassy of the People's Republic of China in the Kingdom of Lesotho": "126",
  "驻琅勃拉邦总领事馆 Consulate-General of the People's Republic of China in Luang Prabang": "127",
  "驻老挝人民民主共和国大使馆 Embassy of the People's Republic of China in the Lao People's Democratic Republic": "128",
  "驻黎巴嫩共和国大使馆 Embassy of the People's Republic of China in the Republic of Lebanon": "129",
  "驻立陶宛共和国大使馆 Embassy of the People's Republic of China in the Republic of Lithuania": "130",
  "驻利比里亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Liberia": "131",
  "驻卢森堡大公国大使馆 Embassy of the People's Republic of China in the Grand-Duchy of Luxembourg": "132",
  "驻卢旺达共和国大使馆 Embassy of the People's Republic of China in the Republic of Rwanda": "133",
  "驻罗马尼亚大使馆 Embassy of the People's Republic of China in Romania": "134",
  "驻马达加斯加共和国大使馆 Embassy of the People's Republic of China in the Republic of Madagascar": "135",
  "驻马尔代夫共和国大使馆 Embassy of the People's Republic of China in the Republic of Maldives": "136",
  "驻马拉维共和国大使馆 Embassy of the People's Republic of China in the Republic of Malawi": "137",
  "驻槟城总领事馆 Consulate-General of the People's Republic of China in Penang": "138",
  "驻哥打基纳巴卢总领事馆 Consulate-General of the People's Republic of China in Kota Kinabalu": "139",
  "驻古晋总领事馆 Consulate-General of the People's Republic of China in Kuching": "140",
  "驻马来西亚大使馆 Embassy of the People's Republic of China in Malaysia": "141",
  "驻马里共和国大使馆 Embassy of the People's Republic of China in the Republic of Mali": "142",
  "驻北马其顿共和国大使馆 Embassy of the People's Republic of China in the Republic of North Macedonia": "143",
  "驻马耳他共和国大使馆 Embassy of the People's Republic of China in the Republic of Malta": "144",
  "驻毛里求斯共和国大使馆 Embassy of the People's Republic of China in the Republic of Mauritius": "145",
  "驻毛里塔尼亚伊斯兰共和国大使馆 Embassy of the People's Republic of China in the Islamic Republic of Mauritania": "146",
  "驻旧金山总领事馆 Consulate-General of the People's Republic of China in San Francisco": "147",
  "驻洛杉矶总领事馆 Consulate-General of the People's Republic of China in Los Angeles": "148",
  "驻美利坚合众国大使馆 Embassy of the People's Republic of China in the United States of America": "149",
  "驻纽约总领事馆 Consulate-General of the People's Republic of China in New York": "150",
  "驻休斯敦总领事馆 Consulate-General of the People's Republic of China in Houston": "151",
  "驻芝加哥总领事馆 Consulate-General of the People's Republic of China in Chicago": "152",
  "驻蒙古国大使馆 Embassy of the People's Republic of China in Mongolia": "153",
  "驻扎门乌德总领事馆 Consulate-General of the People's Republic of China in Zamyn-Uud": "154",
  "驻孟加拉人民共和国大使馆 Embassy of the People's Republic of China in the People's Republic of Bangladesh": "155",
  "驻秘鲁共和国大使馆 Embassy of the People's Republic of China in the Republic of Peru": "156",
  "驻密克罗尼西亚联邦大使馆 Embassy of the People's Republic of China in the Federated States of Micronesia": "157",
  "驻曼德勒总领事馆 Consulate-General of the People's Republic of China in Mandalay": "158",
  "驻缅甸联邦共和国大使馆 Embassy of the People's Republic of China in the Republic of the Union of Myanmar": "159",
  "驻摩尔多瓦共和国大使馆 Embassy of the People's Republic of China in the Republic of Moldova": "160",
  "驻摩洛哥王国大使馆 Embassy of the People's Republic of China in the Kingdom of Morocco": "161",
  "驻莫桑比克共和国大使馆 Embassy of the People's Republic of China in the Republic of Mozambique": "162",
  "驻蒂华纳总领事馆 Consulate-General of the People's Republic of China in Tijuana": "163",
  "驻墨西哥合众国大使馆 Embassy of the People's Republic of China in the United Mexican States": "164",
  "驻纳米比亚共和国大使馆 Embassy of the People's Republic ofchina in the Republic of Namibia": "165",
  "驻德班总领事馆 Consulate-General of the People's Republic of China in Durban": "166",
  "驻开普敦总领事馆 Consulate-General of the People's Republic of China in Cape Town": "167",
  "驻南非共和国大使馆 Embassy of the People's Republic of China in the Republic of South Africa": "168",
  "驻约翰内斯堡总领事馆 Consulate-General of the People's Republic of China in Johannesburg": "169",
  "驻南苏丹共和国大使馆 Embassy of the People's Republic of China in South Sudan": "170",
  "驻尼泊尔大使馆 Embassy of the People's Republic of China in the Federal Democratic Republic of Nepal": "171",
  "驻尼日尔共和国大使馆 Embassy of the People's Republic of China in the Republic of Niger": "172",
  "驻拉各斯总领事馆 Consulate-General of the People's Republic of China in Lagos": "173",
  "驻尼日利亚联邦共和国大使馆 Embassy of the People's Republic of China in the Federal Republic of Nigeria": "174",
  "驻挪威王国大使馆 Embassy of the People's Republic of China in the Kingdom of Norwegian": "175",
  "驻葡萄牙共和国大使馆 Embassy of the People's Republic of China in the Portuguese Republic": "176",
  "驻大阪总领事馆 Consulate-General of the People's Republic of China in Osaka": "177",
  "驻福冈总领事馆 Consulate-General of the People's Republic of China in Fukuoka": "178",
  "驻名古屋总领事馆 Consulate-General of the People's Republic of China in Nagoya": "179",
  "驻日本国大使馆 Embassy of the People's Republic of China in Japan": "180",
  "驻新潟总领事馆 Consulate-General of the People's Republic of China in Niigata": "181",
  "驻札幌总领事馆 Consulate-General of the People's Republic of China in Sapporo": "182",
  "驻长崎总领事馆 Consulate-General of the People's Republic of China in Nagasaki": "183",
  "驻哥德堡总领事馆 Consulate-General of the People's Republic of China in Gothenburg": "184",
  "驻瑞典大使馆 Embassy of the People's Republic of China in Sweden": "185",
  "驻瑞士联邦大使馆 Embassy of the People's Republic of China in Switzerland": "186",
  "驻苏黎世总领事馆 Consulate-General of the People's Republic of China in Zurich": "187",
  "驻萨尔瓦多共和国大使馆 Embassy of the People's Republic of China in el Salvador": "188",
  "驻萨摩亚独立国大使馆 Embassy of the People's Republic of China in the Independent State of Samoa": "189",
  "驻塞尔维亚共和国大使馆 Embassy of the People's Republic of China in Serbia": "190",
  "驻塞拉利昂共和国大使馆 Embassy of the People's Republic of China in the Republic of Sierra Leone": "191",
  "驻塞内加尔共和国大使馆 Embassy of the People's Republic of China in the Republic of Senegal": "192",
  "驻塞浦路斯共和国大使馆 Embassy of the People's Republic of China in the Republic of Cyprus": "193",
  "驻塞舌尔共和国大使馆 Embassy of the People's Republic of China in the Republic of Seychelles": "194",
  "驻吉达总领事馆 Consulate-General of the People's Republic of China in Jeddah": "195",
  "驻沙特阿拉伯王国大使馆 Embassy of the People's Republic of China in the Kingdom of Saudi Arabia": "196",
  "驻圣多美和普林西比民主共和国大使馆 Embassy of the People's Republic of China in the Republic of Sao Tome And Principe": "197",
  "驻斯里兰卡民主社会主义共和国大使馆 Embassy of The People's Republic of China in the Democratic Socialist Republic of Sri Lanka": "198",
  "驻斯洛伐克共和国大使馆 Embassy of the People's Republic of China in the Slovak Republic": "199",
  "驻斯洛文尼亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Slovenia": "200",
  "驻苏丹共和国大使馆 Embassy of the People's Republic of China in the Republic of The Sudan": "201",
  "驻苏里南共和国大使馆 Embassy of the People's Republic of China in the Republic of Suriname": "202",
  "驻塔吉克斯坦共和国大使馆 Embassy of the People's Republic of China in the Republic of Tajikistan": "203",
  "驻孔敬总领事馆 Consulate-General of the People's Republic of China in Khon Kaen": "204",
  "驻清迈总领事馆 Consulate-General of the People's Republic of China in Chiangmai": "205",
  "驻宋卡总领事馆 Consulate-General of the People's Republic of China in Songkhla": "206",
  "驻泰王国大使馆 Embassy of The People's Republic of China in the Kingdom of Thailand": "207",
  "驻桑给巴尔总领事馆 Consulate-General of the People's Republic of China in Zanzibar": "208",
  "驻坦桑尼亚联合共和国大使馆 Embassy of the People's Republic of China in the United Republic of Tanzania": "209",
  "驻汤加王国大使馆 Embassy of the People's Republic of China in Kingdom of Tonga": "210",
  "驻特立尼达和多巴哥共和国大使馆 Embassy of the People's Republic of China in the Republic of Trinidad And Tobago": "211",
  "驻突尼斯共和国大使馆 Embassy of the People's Republic of China in the Tunisian of Republic": "212",
  "驻土耳其共和国大使馆 Embassy of the People's Republic of China in the Republic of Turkey": "213",
  "驻伊斯坦布尔总领事馆 Consulate-General of the People's Republic of China in Istanbul Turkey": "214",
  "驻土库曼斯坦大使馆 Embassy of the People's Republic of China in Turkmenistan": "215",
  "驻瓦努阿图共和国大使馆 Embassy of the People's Republic of China in the Republic of Vanuatu": "216",
  "驻委内瑞拉玻利瓦尔共和国大使馆 Embassy of the People's Republic of China in the Republic Bolivariana of Venezuela": "217",
  "驻文莱达鲁萨兰国大使馆 Embassy of the People's Republic of China in Negara Brunel Darussalam": "218",
  "驻乌干达共和国大使馆 Embassy of the People's Republic of China in the Republic of Uganda": "219",
  "驻敖德萨总领事馆 Consulate-General of the People's Republic of China in Odessa": "220",
  "驻乌克兰大使馆 Embassy of the People's Republic of China in Ukraine": "221",
  "驻乌拉圭东岸共和国大使馆 Embassy of the People's Republic of China in Republic of Uruguay": "222",
  "驻乌兹别克斯坦共和国大使馆 Embassy of the People's Republic of China in the Republic of Uzbekistan": "223",
  "驻巴塞罗那总领事馆 Consulate-General of the People's Republic of China in Barcelona": "224",
  "驻西班牙王国大使馆 Embassy of the People's Republic of China in Spain": "225",
  "驻希腊共和国大使馆 Embassy of the People's Republic of China in the Hellenic Republic": "226",
  "驻新加坡共和国大使馆 Embassy of the People's Republic of China in the Republic of Singapore": "227",
  "驻奥克兰总领事馆 Consulate-General of the People's Republic of China in Auckland": "228",
  "驻克赖斯特彻奇总领事馆 Consulate-General of the People's Republic of China in Christchurch": "229",
  "驻新西兰大使馆 Embassy of the People's Republic of China in New Zealand": "230",
  "驻匈牙利大使馆 Embassy of the People's Republic of China in Hungary": "231",
  "驻阿拉伯叙利亚共和国大使馆 Embassy of the People's Republic of China in the Syrian Arab Republic": "232",
  "驻牙买加大使馆 Embassy of the People's Republic of China in Jamaica": "233",
  "驻亚美尼亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Armenia": "234",
  "驻伊拉克共和国大使馆 Embassy of the People's Republic of China in the Republic of Iraq": "235",
  "驻伊朗伊斯兰共和国大使馆 Embassy of the People's Republic of China in the Islamic Republic of Iran": "236",
  "驻以色列国大使馆 Embassy of the People's Republic of China in the State of Israel": "237",
  "驻佛罗伦萨总领事馆 Consulate-General of the People's Republic of China in Firenze": "238",
  "驻米兰总领事馆 Consulate-General of the People's Republic of China in Milano": "239",
  "驻意大利共和国大使馆 Embassy of the People's Republic of China in the Republic of Italy": "240",
  "驻加尔各答总领事馆 Consulate-General of the People's Republic of China in Kolkata": "241",
  "驻孟买总领事馆 Consulate-General of the People's Republic of China in Mumbai": "242",
  "驻印度共和国大使馆 Embassy of the People's Republic of China in India": "243",
  "驻登巴萨总领事馆 Consulate-General of the People's Republic of China in Denpasar": "244",
  "驻棉兰总领事馆 Consulate-General of the People's Republic of China in Medan": "245",
  "驻泗水总领事馆 Consulate-General of the People's Republic of China in Sarabaya": "246",
  "驻印度尼西亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Indonesia": "247",
  "驻爱丁堡总领事馆 Consulate-General of the People's Republic of China in Edinburgh": "248",
  "驻曼彻斯特总领事馆 Consulate-General of the People's Republic of China in Manchester": "249",
  "驻大不列颠及北爱尔兰联合王国大使馆 Embassy of the People's Republic of China in The United Kingdom of t Great Britain And Northern Ireland": "250",
  "驻约旦哈希姆王国大使馆 Embassy of the People's Republic of China in the Hashemite Kingdom of Jordan": "251",
  "驻胡志明市总领事馆 Consulate-General of the People's Republic of China in Ho Chi Minh City": "252",
  "驻越南社会主义共和国大使馆 Embassy of the People's Republic of China in the Socialist Republic of Vietnam": "253",
  "驻赞比亚共和国大使馆 Embassy of the People's Republic of China in the Republic of Zambia": "254",
  "驻乍得共和国大使馆 Embassy of the People's Republic of China in the Republic of Chad": "255",
  "驻伊基克总领事馆 Consulate-General of the People's Republic of China in Iquique": "256",
  "驻智利共和国大使馆 Embassy of the People's Republic of China in the Republic of Chile": "257",
  "驻中非共和国大使馆 Embassy of the People's Republic of China in the Republic of Central Africa": "258",
  "驻伊尔库茨克总领事馆 Consulate-General of the People's Republic of China in Irkutsk": "259",
  "驻奥什总领事馆 Consulate-General of the People's Republic of China in Osh": "260",
  "驻埃尔比勒总领事馆 Consulate-General of the People's Republic of China in Erbil": "261",
  "驻贝尔法斯特总领事馆 Consulate-General of the People's Republic of China in Belfast": "262",
  "驻岘港总领事馆 Consulate-General of the People's Republic of China in Da Nang": "263",
  "驻圣马力诺共和国大使馆 Embassy of The People's Republic of China in the Republic of San Marino": "264",
  "驻索马里联邦共和国大使馆 Embassy of the People's Republic of China in the Federal Republic of Somalia": "265",
  "驻利比亚国大使馆 Embassy of the People's Republic of China in State of Libya": "266",
  "驻冈比亚共和国大使馆 Embassy of the People's Republic of China in the Republic of The Gambia": "267",
  "驻布基纳法索大使馆 Embassy of the People's Republic of China in the Burkina Faso": "268",
  "驻也门共和国大使馆 Embassy of the People's Republic of China in the Republic of Yemen": "269",
  "中国澳门 Macau, China": "270",
  "中国台湾 Taiwan, China": "271",
  "中国 China": "272",
  "中国香港 HONG KONG, CHINA": "273",
};
const nativeLanguage={  // 英语 English
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