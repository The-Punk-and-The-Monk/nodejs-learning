import { IncomingMessage, ServerResponse } from 'http';
import { PostDatas } from 'src/interface/client';
import { URLSearchParams } from 'url';

export interface ReqExtended extends IncomingMessage {
    query?: URLSearchParams,
    path?: string,
    body?: PostDatas
}

export type ResExtended = ServerResponse
