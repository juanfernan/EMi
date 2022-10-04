export class VerifyCode {
    user: string;
    code: string;
    
    constructor(model: any = null) {
        if (model) {
            this.user = model.user;
            this.code = model.code;
        }
    }
}