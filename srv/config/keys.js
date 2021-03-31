module.exports = {
  bnet: {
    clientID: "42b66272418f4d5b9aa9399ad1e635ec",
    clientSecret: "h1keURRTslkCBl58bA6m5YoPy3qg6sdf",
    callbackUrl: "/auth/bnet/redirect",
  },
  mongodb: {
    connectURL:
      "mongodb+srv://gcus3r:OdgIKXZDV4uaNxF7@wowclassifieds0.idwtx.mongodb.net/WoWGuildClassifieds?retryWrites=true&w=majority",
  },
  session: {
    sessionKey:
      "Xp2s5v8y/B?E(H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn2r5u8x/A?",
  },
  blizzardAPI: {
    defaults: {
      locale: "locale=en_US",
      baseUrl: "us.api.blizzard.com",
      namespace: "namespace=profile-us",
    },
    profile: {
      profile_url: "/profile/user/wow",
      profileMamespace: "namespace=profile-us",
      media_url: "/profile/wow/character",
    },
    guild: {
      guild_url: "/data/wow/guild",
    },
  },
};
