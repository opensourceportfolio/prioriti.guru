import idb from 'lib/idb';

const OBJECT_STORE = 'user-settings';
const dbPromise = idb.open('prioriti-db', 1, (upgradeDB) => {
  upgradeDB.createObjectStore(OBJECT_STORE);
});

export const keys = {
  'settings': 'settings'
};

export const originalState = {
  todos: {
    all: [],
  }
};

export function get(key) {
  return dbPromise.then((db) => {
    const transaction = db.transaction(OBJECT_STORE);
    const store = transaction.objectStore(OBJECT_STORE);


    return store.get(key).then((settings) => {
      return Object.assign(originalState, settings);
    }).catch(() => {
      return originalState;
    });
  });
}

export function set(key, value) {
  return dbPromise.then((db) => {
    const transaction = db.transaction(OBJECT_STORE, 'readwrite');
    const store = transaction.objectStore(OBJECT_STORE);

    store.put(value, key);

    return transaction.complete;
  });
}
