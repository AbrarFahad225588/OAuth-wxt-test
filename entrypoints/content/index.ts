export default defineContentScript({
  // matches: ["http://admission.uestc.edu.cn/*"],
  matches: ["<all_urls>"],

  main() {

    // =========================================================
    // TEST DATA OBJECT
    // =========================================================

    const applicant = {
      personalInfo: {
        passportPhoto:
          "https://picsum.photos/300/420.jpg",

        passportFamilyName: "HOQUE",
        passportGivenName: "FAHAD",
        fullPassportName: "MD. MOTAIRUL HOQUE FAHAD",

        gender: "1", // Male = 1 | Female = 0

        maritalStatus: "1", // Single

        religion: "2", // Islam

        occupation: "2", // Student

        employerOrInstitute:
          "Hajee Mohammad Danesh Science and Technology University",

        yearsLivingInHomeCountry: "22",

        isEthnicChinese: false,

        motherLanguage: "82", // Bengali

        birthPlace: "Dhaka",

        birthCountry: "144", // Bangladesh

        birthDate: "2003-01-01",

        nationality: "144", // Bangladesh

        passportNumber: "A12345678",

        passportIssueDate: "2020-01-01",

        passportExpiryDate: "2030-01-01",
      },
    };

    // =========================================================
    // SELECTORS
    // =========================================================

    const section1 = {
      file_Photo:
        'input[type="file"][name="file_Photo"]',

      txtFirstNameNew:
        'input[type="text"][id="txtFirstNameNew"]',

      txtLastNameNew:
        'input[type="text"][id="txtLastNameNew"]',

      txtPassportNameNew:
        'input[type="text"][id="txtPassportNameNew"]',

      txtBirthdayNew:
        'input[type="text"][id="txtBirthdayNew"]',

      txtBirthPlaceNew:
        'input[type="text"][id="txtBirthPlaceNew"]',

      txtPassportNoNew:
        'input[type="text"][id="txtPassportNoNew"]',

      txtPassportExpireatNew:
        'input[type="text"][id="txtPassportExpireatNew"]',

      txtPassportDateOfIssueNew:
        'input[type="text"][id="txtPassportDateOfIssueNew"]',

      ddlCountry110:
        'select[id="ddlCountry110_ddlCountryID"]',

      ddlSex110:
        'select[id="ddlSex110_ddlSex"]',

      confirmPassportButton:
        "a.UpRecognizePassport",

      "ctl00$ContentPlaceHolder1$txtFamilyName":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtFamilyName"]',

      FamilyName:
        'input[type="checkbox"][name="FamilyName"]',

      "ctl00$ContentPlaceHolder1$txtGivenName":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtGivenName"]',

      GivenName:
        'input[type="checkbox"][name="GivenName"]',

      "ctl00$ContentPlaceHolder1$txtPassportName":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPassportName"]',

      ChangePassportName:
        'a[id="ChangePassportName"]',

      "ctl00$ContentPlaceHolder1$_ddlSex$ddlSex":
        'select[name="ctl00$ContentPlaceHolder1$_ddlSex$ddlSex"]',

      rd_sex_female:
        'input[type="radio"][name="rd_sex"][value="0"]',

      rd_sex_male:
        'input[type="radio"][name="rd_sex"][value="1"]',

      "ctl00$ContentPlaceHolder1$_ddlMaritalStatus$ddlMaritalStatus":
        'select[name="ctl00$ContentPlaceHolder1$_ddlMaritalStatus$ddlMaritalStatus"]',

      "ctl00$ContentPlaceHolder1$_ddlReligion$ddlReligion":
        'select[name="ctl00$ContentPlaceHolder1$_ddlReligion$ddlReligion"]',

      "ctl00$ContentPlaceHolder1$txtReligion":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtReligion"]',

      "ctl00$ContentPlaceHolder1$_ddlOccupation$ddlOccupation":
        'select[name="ctl00$ContentPlaceHolder1$_ddlOccupation$ddlOccupation"]',

      "ctl00$ContentPlaceHolder1$txtOccupationOther":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtOccupationOther"]',

      "ctl00$ContentPlaceHolder1$txtEorI":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtEorI"]',

      "ctl00$ContentPlaceHolder1$txtLifeYears":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtLifeYears"]',

      rd_IsEthnicChinese_yes:
        'input[type="radio"][name="rd_IsEthnicChinese"][value="1"]',

      rd_IsEthnicChinese_no:
        'input[type="radio"][name="rd_IsEthnicChinese"][value="0"]',

      "ctl00$ContentPlaceHolder1$_ddlMotherlang$ddlMotherlang":
        'select[name="ctl00$ContentPlaceHolder1$_ddlMotherlang$ddlMotherlang"]',

      "ctl00$ContentPlaceHolder1$txtPlaceofbirth":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtPlaceofbirth"]',

      "ctl00$ContentPlaceHolder1$ddlCountry1$ddlCountryID":
        'select[name="ctl00$ContentPlaceHolder1$ddlCountry1$ddlCountryID"]',

      "ctl00$ContentPlaceHolder1$txtDateofbirth":
        'input[type="text"][name="ctl00$ContentPlaceHolder1$txtDateofbirth"]',

      "ctl00$ContentPlaceHolder1$ddlCountry$ddlCountryID":
        'select[name="ctl00$ContentPlaceHolder1$ddlCountry$ddlCountryID"]',
    };

    // =========================================================
    // HELPERS
    // =========================================================

    function triggerEvents(el: HTMLElement) {
      el.dispatchEvent(
        new Event("input", { bubbles: true })
      );

      el.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }

    function wait(ms: number) {
      return new Promise(resolve =>
        setTimeout(resolve, ms)
      );
    }

    function randomDelay(
      min = 50,
      max = 150
    ) {
      return (
        Math.floor(
          Math.random() * (max - min + 1)
        ) + min
      );
    }

    async function simulateMouse(
      el: HTMLElement
    ) {
      el.dispatchEvent(
        new MouseEvent("mouseover", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      el.dispatchEvent(
        new MouseEvent("mouseenter", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      el.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      el.dispatchEvent(
        new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      await wait(randomDelay(20, 80));

      el.dispatchEvent(
        new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      el.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
    }

    function setNativeValue(
      el:
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement,
      value: string
    ) {
      let prototype: any;

      if (el instanceof HTMLTextAreaElement) {
        prototype =
          HTMLTextAreaElement.prototype;
      } else if (
        el instanceof HTMLSelectElement
      ) {
        prototype =
          HTMLSelectElement.prototype;
      } else {
        prototype = HTMLInputElement.prototype;
      }

      const descriptor =
        Object.getOwnPropertyDescriptor(
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
      el:
        | HTMLInputElement
        | HTMLTextAreaElement,
      text: string
    ) {
      el.focus();

      await simulateMouse(el);

      setNativeValue(el, "");

      for (const char of text) {
        const currentValue =
          el.value + char;

        el.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: char,
            bubbles: true,
          })
        );

        el.dispatchEvent(
          new InputEvent("beforeinput", {
            bubbles: true,
            cancelable: true,
            inputType: "insertText",
            data: char,
          })
        );

        setNativeValue(el, currentValue);

        el.dispatchEvent(
          new InputEvent("input", {
            bubbles: true,
            inputType: "insertText",
            data: char,
          })
        );

        el.dispatchEvent(
          new KeyboardEvent("keyup", {
            key: char,
            bubbles: true,
          })
        );

        await wait(
          randomDelay(40, 120)
        );
      }

      el.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );

      el.blur();
    }

    async function setInput(
      selector: string,
      value:
        | string
        | number
        | undefined
    ) {
      if (
        value === undefined ||
        value === ""
      )
        return;

      const input =
        document.querySelector(
          selector
        ) as HTMLInputElement;

      if (!input) {
        console.warn(
          "❌ Input not found:",
          selector
        );
        return;
      }

      input.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      await wait(
        randomDelay(100, 300)
      );

      await humanType(
        input,
        String(value)
      );

      console.log(
        "✅ Filled:",
        selector,
        value
      );
    }

    async function setCheckOrRadio(
      selector: string,
      shouldCheck: boolean
    ) {
      if (!shouldCheck) return;

      const el =
        document.querySelector(
          selector
        ) as HTMLInputElement;

      if (!el) {
        console.warn(
          "❌ Element not found:",
          selector
        );
        return;
      }

      if (el.checked) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      await wait(
        randomDelay(100, 200)
      );

      await simulateMouse(el);

      el.checked = true;

      triggerEvents(el);

      console.log(
        "✅ Checked:",
        selector
      );
    }

    async function setSelect(
      selector: string,
      value: string | undefined
    ) {
      if (!value) return;

      const select =
        document.querySelector(
          selector
        ) as HTMLSelectElement;

      if (!select) {
        console.warn(
          "❌ Select not found:",
          selector
        );
        return;
      }

      select.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      await simulateMouse(select);

      await wait(
        randomDelay(50, 150)
      );

      select.focus();

      setNativeValue(select, value);

      triggerEvents(select);

      select.blur();

      console.log(
        "✅ Select set:",
        selector,
        value
      );
    }

    async function clickElement(
      selector: string
    ) {
      const el =
        document.querySelector(
          selector
        ) as HTMLElement;

      if (!el) {
        console.warn(
          "❌ Click element not found:",
          selector
        );
        return;
      }

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      await wait(
        randomDelay(100, 300)
      );

      await simulateMouse(el);

      console.log(
        "✅ Clicked:",
        selector
      );
    }

    // =========================================================
    // PHOTO UPLOAD
    // =========================================================

    async function setPhotoFromUrl(
      url: string,
      selector: string
    ) {
      const fileInput =
        document.querySelector(
          selector
        ) as HTMLInputElement;

      if (!fileInput) return;

      try {
        const response = await fetch(url);

        if (!response.ok)
          throw new Error(
            `HTTP ${response.status}`
          );

        const blob =
          await response.blob();

        const img = new Image();

        const objectUrl =
          URL.createObjectURL(blob);

        await new Promise(
          (resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = objectUrl;
          }
        );

        const targetWidth = 300;
        const targetHeight = 420;

        const canvas =
          document.createElement("canvas");

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx =
          canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(
            img,
            0,
            0,
            targetWidth,
            targetHeight
          );
        }

        const resizedBlob =
          await new Promise<Blob | null>(
            resolve =>
              canvas.toBlob(
                b => resolve(b),
                "image/jpeg",
                0.95
              )
          );

        if (!resizedBlob)
          throw new Error(
            "Canvas conversion failed"
          );

        const file = new File(
          [resizedBlob],
          "passport_photo.jpg",
          {
            type: "image/jpeg",
          }
        );

        const dt = new DataTransfer();

        dt.items.add(file);

        fileInput.files = dt.files;

        fileInput.dispatchEvent(
          new Event("change", {
            bubbles: true,
          })
        );

        URL.revokeObjectURL(objectUrl);

        console.log(
          "✅ Passport photo uploaded"
        );
      } catch (err) {
        console.error(
          "❌ Photo upload failed:",
          err
        );
      }
    }

    // =========================================================
    // MAIN FILL FUNCTION
    // =========================================================

    async function fillForm() {

      console.log(
        "🚀 Starting Autofill..."
      );

      const data =
        applicant.personalInfo;

      // =====================================================
      // PASSPORT IMAGE UPLOAD
      // =====================================================

      await setPhotoFromUrl(
        data.passportPhoto,
        section1.file_Photo
      );

      await wait(3000);

      // =====================================================
      // RECOGNIZED INFORMATION
      // =====================================================

      await setInput(
        section1.txtFirstNameNew,
        data.passportFamilyName
      );

      await setInput(
        section1.txtLastNameNew,
        data.passportGivenName
      );

      await setInput(
        section1.txtPassportNameNew,
        data.fullPassportName
      );

      await setInput(
        section1.txtBirthdayNew,
        data.birthDate
      );

      await setInput(
        section1.txtBirthPlaceNew,
        data.birthPlace
      );

      await setInput(
        section1.txtPassportNoNew,
        data.passportNumber
      );

      await setInput(
        section1.txtPassportDateOfIssueNew,
        data.passportIssueDate
      );

      await setInput(
        section1.txtPassportExpireatNew,
        data.passportExpiryDate
      );

      await setSelect(
        section1.ddlCountry110,
        data.nationality
      );

      await setSelect(
        section1.ddlSex110,
        data.gender
      );

      // =====================================================
      // CONFIRM PASSPORT
      // =====================================================

      await clickElement(
        section1.confirmPassportButton
      );

      await wait(3000);

      // =====================================================
      // MAIN FORM
      // =====================================================

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtFamilyName"
        ],
        data.passportFamilyName
      );

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtGivenName"
        ],
        data.passportGivenName
      );

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtPassportName"
        ],
        data.fullPassportName
      );

      // =====================================================
      // GENDER
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$_ddlSex$ddlSex"
        ],
        data.gender
      );

      if (data.gender === "1") {
        await setCheckOrRadio(
          section1.rd_sex_male,
          true
        );
      } else {
        await setCheckOrRadio(
          section1.rd_sex_female,
          true
        );
      }

      // =====================================================
      // MARITAL STATUS
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$_ddlMaritalStatus$ddlMaritalStatus"
        ],
        data.maritalStatus
      );

      // =====================================================
      // RELIGION
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$_ddlReligion$ddlReligion"
        ],
        data.religion
      );

      // =====================================================
      // OCCUPATION
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$_ddlOccupation$ddlOccupation"
        ],
        data.occupation
      );

      // =====================================================
      // EMPLOYER / UNIVERSITY
      // =====================================================

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtEorI"
        ],
        data.employerOrInstitute
      );

      // =====================================================
      // YEARS IN COUNTRY
      // =====================================================

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtLifeYears"
        ],
        data.yearsLivingInHomeCountry
      );

      // =====================================================
      // ETHNIC CHINESE
      // =====================================================

      if (data.isEthnicChinese) {
        await setCheckOrRadio(
          section1.rd_IsEthnicChinese_yes,
          true
        );
      } else {
        await setCheckOrRadio(
          section1.rd_IsEthnicChinese_no,
          true
        );
      }

      // =====================================================
      // MOTHER LANGUAGE
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$_ddlMotherlang$ddlMotherlang"
        ],
        data.motherLanguage
      );

      // =====================================================
      // BIRTH PLACE
      // =====================================================

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtPlaceofbirth"
        ],
        data.birthPlace
      );

      // =====================================================
      // BIRTH COUNTRY
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$ddlCountry1$ddlCountryID"
        ],
        data.birthCountry
      );

      // =====================================================
      // DATE OF BIRTH
      // =====================================================

      await setInput(
        section1[
          "ctl00$ContentPlaceHolder1$txtDateofbirth"
        ],
        data.birthDate
      );

      // =====================================================
      // NATIONALITY
      // =====================================================

      await setSelect(
        section1[
          "ctl00$ContentPlaceHolder1$ddlCountry$ddlCountryID"
        ],
        data.nationality
      );

      console.log(
        "🎉 SECTION 1 AUTOFILL COMPLETED"
      );
    }

    // =========================================================
    // LISTENER
    // =========================================================

    chrome.runtime.onMessage.addListener(
      (message) => {
        console.log(
          "📩 Message received:",
          message
        );

        if (
          message.type === "FILL_FORM"
        ) {
          fillForm();
        }
      }
    );
  },
});