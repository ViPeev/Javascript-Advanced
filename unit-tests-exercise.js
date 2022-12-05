function testHttpObject(httpObject) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uriRegex = /^[A-Za-z0-9\.]*$/;
  let messageRegex = /^[^\<\>\\\&\'\"]*$/;

  if (
    !httpObject.hasOwnProperty("method") ||
    !validMethods.includes(httpObject.method)
  ) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (
    !httpObject.hasOwnProperty("uri") ||
    !httpObject.uri.length ||
    uriRegex.exec(httpObject.uri) == null
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (
    !httpObject.hasOwnProperty("version") ||
    !validVersions.includes(httpObject.version)
  ) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (
    !httpObject.hasOwnProperty("message") ||
    messageRegex.exec(httpObject.message) == null
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return httpObject;
}

describe("Testing isOddOrEven", () => {
  it("Should return undefined if input is not a string", () => {
    assert.isUndefined(isOddOrEven({ test: "1" }));
  });
  it("Should return undefined if input is not a string", () => {
    assert.isUndefined(isOddOrEven(10));
  });
  it("Should return even if supplied string's length is an even number", () => {
    assert.equal(isOddOrEven("haha"), "even");
  });
  it("Should return odd if supplied string's length is an odd number", () => {
    assert.equal(isOddOrEven("hah"), "odd");
  });
});

describe("Testing lookupChar's functionality", () => {
  it("should return undefined if parameter positions are swapped", () => {
    assert.isUndefined(lookupChar(2, "haha"));
  });
  it("should return undefined if index is not an integer", () => {
    assert.isUndefined(lookupChar("testing", 1.2));
  });
  it("should return undefined if first parameter is not a string", () => {
    assert.isUndefined(lookupChar([1, 2, 3], 1));
  });
  it("should return undefined if first parameter is not a string", () => {
    assert.isUndefined(lookupChar({}, 1));
  });
  it("should return Incorrect index if index is out of bounds", () => {
    assert.equal(lookupChar("test", 5), "Incorrect index");
  });
  it("should return Incorrect index if index is negative", () => {
    assert.equal(lookupChar("test", -5), "Incorrect index");
  });
  it("should return correct character if index is correct and a string is passed", () => {
    assert.equal(lookupChar("test", 2), "s");
  });
});

describe("mathEnforce function tests", () => {
  describe("add five function tests", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.addFive("TEST") === undefined);
    });
    it("Should return undefined with an array", () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });
    it("Should return undefined with an object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.addFive(null) === undefined);
    });
    it("Positive integer 5", () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it("Negative number 5", () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });
    it("Decimal number 5", () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });
  });
  describe("subtract ten function tests", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.subtractTen("TEST") === undefined);
    });
    it("Should return undefined with an array", () => {
      assert(mathEnforcer.subtractTen([]) === undefined);
    });
    it("Should return undefined with an object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.subtractTen(null) === undefined);
    });
    it("Positive integer 5", () => {
      assert(mathEnforcer.subtractTen(5) === -5);
    });
    it("Negative number 5", () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });
    it("Decimal number 5", () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });
  describe("sum function tests", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.sum("", 20) === undefined);
    });
    it("Should return undefined with an array", () => {
      assert(mathEnforcer.sum(20, "20") === undefined);
    });

    it("Positive integer 5", () => {
      assert(mathEnforcer.sum(10, 20) === 30);
    });
    it("Negative number 5", () => {
      assert(mathEnforcer.sum(-10, -2.5) === -12.5);
    });
    it("Decimal number 5", () => {
      assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
    });
  });
});

function notify(message) {
  console.log("todo");
  // TODO:

  let container = document.getElementById("notification");
  container.innerText = message;
  container.style.display = "block";
  container.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });
}

function validate() {
  // TODO

  let mailRegex = /^[a-z]+\@[a-z]+\.[a-z]+$/;
  let mailInput = document.getElementById("email");

  mailInput.addEventListener("change", () => {
    if (mailRegex.exec(mailInput.value) == null) {
      mailInput.classList.add("error");
    } else {
      mailInput.classList.remove("error");
    }
  });
}

function validate() {
  // TODO

  let regex = {
    username: /^[A-Za-z0-9]{3,20}$/,
    password: /^\w{5,15}$/,
    mail: /^[^@.]+@[^@]*\.[^@]*$/,
  };

  let submitButton = document.getElementById("submit");
  let companyInfo = document.getElementById("companyInfo");
  let validContainer = document.getElementById("valid");

  let [
    usernameInput,
    emailInput,
    passwordInput,
    confirmPassInput,
    checkBox,
    companyNumber,
  ] = Array.from(document.querySelectorAll("input"));

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let validateUsername = regex.username.exec(usernameInput.value);
    let validateEmail = regex.mail.exec(emailInput.value);
    let validatePassword = regex.password.exec(passwordInput.value);
    let validateConfirmPass = regex.password.exec(confirmPassInput.value);
    let validFlag = true;

    if (validateUsername === null) {
      usernameInput.style.borderColor = "red";
      validFlag = false;
    } else {
      usernameInput.style.borderColor = "";
    }

    if (validateEmail === null) {
      emailInput.style.borderColor = "red";
      validFlag = false;
    } else {
      emailInput.style.borderColor = "";
    }

    if (validatePassword === null) {
      passwordInput.style.borderColor = "red";
      validFlag = false;
    } else {
      passwordInput.style.borderColor = "";
    }

    if (
      validateConfirmPass === null ||
      passwordInput.value !== confirmPassInput.value
    ) {
      confirmPassInput.style.borderColor = "red";
      passwordInput.style.borderColor = "red";
      validFlag = false;
    } else {
      confirmPassInput.style.borderColor = "";
      passwordInput.style.borderColor = "";
    }

    if (checkBox.checked) {
      let validNumber =
        Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999
          ? false
          : true;

      if (!validNumber) {
        companyNumber.style.borderColor = "red";
        validFlag = false;
      } else {
        companyNumber.style.borderColor = "";
      }
    }

    if (validFlag) {
      validContainer.style.display = "block";
    } else {
      validContainer.style.display = "none";
    }
  });
}
