<script>
  const client = new Appwrite.Client();
  const account = new Appwrite.Account(client);
  const database = new Appwrite.Databases(client);
  const ID = Appwrite.ID;

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('YOUR_PROJECT_ID');

  const DB = 'YOUR_DATABASE_ID';
  const walletsCol = 'wallets';
  const referralsCol = 'referrals';
  const withdrawalsCol = 'withdrawals';
</script>
