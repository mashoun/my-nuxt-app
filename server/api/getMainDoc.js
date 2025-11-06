export default defineEventHandler(async (event) => {
  const {db} = getFirestore()
  const ref = db.collection('public').doc('main');
  const doc = await ref.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
    return doc.data();
  }
})
