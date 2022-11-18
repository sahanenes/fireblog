import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export const AddContact = (info) => {
  const db = getDatabase();
  const contactRef = ref(db, "blog/");
  const newContactRef = push(contactRef);
  set(newContactRef, {
    title: info.title,
    content: info.content,
    img: info.img_url,
  });
  console.log("geldi mi");
};

// readinfo

export const UseFetch = () => {
  const [contactList, setContactList] = useState("");
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "blog/");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      const contactArray = [];
      for (let id in data) {
        contactArray.push({ id, ...data[id] });
      }
      setContactList(contactArray);
      console.log(contactArray);
    });
  }, []);
  return { contactList };
};
