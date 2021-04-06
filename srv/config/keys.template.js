module.exports = {
  bnet: {
    clientID: "",
    clientSecret: "",
    callbackUrl: "/auth/bnet/redirect",
  },
  mongodb: {
    connectURL: "",
  },
  postgres: {
    connectURL: "",
  },
  session: {
    sessionKey: "",
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
