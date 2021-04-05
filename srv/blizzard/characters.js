const axios = require('axios');
const keys = require('../config/keys');

async function getCharacters(token) {
    const characters = await axios.get(`https://${keys.blizzardAPI.defaults.baseUrl}${keys.blizzardAPI.profile.profile_url}?${keys.blizzardAPI.profile.profileMamespace}&${keys.blizzardAPI.defaults.locale}&access_token=${token}`);
    return characters.data;
}

async function getCharacterProfileImages() {

}

async function getActiveSpec(realm_slug, character_name, token) {
    const active_spec = await axios.get(`https://${keys.blizzardAPI.defaults.baseUrl}${keys.blizzardAPI.profile.media_url}/${realm_slug}/${character_name.toLowerCase()}?${keys.blizzardAPI.profile.profileMamespace}&${keys.blizzardAPI.defaults.locale}&access_token=${token}`)
    return active_spec.data.active_spec.name;
}

module.exports = {getCharacters, getCharacterProfileImages, getActiveSpec}