//                     AmtiXDev CopyRight                     //

module.exports = {
    specific: function (args, args2, status = false) {
      if (!args || !args2) {
        throw new Error("Please provide two numbers");
      }
//                     AmtiXDev CopyRight                     //
      let number = 0;
      let number2 = 0;
  
      if (status) {
        number = convertToNumber(args);
        number2 = convertToNumber(args2);
      } else {
        number = args;
        number2 = args2;
      }
  //                     AmtiXDev CopyRight                     //
      if (isNaN(number) || isNaN(number2)) {
        throw new Error("Please provide valid numbers");
      }
  
      //                     AmtiXDev CopyRight                     //
      const taxnumber = calculateTax(number);
      const taxx = calculateTax(number + number2);
  
      return {
        tax: taxnumber,
        difference: taxnumber - number,
        With: taxx,
      };
    },
  //                     AmtiXDev CopyRight                     //
    tax: function (args, status = false) {
      if (!args) {
        throw new Error("Please provide a number");
      }
  //                     AmtiXDev CopyRight                     //
      let number = 0;
  //                     AmtiXDev CopyRight                     //
      if (status) {
        number = convertToNumber(args);
      } else {
        number = args;
      }
//                     AmtiXDev CopyRight                     //
      if (isNaN(number)) {
        throw new Error("Please provide a valid number (e.g., 100k or 1.7m)");
      }
  //                     AmtiXDev CopyRight                     //
      const taxnumber = calculateTax(number);
  //                     AmtiXDev CopyRight                     //
      return {
        tax: taxnumber,
        difference: taxnumber - number,
      };
    },
  };
  //                     AmtiXDev CopyRight                     //
  function convertToNumber(value) {
    const suffixes = {
      k: 1e3,
      m: 1e6,
      b: 1e9,
    };
  //                     AmtiXDev CopyRight                     //
    const match = value.match(/^([\d.]+)([kmb])?$/i);
    if (!match) {
      throw new Error("Invalid number format for more help contact amtix here : https://discord.gg/amtix-1k-1097821881245126768");
    }
  //                     AmtiXDev CopyRight                     //
    const number = parseFloat(match[1]);
    const suffix = match[2];
  //                     AmtiXDev CopyRight                     //
    if (suffix && suffixes.hasOwnProperty(suffix.toLowerCase())) {
      return number * suffixes[suffix.toLowerCase()];
    }
  //                     AmtiXDev CopyRight                     //
    return number;
  }
  //                     AmtiXDev CopyRight                     //
  function calculateTax(amount) {
    return Math.floor(amount * (20 / 19) + 1);
  }