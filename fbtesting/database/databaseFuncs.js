let AllCategs=[];
let bringAllCategories = () =>{
        db.collection("Posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            AllCategs.push(doc.id);
            //console.log(`${doc.id} => ${doc.data()}`);
        });
    }); 
}
//run above func before running search()
//below returns a list of corresponding solutions.
let search = (searchStr) =>{
    corrCategs=[];
    AllCategs.forEach((catStr)=>{
        if(catStr.match(new RegExp(searchStr, "i")))corrCategs.push(catStr);
    })
    return corrCategs;
}

let postingDiscuss = (categStr,{title,maintext},userId) =>{
    db.collection("Discussions").doc(categStr).collection("discuss").add({
        title:title,
        maintext:maintext,
        postedGuy:userId
    }).then(id=>{return id})
}
//above returns an idOfDiscussing
//discussRef is db.collection("Discussions").doc(categoryName).collection("discuss").doc(idOfDiscussing)
let postingMessage = (msg,discussRef) =>{
    discussRef.set({
        message:msg
    }, { merge: true })
    //and send to posted guy
}
let postingSolution = (sol,msg,discussRef) =>{
    discussRef.set({
        solution:sol,
        meg:msg
    }, { merge: true })
    //and send to posted guy
}
let searchDiscussion = (categs) =>{
    //.doc(categs).collection("discuss").get()
    let result=[]//                                               | 
    db.collection("Discussions").doc(categs).collection("discuss").get().then(discusses=>{
        discusses.forEach(dis=>{
            //data = result[0].src(), not result[0].src .
            result.push({id:dis.id,src:dis.data})
        })
    })
    return result;
}