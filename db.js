const listDBs = async () => {
  console.log(`Listing DBs...`);
  const databases = await indexedDB.databases();
  for (let i = 0; i < databases.length; i++) {
    const element =databases[i];
    console.log(element);
  }
}