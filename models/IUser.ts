import { IProperty } from "./Iproperty";

export interface User {
  email: string;
  username: string;
  image: string;
  bookmarks: IProperty[];
}
