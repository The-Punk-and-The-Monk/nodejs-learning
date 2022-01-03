import { BaseModel } from "./BaseModel";
import { BaseModelParams } from "./interface";


export class SuccessModel extends BaseModel {
    public errorNumber: number;

    constructor(params: BaseModelParams) {
        super(params);
        this.errorNumber = 0;
    }
}
