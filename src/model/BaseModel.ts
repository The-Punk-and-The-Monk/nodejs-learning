import { BaseModelParams, ModelData } from "./interface";

export class BaseModel {
    public data: ModelData | undefined;

    public message: string | undefined;

    constructor(params: BaseModelParams) {
        this.data = params.data;
        this.message = params.message;
    }
}
