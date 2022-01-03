import { BaseModel } from "./BaseModel";
import { BaseModelParams } from "./interface";


export class ErrorModel extends BaseModel {
    public errorNumber: number;

    constructor(params: BaseModelParams) {
        super(params);
        this.errorNumber = 1;
    }
}
