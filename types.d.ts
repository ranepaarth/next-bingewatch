type Locales = "en" | "hi";
interface FormData {
  email: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface GetStartedData {
  email: string;
  isLoggedIn: boolean;
}
