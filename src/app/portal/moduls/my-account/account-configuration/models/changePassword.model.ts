export class ChangePassword {
    public oldPassword: string | null;
    public newPassword: string | null;
    public userName: string | null;
    public confirmPassword: string | null;
  
    constructor(model: any = null) {
      if (model) {
        this.oldPassword = model.oldPassword;
        this.newPassword = model.newPassword;
        this.userName = model.userName;
        this.confirmPassword = model.confirmPassword;
      }
    }
  }
  