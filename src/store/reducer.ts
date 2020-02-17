import { ACT_UPDATE_PERSON_INFO, ACT_UPDATE_TOUCH_HIST, ACT_UPDATE_BACK_INFO } from '../action/actionTypes'
import { MyAction } from '../action/actionCreators'

export interface IWholeState {
    personalInf: { name: string, depart: string, phoneName: string, addr: string, pos: string },
    touchHist: { touch: string[], health: string[], other: string },
    backInfo: { backDate: string, transport: string, viaWH: string, other: string },
    pStatus: boolean,
    tStatus: boolean,
    bStatus: boolean
}

const defaultState: IWholeState = {
    personalInf: { name: '', depart: '', phoneName: '', addr: '', pos: '' },
    touchHist: { touch: [], health: [], other: '' },
    backInfo: { backDate: '', transport: '', viaWH: '', other: '' },
    pStatus: false,
    tStatus: false,
    bStatus: false
}

export default (state = defaultState, action: MyAction) => {
    if (action.type === ACT_UPDATE_PERSON_INFO) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.personalInf = action.value;
        newState.pStatus = action.status;
        return newState;
    }

    if (action.type === ACT_UPDATE_TOUCH_HIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.touchHist = action.value;
        newState.tStatus = action.status;
        return newState;
    }

    if (action.type === ACT_UPDATE_BACK_INFO) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.backInfo = action.value;
        newState.bStatus = action.status;
        return newState;
    }
    return state;
}