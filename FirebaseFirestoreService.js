import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot
} from "firebase/firestore";
import { app } from "./FirebaseConfig";


const db = getFirestore(app);
let uid = ""
const colRef = collection(db, "users");
//const [topFive,setTopFive] = 


const createUser = async (uid, username) =>
  await addDoc(colRef, { id: uid, username, times: [] })

  const getUserData = async(uid) => { 
      let userData = []
      const q = query(colRef, where("id", "==", uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        userData.push(doc.id)
        userData.push(doc.data())
    })
    return userData
}

const getRealTimeUserData = (uid) => {
      let userdata = []
      const q = query(colRef, where("id", "==", uid))
       onSnapshot(q, (snapshot) => {
        
        snapshot.forEach((doc) => {
          userdata.push(doc.id)
          userdata.push(doc.data())
      })
      console.log(userdata)
      return userdata
      })
      //unsub()
      
}


const getHallofFame = async() => {
  const querySnapshot = await getDocs(colRef)
    let times_array = []
    let usernames_array = []
      querySnapshot.forEach((doc) => {
        const sortedTimes = doc.data().times.sort()
        const username = doc.data().username
        times_array.push(sortedTimes)
        usernames_array.push(username)
      })
      const topResults = times_array.map((el,i) => [...[el[0],usernames_array[i]]])
      const sortedTopResults = topResults.sort().slice(0,15)
      return sortedTopResults
}



const updateResults = async (finalTime,docId) => {
  const id = !docId ? 'DyzOpTPS6YczIxTXMnMn' : docId
  const docRef = doc(colRef,id)
  updateDoc(docRef , {
       times: arrayUnion(finalTime)
  })
}

const removeWorstTime = (worstTime,docId) => {
  const id = !docId ? 'DyzOpTPS6YczIxTXMnMn' : docId
  const docRef = doc(colRef,id) 
  updateDoc(docRef , {
    times: arrayRemove(worstTime)
})
}

const FirebaseFirestoreService = {
  createUser,
  getUserData,
  getRealTimeUserData,
  updateResults,
  removeWorstTime,
  getHallofFame
};

export default FirebaseFirestoreService;
