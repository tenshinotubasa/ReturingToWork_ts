import { ACT_UPDATE_PERSON_INFO, ACT_UPDATE_TOUCH_HIST, ACT_UPDATE_BACK_INFO } from '../action/actionTypes'
import { MyAction } from '../action/actionCreators'

export interface IPersonState {
    name: string, depart: string, phoneNum: string, addr: string, pos: string
}

export interface ITouchState {
    touch: string[], health: string[], other: string
}

export interface IBackState {
    backDate: string, transport: string, viaWH: string, other: string
}

export interface IWholeState {
    personalInf: IPersonState,
    touchHist: ITouchState,
    backInfo: IBackState,
    pStatus: boolean,
    tStatus: boolean,
    bStatus: boolean
}

const defaultState: IWholeState = {
    personalInf: { name: '', depart: '', phoneNum: '', addr: '', pos: '' },
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