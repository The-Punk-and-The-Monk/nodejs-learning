import { IncomingMessage, ServerResponse } from 'http';
import { PostDatas } from 'src/interface/client';
import { SessionValue } from 'src/interface/user';
import { URLSearchParams } from 'url';

export interface ReqExtended extends IncomingMessage {
    query?: URLSearchParams,
    path?: string,
    body?: PostDatas,
    cookie?: Record<string, string>,
    session?: SessionValue
}

export type ResExtended = ServerResponse
