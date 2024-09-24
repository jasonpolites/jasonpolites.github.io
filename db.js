const listDBs = async (src) => {
  console.log(`Listing DBs from ${src}...`);
  const databases = await indexedDB.databases();
  for (let i = 0; i < databases.length; i++) {
    const dbRef= databases[i];
    console.log(dbRef);
    const req = indexedDB.open(dbRef.name)
    req.onsuccess = (e) => {
      console.log(`opened ${dbRef.name}`);
      db = e.target.result;
      console.log(db.objectStoreNames);
    }
    req.onerror = (event) => {
      console.log(`failed to open ${db.name} ${event.target.error?.message}`);
    };
  }
}

listDBs('remote');