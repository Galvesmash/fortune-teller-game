import * as Vue from 'vue';
import Vuex from 'vuex';

/**
 * A package can have its own store.
 *
 * - If there is no store at all, then create the store on the root first
 * - Then add this store if it has not yet been added
 */
export const registerOrCreateStore = (vueInstance, newStoreKey, newStore) => {
  let root = vueInstance.$root

  // If we don't have the module yet, then register it
  if (!root.$store.hasModule(newStoreKey)) {
    root.$store.registerModule(newStoreKey, newStore);
  }
};