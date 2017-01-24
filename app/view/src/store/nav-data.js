import { observable, computed } from 'mobx';

class NavDataStore {
    //Observable variables
    @observable title = "P.A. Voter Record"
    
    changeTitle(string) { this.title = string; }
}

//Singleton Object to be exported
const navStore = new NavDataStore();
export default navStore;