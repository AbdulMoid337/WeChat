import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "rpzqwzz3cxmn";
const api_secret =
  "zzvqchtevfpq96abfpzewueezk7f5rc88gyevg2g3jvz6ch4zrqsu3xmegre58ss";
// const user_id = "user_2rUKxPsKtE6MxUv78phcF0MHY4Z";
export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str; // Return original if not a string or empty
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log(" a new user created", token);

  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });
  const slugs = [
    "javascript-new",
    "python-new",
    "java-new",
    "cpp-new",
    "ruby-new",
    "go-new",
    "swift-new",
    "rust-new",
    "kotlin-new",
    "typescript-new",
    "php-new",
    "csharp-new",
    "docker-new",
    "react-new",
    "nodejs-new",
    "git-new",
    "kubernetes-new",
    "webpack-new",
  ];
  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(item),
      created_by_id: user.data.id,
    });
    await channel.create()
    channel.addMembers([user.data.id])
  });
  return Response.json({ message: "The route is working" });
}
