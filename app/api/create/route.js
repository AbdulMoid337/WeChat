import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

// **Use environment variables for API key and secret (replace with actual names)**
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_CHAT_API_SECRET;

function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Return original if not a string or empty
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(user.data.id);

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

    try {
      await channel.create();
      await serverClient.addMembers(channel.id, [user.data.id]);
    } catch (error) {
      console.error(`Failed to create or add member to channel ${item}:`, error);
    }
  });

  return Response.json({ message: "The route is working" });
}