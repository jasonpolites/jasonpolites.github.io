const listDBs = async (origin) => {
  console.log(`Listing DBs from ${origin}...`);
  const databases = await indexedDB.databases();
  for (let i = 0; i < databases.length; i++) {
    const element =databases[i];
    console.log(element);
  }
}

listDBs('remote');