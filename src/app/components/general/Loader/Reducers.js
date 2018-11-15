import { ACTION_TYPE } from '../../../../constants';
import { getInitialLoaderState } from '../../../../utils/Factory';

export default function loaderReducer(state = getInitialLoaderState() , action){

    switch(action.type){

        case ACTION_TYPE.IS_LOADING:

            // Handler loader state when have multiple api calls
            let _stack = action.data;

            if(_stack && Object.keys(_stack).length) {
                let _stackKey = Object.keys(_stack)[0],
                    _stackValue = Object.values(_stack)[0],
                    _loadingStack = state.loadingStack,
                    _loadingStatus = state.loadingStatus;

                if(_stackValue) {

                    _loadingStack.push(_stack);
                    _loadingStatus = true;

                } else {

                    _loadingStack = _loadingStack.filter( (obj) => {
                        return Object.keys(obj)[0] !== _stackKey;
                    });

                    if(_loadingStack.length) {
                        for (let x = 0; x < _loadingStack.length; x++) {
                            let stackObj = _loadingStack[x],
                                stackObjValue = Object.values(stackObj)[0];
                            if (stackObjValue === true) {
                                _loadingStatus = true;
                                break;
                            }
                        }
                    } else {
                        _loadingStatus = false;
                    }

                }

                return {
                    ...state,
                    loadingStack: _loadingStack,
                    loadingStatus: _loadingStatus,
                };
            }

            return {
                ...state
            };

        case ACTION_TYPE.CLEAR_LOADING:
            return getInitialLoaderState();

        default :
            return state;
    }
}
