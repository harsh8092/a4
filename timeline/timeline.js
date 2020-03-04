import { LightningElement } from 'lwc';

export default class condition extends LightningElement {
    isemaildetailavailable = false;
    istaskdetailavailable = false;
    iscalldetailavailable = false;
    iseventdetailavailable = false;
    islistemaildetailavailable = false;
    isnotedetailavailable = false;


    hEmail(event) {
        this.isemaildetailavailable = event.target.checked;
    }
    hTasks(event) {
        this.istaskdetailavailable = event.target.checked;
    }
    hCalls(event) {
        this.iscalldetailavailable = event.target.checked;
    }
    hEvents(event) {
        this.iseventdetailavailable = event.target.checked;
    }
    hListEmail(event){
        this.islistemaildetailavailable = event.target.checked
    }
    hNotes(event){
        this.isnotedetailavailable = event.target.checked
    }
}