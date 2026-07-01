export default class Validator {
  private static readonly regexName = /^[a-zA-Zа-яА-ЯёЁ0-9_.\s-]{2,50}$/;
  private static readonly regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly regexPassword = /^.{8,50}$/;
  public static userValidate(
    name: string,
    email: string,
    passport: string,
  ): boolean {
    if (!name || !email || !passport) return false;
    return (
      this.regexName.test(name) &&
      this.regexEmail.test(email) &&
      this.regexPassword.test(passport)
    );
  }
  public static userValidateLogin(email: string, passport: string): boolean {
    if (!email || !passport) return false;
    return this.regexEmail.test(email) && this.regexPassword.test(passport);
  }
}
