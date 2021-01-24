interface PhoneNumberDictionary {
    [phone: string]: { //여러가지의 키값
      num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
}

export { Contact, PhoneType };