const Store = require('flux/utils').Store,
      TeaConstants = require('../constants/tea_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const TeaStore = new Store(Dispatcher);

let _teas = {};
let _newestTeaId = null;

function setTeas(newTeas) {
  _teas = {};
  newTeas.forEach( (tea) => {
    _teas[tea.id] = tea;
  });
};

TeaStore.all = function () {
  const teasCopy = {};

  Object.keys(_teas).forEach( (teaId) => {
    teasCopy[teaId] = _teas[teaId];
  });
  return teasCopy;
};

TeaStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TeaConstants.RECEIVE_TEAS:
      setTeas(payload.teas);
      this.__emitChange();
      break;
    case TeaConstants.RECEIVE_TEA:
      _teas[payload.tea.id] = payload.tea;
      this.__emitChange();
      break;
    case TeaConstants.RECEIVE_SIPPED_TEA:
      _teas[payload.tea.id] = payload.tea;
      this.__emitChange();
      break;
    case TeaConstants.RECEIVE_NEW_TEA:
      _teas[payload.tea.id] = payload.tea;
      _newestTeaId = payload.tea.id;
      this.__emitChange()
    default:
  }
};

TeaStore.find = function (id) {
  return _teas[id];
};

TeaStore.newestId = function () {
  // calling newestId will reset the newest Tea Id
  const id = _newestTeaId;
  _newestTeaId = null;
  return id;
};

module.exports = TeaStore;
