export interface User {
    id: string;
    name: string;
    email: string;
    password: string; // hashed
  }
  
  export const users: User[] = [];
  