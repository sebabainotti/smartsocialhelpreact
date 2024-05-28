import { collection, getDocs, addDoc, getDoc, doc, query, where, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

class DataService {
    static async addPossibleCause(name, lastName, email, whatsapp, causeDescription) {
        try {
            var id = null;
            var data = {
                name: name,
                lastName: lastName,
                email: email,
                whatsapp: whatsapp,
                description: causeDescription
            };
            var possibleCauseRef = collection(db, "PossibleCauses");
            await addDoc(possibleCauseRef, data).then((doc) => {
                id = doc.id;
            });
            return id;
        } catch (error) {
            throw new Error('Error al guardar el perfil:', error);
        }
    }

    static async addContact(name, lastName, email, subject, message) {
        return 1;
    }

    static async addHeart(id, amount) {
        try {
            const causesRef = doc(db, "Causes", id);
            const newAmount = amount + 1;
            // Set the "capital" field of the city 'DC'
            await updateDoc(causesRef, {
                heart: newAmount
            });

            return newAmount;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCause(id) {
        try {
            var data = {};
            const causesRef = doc(db, "Causes", id);
            const cause = await getDoc(causesRef);
            if (cause.exists()) {
                data = { id: cause.id, ...cause.data() }
            } else {
                console.log("No such document!");
            }
            console.log(data);
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    }

    static async fetchFeaturedCauses() {
        try {
            var data = [];
            const q = query(collection(db, "Causes"), where("isFeatured", "==", true));
            console.log(data);

            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            await querySnapshot.forEach((doc) => {
                var cause = { ...doc.data(), id: doc.id };
                data.push(cause);
            });
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching data:', error);
        }
    }

    static async fetchAllCauses() {
        try {
            var dataRef = collection(db, "Causes");
            var data = [];
            await getDocs(dataRef)
                .then((response) => {
                    response.docs.map((doc) => {
                        var cause = { ...doc.data(), id: doc.id };
                        data.push(cause);
                    });
                });
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    }
}

export default DataService;