import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

import { getAuthUser } from '@/services/firebase/firebase';

import { db } from '@/services/firebase/firebase';

/** ツイート一覧取得 */
export const getTweets = async () => {
  const q = query(collection(db, 'user_tweets'), orderBy('createdAt', 'desc'));

  const snapshot = await getDocs(q);

  const rows: any[] = [];
  snapshot.forEach((doc) => {
    rows.push(doc.data());
  });

  console.log(rows);

  return rows;
};

/** ツイート送信 */
export const postTweet = async (content: string) => {
  const user = getAuthUser();

  await addDoc(collection(db, 'user_tweets'), {
    uid: user ? user.uid : null,
    email: user ? user.email : null,
    content,
    createdAt: serverTimestamp(),
  });
};
