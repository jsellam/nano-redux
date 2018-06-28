import NanoRedux from 'nano-redux'

const nanoRedux = new NanoRedux()
nanoRedux
    .add('userName','default name')
    .addNumeric('like',10)
    .addBoolean('logged',false)
    .addArray('friends',['friend1','friend2','friend3'])
    .finalize()


export default nanoRedux.getReducers()
export const userSelectors = nanoRedux.getSelectors()
export const userActions = nanoRedux.getActions();
