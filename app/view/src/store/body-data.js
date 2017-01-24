import { observable, computed, toJS} from 'mobx';

class BodyDataStore {
    /**
     * Array of JavaScript Objects
     * Each index in the array is compose of key, title, text, and/or background (TODO)
     */
    @observable headers = [{
                            key : "first",
                            title : "What's Your Voting Record?",
                            text : "Double check your voting record and earn badges"
                          }];
                          
    /**
     * Get Header Array
     */
     @computed get getHeader() { return this.headers.map(i => toJS(i)); }
     
    /**
     * Update header objects
     * @param{object-literal} array
     */
    updateHeader(array) { this.header = array; }
    
}

//Singleton Object to be exported
const bodyStore = new BodyDataStore();
export default bodyStore;