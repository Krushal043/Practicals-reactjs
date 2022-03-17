export interface Signup {
  image:string | null | Blob | MediaSource;
  name: string;
  email: string;
  phone: string | number;
  password: string;
  confirmPassword: string;
  isLoggedIn: boolean;
}

export interface SignUpAction  {
  type: string;
  user:Signup
};

export type Action = SignUpAction;

export interface Auth {
  component : React.FC
}