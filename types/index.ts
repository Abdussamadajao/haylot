export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  name: string;
  password: string;
  referral?: string;
  username: string;
  about_us: string;
  country: string;
}
