const Store = require('flux/utils').Store,
      TeaConstants = require('../constants/tea_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const OwnedTeaStore = new Store(Dispatcher);

let _teas = {};

function setTeas(newTeas) {
  _teas = {};
  newTeas.forEach( (tea) => {
    _teas[tea.id] = tea;
  });
};

OwnedTeaStore.all = function () {
  const teasCopy = {};

  Object.keys(_teas).forEach( (teaId) => {
    teasCopy[teaId] = _teas[teaId];
  });
  return teasCopy;
};

OwnedTeaStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TeaConstants.RECEIVE_OWNED_TEAS:
      setTeas(payload.teas);
      this.__emitChange();
      break;
    case TeaConstants.RECEIVE_OWNED_TEA:
      _teas[payload.tea.id] = payload.tea;
      this.__emitChange();
      break;
    case TeaConstants.REMOVE_OWNED_TEA:
      delete _teas[payload.tea.id];
      this.__emitChange();
      break;
    case TeaConstants.RECEIVE_SIPPED_TEA:
      if (_teas[payload.tea.id]) {
        _teas[payload.tea.id] = payload.tea;
        this.__emitChange();
      }
      break;
    default:
  }
};

OwnedTeaStore.find = function (id) {
  return _teas[id];
};

module.exports = OwnedTeaStore;
