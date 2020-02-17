
import { ACT_UPDATE_PERSON_INFO, ACT_UPDATE_TOUCH_HIST, ACT_UPDATE_BACK_INFO } from './actionTypes'

export interface MyAction {
    type: string,
    value: any,
    status: boolean
}

export const updatePersonalInfo = (per: any, status: boolean) => {
    const action: MyAction = { type: ACT_UPDATE_PERSON_INFO, value: per, status: status };
    return action;
}

export const updateTouchHist = (hist: any, status: boolean) => {
    const action: MyAction = { type: ACT_UPDATE_TOUCH_HIST, value: hist, status: status };
    return action;
}

export const updateBackInfo = (back: any, status: boolean) => {
    const action: MyAction = { type: ACT_UPDATE_BACK_INFO, value: back, status: status };
    return action;
}