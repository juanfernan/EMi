export abstract class Regex {
    public static min8Characters = /^.{8,100}$/;
    public static upperCaseCharacter = /[A-Z]{1,1}/;
    public static min1Number = /[0-9]{1,}/;
    public static specialCharacter = /[^\d\w\s/ñ]{1,}/;
  }