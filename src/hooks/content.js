import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getContent = async () => {
      const { docs } = await firebase.firestore().collection(target).get();

      const allContent = docs.map((contentObj) => ({
        ...contentObj.data(),
        docId: contentObj.id,
      }));

      setContent(allContent);
    };
    getContent();
  }, []);

  return { [target]: content };
}
