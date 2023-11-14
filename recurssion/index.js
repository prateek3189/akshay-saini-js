let user = {
  name: "Prateek",
  address: {
    poersonal: {
      city: "Betul",
      area: "Shivaji Nagar",
    },
    office: {
      city: "Pune",
      area: "Viman Nagar",
    },
  },
};

let final_object = {
  user_name: "Prateek",
  user_address_personal_city: "Betul",
  user_address_personal_area: "Shivaji Nagar",
  user_address_office_city: "Pune",
  user_address_office_area: "Viman Nagar",
};

let result = {};
let magic = function (obj, parent) {
  for (let key in obj) {
    const key_name = parent + "_" + key;
    if (typeof obj[key] === "object") {
      magic(obj[key], key_name);
    } else {
      result[key_name] = obj[key];
    }
  }
  return result;
};

console.log(magic(user, "user"));
