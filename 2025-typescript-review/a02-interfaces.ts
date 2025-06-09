// Interface 
// interface is TS specific syntax for annotating objects
interface IAccount {
  name: string,
  balance: number,
  status?: string   // ? tells TS this is optional
// interface can also have a method
  deposit?: () => void  // optional method that does not return value
};

const iaccount: IAccount = {
  name: 'Jeff',
  balance: 10
};

// array of IAccount
let iaccounts: IAccount[];

