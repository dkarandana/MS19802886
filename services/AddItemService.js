
import { firebaseDB } from '../components/Firebase/firebase';
const db = firebaseDB();

export const addItem =  (name,empId) => {
    db.ref('/items').push({
        name: name,
        EmpId:empId
    });
}