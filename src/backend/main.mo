import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  type MenuItem = {
    name : Text;
    price : Float;
  };

  module MenuItem {
    public func fromTuple(tuple : (Text, MenuItem)) : MenuItem {
      tuple.1;
    };
  };

  type ContactInfo = {
    address : Text;
    phone : Text;
    hours : Text;
    email : Text;
  };

  let initialMenu : [(Text, MenuItem)] = [
    ("chickenBiryani", { name = "Chicken Biryani"; price = 5.0 }),
    ("beefCurry", { name = "Beef Curry"; price = 6.0 }),
    ("friedRice", { name = "Fried Rice"; price = 4.0 }),
    ("chickenBurger", { name = "Chicken Burger"; price = 4.0 }),
    ("pizza", { name = "Pizza"; price = 7.0 }),
    ("frenchFries", { name = "French Fries"; price = 2.0 }),
    ("sandwich", { name = "Sandwich"; price = 3.0 }),
    ("coldDrinks", { name = "Cold Drinks"; price = 1.0 }),
    ("freshJuice", { name = "Fresh Juice"; price = 2.0 }),
    ("water", { name = "Water"; price = 0.5 }),
  ];

  var contactInfo : ContactInfo = {
    address = "Your Street Name, Your Area, Your City";
    phone = "+880 1XXXXXXXXX";
    hours = "Everyday: 10:00 AM – 10:00 PM";
    email = "yourrestaurant@email.com";
  };

  let adminMap = Map.empty<Principal, Bool>();

  public shared ({ caller }) func addAdmin(admin : Principal) : async () {
    if (caller != admin) {
      Runtime.trap("Only the canister creator can add admins");
    };
    adminMap.add(admin, true);
  };

  func isAdmin(caller : Principal) : Bool {
    adminMap.containsKey(caller);
  };

  let menuItems = Map.fromIter<Text, MenuItem>(
    initialMenu.values(),
  );

  public query func getMenuItems() : async [MenuItem] {
    menuItems.values().toArray();
  };

  public query func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  public shared ({ caller }) func updateMenuItem(name : Text, price : Float) : async () {
    if (not isAdmin(caller)) {
      Runtime.trap("Only admin can update menu items");
    };
    switch (menuItems.get(name)) {
      case (null) { Runtime.trap("Menu item does not exist") };
      case (?item) {
        let updatedItem = { name = item.name; price };
        menuItems.add(name, updatedItem);
      };
    };
  };

  public shared ({ caller }) func updateContactInfo(address : Text, phone : Text, hours : Text, email : Text) : async () {
    if (not isAdmin(caller)) {
      Runtime.trap("Only admin can update contact info");
    };
    contactInfo := {
      address;
      phone;
      hours;
      email;
    };
  };
};
