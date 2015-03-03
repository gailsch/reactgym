'use strict';

var LocalStorageUtil = require('../utils/LocalStorageUtil'),
    ActionTypes = require('../constants/ActionTypes'),
    Immutable = require('immutable'),
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    BackupUtil = require('../utils/BackupUtil'),
    assign = require('object-assign'),
    StoreListenerMixin = require('../mixins/StoreListenerMixin'),
    _backups = Immutable.List();

var BackupStore = assign({}, StoreListenerMixin, {
    getBackups() {
        return _backups;
    }
});

BackupStore.dispatchToken = AppDispatcher.register((payload) => {
    var action = payload.action;

    switch(action.type) {
        case ActionTypes.GET_BACKUPS:
            //TODO: loading indicator
            break;
        case ActionTypes.GET_BACKUPS_FAIL:
            break;
        case ActionTypes.GET_BACKUPS_SUCCESS:
            _backups = action.data;
            BackupStore.emitChange();
            break;
        case ActionTypes.ADD_BACKUP:
            //TODO: loading indicator
            break;
        case ActionTypes.ADD_BACKUP_SUCCESS:
            _backups = action.data;
            BackupStore.emitChange();
            break;
        case ActionTypes.ADD_BACKUP_FAIL:
            break;
        case ActionTypes.RESTORE_FROM_BACKUP:
            break;
        default:
    }
});

module.exports = BackupStore;
