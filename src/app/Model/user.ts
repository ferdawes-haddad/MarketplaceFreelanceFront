import { Roleenum } from "./roleenum";

export class User {

  id : number;
  nom : string;
  prenom : string;
  telephone : string;
  email : string;
  password : string;
  confirmPassword : string;
  role : Roleenum;
  cv : string;
  adresse : string;
  image: string;

}
