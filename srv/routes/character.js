const express = require("express");
const router = express.Router();
const UserCharacters = require("../models/user-characters");
const { getCharacters, getActiveSpec } = require("../blizzard/characters");
const secured = require("../config/secure_area");

router.get("/max", secured, (req, res) => {
  getCharacters(req.cookies["token"]).then((characterData) => {
    characterData.wow_accounts.forEach((account) => {
      account.characters.forEach((character) => {
        if (character.level === 60) {
          getActiveSpec(
            character.realm.slug,
            character.name,
            req.cookies["token"]
          )
            .then((active_spec) => {
              new UserCharacters({
                bnetID: req.cookies["bnetID"],
                name: character.name,
                id: character.id,
                realm: character.realm.name,
                realm_slug: character.realm.slug,
                class: character.playable_class.name,
                active_spec: active_spec,
                race: character.playable_race.name,
                faction: character.faction.name,
                level: character.level,
              })
                .save()
                .then();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    });
    res.json({ characterData: "uploaded" });
  });
});

module.exports = router;
